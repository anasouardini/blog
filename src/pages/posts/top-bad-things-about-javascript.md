---
layout: "../../layouts/blog-post.astro"
title: Top 10 Bad Things You Should Know About Javascript
slug: top-bad-things-about-javascript
description: 
date: Thu, 25 Feb 2021 20:46:19 +0000
author: Anas Ouardini
draft: false
category: javascript js-questions
---


JS is one of the most popular programming languages on the web. however, it sometimes becomes a nightmare to work with. In this article, I am going to analyze the 10 bad things about java that the developers got all wrong.

**The 10 bad things about java include the lack of an integer type, loose typing, automatic insertion of semicolons, over-dependence on global variables, a code that can fail without warning, use of object prototypes, disadvantageous in asynchronous programming, and more. **

some of these things are really mean, while some of them are just a feature that this language is known of.

when we say that something is bad about a language it doesn't mean that you'll not be able to code with all those bad things in presence, but it just means that you'll be more productive and faster if they were not there.

another thing to keep in mind is that with all these <a href="/posts/is-javascript-a-bad-language/" class="rank-math-link">bad things in JavaScript</a>, it doesn't make it the worst language but it just makes it less than it could be without them, or less attractive if you would.  

Now let us go through them in more details:

## The 10 bad things about JS

### The lack of an integer type

The integer type is a crucial part of most programming languages, JS lacks the integer types and depends on floating–point as its numerical type, think this was a wrong move by the developers as it may be a problem when you are dealing with 64-bit integers.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers"><code>console.log(0.253 + 1); //1.2530000000000001</code>

<code>console.log(0.2 * 0.1); //0.020000000000000004</code>

x = 1.0000000000000001;

if ( x === 1 ) { console.log( "true" ) } // true

console.log( typeof NaN ) // number //  wait ... what???

// here is the weirdest one

NaN != NaN // true

NaN !== NaN // true</code></pre>

**if you don't know what this means you can read <a aria-label="this article (opens in a new tab)" href="/posts/why-javascript-is-bad-at-math/" target="_blank" rel="noreferrer noopener" class="rank-math-link">this article</a> that i wrote about this topic in-depth, I called it why JS is bad at math?**

I also talked about the lack of integer type in JS in an article called why this language is considered a <a aria-label="weird language (opens in a new tab)" href="/posts/why-javascript-is-weird/" target="_blank" rel="noreferrer noopener" class="rank-math-link">weird language</a>.

### Loose typing and aggressive coercion

Loose typing means that you don't have to specify the type of information that is to be stored in a variable, this is because JS automatically types it for you depending on the information you assign. I think this is an insane semantic and it is very dangerous to deal with.

here is an example of loose typing:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">var text = ' i am a text ';

let num = 911;</code></pre>

as you see we didn't specify the type of the data stored in those variables.

now, here is an example of strong tying:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">string text = ' i am a text ';

int number = 123;</code></pre>

instead of letting JavaScript decide what type of data this is we specify it ourselves.

more explanation about loose typing.

besides loose typing it is also <a href="/posts/why-javascript-is-considered-as-a-dynamic-language/" target="_blank" aria-label="dynamically typed (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">dynamically typed</a> which means the variable can change its type if you reassign another data type to it.

### Inserting a semicolon automatically

JS inserts a semicolon automatically when you are writing a code; I believe that this was a very bad idea from the ECMA. The reason I say this is because on most occasions the semicolons cause subtle bugs or errors.

while reading somebody's code you might find it written like this:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">console.log( " display this " )

console.log( " display this " )</code></pre>

as you see there is no semicolon at the end of each instruction, which doesn't give you any errors because the language takes care of it. but this doesn't mean that this is a good thing because it can cause errors in the long run when using a complicated syntax as js doesn't know where exactly to put a semicolon.

### JS is seriously abused

I am sure that the developers of JS were very mean because I realized that the language is being abused in various ways; for example, look at the way the codes found in common libraries are written. We pay dearly for this type of mistake as we end up using a language that has poor performance. 

