---
layout: post
tags: gamedev langdev enginedev
---

It's been just over four months since I began [Toy](https://github.com/Ratstail91/Toy)'s rewrite in earnest, and I've outlined a rough schedule for the next three-ish months. At that point, I'll begin building an engine around it.

A friend of mine is working towards building tools and utilities within Unity, to support a game of his own. Since game engines seem to be on my mind this week, let's begin outlining the Box engine, which will be the next step for Toy.

<!--more-->

# History of Game Engines

About fifteen-ish years ago, when I was studying at TAFE, I concocted 'Kayne's All-purpose Game Engine', or 'KAGE' for short. Since then, my skills have greatly improved, my perspective on gamedev has widened, and my punny names have somehow worsened.

Over the years, I would make a few different engines/frameworks in C++, with the mistaken belief that I had to make everything from the ground up. One day, I became so frustrated by a janky physics algorithm, I gave in and tried Unity - the difference was immediate and immense.

The next few years, I used mainly Unity or, after beginning webdev, I ReactJS. About a year into developing Egg Trainer, I knew that the code wasn't going to hold up moving forward, so I spent month developing the [MERN-template](https://github.com/krgamestudios/MERN-template) to support a microservice architecture. The template and it's various services would receive continual updates and upgrades right up to Egg Trainer's sale.

While the game is no longer mine, the engine was open source from the beginning, so it'll always be available if I ever feel like spinning up a new PBBG. And considering that the only alternative PBBG engine is [MCCodes](https://mccodes.com/), I believe I made a wise choice.

For most new games, I'd recommend using an off-the-shelf engine if you can. If you want to build a game, but the available engines don't meet your needs, only then should you build the engine too.

# Platforms and Interfaces

I have several target platforms for my eventual game:

* Windows
* Linux
* MacOS
* Switch

That last one is important - if you ever manage to get a devkit for a proprietary console, you bet your ass you'll support it.

Platform portability has a lot of technical considerations, even between computer platforms. There's also interfaces to consider, such as keyboard and mouse, one or more game controllers, Joycons, etc. Being able to remap a player's input between all of these is an essential element of a game's usability.

# Libraries and Tools

Since I'm familiar with the C programming language, I'll be sticking with that. It also helps that Toy is also written in C, so plugging that in is trivial. I have a lot of experience with SDL2, but SDL3 recently released, so it's probably a good idea to update my skill set.

SDL is an awesome compatibility layer, which has been used in tens of thousands of games across the entire industry, and many non-game applications as well. I had built-in support for every platform under the sun, so it's an easy choice for the engine's foundation.

# Genre Dictates Mechanics

goal?
Waterlogged? (link to and explain)
procgen & prefab
modding
physics engine (box2d or custom?)

# Entity Memory And Behaviour

Tables?
ECS vs. Monoliths
One Script per entity?
How will Toy tie into the mechanics
Bespoke mechanics

# Game Map

Tiled?
Map is contiguous or segmented/paginated?

# Conclusion

