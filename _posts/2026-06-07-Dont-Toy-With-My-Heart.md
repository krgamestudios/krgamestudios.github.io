---
layout: post
tags: gamedev langdev coding toy
title: "Don't Toy With My Heart"
---

I've talked about Toy a lot on here, but I don't think I've talked about any of the interesting elements that I think make the language interesting. Since I've been neglecting this blog for a while, and I'm not interested in doing a deep-dive into every facete of the codebase, so lets have a close look at one aspect that surprised me: How to implement opaques.

<!--more-->

First, I should mention that I have a new [documentation website up and running](https://toylang.com/), though I'll work on expanding it over time as the need arises. Secondly, I've moved the official git repo away from GitHub, with that link acting as a nightly mirror of my [self-hosted gitea](https://gitea.krgamestudios.com/krgamestudios/Toy).

Lastly, since Toy is now in open beta, I've started working on [ToyBox](https://gitea.krgamestudios.com/krgamestudios/ToyBox), which is a kind of example/engine built around Toy. What I'd like to talk about is how I've implemented this engine's API, wrapping the simple and clean functions provided by [raylib](https://www.raylib.com/).

## Opaque Vision

When designing the types for Toy, I added one specific type called `Opaque` as a user-defined pointer/reference, that Toy doesn't know anything about, to be passed between user-defined functions. When I added attributes (parts of or functions on variables, e.g. `string.length`) I realized that it'd be super easy to add user-defined attributes to the Opaque type as well, using a callback.

When I was implementing the keyboard and mouse API, I realized I could have the keyboard and mouse as opaques injected into the root scope, and they'd be available anywhere and offer the various attributes and functions as needed, all I had to do was to add an internal flag saying which type was being pointed to by the `Toy_Value`.

I think it's fair to say I didn't plan this - it's more like these different parts clicked together on their own, giving me something to be super happy about.

I'm actually really happy how Toy is evolving right now, and it's a strange feeling.

## Implementation Details

To explain how the opaques work, lets start from the top: `opaque_type.h` defines the `OpaqueType` enum, which all structures in this system must have as their first member. Since `Toy_Value` only holds a pointer to arbitrary memory, casting that pointer to `(*OpaqueType)` can be used to determine how to process it.

```c
//opaque_type.h
#pragma once

//always first member of any opaques
typedef enum OpaqueType {
	OPAQUE_KEYBOARD,
	OPAQUE_KEY_PRESSED,
	OPAQUE_KEY_RELEASED,
	OPAQUE_MOUSE,
	OPAQUE_MOUSE_PRESSED,
	OPAQUE_MOUSE_RELEASED,
} OpaqueType;
```

Raylib provides three functions that are useful to me: `IsKeyDown`, `IsKeyPressed` and `IsKeyReleased`. There are others, But I chose these three (and the matching functions for the mouse buttons) for simplicity, and because they all have the same function signature - more on that in a moment.

```c
//keyboard.h
#pragma once

#include "opaque_type.h"
#include "toy_vm.h"
#include "raylib.h"

//fn pointers
typedef bool (*raykey_callback)(int);

//keyboard opaque
typedef struct KeyboardData {
	OpaqueType type;
	raykey_callback callback;
} KeyboardData;

extern KeyboardData keyboardData;
extern KeyboardData keyPressedData;
extern KeyboardData keyReleasedData;

Toy_Value handleKeyboardAttributes(Toy_VM* vm, Toy_Value compound, Toy_Value attribute);
```

Here we see `KeyboardData`, which begins with `OpaqueType`, and has a function pointer which is set in `keyboard.c`:

```c
KeyboardData keyboardData = {
	.type = OPAQUE_KEYBOARD,
	.callback = &IsKeyDown,
};

KeyboardData keyPressedData = {
	.type = OPAQUE_KEY_PRESSED,
	.callback = &IsKeyPressed,
};

KeyboardData keyReleasedData = {
	.type = OPAQUE_KEY_RELEASED,
	.callback = &IsKeyReleased,
};
```

By having three opaque objects, the user can pick and choose which they need and when, and `handleKeyboardAttributes` can use objects's internal function pointer:

```c
Toy_Value handleKeyboardAttributes(Toy_VM* vm, Toy_Value compound, Toy_Value attribute) {
	KeyboardData* kd = (KeyboardData*)TOY_VALUE_AS_OPAQUE(compound);

	//'attribute' is a string representing what attribute was requested
	Toy_String* string = TOY_VALUE_AS_STRING(attribute);
	const char* cstr = string->leaf.data;

	//find the mapped enum using KeyboardMap (see below)
	for (KeyboardMap* ptr = keyboardMap; ptr->cstr != NULL; ptr++) {
		if (strlen(ptr->cstr) == strlen(cstr) && strncmp(cstr, ptr->cstr, strlen(ptr->cstr)) == 0) {
			//here is where the pointer is invoked with the key's enum
			bool result = kd->callback(ptr->raykey);
			return TOY_VALUE_FROM_BOOLEAN(result);
		}
	}
}
```

For completeness, here's a snippet of `KeyboardMap` (forgive the order of these snippets):

```c
//maps raylib's 'KeyboardKey' enum to a c-string
typedef struct KeyboardMap {
	int raykey;
	char* cstr;
} KeyboardMap;

KeyboardMap keyboardMap[] = {
	{KEY_A, "A"},
	{KEY_B, "B"},
	{KEY_C, "C"},
	//etc.
	{0, NULL},
};
```

Since `Toy_setOpaqueAttributeHandler` can only take one argument, we wrap all the opaque callbacks into one function and pass that in:

```c
Toy_Value dispatchOpaqueAttributes(Toy_VM* vm, Toy_Value compound, Toy_Value attribute) {
	//check the given values have the correct types
	if (!TOY_VALUE_IS_OPAQUE(compound) || !TOY_VALUE_IS_STRING(attribute)) {
		//handle errors here
		exit(-1);
	}

	//get thee to a punnery
	OpaqueType* type = (OpaqueType*)TOY_VALUE_AS_OPAQUE(compound);

	switch(*type) {
		case OPAQUE_KEYBOARD:
		case OPAQUE_KEY_PRESSED:
		case OPAQUE_KEY_RELEASED:
			return handleKeyboardAttributes(vm, compound, attribute);

		case OPAQUE_MOUSE:
		case OPAQUE_MOUSE_PRESSED:
		case OPAQUE_MOUSE_RELEASED:
			return handleMouseAttributes(vm, compound, attribute);

		default:
			//handle more errors here
			exit(-2);
	}
}
```

Finally, we set the opaque's callback and inject each opaque into the VM's scope - this is best done at the beginning of the program, after the VM has been bound to bytecode but before it's been executed for the first time.

```c
//quick and dirty macro to avoid typos
#define DECLARE_OPAQUE(NAME, DATAPTR, SCOPE, BUCKETHANDLE) { \
	Toy_String* name = Toy_toString(BUCKETHANDLE, NAME); \
	Toy_declareScope(SCOPE, name, TOY_VALUE_OPAQUE, TOY_OPAQUE_FROM_POINTER(DATAPTR), true); \
	Toy_freeString(name); \
}

void initEngineAPI(Toy_VM* vm) {
	Toy_setOpaqueAttributeHandler(dispatchOpaqueAttributes);

	DECLARE_OPAQUE("Keyboard", &keyboardData, vm->scope, &vm->memoryBucket);
	DECLARE_OPAQUE("KeyPressed", &keyPressedData, vm->scope, &vm->memoryBucket);
	DECLARE_OPAQUE("KeyReleased", &keyReleasedData, vm->scope, &vm->memoryBucket);

	DECLARE_OPAQUE("Mouse", &mouseData, vm->scope, &vm->memoryBucket);
	DECLARE_OPAQUE("MousePressed", &mousePressedData, vm->scope, &vm->memoryBucket);
	DECLARE_OPAQUE("MouseReleased", &mouseReleasedData, vm->scope, &vm->memoryBucket);
}
```

The final result of this code is to enable Keyboard and Mouse input handling within Toy, accessible like so:

```toy
//handle keyboard input using the keyboard
if (KeyPressed.UP) playerMotionY -= 5;
if (KeyPressed.DOWN) playerMotionY += 5;
if (KeyPressed.LEFT) playerMotionX -= 5;
if (KeyPressed.RIGHT) playerMotionX += 5;

if (KeyReleased.UP) playerMotionY = min(playerMotionY + 5, 0);
if (KeyReleased.DOWN) playerMotionY = max(playerMotionY - 5, 0);
if (KeyReleased.LEFT) playerMotionX = min(playerMotionX + 5, 0);
if (KeyReleased.RIGHT) playerMotionX = max(playerMotionX - 5, 0);
```

These APIs, such as keyboard and mouse, will always be written in UpperCamelCase, to help distinguish them from other variables.

## Acting The Part

These snippets have been greatly cut down, with most checks removed and even some other WIP opaques removed entirely, but they all follow a similar pattern. One thing I would like to mention though, is there's more you can do with attributes, such as providing something similar to methods.

```c
static void attr_actorSetX(Toy_VM* vm, Toy_FunctionNative* self) {
	Toy_Value compound = Toy_popStack(&vm->stack);
	Toy_Value x = Toy_popStack(&vm->stack);

	if (!TOY_VALUE_IS_INTEGER(x)) {
		//whoops, bad arg
	}

	//set the actor's x position, 'attr_actorSetY' does the same for y position
	ActorData* actor = (ActorData*)TOY_VALUE_AS_OPAQUE(compound);
	actor->position.x = TOY_VALUE_AS_INTEGER(x);
}
```

```c
Toy_Value handleActorAttributes(Toy_VM* vm, Toy_Value compound, Toy_Value attribute) {
	ActorData* actor = (ActorData*)TOY_VALUE_AS_OPAQUE(compound);

	//for 'x' and 'y', just return the value
	if (TOY_VALUE_AS_STRING(attribute)->info.length == 1 && strncmp(TOY_VALUE_AS_STRING(attribute)->leaf.data, "x", 1)  == 0) {
		return TOY_VALUE_FROM_INTEGER(actor->position.x);
	}
	if (TOY_VALUE_AS_STRING(attribute)->info.length == 1 && strncmp(TOY_VALUE_AS_STRING(attribute)->leaf.data, "y", 1)  == 0) {
		return TOY_VALUE_FROM_INTEGER(actor->position.y);
	}

	//for 'setX' and 'setY', the returned value needs to be a function pointer, which is called while on the stack
	if (TOY_VALUE_AS_STRING(attribute)->info.length == 4 && strncmp(TOY_VALUE_AS_STRING(attribute)->leaf.data, "setX", 4)  == 0) {
		Toy_Function* fn = Toy_createFunctionFromCallback(&vm->memoryBucket, attr_actorSetX);
		return TOY_VALUE_FROM_FUNCTION(fn);
	}
	if (TOY_VALUE_AS_STRING(attribute)->info.length == 4 && strncmp(TOY_VALUE_AS_STRING(attribute)->leaf.data, "setY", 4)  == 0) {
		Toy_Function* fn = Toy_createFunctionFromCallback(&vm->memoryBucket, attr_actorSetY);
		return TOY_VALUE_FROM_FUNCTION(fn);
	}
}
```

Here you can see the two ways of accessing attributes, either accessing the raw value, or accessing a function to change that value. In practice, it looks like this:

```toy
//quick and dirty RNG
var randi: Int = 69420;
fn rand() {
	return randi = randi * 1664525 + 1013904223;
}

//wander around chaotically
fn wander(actor: Opaque) {
	actor.setX(actor.x + rand() % 5);
	actor.setY(actor.y + rand() % 5);
}

//spawn an actor at (250,250) which calls "wander" each frame
SpawnActorAt("zombie", wander, 250, 250);
```

## Professional Box-Head

I'm not super adept at promoting myself or my work, despite my best efforts, but I hope this article interested you enough to want to have a look at Toy in action, and maybe have a play with it yourself?

I've managed to work until after midnight, so I'll leave you with these links - thanks for reading!

Toylang website: [https://toylang.com/](https://toylang.com/)  
Toy source repo: [https://gitea.krgamestudios.com/krgamestudios/Toy](https://gitea.krgamestudios.com/krgamestudios/Toy) ([GitHub Mirror](https://github.com/krgamestudios/Toy))  
ToyBox engine: [https://gitea.krgamestudios.com/krgamestudios/ToyBox](https://gitea.krgamestudios.com/krgamestudios/ToyBox)  

*When I'm not being chased by zombies, I can usually be found on [Bluesky](https://bsky.app/profile/krgamestudios.bsky.social) or [Discord](https://discord.gg/5KwPFdTBZp). If you'd like to show your support, I also have a [Patreon](https://www.patreon.com/c/krgamestudios), and I'd love a Coffee via [Ko-fi](https://ko-fi.com/krgamestudios).*
