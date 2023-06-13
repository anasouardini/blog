---
layout: "../../layouts/blog-post.astro"
title: Should I Start Learning JavaScript ES6 Or ES5 As a Beginner?
slug: should-you-start-with-es6-or-es5
description: 
date: Mon, 09 Nov 2020 23:42:58 +0000
author: Anas Ouardini
draft: false
category: javascript js-questions
---


*if you're into web development whether it's front-end or back-end you'll 100% know what Javascript is, it's most widely used nowadays and will be for a very long time. and if you read just a little bit about it you'll come across somethings called ECMAScript which is the old name of Javascript which is the standard name, until now there is ES5, ES6 (2015), ES7, ES8, ES9, ES10, ES11 (ES 2020). whenever new features are added to Javascript there will be a new ES version, which we refer to it as ESNext.*

**THE SHORT ANSWER: you should start with ES5 so that you'll have a better understanding of the language, but it's fine to go straight away to ES6 even though it's not fully supported in all browsers but you can get away with it especially if you're using some Javascript framework such as React it's going to be very useful for you.**

the main reason that pushes you to know ES5 is that many books and online courses are still using ES5 to explain certain features in the Javascript language, and also if you head over to Codepen or any platform that shares a code of some project that you like, you have 50% chance that it'll be coded in ES5 or even older versions of Javascript, so you'll probably still need to learn it too and it's better if you do.

another factor to keep inconsideration is that when working on your projects by yourself then there is no team member that needs the code to be written in ES5 in order to understand it, so you have the freedom to use any version you want as long as it's supported and still efficient. but when reading about a certain feature that you want to add to your project you might face a difficult time reading through ES5 syntax if you haven't learned its syntax.

there you have it.

Javascript is basically ECMAScript because it's built upon it, so it's basically its core. that why they tell you that ECMAScript is a subset of Javascript. not just Javascript but other languages like ActionScript and JScript also use ECMAScript as the core of the language.

those three languages are a little bit unique to each other but when you get to the core they are built using the same core, it's like the three different motorcycles with the same engine.

if you want the history in a paragraph, Mocha was created by Brendan Eich and then it became LiveScript then later it became Javascript. later on, javascript was presented to <a aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" href="http://ecma-international.org" target="_blank" class="rank-math-link">Ecma International</a> by Netscape then it was renamed ECMA-262 which is known as ECMAScript.

but keep in mind that Javascript that is a dialect of ECMAScript is different than Brendan Eich's Javascript; enough of this long intro and let's get into it. **BTW knowing the History is not going to affect your Javascript skills in any way so you can skip the history section unless you're interested.**

## brief history

as you know by now the official name for Javascript is ECMAScript, but when ES3.1 became ES5 it was abandoned, ES5 is the version that is used in the HTML5 world. let's dive a little bit deeper into Javascript history.

### Javascript birth:

**before December 1995 by 6 months**, yes it's that old, back when Netscape Communications Corporation was very known on the young web. It had a browser named Netscape Communicator and it was nailing it and competing with NCSA Mosaic. long story short, with Netscape the founders gained a lot of money and independence and that's how they had the freedom to look for further ways to expand the web and that's how Javascript was created.

### javascript History:

the web needed a way to become more dynamic and that's what Marc Andreessen said whom the founder of Netscape Communications and also was part of the Mosaic team. he thought that the web should have some animations, interaction, and other automation functions added to it, that was the future in Andreessen's eyes. and for that to be achieved, some scripting should be involved to interact with DOM.

at this time Java was on the rise and the Java applets project was really close to being in action, and adding scripting to the web was an important strategy, and this strategy shouldn't be dedicated to experienced developers and big software engineers only.

 so this scripting language should be oriented to other types of audiences especially designers. the web was very different than what you're seeing right now since it was very static, and HTML was really young back then and it was really simple for everyone to use it even for non-developers, and that's why the strategy that's going to make the web dynamic should also be accessible for non-developers. and then Mocha (Javascript old name) was introduced.

