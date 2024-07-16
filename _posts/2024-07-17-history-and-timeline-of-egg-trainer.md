---
layout: post
tags: gamedev eggtrainer
---

The history of Egg Trainer is arguably the history of my life - I've only ever really made games that I personally want to play, and Egg Trainer is no different. I could write a book about my history with Pokemon, gamedev, and gaming in general - but instead, here is a brief summary, to explain how Egg Trainer came to be.

## Background

My first Pokemon game was "Pokémon Yellow Version: Special Pikachu Edition" - it was a second hand copy that I played with a second hand Game Boy DMG-001 model (the classic "grey brick" variety), at a time when Pokemon Gold and Silver had already released on the game boy color. It was the only game I owned on the Game Boy, and thanks to the 30+ hour lifespans of the batteries, I must have played for hundreds of hours - long after finishing the game's main story.

I had only a few close friends, but they were just as passionate about Pokemon as I was. We all had Pokemon Stadium on the Nintendo 64, and we would often play the minigames on there - in fact, the competitive side of Stadium seemed almost like a side-event. One amazing part of Stadium, however, was that we could (with the assisstance of transfer paks) battle each other's pokemon teams on the TV. We would also quite often trade and battle each other via the Game Boy link cable - the Gold and Silver versions were compatible with the earlier games, as long as no newly introduced pokemon were used.

Side Note: It's recently come to light that, if you traded the starter Pikachu from Pokemon Yellow into either Gold or Silver, it would be holding an item called the "Light Ball" - this was the only way to obtain this item at such an early point in the series. I remember one of my friends seeing my team in the trading room, and asking me to send him my starter Pikachu so he could obtain an item it was holding - while I don't clearly remember what item it was, it must've been the Light Ball. Naturally, I refused, being a dumb kid who was too attached to his starting Pikachu; but I find it amazing that we discovered a secret over 20 years before it was widely reported.

## Sejun Park, Pachirisu, and the VGC

In 2014*, I bought Pokemon X & Y. I had fallen out of the Pokemon franchise for some time, but I picked this one up for some now-unknown reason. X&Y was the first generation of games to take place in a fully 3D environment, and it still retains a kind of charm that is hard to describe. The in-game region of Kalos is based very heavily on Northern France, and it shows through every element of the design - from the character customisation, to the beautiful designs of the newly introduced Pokemon, to the gorgeous environments. My favourite element of the game, by far, is the "stylishness" attribute which while invisible, grew throughout the game as you engaged with various game elements, such as purchasing designer clothes and making in-game demo reels. Also, the higher your stylishness, the more restaurants in Lumious City would become available to you.

It's fair to say that the X&Y games had a strong impact on me - however, nothing would have such a massive impact on the Pokemon community until that point, than the 2014 Pokemon World Video Game Championships (also known as VGC), where the renowned Korean player Sejun Park (Park Sejun) won 1st place with a team built around the seemingly low-tier pokemon Pachirisu.

Pachirisu was, at the time, classified as "Never Used" in the popular fan tiering system Smogon - so seeing it act as the key part of the champion's strategy lead to a kind of Pachirisu-themed celebration around the world, and planted a seed of an idea in my mind...

*Most of my earliest pokemon date to 2014, so I'm using that to pin the date

## A Decade in the Making

In 2017, Forbes released their list of "30 under 30" in the gaming industry - this list included a number of well known game developers, such as Eric Barone (A.K.A. ConcernedApe), the creator of Stardew Valley; Daniel Mullins, creator of Pony Island and who would go on to make Inscryption; and professional gamers like Juan DeBiedma (A.K.A. Hungrybox), known as one of the best Super Smash Bros Melee players in the world (maining Jigglypuff, btw) - and a bunch of other people who I'm sure are great people, but who don't interest me as much.

One person on this list, however, is James Earl Cox III, renowned for developing 100 games in just 5 years. Also known as "just404it", they would, at some point, come up with an interesting idea: What if a game jam (a competition to make a game in the traditionally short time frame of 48 hours) lasted for 10 years? And so, Decade Jam was officially registered on itch.io.

## The First Year

I'm not sure how I found out about the jam, but I figured it would be an interesting challenge. I seemingly joined the official discord server one day before it began (December 31st, 2019), and my initial idea was completely different - I had the idea of remaking a game called "Dungeon Dice Monsters". In a matter of days, I had discarded that idea, as it didn't hold my interest. Instead, i shifted over to the idea of a PBBG inspired by Pokemon VGC - what if I could replicate the kind of deep strategic thinking that goes into something like Sejun Park's 2014 championship win?

