---
layout: post
tags: coding webdev sineql
title: "Sine of the Times"
---

I'm frustrated as hell by NPM for absolutely no reason, so I'm gonna explain why. Please indulge me during this post, because there won't be much in the way of informational or thouht provoking content here, but you might find some catharsis in reading this. And no, the title is not a typo, it's a pun.

<!--more-->

I received a dependabot alert on GitHub that a library I wrote and maintain, [sineQL](https://github.com/Ratstail91/sineQL), had one of its dependencies flagged with a vulnerability - specifically, lodash. Nothing out of the ordinary here, other than the fact that sineQL has ZERO dependencies - in fact, the only library included is jest as part of the CI testing suite.

Side note: *Why the hell is my `package-lock.json` over 4400 lines???*

OK, no problem, I do a local `npm update`, make a new commit and tag as a patch build (`v1.0.6` for those wondering), and push it to GitHub. The problems started when I tried to also publish it to npm's registry. Since I also have a live demo of sineQL running (even listed in the project's README), publishing to npm just makes sense for keeping that up to date, as well as providing easy access for users.

First, turns out my username on npmjs.com is all lowercase, which tripped me up for 20 minutes. Then, I login to discover that ALL access tokens have been revoked since last time I was here, and you now need some new 2FA thing to publish. So, I tried to set one up, and even tried to link it to my phone via bluetooth, which simply failed.

After all that bullshit, which totalled about two hours of spinning my wheels, I finally gave up, as it seems I simply can't publish to the npm registry anymore - best way to avoid security violations is to make a service unusable, who knew?!

Considering this project isn't being actively worked on, isn't used by anyone at scale, and the files that are actually uploaded aren't even changed by the version bump, I have no qualms about leaving it as is. I don't even know if I'll bother trying again for future updates, or if using major services like this are even worth the effort considering my private server works just fine for my personal projects.

*When I'm not raging against a machine, I can usually be found on [Bluesky](https://bsky.app/profile/krgamestudios.bsky.social) or [Discord](https://discord.gg/5KwPFdTBZp). If you'd like to show your support, I also have a [Patreon](https://www.patreon.com/c/krgamestudios), and I'd love a Coffee via [Ko-fi](https://ko-fi.com/krgamestudios).*