and it was really simple and accessible for non-developers and also makes the web dynamic. that's it, I wish I could tell you more about this history without turning this post into a history book, but I'm pretty sure that you can find some blogs that talk more about this topic. 

### javascript implementations:

Sun and Netscape have closed a deal regarding changing the name to Javascript after it has been Mocha/LiveScript. after that developers were wondering about the alternative implementations.

at that time Netscape was really rising in everybody's eyes as it was the preferred browser by users, at this time Microsoft was developing Internet Explorer. and Javascript was affecting the user experience in a very noticeable manner so that browsers have no other choice but to find a working solution which is an implementation of Javascript.

web standards were not very strong as now for a very long time and also at that time, Microsoft captured the opportunity and implemented their own Javascript version and they named it JScript, it removed "Java" from the name and that's to avoid any possible trademark issues that might happen in future. JScript wasn't just about the new naming of Javascript but it was really different.

even the slightest differences that happened to Javascript implementation, especially in certain DOM functions, had caused some ripples that can be noticed for many years. so not just the names that have been changed but also functions are changed in wars that Javascript fought.

in August 1996 Jscript's first version was included in Microsoft's browser Internet Explorer version 3.0 which was a big deal back then.

## the difference between ES5 and ES6 (ES5 vs ES6)

almost everything that ES5 can do can be done with ES6, but there is always be a difference in syntax in order to make things easier.

### Here Are The ECMAScript 5 (ES5) Features

These were the new features released in 2009:

- "use strict"
- String.trim()
- Array.forEach()
- Array.reduceRight()
- Array.filter()
- Array.isArray()
- Array.map()
- Array.reduce()
- Array.every()
- Array.some()
- Array.lastIndexOf()
- Array.indexOf()
- JSON.stringify()
- JSON.parse()
- Date.now()
- New Object Property Methods
- Property Getters and Setters

if you want to read more you can visit <a href="https://www.w3schools.com/js/js_es5.asp" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">w3schools</a>.

### features that have been added to ECMAScript 6 (ES6)

- arrow functions
- classes
- enhanced object literals
- template strings
- destructuring
- default + rest + spread
- let + const
- iterators + for..of
- generators
- unicode
- modules
- module loaders
- map + set + weakmap + weakset
- proxies
- symbols
- subclassable built-ins
- promises
- math + number + string + array + object APIs
- binary and octal literals
- reflect api
- tail calls

ES6 and ES5 are two versions of the same scripting language, which is ECMAScript (ES) or Javascript. those two ES5 and ES6 have a lot in common since they are brothers from the same mother (ECMAScript), but on the other side they also have a lot of differences, and that's because ES6 was a big step forward that made a lot of changes to Javascript Syntax and implementations of its properties and features.

since I wrote it several times, you definitely know that ECMAScript is what ES stands for, which was denied by ECMA International.

### Pros and Cons of ES6 and ES5

here is a table of pros and cons of both ES6 and ES5:

<figure class="wp-block-table is-style-stripes"><table><tbody><tr><td></td><td class="has-text-align-center" data-align="center">**ES6 (ECMAScript 6)**</td><td>**ES5 (ECMAScript 5)**</td></tr><tr><td>**PROS**               </td><td class="has-text-align-center" data-align="center">+ the property "tail call optimization" feature has been turned on in the case of implementing ES6.<br>+in order o fetch the computed values in a function, the keyword "return" can be avoided and we don't need to use the function keyword to define our functions. of course this is when using ES6.<br>+ this version of javascript (ES6), helps with using handle interpolation and also string templates in a mature and smart way while using the scripts.<br>+ another positive thing about ES6 is that it makes things easier with object literals which is a really helpful shorthand syntax.<br>+ the core code looks way cleaner and syntactical manner when using ES6.</td><td>+ you can apply "`access array `[]" feature also on strings when using ES5.<br>+ the language built-in names or what you might call reserved words can also be used to name properties.<br>+ allows you to implement multi-line literals.                                                              <br>+ you can describe functions and their usage in a clean manner with ES5.                                                                                                                                                              </td></tr><tr><td>**CONS**</td><td class="has-text-align-center" data-align="center">- since ES6 is not as old as ES5 obviously, the support for ES6 is a little bit behind compared to the old version.<br>- it lacks also when it comes to browser support but only when you compare it to ES5.<br>- in terms of best practices it might be a little confusing at the beginning of learning this technology.</td><td>- it might be obvious but, a lot of new and helpful features that ES6 includes which are what make it powerful are not present in ES5.<br></td></tr></tbody></table></figure>

