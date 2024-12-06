---
layout: post
tags: gamedev tcg
---

I recently wrote down a dozen-ish game mechanics from various places that I find interesting in isolation. These ideas work well in their respective games, but could also be adapted or reused in other games. Since half of them were related to card games in some way, I've picked those specific mechanics to talk about, as they share a common genre.

<!--more-->

## Prize Cards

The Pokémon Trading Card Game first released in January 1996 in Japan (1999 in English) with Base Set, based on the wildly popular video games Pokémon Red & Green (which were adapted as Red & Blue in English). It would take an additional two sets (Jungle and Fossil) before all 151 Pokémon had their own card, and many players consider these sets to be immensely fun to play.

While other trading card games predated the Pokémon TCG (most notably Magic: The Gathering), most of the gameplay elements were drawn from the video games. In the video games, each player can carry at most six Pokémon at a time, and once you've knocked out all of your opponent's Pokémon, then you've won the battle.

The TCG mimics this goal by having prize cards - once your initial active and benched Pokémon are chosen, the top six cards from your deck are set aside, becoming your prize cards. One of these prize cards is placed into your hand each time you knock out an opponent's Pokémon. Once all six prize cards have been taken, you win the game.

This clever mechanic is pulling triple duty - they mark a player's progression towards the end-game, they slow-drip rewards to the player for each successful knock-out, and they also remove a full 10% of a player's 60 card deck, which introduces a degree of complication to both deck building and gameplay.

As a rule of thumb, when I build a deck in the modern TCG, I add one more copy of any card than I want to see during play - so, if I presumably want two copies of 'Iono' in an average game, then I'll include three in the deck list. Similarly, while it's unlikely that both copies of Boss's Orders will be prized, the chances are not zero, and when it happens, I need to adapt on the fly to the absence of such an important card.

There is one notable drawback to this system, which any regular player is familiar with - knocking out an opponent's Pokémon often means you're pulling ahead of your opponent, and receiving a prize card as a reward means the game's core rules have a slight 'win-more' aspect to them. This isn't inherently a bad thing, and these days it's often used as an element of risk-vs-reward (e.g. the recent 'Charizard ex' has an attack which becomes more powerful the more prizes your opponent has taken), but the choice to use a similar system should take this drawback into consideration.

## Shield Cards

The Duel Masters Trading Card Game first released May 2002 in Japan (2004 in the US), and later rebranded internationally as 'Kaijudo: Rise of the Duel Masters' in 2012. It's currently only sold in Japan, where it's apparently really popular. I'm just going to call it 'Duel Masters' for brevity.

I've never actually played this game, but here's the gist of it - Duel Masters is Magic: The Gathering with bad anime hair. That's not a totally inaccurate description, as it was developed as a direct alternative to MtG for the Japanese market, with some elements of gameplay simplified (any card can be played as a resource, rather than requiring dedicated land cards), while also retaining other core elements (the five 'civilizations' match the five colors of MtG).

One such element that was simplified was life points - rather than needing to reduce your opponent's life total to zero, Duel Monsters adapts the prize card system from Pokémon TCG, but adapts it into shield cards. Much like Pokémon, shield cards are removed from your deck and act as a progress tracker, but instead of taking one as a prize, when an opponent is attacked directly, that defender is the one who takes a shield card into their hand. Each player starts with 5 shield cards, and they lose the game if they're attacked without a shield to deflect the damage.

This is a brilliant twist, as it adds an element of catch-up to the core rules of the game, and also creates design space for 'trigger' effects, which activate when a shield card is broken. While other aspects of Duel Masters simply makes me want to play MtG instead, this particular element is something that I'd love to use myself one day.

## Multiple Resources

<div class="spoiler" style="--cover: #edbc8c">
<span class="hint">Warning: Spoilers for Inscryption</span>

<p>Inscryption, a 2021 digital card game by Daniel Mullins, is more than just a simple card game. While I could write *multiple* posts about it, many others have already discussed and dissected this game to the bones. If you want my recommendation for an analysis, check out <a href="https://www.youtube.com/watch?v=fOcjDxW1g4k">Daryl Talks Games</a>. In this section, I want to talk about the differing rulesets used throughout the three acts of the game.</p>

<p>During act 1, you are introduced to two resources: blood and bones. The former is obtained by sacrificing your existing creature cards on the board, to immediately summon a new creature. Different creatures have different costs in terms of blood, from the squirrels that cost zero (and are used to begin building your board state), to the more powerful creatures needing multiple sacrifices at once.</p>

