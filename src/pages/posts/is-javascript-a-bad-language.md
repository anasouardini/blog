---
layout: "../../layouts/blog-post.astro"
title: Is JavaScript a Bad Language?
slug: is-javascript-a-bad-language
description: 
date: Thu, 04 Mar 2021 15:59:23 +0000
author: Anas Ouardini
draft: false
category: javascript js-questions
---


## Is JavaScript a Bad Language?

There is nothing inherently bad about JavaScript as a programming language. Much of the negative perception of JavaScript stems from the fact that it is a go-to language for beginners, and beginners will often write a lot of bad code as they learn and improve.

**Ultimately, JavaScript is an important language owed to the fact that it is the language of web browsers. <a href="/posts/is-learning-html-css-and-javascript-enough-to-get-a-job/" class="rank-math-link">HTML and CSS</a> are all that is required to create web content and style it, but if you want dynamic elements, you need to know JavaScript. Of course, this makes <a href="/posts/why-javascript-is-bad-at-math/" class="rank-math-link">bad examples of JavaScript</a> code all the more visible, and all the more infuriating, because end users are so much more easily exposed to the consequences of that bad code.**

you might read some really mean comments on this language such as nasty or terrible language.

but the two main things that cause this language to come across as a bad language and maybe the worst language for some tasks are these two:

- **Browsers Implementations:** this is the reason that makes it really impossible for JavaScript to run easily and to have full support by most of the browsers or at least a different version of the same browser. browsers have to keep updating continuously to keep supporting all the new features of JavaScript.

- **JavaScript Frameworks:** also frameworks have a great role in making this language very poor, even the most reasonable framework to learn today has a lot of boilerplate code, all the code you're going to write using this framework is very repetitive. I tend to put many brackets, square brackets just to prevent stupid syntax errors.

## Context Matters

**JavaScript may not be an inherently bad language, but that does not mean it is a good language in all situations. As with most tasks in life, the best tool for the job is the right tool. Case in point, a hammer is a perfectly good tool, but you shouldn’t use it to tighten screws.**

JavaScript is a high-level language. The “level” of a language refers to how close it is to the hardware it runs on, with lower being closer to the hardware, and higher being closer to the human. As a general rule, the lower the language, the harder it is for humans to understand, but the more you can do with it. Higher-level languages—like JavaScript—are much easier to comprehend for a typical human brain, but they are far more limited in what you can achieve with them.

As an example, if you wanted to write a highly optimized graphical rendering engine, you might choose to write it in C or C++. If you’re feeling adventurous, you could opt to write it in Assembly. JavaScript would be a wholly impractical choice because you cannot get anywhere near the hardware, and so cannot optimize the way your code interfaces with it. However, if you just want to create a simple native web page-based tool, JavaScript is your only option, which makes it de facto the best option.

## Bad JavaScript Practices - Where the Bad Reputation Comes From

We touched on it above, but most of the <a href="/posts/top-bad-things-about-javascript/" class="rank-math-link">bad reputation JavaScript</a> has stems from the quality of the code that is written in it, rather than the language itself. Writing bad code while you are learning is not a problem, but the friendly, accessible nature of JavaScript, combined with the fact that JavaScript is interpreted—not compiled—and can be easily viewed, means that much more of the bad code written in JavaScript gets seen.

Make no mistake, there is plenty of questionable code written in C#, it is just less visible because the language is compiled into machine code before distribution.

So, what are some of the more horrible examples of badly designed JavaScript?

### Console Everything

One of the first things JavaScript coders learn is <code>cosole.log()</code>. When you are starting out, this function represents the quickest and easiest way to output the results of your code. Unfortunately, like a baby chick imprinting on its mother, JavaScript beginners seem to develop a special relationship with <code>cosole.log()</code> and use it far more liberally than they should.

It is not uncommon to see JavaScript log every little detail, from unnecessary debug information left over from the development process, indicating that a particular loop has… well… looped.

```js
  for (let i = 0; i &lt; 1024; i++) {

    console.log("Don't do this!");

  }
```

On top of being unnecessary—and, given that just about anyone can view the JavaScript console, potentially a security concern—logging things to the console does hit performance a little. It is a tiny hit, granted, but excessive use of <code>cosole.log()</code> will still make a noticeable impact on the performance of your script.

