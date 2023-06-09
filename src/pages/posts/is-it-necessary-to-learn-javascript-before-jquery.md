---
layout: "../../layouts/blog-post.astro"
title: Is It Necessary To Learn JavaScript In Order to Learn jQuery?
slug: is-it-necessary-to-learn-javascript-before-jquery
description: 
date: Mon, 09 Nov 2020 23:45:07 +0000
author: Anas Ouardini
draft: false
category: javascript js-questions
---


*A lot of beginners these days tend to start learning jQuery and forget that Javascript is the core language. If you’re new to web development and planning to learn<a href="https://jquery.com/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link"> jQuery </a>before learning JavaScript for whatever reason, I'll explain in this article the reasons why you'd go for jQuery instead of javascript and whether or not it's good for your career or not.*

**The short answer: there is no necessity to learn javascript in order to learn how to use jQuery, and you can build some cool projects without even writing a single vanilla javascript line**. **but when you get to the advanced stuff in jQuery you’ll need that solid understanding of Javascript fundamentals if you don't want to face a really hard time fixing errors and asking a lot of stupid questions on quora and StackOverflow.**

but are you willing to sacrifice some good javascript knowledge that can help you down the road when facing a problem in your project or are you ok with copying others code when facing a complicated concept that you can't understand without knowing Javascript.

it depends on your goals and what you're willing to achieve from learning web development and that's what I'm going to get into by writing this article.

## what if I learn javascript through jQuery

many times I came across some articles on the internet that state that jQuery makes JavaScript very easy to learn, which is a very big misconception and I think that's why beginners look at jQuery like the miracle they were looking for.

If you are just starting to learn JavaScript, and you think that the best road is to go straightway to jQuery, just keep in mind the following things that I'm going to talk about, and reconsider your decision.

#### jQuery is also JavaScript

yes, it is built using Javascript but don't let that fool you into thinking that is going to cover Javascript basics for you as we're going to talk about it below.

this should be pretty obvious but jQuery consists entirely of a set of utility functions, they form together what is called a library. and those functions are written only using Javascript. so everything you can do with jQuery is totally possible with vanilla Javascript. but keep in mind that sometimes writing the functions yourself is more powerful and flexible and it could be more fun and educational.

and for beginners, if you can write utility functions for yourself it would be a good way to have an idea of how those libraries work not to mention that it a really good exercise for you.

#### jQuery does not cover JavaScript entirely

you can divide Javascript into two parts. the first part is the core language itself and this part doesn't bound to your browser, and the second part that helps Javascript interact with your HTML elements which is the SOM API, and this part is implemented by the browser. if you found this information confusing just forget about it but remember that jQuery can teach you some Javascript concepts but not all.

you might come across the fancy word “Vanilla JavaScript” which is what developers call the core languages and DOM API combined together (the first and second part of Javascript)  which is a way to distinguish between the languages itself and libraries such as jQuery or whatever other libraries.

if you don't know what DOM means yet it's what adds dynamic content and interaction to your webpage and it contains the HTML elements. for example, we have an element like this:

<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers"><button id="Btn">Click Here</button></code></pre>

the DOM can help us here so that you can write a function to manipulate the button element and change its properties so that it can do something when you click on it.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">function welcome () {

    alert('you clicked me!');

} // javascript core

document.getElementById('Btn').addEventListener('click', welcome); // javascript DOM functions now, for DOM manipulation</code></pre>

now the difference between Javascript and jQuery is that the library is only built for manipulating the DOM, (keep that in mind). and that is for a reason which is to let experienced developers write code without worrying about cross-browser compatibility issues. a lot of changes happened to jQuery lately but it's definitely still doesn't cover vanilla JS entirely.

so in order to use jQuery properly, you still have to learn at least the basics of Javascript or it'll be a very hard time for you at least from a web development perspective.

#### jQuery hides all the errors!

it's right, jQuery does not throw errors. you can pretty much say that it fails silently. it shows nothing in the console if an error occurs which is not a good thing for beginners. when I just started learning Javascript I was making tons of mistakes and even the simplest error can get you frustrated but if you at least know what the error is you can figure it out or at least you what to look for in google so you can find the solution. but with jQuery, you have no hint at all. 

on the other hand, Javascript throws a descriptive error so that you can debug your code using the browser console, and sometimes you'll find a link to the exact line that causes the error to show up.

<figure class="wp-block-image size-large"><img src="/wp-content/uploads/2020/11/is-it-necessary-to-learn-javascript-before-jquery-1.webp" alt="is-it-necessary-to-learn-javascript-before-jquery"/></figure>

## you can do everything with only javascript

another thing you need to know about jQuery is that it will come and go because this is what libraries and frameworks do, but the core language never goes, or at least it will last a long time before that.

if you're a developer keep in mind that Javascript is huge. just think about how long the browser has been used for, all this time people interacting with Javascript, HTML, and CSS.

