---
layout: post
tags: production
---

When you're working on a non-trivial project, starting from scratch can be fun, but it also means you may not know the best approach for your situation, resulting in technical debt. Sometimes, refactoring can resolve the issue, other times, it can be safely ignored or kicked down the road.

However, now and then, you'll take a step back and realize the issue is fundamentally unfixable. It might be too deeply embedded into the code, or your initial assumptions were incorrect. When is it better to scrap your work and start again?

<!--more-->

I can name two major projects where I've restarted from scratch: Egg Trainer and Toy. In each case, starting again was a risk, but a necessary one.

I started developing Egg Trainer in January 2020, and by January of the following year, I realized that the codebase was atrocious - I wasn't using an ORM, instead making database queries with raw strings, but I *was* using Redux, and all the baggage that came with that. Everything was stored in a single git repo, but it was an absolute mess.

So, I started again. My plan was to develop a generic reusable engine, and build the game on top of that. The result was the [MERN-template](https://github.com/krgamestudios/MERN-template), an open source template for building PBBGs. It was built around microservices - by separating the gameplay services from the engine services, the engine could be available for others to use without having to share proprietary code. I switched to using Docker, Sequelize, and React's built-in hooks, all of which I had to learn as I went.

The new approach had its own issues - trying to keep 12-ish repos synchronized was not trivial - but I learned so much and Egg Trainer's end result speaks for itself. There are definitely things I would do differently on a third pass, but I won't *need* to, as the new architecture is modular enough that swapping out parts isn't too hard.

I started tinkering with Toy in 2017. In fact, each version prior to 0.6 was a restart - I had something working in several implementations, including C# (which somehow managed to work in Unity, oddly enough). However, the current v1's history begins with v0.6, which is when I decided to see the project through to completion. [And I did](https://github.com/Ratstail91/Toy/releases/tag/v1.3.2). I had even begun work on a game engine, and a friend of mine had drawn some sprites and tile sets for the Skylands game. But, if you read [last week's post](/posts/2024-10-28-game-plan), you'll know that v1's performance was terrible. In fact, any kind of script processing would slow the game to the single-digit frame rates. So, I shelved it.

With v2, I was determined not to make the same mistake. I began by writing the lexer and parser (copying the v1 logic that was sound), and created a custom allocator class called Toy_Bucket to manage chunks of memory. This iteration is still in development, and isn't even Turing complete yet, but I can already tell that the codebase is cleaner this time. Knowing ahead of time the kinds of challenges I'll face is a major advantage. Now, only time will tell if v2 ends up any good, but I'm looking forward to finding out.


