---
layout: post
tags: gamedev pupper
---

I've recently started on a new project - it feels good to say that - called "Pupper". The idea is to make a parody/commentary of twitter and social media. You'll notice that I refer to that site as twitter, rather than the mono-letter alternative, for various reasons that I won't go into here.

<!--more-->

I'm using Godot - not just because I want to (I do), but also because it's the only game engine that will reasonably run on a Raspberry Pi - I'm currently using an RPI v5 8gb as my desktop, simply because it was the cheapest option, even with all of the bells and whistles. I really hope this can hold out for a year or so, so I'm totally out of debt with some savings once I need to replace it.

Regarding Godot - if you run it with the renderer in compatability mode, then it works just fine. I've recently gained access to a community driven godot port for the Nintendo Switch as well, so while I'll need Windows for Nintendo's SDK, I'll at least be able to experiment with that eventually.

## Pupper, The Social Media Platform for Bitches

I can get away with saying "bitch" if it's referring to a female dog, right?

I'm thinking that writing the text using this kind of "attitude" would be an interesting approach - unfortunately, I think the name of the attitude is "catty". I still have a lot of work to do regarding the actual written text, but for now I'm beginning with the basics of the program.

![screenshot1](/assets/2024-07-02/screenshot1.png)

I've been digging around Godot's features, and I feel like the custom resources are useful - a "Bark" is analogous to a tweet, so I created a resource type for barks, borrowed a few famous tweets as placeholders, and developed both the storage and basic display for them. The nine-slice background is actually just a sprite plucked from [Kenney's Game Assets All-In-1](https://kenney.itch.io/kenney-game-assets), which I apparently owned already. If you've never seen [kenney.nl](https://www.kenney.nl/) before, go give him a [follow](https://twitter.com/KenneyNL).

Before I focus on making things pretty, I want to try and get more of the feed structure working i.e. new barks can be added as old ones fall off, responding to a bark in a certain way will trigger certain responses, and a timeline system tied to an event system could be interesting - i.e. if certain conditions are met, then XYZ will occur over the next 10 minutes, for example.

I don't have the full thing coded yet, but here are my rough plans:

* Each bark will have an author, content, datestamp (dynamic based on game time and IRL time?), a rating (+ or - a certain amount), and you can respond to certain barks (mutliple choice dialog?), which may trigger further responses.
* The feed of barks will start at the bottom of the screen and be pushed up by newer ones - you'll be able to "scroll up" to see the history.
* Certain situations will trigger events - hidden variables that change based on the players choices will cause a specific sequence of barks to be added to the queue.

I'm hoping to get more of this coded this afternoon (it's currently 3am). Here's a thought - lets say we aim for a 3 hour game, and a random bark appears every 15 seconds, that's 720 barks, minimum. Soemthing tells me this is gonna be a massive writing task.

BTW, this genre of writing is called an "[Epistolary Novel](https://en.wikipedia.org/wiki/Epistolary_novel)" - While I've never played it, the game [Her Story](https://store.steampowered.com/app/368370/Her_Story/) could be considered an Epistolary Novel, just as an example of a game in the same genre. I've never seen someone attempt a twitter-like interface, though, so this will be interesting. (Also, god dangit steam sale is nickel and diming me - Her Story has a major discount that I can't pass up... oh look, my wishlist...)

