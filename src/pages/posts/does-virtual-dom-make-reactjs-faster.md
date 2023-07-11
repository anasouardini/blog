---
layout: "../../layouts/blog-post.astro"
title: Does Virtual DOM make Reactjs faster?
seo_title: Does Virtual DOM make Reactjs faster?
slug: does-virtual-dom-make-reactjs-faster
description: 
date: Sun July 04 2023
author: Anas Ouardini
category: javascript React
image: {
    url: "/media/thumbnails/does-virtual-dom-make-reactjs-faster.png",
    alt: Does Virtual DOM make Reactjs faster?,
}
---

So I keep hearing; on Youtube, LinkedIn, forums, etc; that Virtual DOM makes Reactjs *"faster"*. So that indicates that React is fast and what makes it even faster is the Virtual DOM. So how does it do that?

TLDR; **it doesn't, React is no way near fast to begin with, and NO, Virtual DOM doesn't help making Reactjs go any faster at all.**

If you've heard the same thing as I did on the internet, you're probably wondering why would someone say that React is not fast. Yeah, well, when you repeatedly hear something for so long, your brain starts to think it's the ultimate truth.

No, I don't hate React, I love all technologies. Now let me explain why I'm saying what I'm saying.

## Why Reactjs is not fast

First of all, Reactjs was not made for speed, it's a library that was invented to solve a problem **at Facebook**, and the way it does that is by dividing huge and complex apps into smaller chunks, which they call *components*.

People started adopting it since it was the first of its kind back then, which helped addressing some of the common pain points among front-end developers: "jQuery" — kidding, it was a good invention.

You might say: "So this library does a good job of what it's made for, but it also does a relatively bad job at what it wasn't made for!", pff, obviously. *This is the best part about blogging: I get to put words in your mouth, and you can't do anything about it.*

But isn't Reactjs just JavaScript? **Yes**, now you might be thinking: what does Reactjs do *extra* that slows it down at what it's doing?

If you already know that, you might find this tweet intertaining.

![A tweet where Tanner Linsley calling Reactjs "Re-render"](/media/react-should-have-been-called-re-render.png)

Yes, it re-renders too much, it doesn't do that on itself, but it inherently encourages it.

Also, go ahead and try to compare Reactjs to something like Solidjs and Svelt, I won't talk about it in this article, but you'll find that React is not really meant for speed.

So now that It's clear as to why I'm calling Reactjs slow, let me tell you why VDOM does not make it any faster.

## Why Virtual DOM does not make React faster

Well, same as before, the VDOM wasn't meant for that: it was invented to solve a React's problem, which is what I briefly mentioned above.

**A**: When you overuse the `useState` hook as an amateur, or if your app gets really huge and you start to *just* want it to work which leads you to start Re-rendering all of your components all over the place, or even worse, you misuse the `useContext` API which Re-renders the entirety of your app whenever you update a font color... your app will eventually start getting slower and slower, *unless you're a React wizard*.

So that's kind of a React's problem, so how do we solve it? we throw a huge thing called **VDOM** on it, and... problem solved. Or is it?

**B**: Think of it this way, VDOM is the middleman between DOM and JSX, what you often hear in engineering is "You remove the middleman to go faster", same applies here, but in reverse, you add the VDOM to go slower. But why did they make it slower? so VDOM is useless?

## is Virtual DOM useless

I'm not a fan of "well actually... it depends", so... from A and B: it was a sacrifice of speed for the sake of speed, it's like getting highest and lowest to become closer together. Let me explain: React developers like to Re-render a lot, which makes their app really slow, without the VDOM it's even slower. And that is the reason why VDOM is not useless.

VDOM takes all Re-rendering instructions and sift down only the non-repeating ones, keeping away the useless DOM changes that React causes when not used rationally and precisely, so you call it a protection mechanism for "Re-rendering lover".

And yes, you are right, theoretically we can write apps that do not Re-render a lot, and then, VDOM would be a [pure overhead](https://svelte.dev/blog/virtual-dom-is-pure-overhead).

## Takeaway

What I want you to take away from this, is that React's Virtual DOM is not meant to make React faster, but it only protects against a problem that naturally occurs during the process of developing a React app due to how React was designed from the get-go.

So VDOM is fast? **NO**; VDOM is bad? **NO**. But in my opinion, there must be a sweet spot between having a VDOM and not having one, that the devs are missing, that would make React shiny again.