here is a table of comparison between ES5 and ES6:

<figure class="wp-block-table is-style-stripes"><table><tbody><tr><th>Based on</th><th>ES5</th><th>ES6</th></tr><tr><td>**Definition**</td><td>if you know javascript then you know ES5, it's what you are probably learning right now, it's the old edition of javascript, not the oldest but it's very old.</td><td>it a version of Javascript but it's an update that contained a new set of features and a new way to write javascript, from its name you'll know that it's the sixth edition of javascript.</td></tr><tr><td>**Release**</td><td>its release was in 2009 by Brendan Eich</td><td>it was born in 2015.</td></tr><tr><td>**Data-types**</td><td>the supported data types in ES5 are the primitive data types which are (**integer**, **string**, **null**, **boolean**, **undefined**)</td><td>ES6 is an update so obviously, there are some different data types that have been added, it's one data type which is (**symbol**). it's for unique characters.</td></tr><tr><td>**Defining Variables**</td><td>supports only one way of doing it which is using the keyword `var` which doesn't let you distinguish between constants and variables.</td><td>in ES6, we don't use `var` anymore, there is now `let` and `const`, const for defining constants and let for variables obviously.</td></tr><tr><td>**Performance**</td><td>performance is one reason that causes updates to be happening in the first place, so ES6 is definitely going to have better performance comparing it to ES5.</td><td>ES6 performance is higher due to the features that have been added and the way ES6 is implementing the core of javascript.</td></tr><tr><td>**Support**</td><td>A wide range of communities supports it.</td><td>It also has a lot of community support, but it is lesser than ES5.</td></tr><tr><td>**Object Manipulation**</td><td>this is a con for ES5 since it costs you more time to do **object manipulation** in contrary to ES6.</td><td>in this version we have what's called restructuring and speed operators it can be done in a faster and smoother way.</td></tr><tr><td>.**Arrow Functions**</td><td>we used to use the `function` keyword to define the function and `return` keyword to return a calculated result from the function. </td><td>ES6 has what's called arrow functions which are making things way easier and simpler due to the cleaner syntax since you write less code and you don't have to use `return` and `function` keywords.</td></tr><tr><td>**Loops**</td><td>there was a little problem when iterating over items in an array in ES5.</td><td>in ES6 we have `for of` loops which solve that problem and also make things a lot easier.</td></tr></tbody></table></figure>

### The elegance & productivity are with **ES6**.

take a look at the two versions of the same code, they both lead to the same result but one of them is written in ES6 and the other with ES5, the one written in ES6 is easier to write:

**ES5 Code**:

```js
[{lb:'Email',val:'ab@kg.co.sa'}].map(function(e){
  return '<div><label>'+e.lb+'</label>'+''+e.val+''+'</div>'           
})
```

**ES6 Code:**

```js
[{lb:'Email',val:'ab@kg.co.sa'}].map(({lb,val})=>`<div><label>${lb}</label> ${val}</div>`)
```

### ES6 has Arrow Functions

the syntax of writing functions in Javascript has changed with ES6, that's by introducing something called arrow functions, it really simplifies functions scope and also saves you a lot of time, by the way, it's the most popular feature in ES6. if you know ES6 you know arrow functions.

arrow functions also get called "fat arrow" functions and that's because it utilizes the fat arrow token =>, one thing to know about arrow functions is that they are anonymous, and they have changed the way `this` binds in functions.

