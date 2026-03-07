---
layout: post
tags: gamedev coding mana
title: "Quest Logged"
---

Last night, I found a video by Tim Cain about [implementing a quest system](https://www.youtube.com/watch?v=pw6tOlmwwYE). He lays out a simple, straight forward to coding quest systems, but I realized that my own experience with [quests in The Mana World](/posts/2025-11-04-the-mana-of-a-man) differed from his approach, so I wanted to outline another way to handle quests, as well as my own thoughts on designing a quest system. Brace yourself, we'll be using some XML and the DSL content.

<!--more-->

First, I should note that The Mana World's quest log system is newer than many quests in the game, and as such there's only a few dozen quests actually tracked by the in-game log. My major contributions so far relate to migrating older quests to the new system, so I'll be using it as the basis for this break down. The snippets listed here are licensed under the GNU GPL v2, drawn from [serverdata](https://git.themanaworld.org/tmw/serverdata) and [clientdata](https://git.themanaworld.org/tmw/clientdata) code.

## Crunchy Code

Let's start from what could be considered the backbone of the quest log, `serverdata/world/map/db/quest-log.txt`.

```
25,QL_FURQUEST,QUEST_WG_state,0,8
26,QL_BANDIT_BOUNTY,QUEST_Hurnscald,0,4
27,QL_SILK_PANTS,QUEST_WG_state,2,4
28,QL_SCYTHE,QUEST_Hurnscald,1,4
29,QL_FOREST_BOW,QUEST_Forestbow_state,0,4
30,QL_WOODEN_SHIELD,QUEST_Forestbow_state,1,4
31,QL_CAT_EARS,QUEST_Katze,0,4
32,QL_INSPECTOR,QUEST_Hurnscald,3,4
```

This is only a snippet, but this file defines five columns: "ID", "CommonVar", "ServerVar", "Shift", and "Mask". The ID is a primary key (sort of) used to specify a quest from the XML files (see below), and the CommonVar is used by the NPC scripts to control the quest's state. The other columns are used to map the newer system onto the older systems and character database files, but that's beyond the scope here (but it is interesting, I might write a follow up about how data is stored long-term).

```xml
<?xml version="1.0" encoding="utf-8"?>
<quests>
  <var id="25">
    <!-- Agostine Winter Gloves -->
    <effect map="020-2.tmx" npc="137" value="0" effect="45"/>
    <effect map="020-2.tmx" npc="137" value="1,2,3,4,5" effect="46"/>

    <quest name="Refreshments" group="Kaizei" incomplete="1">
      <name>Refreshments</name>
      <text>Bring Agostine a nice beverage.</text>
    </quest>

    <quest name="Refreshments" group="Kaizei" incomplete="2,3">
      <name>Refreshments</name>
      <text>Follow up with Agostine about updating your wardrobe.</text>
    </quest>
```

This snippet from `clientdata/quests/kaizei/furquest.xml` looks a bit ominous, but you can see it linked to the quest ID 25 from `quest-log.txt`.

<div style="text-align: center">
	<img src="/assets/2026-03-07/screenshot-01.png" style="max-width: 200px">
	<p><em>The fabulous Agostine begins the quest line thirsty, as did his artist, it seems.</em></p>
</div>

You can also see the quest's name in the list is controlled by the `name` attribute, while the title within the dialog box is defined by the `<name>` tag. You can also set specific values (for CommonVar) which make each entry visible within the quest log as either `incomplete` or `complete`.

<div style="text-align: center">
	<img src="/assets/2026-03-07/screenshot-02.png" style="max-width: 200px">
	<p><em>Will he be the Tumblr Sexyman 2026?</em></p>
</div>

The last part is the `<effect>` tag, which specifies a map index, an NPC index (defined in the NPC scripts), and an effect to show for each listed value (45 is '!' and 46 is '?').

## eAScript, the DSL from hell

The above snippets are entirely user-facing elements which display (or don't display) based on a single value, the `CommonVar`. It's not a particularly pretty system, as some of this code dates back multiple decades, but given what the devs are working with, it works well enough.

I can't say the same about tmwAthena's bespoke scripting language. I don't want to shit on it too much, because it does the job, but it's also missing a lot of improvements that it's needed for a long time.

```
020-2,27,26,0|script|Agostine|137
{
    if (QL_FURQUEST == 0) goto L_Refreshments_1;
    if (QL_FURQUEST == 1) goto L_Refreshments_5;
    if (QL_FURQUEST == 2) goto L_Gloves_1;
	//snip - this is a long an arduous quest line

L_Refreshments_1:
    mes "\"This goes up, this goes left...\"";
    next;
    mes "\"Mmmm...?\"";
    next;
    mes "[Agostine, The Legendary Tailor]";
    mes "\"Oh, a customer! Let me introduce myself! My name is Agostine!";
    mes "Some people say that I am the best tailor in the world,";
    mes "but I think I am the best one in the universe!";
    mes "So, What can I do for you, my friend?\"";
    next;
    menu
        "I want something new for my wardrobe!", L_Refreshments_2,
        "Oh, nothing, thanks!", L_Close;

//snip - you've agreed to find a drink
L_Refreshments_4:
    mes "[Agostine, The Legendary Tailor]";
    mes "\"Thanks so much.\"";
    set QL_FURQUEST, 1;
    goto L_Close;

//snip - this extra close lable is superfluous, but was left in place for unrelated reasons
L_Close:
    close;
}
```

In this file, you'll see Agostine's internals (snipped for brevity), which depends on the CommonVar `QL_FURQUEST`. Yes, it does actually use `goto` to jump to labels, which may seem anachronistic, but for a pure dialog-based scripting system, it does make sense - the part that doesn't make sense to me is requiring `L_` at the start of each lable, but I digress.

You can see that, once a dialog route is complete, the state of a quest line can be updated by changing the value of `QL_FURQUEST`. In this case, by setting it to the value of 1, it will appear in the quest log. Then, the player can progress this quest through various stages until completion, and a nice reward at the end.

## Kayne on Cain

Back to the source of this thought, Tim Cain's video. In this, he outlines a pretty decent way of implementing a quest system, and its one that he used in multiple production releases. He listed five states that a quest can be in: Unknown, Mentioned, Accepted, Achieved, and Completed, as well as a special "Botched" state which can override all others (except Completed). These can also be accessed from the scripting system as well, or triggered from various events via a global quest manager.

The way he phrased it, it almost seemed like the quests were a one-and-done task, which I doubt is the case. I wanted to write up a response, but a youtube comment wouldn't suffice, so that's why I wrote this post. I wanted to illustrate to people that there's more than one way to skin a cat, and even this system isn't the only possible option - apart from botched states and multi-stage quest lines, aspects like branching quests or dynamic narratives are all possiblities depending on the game in question.

I've been stuck in a creative rut lately, but writing this is a big help. I wonder if I could put together something like a quest system and plug it into my half-baked scripting language [Toy](https://github.com/krgamestudios/Toy)? I wonder if focusing on lower-level systems for a while could be fun? I wonder if I should stop wondering and start doing?

*When I'm not questing for the best chest vest, I can usually be found on [Bluesky](https://bsky.app/profile/krgamestudios.bsky.social) or [Discord](https://discord.gg/5KwPFdTBZp). If you'd like to show your support, I also have a [Patreon](https://www.patreon.com/c/krgamestudios), and I'd love a Coffee via [Ko-fi](https://ko-fi.com/krgamestudios).*