One small addition on this theme, there are context-appropriate console functions, such as console warn, and console error. <code>cosole.log()</code> is used too often in situations where a warning or error would be more appropriate.

```js
  console.log("User has entered name.");

  console.warn("User has entered first name only, full name is preferable.");

  console.error("Name field cannot be left blank. Please enter name to continue");
```

### Not Using Var

Declaring new variables with var gives them scope. If you declare a variable in a specific function using var, it will limit the scope of that variable to the function. When you declare a variable without var, it becomes a global variable.

This is a really badly designed system when a variable does not need to be global because it is not technically a fault, so you won’t get any errors, but you will get weird things happening if you use the same variable name elsewhere in your code. On top of that, global variables have a small impact on performance, since the further away a piece of code has to go to find the variable it needs, the longer it takes.

```js
  function foo() {  
    var i = 1;
    p = 1;
  }

  function foo() {
    var i = 10;
    p = 10;
  }
```

In the above example, i is kept in a local scope for both functions, but p is global, meaning any changes to that variable in one function will hold for all other functions that access the variable.

### Lack of Adherence to Conventions

While some languages are incredibly strict about things like what you name your variables—and even whether or not your code is indented—JavaScript is a very generous language. You can format your code and name your variables almost however you like… but that doesn’t mean that you should.

The purpose of conventions regarding formatting and naming is almost entirely for the benefit of human eyes. After all, the computer doesn’t care what a variable is called. But it is precisely those human eyes that look at barely legible code and decide that JavaScript is a hot mess. Things like inconsistent naming and a lack of proper indentation are generally good practice items that any coder should develop, and JavaScript is no different. Here is some sample code, first done in a way that is just terrible, and then done correctly.

```js
  function foo() {
    FIRST_NAME = "John";
    lastName = "Doe";
    console.log(FIRST_NAME + lastName);
  }

  function foo() {
    var firstName = "John";
    var lastName = "Doe";
    console.log(firstName + lastName);
  }
```

## Reasons Why JavaScript Is a Bad Language

Okay, I’ve defended JavaScript enough. The truth is this language is far from perfect. Does it deserve the bad reputation it gets? Probably not. But that doesn’t mean there aren’t things to pick at. Here are some of the reasons JavaScript could be called a bad language in its own right.

### No Integer Type

Thanks to a decision by the designers of JavaScript to use IEEE 754 Double Precision, there is no integer type in the language, only a catchall “number” type. For experienced JavaScript developers, this is mostly not a problem, but for beginners and those unfamiliar with the quirky intricacies of this system, it can lead to unpredictable and near-impossible to debug problems.

### Loose Typing System

While the typing system of JavaScript can seem warm and friendly to beginners at first, those with more experience come to see it as a deprivation of an important tool in their debugging arsenal; typing errors.

JavaScript will always endeavor to make an apparent typing conflict work, but it is very bad practice to write sloppy code and hope that the interpreter will run it the way you intended. One example of things going wrong is the accidental mistyping of a number to a string.

```js
  var firstNumber = "1";
  var secondNumber = 2;
  var result = firstNumber + secondNumber; </code></pre>
```
In this case, the contents of result would read as a string that says “12”, rather than the number 12. A stricter language would require you to make it clear what you are trying to do, either by converting the string to a number or the number to a string before adding them together, and this helps prevent strange and unexpected errors farther down the line.

### Automatic Insertion of Semi-Colon

The existence of automatic semi-colon insertion isn’t necessarily a problem by itself—after all, you can choose to use semi-colons in your code if you don’t like it. The problem arises from the fact that it encourages developers to try dropping the semi-colons from their code, which can lead to errors if the rules of ASI are not properly understood, which is the case far too often.

### Overdependence on Global Variables

The casual approach that JavaScript has towards global variables makes it very easy to make mistakes, and very hard to debug them. For example, if a reference to a global variable contains a typo, JavaScript won’t give you an error, it will simply declare that typo as a new variable.

And, because the variable’s scope is global, if you make use of any third-party libraries that happen to use the same variable name as one of your global variables, you’re going to get some strange things happening to your code.

## The Takeaway

Is JavaScript bad? It’s not without its problems, and it certainly isn’t helped by some of the more terrible examples of code that can be found strewn across the web. But, like all languages, it can be wielded effectively with the right knowledge. And, as it is the de facto language of web browsers the world over, it probably isn’t going anywhere any time soon.


