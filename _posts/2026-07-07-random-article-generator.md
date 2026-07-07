---
layout: post
tags: coding gamedev enginedev toy
title: "Random Article Generator"
---

It's been a few weeks since my last post here, so lets discuss something related to Toy - not the langauge itself, but rather how I'm using it in practice. Because yes, I am actually using it.

<!--more-->

I've added a simple function to Toy's standard library, simply called `rand()`, which is implemented in C like this:

```c
static void std_rand(Toy_VM* vm, Toy_FunctionNative* self) {
	//quick and dirty RNG seed
	if (self->meta1 == 0) {
		self->meta1 = 21795;
	}

	self->meta1 = self->meta1 * 1664525 + 1013904223;

	Toy_pushStack(&vm->stack, TOY_VALUE_FROM_INTEGER(self->meta1));
}
```

I'll almost certainly add another function like `srand()` to set the seed manually, but for now this is fine. If you're familiar with random number generators (because who isn't?), you'll recognize those magic numbers as part of a "Linear Congruential Generator" which, to put into simple terms, means I googled for the simplest RNG algorithm available for the time being[^1].

[^1]: I might've found it on wikipedia? I honestly can't remember.

Having something available is the important part, which lets me do this:

```toy
fn rng() {
	return abs(rand()) % 4 + 4;
}
```

Which can in turn be used to select a random floor tile for this test room:

<div style="text-align: center">
	<img src="/assets/2026-07-07/room1.png" style="max-height: 300px">
	<p><em>That floor ain't right.</em></p>
</div>

Clearly, something's wrong here. I have four floor tiles to choose from (at indexes 4, 5, 6 and 7, which is why there's a `+ 4` in the above code), but somehow the algoritm I chose for `rand()` creates an oddly regular pattern when used like this (it can also return a negative value from the signed integer `meta1`, which is fixed with `abs()` - forgot to mention that).

I'm pretty sure this has something to do with multiples of four vs primes vs god knows what, but rather than spending a week relearning the intricacies of the Mersenne Twister, I decided to tweak the code to this:

```toy
fn rng() {
	return abs(rand()) % 3 + 4;
}
```

<div style="text-align: center">
	<img src="/assets/2026-07-07/room2.png" style="max-height: 300px">
	<p><em>Something is missing.</em></p>
</div>

This gives a passable result, but also cuts out one of the tiles, resulting in a slightly dull appearance.

Then, I got an idea: I know that I need to use a number other than some power of two, so why not five? This would mean a non-floor tile would normally be drawn, giving a glitched appearance, but what if I swapped those tiles for tile 0?

Behold, the reason I wrote this article:

```toy
fn rng() {
	return abs(rand()) % 5 % 4 + 4;
}
```

<div style="text-align: center">
	<img src="/assets/2026-07-07/room3.png" style="max-height: 300px">
	<p><em>OK, that looks cool.</em></p>
</div>

This also gives the nice side-effect of making the "blank" tile twice as common as the others, thus breaking up the floor's overall texture. I can do a lot more with this pattern, but I'll leave it here for now.

What do you think?

*When I'm not running out of random jokes for this section, I can usually be found on [Bluesky](https://bsky.app/profile/krgamestudios.bsky.social) or [Discord](https://discord.gg/5KwPFdTBZp). If you'd like to show your support, I also have a [Patreon](https://www.patreon.com/c/krgamestudios), and I'd love a Coffee via [Ko-fi](https://ko-fi.com/krgamestudios).*
