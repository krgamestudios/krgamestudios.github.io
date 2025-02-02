---
layout: post
tags: production langdev
---

I missed a milestone in Toy. I'm not going to beat myself up over it, instead, I'm going to examine why I missed it, and what I can do about it going forward. Learning from a mistake is the important part, right?

<!--more-->

A few months ago, I planned out a few milestones for Toy's development, each spaced about two weeks apart. I managed the first two with ease, but the third one, which is set for today (as of this writing, 29th Jan), is far from finished. I'm not looking to push myself beyond my capabilities, but I do want to know why this happened. So, lets look at what I've done over the last two weeks.

## Completed Work

The milestone in question is the implementation of functions; before functions can be started, the outer architecture of Toy's implementation needed to be adjusted. Essentially, I wanted to codify some ambiguous concepts, and set up the VM, so it can be easily reused for functions. In a practical sense, I wanted each individual source file to be treated as a "module", and each user-defined function to also be treated as a "module". This would simplify the implementation greatly, and allow a nice recursive logic.

So, I did begin readjusting the implementation, and the source directory was compiling again, but the repl and tests hadn't been adjusted yet. Rather than pushing a failing build to the `v2` branch, I pushed it to `v2-tmp` branch, which I can merge in later. IDK if this is the development approach I'll take in the future, we'll see.

## Curses!

I've recently started having jam sessions with a friend of mine, to get a shelved game [Curses and Blessings](https://gitea.krgamestudios.com/Ratstail91/curses-and-blessings) to a state where it can be play tested. I'm having a lot of fun with this, which is always a good thing, but I'm not about to abandon Toy because of it.

Tinkering with side projects is one of the major ways that I can keep my forward momentum on major projects. My philosophy is "it's a marathon, not a sprint", so maintaining my enthusiasm for development is essential, as is knowing how my own mind works.

## Is This Real Life?

I've had a number of tasks in my personal life, largely related to routine medical things, that have taken my attention more than usual. I feel a bit sheepish posting about it here, but they're mainly related to my sleep hygiene and my weight loss, both of which need to be dealt with if I'm ever going to improve my life.

## Moving Forward

For now, I think the best approach is to push the milestones back by one "sprint", and aim to complete the functions before the next one.

My new timetable looks like this:

| Feature | Time Span | Review Date |
| --- | :---: | :---: |
| [Arrays & Tables](https://github.com/Ratstail91/Toy/issues/155) | -  | 1st Jan ✅ |
| [Control Flow](https://github.com/Ratstail91/Toy/issues/152) | 2 weeks | 15th Jan ✅ |
| [Functions](https://github.com/Ratstail91/Toy/issues/163) | 2 weeks | ~~29th Jan~~ |
| [Functions](https://github.com/Ratstail91/Toy/issues/163) | 2 weeks | 12th Feb |
| [Dot Operator & Slices](https://github.com/Ratstail91/Toy/issues/156) | 2 weeks | 26th Feb |
| [Standard Libraries](https://github.com/Ratstail91/Toy/issues/164) | 2 weeks | 12th Mar |
| [Native Libraries](https://github.com/Ratstail91/Toy/issues/165) | 2 weeks | 26th Mar |
| [Documentation](https://github.com/Ratstail91/Toy/issues/169) | - | - |

Dwelling on the past never helped anyone, so let's keep moving forward.

[![toylang preview](/assets/toylang-preview.png)](https://github.com/Ratstail91/Toy)
