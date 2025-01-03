---
layout: post
tags: gamedev langdev enginedev
---

It's been just over four months since I began [Toy](https://github.com/Ratstail91/Toy)'s rewrite in earnest, and I've outlined a rough schedule for the next three-ish months. At that point, I'll begin building an engine around it.

A friend of mine is working towards building tools and utilities within Unity, to support a game of his own. Since game engines seem to be on my mind this week, let's begin outlining the Box engine, which will be the next step for Toy.

<!--more-->

## My History With Game Engines

About fifteen-ish years ago, when I was studying at TAFE, I concocted 'Kayne's All-purpose Game Engine', or 'KAGE' for short. Since then, my skills have greatly improved, my perspective on gamedev has widened, and my punny names have somehow worsened.

Over the years, I would make a few different engines/frameworks in C++, with the mistaken belief that I had to make everything from the ground up. One day, I became so frustrated by a janky physics algorithm, I gave in and tried Unity - the difference was immediate and immense.

The next few years, I used mainly Unity or, after beginning webdev, I ReactJS. About a year into developing Egg Trainer, I knew that the code wasn't going to hold up moving forward, so I spent month developing the [MERN-template](https://github.com/krgamestudios/MERN-template) to support a microservice architecture. The template and its various services would receive continual updates and upgrades right up to Egg Trainer's sale.

While the game is no longer mine, the engine was open source from the beginning, so it'll always be available if I ever feel like spinning up a new PBBG. And considering that the only alternative PBBG engine is [MCCodes](https://mccodes.com/), I believe I made a wise choice.

For most new games, I'd recommend using an off-the-shelf engine if you can. If you want to build a game, but the available engines don't meet your needs, only then should you build the engine too.

## Platforms and Interfaces

I have several target platforms for my next big game:

* Windows
* Linux
* MacOS
* Switch

That last one is important - if you ever manage to get a devkit for a proprietary console, you bet your ass you'll support it.

Platform portability has a lot of technical considerations, even between desktop platforms. There's also the physical interfaces to consider, such as keyboard and mouse, one or more game controllers, multi-configuration joycons, etc. Being able to remap a player's inputs between each of these is an essential element of the engine's usability.

In my previous attempt to write the Box engine, I found configuring the interface options using an initial startup script worked well enough, though that engine's build was just as ad-hoc as Toy v1. There's also the consideration of Nintendo's NDA, which disallows their APIs to be released in any form. These requirements are leading me to consider making the 'connective tissue' between the engine and interfaces a swappable external library.

## Libraries and Tools

Since I'm most familiar with the C programming language right now, I'll be sticking with that - it also helps that C can run on just about anything. Toy is also written in C, so plugging that in is trivial. I have a lot of experience with SDL2, but since SDL3 recently released, I'll be using it to help with porting, and general functionality like graphics, input and audio. [SDL](https://libsdl.org/) is an industry standard by this point, so I highly recommend anyone who is interested in gamedev should learn it.

There's a lot of other tools I can use, either to build the engine, or supplement the game's tool chain. The [Tiled Map Editor](https://www.mapeditor.org/) is apparently great, though I've never used it myself, and [Box2d](https://box2d.org/) is popular, though when I tinkered with it years ago, I wasn't too fond of it. My opinions may have changed, so much research is still needed.

## Genre Dictates Mechanics

The next question is, what kind of game do I want to build?

I've always wanted to expand on a jam game called [Waterlogged](https://bunnytrail.itch.io/waterlogged) that I developed with a good friend of mine, LogicMonkey, and writing procedurally generated maps would be a great use-case for Toy. The parallax effect used in the background (not my trick, but a really clever one), combined with Logic's incredibly adorable art, gives it a unique aesthetic that I want to carry forward into any expanded remake. I wonder how I'd accomplish that using SDL's tendency towards 2d?

A second idea I had with a similar set of mechanics, but very different aesthetics. Here's a summary of my idea after letting it stew for a bit:

> Deep under the earth, lies a hidden village. One day, their only source of water, the river flowing from the forbidden cave systems above, slowed to a trickle before drying up entirely. Now, one young girl must set out to find and restore the flow of water, before everyone she knows and loves dies.

While this resembles the 'Rowan of Rin' book series quite a bit, I was actually thinking of the mechanics of Waterlogged before this idea came to me. There could be a persistent on-screen time limit - normally, humans can only survive for three days without water, so having a hydration meter in the UI would be constant reminder of the goal of the game, which can only be extended by finding and releasing caches of water, in the hopes that it reaches the village far below.

This actually links back to the original Skylands prototype that I was using Box v1 for, where Parvati had to collect water from cloud-drinking robots, and your current water level ticked down with every step. It's always interesting when things come full circle. Parvati is also a good main character - while my original discord post used the term 'the boy', I think female characters tend to be more interesting. I also think it would be interesting if, since ascending the caves is a forbidden act, she can't ever return to the village.

I hope a game like this is open-ended enough to allow easy modding, which is the whole point behind Toy's inception.

## Entity Memory And Behaviour

So, how does Toy interact with the engine, and the game's world?

My first thought would be to give each entity in the world, such as NPCs, etc. their own 'table' from Toy. This would allow them to remember things, depending on their needs, and simply be passed to each script as an opaque variable. I used to have a one-script-per-entity system, where certain function names would be grabbed and stored into each entity. This definitely contributed to v1's memory issues.

Knowing this is a requirement, I'll need to tweak the tables (and other structures) to use the custom bucket allocators instead of `malloc()` - this way, I can unload all the entity data within a level, without leaking memory.

## Game Map

If this game ends up being a roguelike, it will need some way to persist maps during a single run. The map structures will likely be designed specifically for the engine, though I'll have to look into how Tiled formats its data.

The choice between contiguous (open world) or paginated (broken up into separate rooms) maps should probably wait until I'm closer to actually designing the game.

## Conclusion

Well, it seems like the certainties tapered off near the bottom of this article, as they relate more to the game's design than Toy or Box. I'll revisit this article down the road, and use it as a reference to compare my thoughts over time.

Writing this did give me a few questions that I need to think on though (especially table memory), so it's definitely progress.
