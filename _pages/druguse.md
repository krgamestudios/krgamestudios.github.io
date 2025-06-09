---
layout: page
title: "Hey kids, want some drugs?"
---

<script>
    let tally = 0;
	window.doDrugs = () => {
	    document.getElementById("display").innerHTML = ++tally;

		switch(tally) {
			case 69: document.getElementById("extra").innerHTML = "Nice!"; break;
			case 420: document.getElementById("extra").innerHTML = "Blaze it!"; break;
		}
	}
</script>

<p>You have done <span id="display">0</span> drugs! <span id="extra"></span></p>

<button onclick="doDrugs()">Do Drugs</button>

## About Drug Use

This game is a protest against the draconian media laws for video game classification, depicting sexual violence or drug-related content within Australia.

No other artform or entertainment medium is subject to these restrictions - video games are unjustly singled out and treated as lesser, as if those who engage with games aren't equipped to deal with these mature themes on their own, or to monitor their children's gaming habits as responsible parents.

[Well fuck you.](https://www.refused-classification.com/censorship-timelines/game/)

This game deliberately breaks that law. I know this protest won't make any difference, but it's my way of standing for what I believe to be right.

Games are art - treat them as lesser at your own peril.

