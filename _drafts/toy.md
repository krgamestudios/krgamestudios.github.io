---
layout: post
tags: langdev
---

Over the last decade-ish, I've tinkered with making my own programming language. About two years ago, I put my all behind the idea, and ended up with Toy, a.k.a. A Toy Programming Language.

I kept working on it over time, and got it to a decently stable state, but the performance is horrible due to the memory management model.

So let's discuss version 2.

 <!--more-->

I think having a clean break in terms of the code is a good idea - it'll allow me to build up the tests and tools as I go, as well as dropping support for features that really aren't needed after all. Starting from scratch is also basically necessary for replacing the memory model.

## A Heap Of Mistakes

Originally, I allocated all memory on the heap, eaxh time a literal was needed. This was extremely slow, especially when compounded on each loop of a game. Unfortunately, it really did take until I was experimenting with gameplay before I realized there was an issue. Back to the drawing board.

The silver lining, however, is that my gameplay experimwnts proved that my initial idea for an embedded scripting language can work. So now, my goal is to rewrite the language from the ground up, knowing what I know now.

## A Stack Of Potential

The three main things to address are:

* Memory management
* Feature creep
* Code cleanliness

Firstly, version 1 didn't have a solid answer as to if it was garbage collected - in fact, it seemed to be GC'd in some places but not others. I plan on fixing this by making it a firm "yes", and adding utilities for controlling the collector.

Another memory management issue is that it was entirely heap-allocated, with no stacks; this means the language was outright ignoring benefits of the L1 cache provided by the machines it was running on.

The second thing is feature creep. I added neat ideas like slice notation for strings, simply because it looked  cool. Unfortunately, the code was nearly impossible to manage; it ended up tucked away in a separate file.

Finally, version 1's code was getting to a point where I didn't enjoy working on it. The compiler, specifically, was a recusive pain in the recursion. Some string code was also not thread-safe, causing me to put off even looking at concurrency.

## What's Up, Doc?

For the time being, I'm going to only focus on the code, and leave the documentation for later. I need to know that the basis is at least working right before I start to rewrite the website as well. I have at least fixed the CI, and added the lexer and the lexer test.

I'm going to take my time for now and work on this for fun - which seems to be the best way to see something to completion, at least for me. Feedback and contributions are welcome!

[![toylang preview](/assets/toylang-preview.png)](https://github.com/Ratstail91/Toy)