along with simplifying the scoping of a function, arrow functions also simplifies `this` function. the work almost like lambda in C# or Python. 

this is the ES6 way of writing functions: `() => {}`

### Manipulating objects in ES6 vs ES5

Objects always get major overhauls in ES6. working with objects now is becoming very easy due to things like object destructuring and `rest` / `spread` operators, here is an example of merging two objects in ES5.

```js
var object1 = { k: 4, j: 8 }
var object2 = { m: 2, g: 3, d: 4}
var object3 = Object.assign(obj1, obj2)
```

when merging two objects in ES5 we use `Object.assign()` which needs to inputs obj1 and obj2 and then outputs the merged object. let me show you how we can take care of that problem in ES6.

```js
var object1 = { k: 4, j: 8 }
var object2 = { m: 2, g: 3, d: 4}
const object3 = {...obj1, ...obj2}
```

this syntax is really simple and easy to remember, those three dots are called the spread operator which is making objects a breeze for the developers, it's doing a lot of things but in our case, it's helping in merging objects.

**how about object destructuring:**

object destructuring also made very easy with ES6, let's take a look, in this case, we have to extract multiple values from ES5 you have to write 3-4 lines of code like this:

```js
var obj1 = { q: 2, w: 3, e: 4, r:5}
var a = obj1.q
var b = obj1.w
var c = obj1.e
var d = obj1.r
```

a little bit time-consuming. but wait we have ES6 here to rescue us, take a look at this code.

```js
const obj1 = { q: 2, w: 3, e: 4, r:5}
const {
  q,
  w,
  e,
  r
} = obj1
```

very cool, Last but not least look at another example which is defining objects.

this is the way you define an object in ES5:

```js
var q = 1
var w = 2
var e = 3
var r = 4
var obj1 = { q: q, w: w, e: e, r: r }
```

but when using ES6 it will be something like this:

```js
var q = 1
var w = 2
var e = 3
var r = 4
var obj1 = { q, w, e, r }
```

it only works when the keys names and variables names are the exact same, it's a very handy shorthand.

### Promises vs Callbacks

since I'm writing this topic for beginners, let's give some information that you might not know, Javascript is an Async language which means it does things at the same time, you could have two functions and they could occur simultaneously.

and this feature really helps when writing code since it gives us a lot of freedom. they also call it a non-blocking architecture because it lets you write non-dependent code in an easy way.

let's write an Async functions in ES5 code, you can see the example:

```js
function isBigger (a, b, cbfunction) {
  var bigger = false
  if(a > b) {
    bigger = true
  }
  cbfunction(bigger)
}

isBigger(1, 2, function (result) {
  if(result) {
    console.log('bigger');
  } else {
    console.log('smaller')
  }
})
```

we are defining the `isBigger()` function, which its job is to take three arguments, two numbers a and b, and a callback function that outputs the result. the function `isBigger()` when executed it checks if a is greater than b then make bigger true or false, then it calls the callback function `cbfunction()` and passes it the bigger variable to it so it can print it in the console.

<br>in the second chunk of code, we call the function `isGreater()` and pass the variables a and b alongside our callback function. in this callback function, we check whether the result is equal to true or false, and shows true or false in the console according to the result, here is the ES6 code that does just that:

```js
const isBigger = (a, b) => {
 return new Promise ((resolve, reject) => {
  if(a > b) {
   resolve(true)
  } else {
   reject(false)
  }
 })
}

isBigger(1, 2)
 .then(result => {
    console.log('bigger')
 })
 .catch(result => {
    console.log('smaller')
 })
```

the Promises in ES6 are an object that once called upon, it sill eventually resolve or reject and give you a response. so it allows you to `resolve` or `reject` some request, and when it does resolve a request,  it calls a callback provided in `then` but when rejecting it'll call the `catch` callback.

it's easy to know if the request is returning a success or an error with ES6 Promises, and that helps you by not having to check things out in the callback function each time which is what happens with ES5 callback functions. so ES6 Promises are better.