Using module patterns to create private scopes that have localized states is a bad idea, why did they even decide to wrap functions in functions. It is sometimes impossible to understand some of the approaches that they used.

The nature of JS has made it possible to create codes that are very difficult to understand, the very same codes that are easy when other languages are used.

### Over-dependence on Global Variables

Why did they have to develop a language and make it over-depend on global variables? I have no idea; all I know is that global variables always tend to complicate programs. They also have some horrible scoping rules that will disappoint you.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">function doSomething(){

    day = "saturday";

}

doSomething();

// you can use the variable day here

console.log( day );</code></pre>

### A code can fail without a warning

I have experienced this a couple of times, you are busy writing a code, then suddenly it fails without even a warning, the sad part is, some of the reasons can just be minor syntax errors. It is quite difficult to track and fix these issues.

### Object prototypes and large applications

For advanced programmers, using JS in object-oriented programming is a rather primitive way to go by it, even though you can find it to be very flexible. There are different ways that a programmer can use when it comes to handling inheritance.

The different ways make it complicated when it comes to deciding which way to go. JS uses object prototypes, and funny enough it is the only famous language that does so.  Most programmers are not fully knowledgeable when it comes to using object prototypes, this always leads to the language being abused, and codes are written poorly.

### Asynchronous Programming

<a aria-label=" (opens in a new tab)" href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Concepts" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">Asynchronous programming</a> allows a programmer to run multiple tasks or functions at the same time in parallel; however, it is very messy when a person is using JS.

BTW check out this article where you can know about asynchronous programming and whether JavaScript is <a href="/posts/is-javascript-synchronous-or-asynchronous/" class="rank-math-link">Synchronous or Asynchronous</a> and why is that.

### JS is nothing like Lisp

If you want a good language try Lisp, a lot of people have compared JS to Lisp, there are however different characteristics that just suggest otherwise. For example, java does not have macros and it is also not <a class="rank-math-link" href="https://dev.to/awwsmm/concept-of-the-day-homoiconicity-4did">homoiconic</a>. 

### Framework

A lot of people avoided using JS, I think it is because it was only limited to JQuery and webpage enhancements. We all knew that JS was a terrible language until when they introduced its frameworks.

In the next section, we are going to see if it is possible to fix some of the 10 things that are bad about JS

## how to fix or avoid some of these bad things

### The lack of an integer type

Try using <a href="https://www.typescriptlang.org/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">TypeScript</a> and <a href="https://flow.org/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">FlowType</a>. Adding type to JS makes it easy and simple to use as it sorts outs the issue that is brought by the lack of integer type. You can also use other libraries like decimal.js

### Loose typing and aggressive coercion

I would advise you should do all the conversion by yourself, for example, use the parseInt when converting a string to a number or use the parseFloat when converting a string to a Float.

### Over-dependence on Global Variables

The only way of fixing this is to avoid using the global variables; there are various ways that a person can write programs without using the global variables, for example using closures, IIFE, or <a href="https://medium.com/@dpark/use-strict-in-javascript-3b872b969b0f" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">using strict</a>. 

### A code can fail without a warning

When using JS, you have to be very careful and avoid creating minor syntax errors, this is the only way that you can make sure that your code does not fail silently.

### Frameworks

Using JS as I mentioned earlier was limited to JQuery and webpage enhancement, however, the developers introduced frameworks like Angular.JS and Node.JS. These frameworks have improved the capabilities of JS.

There are no known ways that can be used to fix the rest of the issues; however, there are promises that in the near future solutions will be developed.

## Are there good things about JS?

JS is a well-established programming language, there are few things that I can say the developers achieved when developing it, for example, it is one of the easiest languages to learn, it is found almost everywhere, and its framework Node.JS is very popular.

## Wrap up

There are a lot of things that are bad with JS, I managed to select the top 10 things that I believe are wrong with JS, and I believe it is up to the developers to fix most of these things because let’s face it, nobody wants to use a programming language that makes their life hard.


