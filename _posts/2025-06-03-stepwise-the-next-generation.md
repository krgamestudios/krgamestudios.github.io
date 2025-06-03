---
layout: post
tags: gamedev stepwise roguelike
title: "Stepwise: The Next Generation"
---

I've been hard at work on [Stepwise: Gates of Yendor](https://krgamestudios.com/stepwise) over the last month, specifically building out the procedural generation and utilities for the first of 12 worlds, known as Timepunk. During my downtime, I realized that the maths and concepts I'm using are more advanced and niche than what a majority of people would see for their own games. So, let's have a look at what I've done recently, and I'll outline what's going on under the hood - maybe you'll find something that interests you, and could be useful for your own projects.

<!--more-->

## Glossary

First, lets explain a few terms, so you know what I'm actually talking about. I'll also add some links so you can read more on each topic.

**[Axis Aligned Bounding Box](https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box)** - AABB for short, these are used for the simplest possible collision detection in 2d space.

**[Binary Space Partitioning](https://en.wikipedia.org/wiki/Binary_space_partitioning)** - BSP for short, By dividing a region of space in two, making each smaller region easier to manage. You can also divide each of these smaller regions again and again.

**[Graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)) and [Graph Theory](https://en.wikipedia.org/wiki/Graph_theory)** - A mathematical structure representing the connections (edges) between different things (nodes). The edges and nodes can carry extra information, as needed.

**[Prefab](https://www.gamedeveloper.com/audio/a-prefab-primer)** - These can be thought of as reuseable templates for objects in a game. If you've ever seen zombies swarming your front yard, they're all just copies of the same zombie, even if some of them have armour, outfits, etc.

## The Map

The worlds of Stepwise are divided into "floors" consisting of a 2-dimensional array of tiles, 80 wide and 40 high. A single world consists of multiple floors, each with its own characteristics and quirks. Here, we see a "blank" floor, filled with nothing but "walls". I'll use this to demonstrate the procedural generation process used for Timepunk.

![binary_space_blank.png](/assets/2025-06-03/binary_space_blank.png)

Timepunk's setting is of a miles-tall city, where each layer is built on top of the older ones. The deeper you go, the stranger the technology becomes - from steampunk, to clockpunk, and finally crystalpunk (think Final Fantasy or Krypton's tech).

The first strata has a steampunk aesthetic, so the goal is to create a kind of cramped industrial feeling, where no space is wasted - Kowloon Walled City is a good visual reference. To this end, I began by dividing each floor into rooms, leaving a one-tile-wide wall between them.

To make it simple, I created a recursive BSP function that took a given region, and divided the length-wise - if the space was wider than it was tall, the wall should be vertical, and vice-versa.

![binary_space_one_partition.png](/assets/2025-06-03/binary_space_one_partition.png)

The only limitation is a minimum width and height for any room - if it's not possible to divide a region so that both parts are larger than the minimum, then the function returns the whole space as a room. In my case, the minimums are 4, including 1 tile of surrounding walls, which will be significant later.

![binary_space_fully_partitioned.png](/assets/2025-06-03/binary_space_fully_partitioned.png)

This looks ok, but also boring, as there's too much regularity. To resolve this, I added a depth parameter that increases for each call - if the recursion's depth, multiplied by a random number between 0 and 1 is larger than 3, the recursion exits early. These values are all subjective, of course, and the process took a lot of back-and-forth tweaks, but I'm happy with how the rooms are laid out with this generator.

![binary_space_completed_partition.png](/assets/2025-06-03/binary_space_completed_partition.png)

## The Territory

The next step is to punch some doorways between the rooms, which means I first need to figure out which rooms are adjacent. When designing the room structure for the previous generator (The Cave Of Gobbos) I designated the immediate wall tiles as part of each room, so the AABB collision checks would prevent awkward cavities. Serendipitously (*ooh, big word*), I can also use this to determine which rooms are neighbours, and build up graph of dividing walls.

With the rooms as nodes, and walls as undirected edges, I can create a chaotic series of pathways by randomly marking 60% of edges as "open" and the rest as "closed".

![graph_theory_some_open.png](/assets/2025-06-03/graph_theory_some_open.png)

I wanted to make sure every room was accessible, despite the randomized "open" and "closed" walls likely making that impossible by pure chance.  So, once I checked if a certain set of rooms were open, if there were any rooms that were still closed, I'd go through the list of closed rooms and punch a hole into an open room that was immediately adjacent. Since this only opens a few rooms at once, this process repeats, rebuilding the collection of accessible rooms from scratch.

![graph_theory_all_open.png](/assets/2025-06-03/graph_theory_all_open.png)

I'd love to post some snippets showing how I did this, but I have to admit the process uses brute force, trading efficiency for simplicity, because this process managed to exercise my brain quite a bit. My maths skills are pretty decent, but I never formally studied the more complex topics like graph theory, so I had to rely on generic maths articles and intuition to do this. There were also a lot of implementation issues to dig through, including multiple infinite loops, to the point where I left this in for the breath-first walk:

```python
failsafe: int = 0
while failsafe < 100:
	failsafe += 1
	#TODO: stuff

if failsafe >= 100:
		raise RuntimeError()
```

## The Greebles

Finally, to spruce up how the map as a whole looks, I created the Prefab system to generate interesting shapes, and dubbed these "greebles" - a term that comes from [filmmaking](https://en.wikipedia.org/wiki/Greeble).

The Prefab data is stored in external text files for easy access, with a simple format: `width,height` on the first line, followed by the actual tile data (encoded as ascii text) immediately after.

```
5,5
#...#
.###.
.###.
.###.
#...#
```

![prefab_greebles.png](/assets/2025-06-03/prefab_greebles.png)

You can see a single `doodad.prefab` here, among others - the differing fonts make it look a bit distorted, but it's the same thing. The `X` tiles represent a new kind of tile called "glass" which is transparent but unwalkable - it's an interesting feature for later in development, if I come back to it.

One thing to note here is this prefab, called `shrine.prefab`:

```
5,5
XXXXX
X   X
X # X
X   X
XXXXX
```

Prefabs such as this have the potential to generate inaccessible cavities. In fact, during testing, some items and enemies would spawn inside making them effectively pointless.

To counter this, I added yet another tile type called "unreachable", which is identical to the normal floor tiles, except it has a flag specifying that nothing is allowed to spawn there. So for `.prefab` files, the period character `.` represents normal floors, and the space character ` ` represents the same thing, with entity spawns disallowed.

Spawning the greebles uses the same AABB collision checks as rooms to avoid overlaps, after first ensuring the greebles will actually fit in the room's dimensions (with a 2-tile margin, to leave the wall and a guaranteed walkway untouched).

## The Etch-a-Sketch

So far, the generator has been working with pure abstract structures - now we have all the map data we need, we simply iterate over the objects, and "etch" them into the `FloorMap` used in-game. The structures have small utility functions for handling this; first each room is etched, then the bounds of the walls are found and one tile within is etched as "floor", then finally the greebles are etched.

A small note about the wall bounds, that you might've spotted already: due to the way BSP works, the corner tiles of each room will exist in more than two adjacent rooms, thus increasing their chances of becoming doorways. Not every time, of course, but if you roll enough dice, you'll eventually roll a 1.

![etch_no_corner_bugfix.png.png](/assets/2025-06-03/etch_no_corner_bugfix.png)

Subtle, but conspicuous enough to be irritating. So, before returning the bounds, I do a quick manual check to snip off each end, so the T-shaped intersections won't have doors. This bug does persist (there's two instances in the top-left quarter of the [Greebles screenshot](#the-greebles)), but it's not possible in 95% of cases - good enough, and the few odd ones will add to the feeling of dilapidation.

## The Denser Wretch

OK! Now the map is generated, all we need to do is fill it - except, it turns out the approach for allocating X number of entities for each room breaks down, as these rooms vary wildly in size. So, rather than allocating a fixed number, the maximum value for any room is:

	room_max = (room_width * room_height) / inverse_density

Or, in plain English, the larger the floorspace of a room, the higher the number of entities allowed within that room (I used `inverse_density` because it's easier to give an integer parameter of 400, than a floating point of 0.0025). With this approach, the same logic can be carried over between generators, with very few changes. In fact, this approach is so solid, I used it for allocating item, monster *and* greeble density, with varying values for each.

![spawn_density.png](/assets/2025-06-03/spawn_density.png)

## Head in the Clouds

And there you have it... or rather, a part of it. You see, the next big issue I need to address, is how much time I've sunk into this part of the game. Stepwise is supposed to have 12 primary worlds, each with 15 floors - and the generator I've just outlined only covers the *upper third* of Timepunk.

Now, I don't regret this, as the tools and understanding I've built can be reused and expanded for other worlds, but I *have* slowed down over the last month, due to external stressers and distrations, and internal health and emotions. If I have any chance of making the early 2026 release date, I'll need to rethink my approach as a whole - even writing this article was done over several days.

For the record, this isn't a bad thing, as it's still early in development. My process might need to shift, though I'm not certain how yet.

My goal is ultimately be to release a finished game, not to make a world-shattering masterpiece (though that'd be nice). [This classic talk by Jeff Vogel](https://youtu.be/stxVBJem3Rs) outlines the kind of studio I want to run - small, but self-sustaining. If I can hit my goal date with a positive reception, then it's a success in my book.

*For more information, see [Stepwise: Gates of Yendor](https://krgamestudios.com/stepwise).*

*When I'm not dividing by zero, I can usually be found on [Bluesky](https://bsky.app/profile/krgamestudios.bsky.social) or [Discord](https://discord.gg/5KwPFdTBZp). If you'd like to show your support, I also have a [Patreon](https://www.patreon.com/c/krgamestudios), and I'd love a Coffee via [Ko-fi](https://ko-fi.com/krgamestudios).*