### Exporting & Importing Modules

when ES6 specification came out, it changed how the exporting and importing modules works let's compare how it's different than ES5 exporting and importing. here is how ES5 is doing it:

```js
var Module = { x: 1, y: function(){ console.log('This is the ES5 way') }}
module.exports = Module;
```

and here is the ES6 way of doing it:

```js
const Module = { x: 1, y: () => { console.log('This is the ES6 way') }}
export default Module;
```

the second syntax is more readable. in addition to the `export` keyword, ES6 also came up with the `export default` wich only used when using single export, now let's take a look at how importing works in ES6:

ES5 version

```js
var Module = require('./Module');
```

ES6 version

```js
import Module from './Module';
```

Cool ha !!

let me explain to you the `export default`, when you export default for exporting something you will import a module like this:

```js
import Module from './Module';
```

what this line means is that we have exported a module by default using `export default`, so we have to import that module in our source file, and that's what we did with the line above.

another thing that you can do with modules in ES6 is that you can `export` and `import` many child modules or variables from one module.

so you'll export a module in your module file, and the code will be something like:

```js
export const x = 1;
export const y = 2;
export const z = 'String';
```

and here is the importing line of code:

```js
import {x, y, z} from './myModule';
```

it's a very useful feature, if you remember the object destruction that I mentioned above, that what I used here to make things easier, so that's how you can import multi-child modules from one module.

I will stop here for this subheading, but it's not all you can google this and get more ES6 vs ES5 until you're satisfied.

## things you can do with es6 that can't be done with es5

the following paragraphs are more of proof to the title, that there is the stuff that ES6 can do that ES5 can't. I said this so that if you're totally beginner you might find it very confusing, so might just skip this part or take a look if you want but just don't let it confuse you.

when you ask most developers to **tell you some of the things can do done with ES6 which ES5 can't do**, not just beginners even the most experienced web developers can't answer.

the reason why being that is that ES6 is **syntactic sugar** on top of ES5, and that means ES6 designed to make ES5 easier to code, although it's the same its accessibility is better.

**obvious syntactic sugar**:

this is a piece of code that you would find in a typical Javascript use written in ES5:

```js
function es5(par){
  par = par || {};
  var bar = par.bar || 42;
  return 'the meaning of life is ' + bar + '.';
}
```

and here is the same code but it's written in ES6:

```js
const es6 = ({bar = 42} = {}) => `the answer to life is ${bar}`;
```

the first thing you'll notice is that it's much shorter but other than that it's more declarative. how it's more declarative?

well, take for example the default value for the parameter bar and the parameter itself, it's part of the function signature instead of being expressed within the code. so somebody looks at the function signature maybe knows what the defaults are.

you might not understand this part, ok let's talk about things that you might understand.

for example, the ES6 implementation is more correct, you might ask what is that means? well, there is a small bug hiding in the ES5 code, so it's a win for ES6.

**not so obvious syntactic sugar**:

this is more advanced so if you're not interested just skip this part of the article. and if you're curious I advise you to not let this make Javascript look complicated to you.

so let's get into it, take for example the ES6 classes, they are implemented completely on top of the prototypical mechanism that underlies the Javascript inheritance mechanism. so if you take babel and give it ES6 code that has classes, when you compile it you get ES5 code that just uses prototypes.

so babel can't handle this stuff so he just compiles it using prototypes, other features that babel can't handle are Iterators & generators and rest & spread operators.

## You Will Need ES6 To Learn frameworks like React

Yes, you really need ES6 in order to fully understand those React tutorials, they use ES6 syntax everywhere, modern React uses a lot of ES6 features. it's going to be very confusing for you if you don't know ES6.

and the better you understand Javascript the better you going to be at React, so if you learn ES5 then ES6 before React it'll be much easier for you to pick up this framework. it's not necessary to learn all of it but build a strong base.