I had developed a PBBG in the past, and experimented with other kinds of websites, so I wasn't going into this blind. I had been theorising about how the gameplay would work - buying eggs, hatching them, training the creatures and battling others in a 2-on-2 format was basically always the goal. Finer elements, such as the battle damage formula and elemental types, were devised at some point. I would develop the concepts for various creatures, and make arrangements with a series of artists to commission some illustrations.

After about a year, my game functioning, and even had elements such as microtransactions in place. However, the quality of the code was remarkably sub-par - I'm sure the phrase "callback hell" applied, and the handling of SQL was... not good. So, with about 200 registered players, I made a massive descision - I would completely rewrite the website from the ground up, using a modular microservice architecture, to allow for more flexibility down the line.

In the middle of January 2021, I began work on what would become the MERN-template - a kind of generic game engine for PBBGs, built on NodeJS, React and MariaDB. I made the MERN-template open source, and would continue to maintain it alongside the new beta version of Egg Trainer, with code occasionally flowing between the two.

## Eggcellent Inspirations

During the extended period of development, I would keep in contact with a series of artists who contributed to the game, giving it the unique illustrations that I knew were a major selling point. I would offer a design idea for a certain creature, based partially on it's elements or some other inspiration, and the artist would work their magic. They would occasionally add their own unique flair, which was always a great thing to see.

Inspiration was drawn from a wide range of places - from chimeric mixes of existing animals, to various anime and games, to ancient legends from across the world. Some, were little more than puns, and bad ones at that. Still, I'm quite fond of the stable of creatures that made it into the game.

If there's anything I regret from Egg Trainer's development, it's that I don't think the artists got anywhere near what they deserved for their efforts - and I do believe I've left at least one of them with negative feelings towards me and the project as a whole. I've always developed games on minimal budgets - sometimes, I would have no budget at all. But, being a less than stellar artist, I would quite often partner with an artist to bring the games to the finish line. This pair of compromises leads directly to a feeling of guilt over not being able to give as much as I've received. There's no easy answer to this problem, and it still weighs on me today - but I hope to make amends, some time in the future.

## Crawling Across the Finish Line

In the middle of 2023, I finished Egg Trainer. By that I mean, I had added all of the features that I wanted in it, and despite perhaps a handful of bugs, I could be proud of what I had made. And then I couldn't even look at it for the next six months.

Something I hadn't mentioned until now is that I have mental illnesses, including autism and depression, that I still deal with on a daily basis. I'm doing very well lately, but the only way I was able to get through the development of Egg Trainer while retaining my sanity was to take the occasional break. I wouldn't let myself feel guilty about these - but some of them would last a couple months at a time, as I rested and recouperated, occasionally fiddling with small ideas.

The break that started mid-2023 was extremely severe - fro 6 months, I couldn't even look at Egg Trainer, let alone anything else. I didn't code, i didn't design, nothing. In december, I was getting frustrated with my current inability to move on, or return to it. So, on the spur of the moment, I posted a question in the PBBG discord:

Does anyone want to buy Egg Trainer?

## Wrapping Up

One person contacted me - someone who I knew through the PBBG community and trusted to take this seriously. He knew my reasons, and we eventually landed on a price we could both accept. Part of the agreement was that I would help get everything moved over to his systems. We signed a contract, and began to work.

Due to technical issue after technical issue, as well as more than a couple of major issues in my life, the completion of the contract dragged on and on - eventually taking about 6 months to complete. This was not a pleasant time of my life, and the sale didn't help, but I'm glad that it's finished, and I can look back and say "I did it".

Now, I'm here writing what will become the last article added to the support documentation for the game, and I'm content. I don't regret starting Egg Trainer, I don't regret seeing it through, and I don't regret selling it. Looking back on the last four and a half years of my life, I see the pandemic came and went, I see myself gaining the social supports that I always needed, I see my mother being carried out of the house the day she had her stroke, and I see her coming home again over half a year later with the biggest smile on her face. I see myself growing as a person, being able to stand my ground, make an effort, and rid myself of the people that don't really care about me.

I realized recently, that I was looking forward to the future for the first time in my life. It's a new feeling, but a good one.