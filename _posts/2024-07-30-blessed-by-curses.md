---
layout: post
tags: gamedev ttrpg curses-and-blessings
---

If you see a big hole in the ground, you want to know what's at the bottom, right? If you see a big mountain, naturally you want to climb it.

What drives you to do that? Mere curiosity? A sense of adventure? Or is there something more?

<!--more-->

I wonder what drives me to make games. My current idea, after such a long project, is something relatively small: a tabletop roleplaying game titled [Curses and Blessings](https://gitea.krgamestudios.com/Ratstail91/curses-and-blessings).

This game initially began as a fan-made TTRPG set in the world of Made in Abyss, my favourite manga and anime (Warning: Dark Themes). After the first play test, I gave it a good long think, and realized that I actually don't want to be tied to the MIA world, despite loving it so much.

So, I took the mechanics I had outlined, scrapped the setting, and created a new setting by effectively tracing around the outline of the abyss. In some areas there's a 1-to-1 correlation of elements, but as I develop the game I plan on expanding into new directions that I couldn't have before.

## Setting

**Tier, the Sacred Mountain** - a massive mountain that seems to unexpectedly jut up from the otherwise mostly flat continent - different altitudes are divided roughly into seven "tiers" (yes, the name maybe confusing), with the topmost tiers being a mysterious point of no return.

This is pretty close to the structure of the Abyss - 7 layers and a point of no return - but I'm already beginning to think of ways to differentiate it. For example, the 3rd tier has a series of holes in a sheer cliff face (much like the abyss), but I'm turning them into nests for large birds called fortner (drawn from the Corpse Weepers, but without their distinctive traits). If you choose the wrong hole to rest in, you'll be violently ejected by the nesting fortner within - quite a gamble on the Gambler's Bluff.

I've also been looking at naming conventions, specifically drawing some names from German for the lower regions - unfortunately, I don't speak any kind of German, so I may abandon this convention soon...

## Mechanics

My original intent was for the player's to use orphan characters with fairly low statistics. This is no longer compatible with the setting, but the core concepts of the characters remain:

* Health
* Stamina
* Fortitude
* Obsession

These are the "core attributes", which have a maximum value, and can be depleted over time. Health is fairly straight forward; if it reaches zero, you die, do not pass go, do not collect $200. Stamina is your ability to do things, Fortitude is how resistant you are to the environment and various threats, while Obsession will be used to interact and use various artifacts.

When rolling, you'll be able to re-roll a fail by spending a point of Stamina - this is actually inspired by my current DM's strategy of giving everyone at the table up to three inspiration points, and being very liberal with them - you can even burn multiples of these if you really desire a success, though for C&B, you must take the new result, as the habit of "fishing for critical hits" isn't something I want at this point.

Where Stamina is your ability to act on the world, Fortitude is your ability to withstand being acted upon - it doubles as the resistance to environmental effects, as well as acting as the target value when an enemy tries to attack you. Interestingly, taking damage in combat also lowers your Fortitude, so you will be worn down and become more vulnerable over time, whether you like it or not.

If either Stamina or Fortitude reaches zero, you become "Fatigued" - a kind of exhausted state, where your damage output is halved, and the amount of damage you take is doubled. Before writing the combat section, I didn't actually intend for Fatigued to play directly into combat, but it was already the result of Stamina and Fortitude running out, so it happened on its own... games that design themselves are quite interesting, aren't they?

On the whole, it feels as though it's probably a better idea to avoid direct combat, judging by these mechanics. I will need to offer incentives to draw players into situations like this... as with anything, test, test, test.

Obsession is the odd one out, as I haven't reached the point where it can be utilized by the artifacts yet.

## Progression and Skill Issues

You'll notice that I called the above "core attributes" - I've decided to make a very distinct mechanical definition for "attribute":

```
Attribute: An abstract value representing something about a character. It has an arbitrary maximum value, a minimum value of 0, and a current value anywhere in between.
```

Characters also begin with a number of "skill points", currently 20, and they'll be able to earn more over time. The skill points can be spent, or "allocated", towards skills listed in the game (many of which are still to be designed). Each skill can be levelled up by allocating more points equal to the new level i.e. to gain level 4, it will cost a total of 10 skill points (1 + 2 + 3 + 4 = 10). Players don't have to allocate these points if they don't want to.

The "skill" mechanic is also given a very specific definition:

```
Skill: An abstract label representing something about a character. It has a "level" starting at 1, which can be increased over time, and may or may not be associated with an attribute as it's "linked attribute". Skills may also grant additional abilities and rules for that character, including new attributes.
```

It's fairly abstract, allowing pretty much anything to be written as a skill. They may add new attributes, and some attributes may be explicitly named as a skill's "linked attribute", though just because a skill adds an attribute, doesn't mean it's automatically linked...

When it comes to gamedev, you often need to be very explicit with tiny details like this. The difference between an attribute added by a skill and that skill's linked attribute is such a minute difference you'd probably need a microscope to see it, but you're going to be kicking yourself when you've built 90% of the system and realize you need to revise most of it to make sure a new idea still works. I've been making games for so long, I've lost count of how many times I've tripped over this scenario.

## Roadmap

I tend to make a distinction between "rules" and "content" - the core rules of the game seem to be mostly written for now (or at least a draft of it), next I need to add enough content to allow at least a short bit of play testing. That means, Artifacts found on the mountain. If I can represent it in a table, it's probably considered content.

The core game loop will be: collect artifacts -> exchange artifacts for skill points -> gain new skills which open up new areas to explore for artifacts. I still need to write up some basic artifacts (not all of which need to be directly useful), as well as skills for the players to buy. Adding some creatures to the bestiary to act as challenges would also be a good idea... if I can get enough "game" for one session in place, then I'll be satisfied enough to keep expanding it.

I don't have a major end-game goal for now - my eyes are set on the next play test session. The game doesn't have to be anywhere near complete before then, but getting it to function well enough will allow me to see how people react to it, and begin the process of adjusting it.

## Reception So Far

My biggest concern, as weird as it sounds, is that this has been getting nothing but positive feedback... are there no blatant issues? No glaring mistakes? It's a little unsettling, like when you compile a program correctly on the first try.

Comments and critique are always welcome - please, be brutal.

https://gitea.krgamestudios.com/Ratstail91/curses-and-blessings