<p>On the other hand, bones are gained, one at a time, any time a friendly creature dies (including when it is sacrificed). Several cards are available during act 1 that require you to spend a certain number of bones - if you don't have enough, they simply can't be played.</p>

<p>During act 2, you are introduced to two more resources: energy and mox. Energy builds up each turn, and refreshes at the beginning of your turn (similar to Hearthstone's mana crystals), while mox cards require you to have a specific gem card on the field, and are destroyed if those required gems are ever removed.</p>

<p>Having four different resource systems is a fantastic way to reflect the differences between the four scrybes in the narrative. However, I'm just as interested in the fact that this game even has four different resource systems at all, and how well they work within one set of rules. While I've seen other card games with ways to circumvent costs, or to allow alternate ways of paying for costs, I've never seen more than one system be a fundamental part of the game's ruleset.</p>

<p>Sidebar: On the topic of Inscryption's rulesets, I wanted to quickly mention how absurdly broken they are. The Act 1 final boss has 40 health, yet can be destroyed in a single hit by a creature with the poison sigil - that's just one of the many exploitable elements of the game. While these exploits make the player feel as though they've gotten one over on the game, I can guarantee that these issues are 100% intentional. This is, after all, a single player video game - these "broken" mechanics lead to some amazing narrative moments.</p>

</div>

## Booster Pack Tutorials

Picture this: little Timmy saved up his lunch money to buy a booster pack from the latest Trendy Card Game. He opens them up, goes ooh-aah at the art, then sees two specific words that appear on a few of the cards' rule boxes: 'Flight' and 'Dig'. He doesn't know what these are at first, but he asks his friend Johnny what they mean. Johnny explains that these are 'keywords', which gives these cards the ability to either fly over an opponent's cards, or dig under them. While there's lots of cards that can stop flyers, those that are digging in tunnels are slower but have a better chance of getting into the castle. Little Timmy doesn't know what a castle is, but the mental images they invoke are enough for him to take a closer look at how to actually play Trendy Card Game.

This is a fantastic example of how to drip-feed new rules to your players, especially those who are only just starting out. Most people would look at a booster pack as a money-making technique - and I assure you it absolutely is - but it can also be used as a teaching tool. Most boosters are divided into a series of 'slots', with a specific subset of cards possible in each slot. If your cards are divided by rarity, you could fill a 15 card booster with 10 commons, 3 uncommons, 1 rare, and 1 resource card (assuming your game has dedicated resources).

This arrangement allows the simpler common and uncommon cards to be the bulk of most new player's collections, while limiting the powerful but complex rares to only a few, so they don't get overwhelmed. Having one slot dedicated to resources can also steadily grow a player's supply of such cards, which can be useful if a game isn't limited to a certain maximum number of resources.

## Death as a Resource

In Inscryption, when a creature you control dies, you gain a 1 bone token (this is introduced pretty early on, so it doesn't count as a spoiler). In Hearthstone, the Death Knight class has access to cards that can use 'Corpses' as a resource - Corpses, much like bones, are gained every time a (non-Risen) minion dies. Magic: The Gathering has a keyword mechanic called 'Delve', which allows you to pay for an amount of generic mana in the card's mana cost by exiling cards from your graveyard.

Each of these examples are somewhat similar - they are ways of paying a cost by using your dead units. There are alternative ways of using death as a resource, such as Hearthstone's 'Startship' mechanic - each time a minion with the 'Starship Piece' keyword dies, it's stats and abilities are added to a unit on your field called the 'Starship'. At any point during your turn, you can pay 5 mana to launch your Starship, by summoning it as a normal minion.

I've been having a lot of fun with a Rogue Starship deck, by using one piece that triggers a random friendly minion's Deathrattle, and another that deals damage equal to the minion's attack to a random enemy on death. If you have these two abilities on one starship, then pile on a bunch of other pieces to boost the attack, you can often win the game without even needing to attack.

The idea of losing your units, especially your powerful but expensive ones, can be quite a negative feeling. However, by using the unit's death as a resource of some kind, you can soften the negative impact, or even turn it into a positive in some situations. The above Deathrattle doesn't need to be triggered by the other effect, as it also triggers when the starship dies - I've won multiple games by my opponent destroying the starship before it has a chance to attack.