On one side you have, learning some stock Javascript phrase to do some general things which useful, (don't get me wrong), but whenever you need to go outside the box and do something creative you'll be stuck in that's what jQuery provides you with since it's just a library of phrases. you have on the other side learning how to program a web browser to do whatever you want it to so it's more flexible and I don't need to tell you that it's learning Javascript.

you should know by now the reasons why it could be learning Javascript is the best for you but, let's say that you want to process data from a server before you display it, jQuery is only for neutralizing the differences between browsers, manipulating the DOM and pulling data from a server.

other things that Javascript do that jQuery can't are displaying some graphics on the browser's canvas object, playing a video, and displaying a text next to the video after two minutes and 5 seconds from the start, creating creative calendars other than the stock ones in jQuery, you'll need to create your own with Javascript, and more and more.

**also if you searched for almost 99% of what people use jQuery for you'll find that you can pretty much do that with the only Javascript.**

**and if you're looking to get into a company as a web developer the first things that you'll be interviewed about are the core languages HTML, CSS, and Javascript. they could also ask you about jQuery but if you don't include Javascript is your resume I bet you'll never land that job.**

## can I skip javascript forever

I personally know people who know just HTML, CSS, Bootstrap, and jQuery and they are doing a great job at their **small business**, and their small businesses are working with clients on Fiverr and purchasing templates and editing some small things on them then selling them to a company as if that website was build only for them. **so YES this could work in some cases.**

but as I mentioned earlier, libraries come and go, so if you're fine with learning other libraries when things change which is fine as they don't change too quickly.

## js is not too difficult

you might get discouraged from learning Javascript at the syntax for the first time especially when you know about the cross-browser compatibility issues which what jQuery came to fixed, but as more and more sites are dropping support for those old browsers like IE6/7, javascript syntax is more cleaner and really easy to learn, as you can see in this example: 

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">// this code checks if elm is has class "myClass" or not.

// jquery code

$(elm).hasClass('Class');

// vanilla js version for the above, works in IE10+

elm.classList.contains('Class');</code></pre>

so you'll that the difference is not huge as you might think, it can take pretty much the same time to write both of the lines. of course, there are some cases that it'll be more lines of Javascript for one line of jQuery, I'm not trying to convince you to go for Javascript, but the difference still not huge, and the browser support is fairly good unless you want to support Opera Mini or IE 6-9.

and also since you're just getting started, you're not going to write hundreds of lines so that lines differences between both codes can be a little bit big. and the browser compatibility is not a huge factor for you and probably you don't need to support those old browsers since there are some pretty big sites that don't care about them anyway, this is a big topic but generally, if the user's phone or pc is using a browser from 2007 or even 2011 he is probably don't need to visit your website at all.

Note: if you're worried or interested in cross-browser compatibility issues you can take a look at <a href="https://caniuse.com/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">CanIUse</a> which is a site that provides detailed tables that shows use the support for each property of any language across all browsers. They also provide links to polyfills, which can shim a feature (set) for you in older browsers.

## jquery is not too easy

you might have the idea of jQuery code is more readable but it's not always true, sometimes it's the opposite. in certain cases, you'll find that jQuery code can be rather unreadable while vanilla Javascript code is more coherent. and here is an example that shows just that. it's not a rare case but it's used very often when you need to get the *outherHTML* of some element in the DOM.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">// jQuery

$('div').append($(el).clone()).html();

// Vanilla JS

el.outerHTML;</code></pre>

you might not believe but that's the equivalent Javascript code which way shorter go ahead and google it if you want. it's more readable and faster I think you already have it stuck in your brain.

and here is another example, let's say you want to check if two elements of the DOM are the same, and here are the two lines of code, which one would you pick?

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">//jQuery

$(elm).is($(someElem));

//Vanilla Javascriupt

elm===someElem;</code></pre>

and both the lines do the same job which is returning a boolean (*true or false*) depending on whether the data in *elm* and *someElem* are the same, to see if they refer to the same DOM element or not. you can see that Javascript code is smaller and easier to remember.

## takeaway

there is nothing forcing you to use only vanilla Javascript code unless you're working with a company that requires that. I still sat that jQuery could be an intro to Javascript but it's never going to be more than that. this doesn't only true for Javascript but for any other language out there. so if you're planning to be good at Javascript just through jQuery just forget about it.

furthermore, the old browsers are starting to decline more and more so the need for solving compatibility issues is also getting less and less. and as we said earlier jQuery is good at resolving these issues. so the need for jQuery will also decline.

when it comes to front-end web development, Javascript frameworks such as Angular, React, Vue, and other modern frameworks are taking place, and there are big communities that support each of them like Angular is being supported by Google and React is a project by Facebook which also open-source. and nobody can deny the popularity that they have gained over time.

you can go ahead and start using jQuery after you are well-versed with Javascript and some advanced concepts such as type system, Prototypal Inheritance, closures, Event Model, scope in Javascript. and you want to make a project to push into production. Because after learning those concepts you would be able to properly use jQuery. a good vanilla Javascript knowledge is required in order to be a good developer.

I really hope that by now you'd have found your answer and you know what's the best thing to do because nobody really can tell you what's the best for you but reading some articles can help you with providing you with lots of information to help you figure that out. Good luck!