I mentioned that you don't need to learn all of it, so you might ask what exactly do I need to learn in ES6, will I say:

- **class** - But just the bare bones. it's not going to take a lot to know how React uses classes.
- **string template literals** - not so much because of React, almost every ES6 user I know I using it, it's popular so you have at least to understand it.
- **arrow functions** - This is a big one - you'll find this everywhere on modern React.
- **spread and rest operators**
- **enhanced object literals**
- **object restructuring**

don't overthink it that much. I highly advise you to understand arrow functions first because they are a little bit confusing as they are a little different than a normal function. and they get used a lot. but most of the other stuff you'll pick up very easily. so overall they are just 6 features, it's not going to take you a month to understand them.

I estimate that you'll need 5 minutes with each one of the features to understand the idea of it since they are not complicated. and maybe more with arrow functions, 30 minutes for arrow functions is going to be enough.

let's go a little bit in details and talk about the arrow function component and how you pass props to an arrow function, you're going to find videos that talks about `this` keyword, and by having a stat with the arrow functions you figure out how it's working but it's going to make sense for you until you start practicing it with React.

I said earlier that you really need ES6 to learn React, don't get me wrong it really is needed, but you could also go straight to React and learn those topics as you go, you'll find something like `let`/`const`, `spread`/`rest` and all those features, you're not going to know what they're used for but you can google them as you go.

one thing that might cause you some trouble when starting to learn React is with arrow functions, they allow you to access your component `this` object from inside the callback function of an event. so I thought it's going to be helpful to let you know that, here is the syntax that you're going to be using all day long when learning arrow function: `() => {}` rather than : `function () {}`

**so ES6 is really going to help when learning React, but let's talk a little bit in general, there are some concepts that you need to learn before any modern Javascript framework:**

- fundamentals of JavaScript including [conditionals, looping structures along with functions and events].
- Class and Objects.
- map, filter, reduce.
- Promises, fetch, async, await.
- Loops *for in* and *for of* loops
- modules (Very important).
- Arrow functions, closure functions, iife functions (Immediately invoked function expression).

Now you have everything you need. but let me tell you that Javascript frameworks come and go as well as the libraries, but the core is Javascript so if you learned the core every framework is going to be easier for you to pick up, React may disappear one day but since you have the core concepts you'll be safe.

## takeaway

you might find Javascript very confusing, but it's a great language just try to avoid those bad articles and they are a lot out there. in this article, I provided the most information that you'll need to decide whether to learn ES5 or ES6 as a beginner.

and also told you what's better and what's not the best but can be done so you can have the right approach to this topic, let me repeat some of the things that I mentioned before in a general way in this takeaway.

the first thing is learning ES5 is what I suggest for every beginner out there if you've never touch Javascript because it teaches you lots of concepts about Javascript that'll make it very easy for you to learn ES6 or any framework or library.

but skipping ES5 and going straight away to ES6 can be done and nobody is going to disallow you unless you're applying post in a company, your recruiter can do that.

also, I've come across lots of books that are really useful but they are written with ES5 so you have to keep that in mind.

from my experience, I guess suffering a bit with ES5 is going to make appreciate ES6 more, and also you're going to know why each feature was added to it, this is the nice part about learning programming languages, which is going step by step and learning each topic and why it's there in the first place.

some of the tips that I think are going to be helpful to know are choosing multiple sources and limit yourself just to one, you can watch youtube videos and follow people on Twitter (the right people), podcasts, blogs, and the list goes on. there are lots of articles that talk only about this and I'll suggest this one which is a really good guide through your journey <a href="http://jstherightway.org/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">js the right way</a>, I'll save this to my browser's bookmarks if I were you.

"Javascript the definitive guide" and "you don't know JS" are very good books to follow in your journey. I also highly suggest this video course named "Advanced Javascript for serious Programmers". It should really open your eyes to the javascript paradigm.

**the last thing that I feel I should tell you is Don't ever jump on frameworks because you will waste your time on configuration instead of spending it learning actual core javascript.**