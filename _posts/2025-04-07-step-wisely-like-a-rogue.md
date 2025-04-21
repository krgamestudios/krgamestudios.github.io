---
layout: post
tags: gamedev roguelike stepwise
title: "Step Wisely, Like A Rogue"
---

A few weeks ago, I (with input from my good friend Troy) started working on a traditional roguelike using [python-tcod](https://github.com/libtcod/python-tcod), which I've given the working title "Stepwise". While the mechanics are heavily inspired by [NetHack](https://makeitbigingames.com/open-source/nethack/), at first I couldn't decide on a theme or premise. Then, it came to me: Why use one theme, when you can use them all?

<!--more-->

![screenshot_01.png](/assets/2025-04-07/screenshot_01.png)
![screenshot_04.png](/assets/2025-04-07/screenshot_04.png)

As a broad overview, stepwise is an homage to classic console-bound roguelikes, with their 80 columns of text across 24 rows, but opts to leverage the abstract art style to present multiple different worlds, each with their own genres and premises.

Each time you begin a game of Stepwise, one "world" is randomly chosen from the following list, and forms the backbone of the world generation:

*Note: These worlds are only rough outlines, they'll be developed over time.*

* Magic
  * Sword and Sorcery (LotR, D&D)
  * Mana-Centric Isekai (stereotypical conceits)
  * Post-Post-Apocalypse (Nausicaa)
* Technology
  * Steampunk/Clockpunk/Crystalpunk (deeper areas, stranger tech)
  * Digitized Minds (GitS, Neuromancer)
  * Gunslingers (Wild West with strange tech)
* Fiction
  * Shakespeare, A Tragedy
  * Mythic Odyssey
  * Grimm Tales
* Reality
  * Secret Agent Espionage
  * Eldritch Horror
  * Gothic Fiction

This list of twelve worlds are divided into four categories, with each category offering vaguely unifying themes. At the time of writing, these worlds are only guidelines for planning out our features, but the differences between these worlds will be a constant in the backdrop of the player's time with the game.

The multiple-worlds concept would be nearly impossible in most situations, due to the extensive number of assets needed - here however, this simple and abstract representation of the game world makes those difficulties melt away. See here, for the different healing item implementations:

```python
#Category - Magic
potion_of_healing = Entity(
	char = "!",
	color = colors.green,
	name = "Potion of Healing",
	walkable = True,
    useable=useable.PotionOfHealing(consumable=True, current_stack=1, maximum_stack=255),
)
```

```python
#Category - Technology
stimpack_of_healing = Entity(
	char = "!",
	color = colors.green,
	name = "Stimpack: Healing",
	walkable = True,
    useable=useable.PotionOfHealing(consumable=True, current_stack=1, maximum_stack=255),
)
```

```python
#Category - Fiction
tincure_of_healing = Entity(
	char = "!",
	color = colors.green,
	name = "Tincure of Healing",
	walkable = True,
    useable=useable.PotionOfHealing(consumable=True, current_stack=1, maximum_stack=255),
)
```

```python
#Category - Reality
medicine_of_healing = Entity(
	char = "!",
	color = colors.green,
	name = "Medicine of Healing",
	walkable = True,
    useable=useable.PotionOfHealing(consumable=True, current_stack=1, maximum_stack=255),
)
```

*I spent 20 minutes looking for a literary-sounding word, and landed on "tincure" - so that and "medicine" will have to do for the purpose of this article.*

The point I'm making, is the simpler building blocks are very much reusable between the different worlds, and the same item can be used across an entire category. Similarly, NPCs and other familiar elements can be warped as needed - Cid the Dwarven Shopkeeper may find a kindred spirit in C.I.D. the Customer Inventory Droid.

What's intriguing to me, are the possibilities for how to distinguish between the worlds. One world may have the trappings of a Greek Epic, while another requires the player to hunt down and destroy an eldritch parasite feeding on a town's population. One world may have the map generate a vast dungeon complex, another may take place in a grand castle, and a third in a deep dark forest.

Finally, the element that ties it all together, is how the different worlds *interact*. You may encounter a merchant ship in one world and think nothing of it, only to encounter it in another and realize it's the same ship, travelling just as you are. You may also encounter the Gobbos, green goblin-like nutcases that cause havoc in every world they visit. Exactly how they travel is a mystery, but they seem to move like locusts.

Stepwise will be a commercial release, though exactly when, I'm not sure. I'm also not sure when I'll make the source code private - likely when I reach the mid-point of development, and begin taking pre-orders/early access sales.

For now, ~~the source is available on my private gitea, and linked on the side of this website~~. Edit: The source has been made private, more up-to-date information can be found on the dedicated page [here](https://krgamestudios.com/stepwise).

If you'd like to tinker with your own roguelike, there's a whole website dedicated to [Roguelike Tutorials](https://rogueliketutorials.com/).

*When I'm not trying to melee a [floating eye](https://shop.wizkids.com/products/d-d-icons-of-the-realms-potato-head-beholder-boxed-miniature), I can usually be found on [Bluesky](https://bsky.app/profile/krgamestudios.bsky.social) or [Discord](https://discord.gg/5KwPFdTBZp). If you'd like to show your support, I also have a [Patreon](https://www.patreon.com/c/krgamestudios).*