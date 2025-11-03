---
layout: post
tags: gamedev gaming mana
title: "The Mana of a Man"
---

I've been making games since I was a kid - it's been over 20 years since I first picked up GameMaker 6.1, and found my calling in life. In that time, I've fought and struggled, had some small successes and big failures. I've crawled through hell on my belly and came out the other end different, though not necessarily in a bad way.

I have a better understanding of myself, but one thing I always believed is that I wanted to make my own games, maybe even run my own studio. For the last two months, I've been contributing to a game that has made me reconsider this entirely.

Let me tell you about my experiences with [The Mana World](https://www.themanaworld.org/).

<!--more-->

---

The Mana World is an open source 2d MMORPG, which dates back over two decades as an attempt to replicate the gameplay of [Ragnarok Online](https://en.wikipedia.org/wiki/Ragnarok_Online), but has since grown into its own thing. The game is run by [Manasource](https://manasource.org/), which describes itself as "a federation of open source game projects". It has a dense history of forked software and game servers, and there's currently four primary games that exist under its umbrella which share varying amounts of assets and code.

I'll be focusing on The Mana World in this post, as its what I'm most familiar with. I knew about The Mana World and the related projects as far back as 2013, and I'd even emailed the lead developer a couple times looking for advice, as I was working on my own MMO-style game called Tortuga (the less said about that, the better, though I may cover it at some point).

You may or may not know of the lead developer, Thorbjørn Lindeijer, but if you're in the gamedev scene then you have definitely heard of his most successful project, the [Tile Map Editor](https://www.mapeditor.org/). It's no understatement to say that his work has had a big impact on the game development scene, though I have admittedly never used it myself.

---

On the 18th of August, a project on GitHub that I had starred well over a decade ago suddenly got an update - the mana client had reached version 0.7. This caught my attention, and led me to joining the manasource discord, and I found myself playing the game, and digging into the code. My memory is notoriously bad, but I vaguely remember bjørn pointing me towards a certain task: migrating existing questlines to the client's quest log, starting with one called the "Fur Quest".

After reading through the existing scripts, I came to the realization that this quest would need some considerable refactoring if it was to work within the quest log. So, for the next six weeks I worked to untangle the logic, learned how the quest log and scripting engines worked through trial and error, and finally had bjørn and other established members of the team pick through my merge request with fine-toothed combs. In the end, I had split the singular quest into three entries in the quest log without altering the player-facing dialog, and my rework was merged into the master branch. I'm looking forward to it going live in the next update.

In this time, I've also made smaller contributions, that were considerably easier to identify and review, consisting largely of small bugs or quirks in NPC dialogs. Now, I've been asked to write the patch notes for the next release, which I'm hoping will go live soon.

---

I've never had the kind of immediate feedback and support that I'm getting from the Manasource team, and I don't think I've ever felt as accomplished as I have in this time. I'm immensely grateful to bjørn and the others who respect my contributions, and I'm eager to assist them going forward. I did make it very clear that I don't want to be obliged to contribute, as that's the perfect way to kill my motivation, but they took this in their stride, and they seem to understand that I have my own IRL issues and challenges without outright asking about them.

I've also loved learning about the [DSL](https://en.wikipedia.org/wiki/Domain-specific_language) used within the server, which is geared very directly for use within The Mana World's server software. Again, I'd love to go into this some time, as I've got my own history with embedded languages, but I think it's fascinating that a language with only conditionals and goto/labels works so well here.

Finally, I love the community - there's never more than a couple dozen accounts online at once, but it's immensely fun fighting swarms of monsters that the GMs periodically summon alongside the established players. I also can't undersell how much content is in this game - I'm still finding new areas as I level my first character, and I'm seriously curious as to what can still be hidden in the corners of the world.

Anyway, I felt I should post some kind of update to my site, just to say that I haven't forgotten it entirely - I've simpy found something awesome, and I want to see where this goes.

*When I'm not hunting fluffies to make furry boots, I can usually be found on [Bluesky](https://bsky.app/profile/krgamestudios.bsky.social) or [Discord](https://discord.gg/5KwPFdTBZp). If you'd like to show your support, I also have a [Patreon](https://www.patreon.com/c/krgamestudios), and I'd love a Coffee via [Ko-fi](https://ko-fi.com/krgamestudios).*
