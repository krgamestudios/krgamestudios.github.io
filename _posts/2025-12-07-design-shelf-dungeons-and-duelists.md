---
layout: post
tags: gamedev design-shelf ttrpg tcg
title: "Design Shelf: Dungeons & Duelists"
---

So far, I've only posted two entries into the "Design Shelf" series - one was a TTRPG, the other was a TCG. Evidently, I have a fondness for these genres. In this post, let's have a look at the classic tropes of Dungeons and Dragons (and TTRPGs in general), and see how we could work them into a TCG, akin to Magic: The Gathering (if WotC is reading this, I charge by the hour).

<!--more-->

First, this will be a standard player-vs-player game, where the last player standing wins. This is already a departure from most TTRPGs, as I've yet to even see someone attempt to craft a cooperative card game with a TCG distribution model. You could argue an archenemystyle asymetric game would work, with the players against a DM-analogue, but it's still PvP with a one-on-many setup.

Second, many TTRPGs put a big focus on player progression, usually with a class-based progression path. So, if each player is required to have an avatar card, that card can dictate the deckbuilding rules and and provide a progression path for getting stronger. Six core attributes are a bit much to track with a deck and some dice (shout-out to Kohdok's excellent [7 Deadly Sins of TCG Design](https://youtube.com/playlist?list=PLphu8NE8GQc4ldfNEEFX3dOPv_ihxADvs), #6 "Too much Junk"), so let's use just four:

* HP for your starting health points
* AC for your damage resistance
* STR for your physical attributes
* MAG for your innate proficiency with magic

There's a lot you can do with these, such as using a "hit dice" system instead of HP, where your starting HP is dictated by your HD, but you can also re-roll your hit dice at certain times to heal. Let's say, your hit dice are 2d6, and a card tells you to roll to heal, then you roll 1d6 and regain HP up to a maximum of 12 (you'd be limited to two rolls like this per game). This is definitely a maybe-feature though.

The final thing that your class gives you is a once-per-turn ability that can level-up by collecting XP - different cards in your deck will grant XP as an additional bonus of using them, and you'll be able to level-up at the start of your next turn by spending a six-ish points (this is similar to forging keys in KeyForge).

The spells, items and equipment in your deck would be a constantly depleting resource. If you consumed a potion item, it would be discarded into an irretrevable "exhausted" pile, unlike action cards (attack, defend, etc.) which would be shuffled back into the deck at the end of your turn or when the deck is depleted. Equipment could be placed on the field and become a permanent buff until discard or destroyed, while spells would consume the total amount of MAG points, and your MAG wouldn't reset until you levelled up.

STR would be the amount of damage dealt with attack cards, minus your opponent's AC. At the end of your turn, you would discard your hand and draw another. Different cards could also grant an extra little bonus based on your class, like a sword giving a figher extra damage.

I have a very limited understanding of how [Flesh and Blood](https://en.wikipedia.org/wiki/Flesh_and_Blood_(card_game)) works, as when I tried it the inverted power scaling tripped me up, but I do have to aknowledge that what I've written above has some similarity to that game's classes, though there's *no way* I would restrict cards based on a class, as you'd be selling people useless cardboard if they don't like that play style (and it limits interesting interactions across class lines). I also have how you pay for actions in that game, but I digress.

Since I'm writing this off the top of my head, I don't actually have any plans for this game - but, let's have some fun and imagine what the cards would look like:

```
# Cleric - 8HP
+2 STR, +2 AC
2 MAG

Channel Divinity: Spend 1 MAG, and regain HP equal to your Level.
```

```
# Roll for Attack
Deal STR damage, and gain 1XP.
```

```
# Brace for Impact
Until your next turn, gain +2 AC.
```

```
# ...all of it
During your next attack, your opponent's AC is 0.
```

```
# Sleight of Hand
Your opponent reveals their hand.

If you're a Rogue or a Thief, they also discard one card.
```

```
# Misty Step - 1MP
If you would take damage, prevent that damage.

If you're a Sorcerer, draw a card.
```

*When I'm not failing a saving throw, I can usually be found on [Bluesky](https://bsky.app/profile/krgamestudios.bsky.social) or [Discord](https://discord.gg/5KwPFdTBZp). If you'd like to show your support, I also have a [Patreon](https://www.patreon.com/c/krgamestudios), and I'd love a Coffee via [Ko-fi](https://ko-fi.com/krgamestudios).*
