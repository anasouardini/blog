---
title: what should I learn after javascript?
seo_title: what should I learn after javascript?
description: what should I learn after javascript?
seo_description: what should I learn after javascript?
date: Mon, 16 Nov 2020
seo_date: 2020-11-16
author: Anas Ouardini
draft: false
category: [JavaScript, JS-Questions]
---

so you just finished your vanilla Javascript courses and had some training and became good at Javascript and you started wondering what should you learn next, the answer I provide in this article is for someone who knows HTML, CSS, and vanilla Javascript with DOM manipulation. so what should you learn after learning Javascript?

**after you've learned Javascript you can go for learning some back-end language like PHP or Nodejs which is built with Javascript, this is of course if you're planning for becoming a full-stack developer. or you could learn some libraries like jQuery which can help you reduce Javascript lines and thus reducing the time needed to complete a specific task. or you could go for some more Javascript by learning ES6 and ES7, and there are JS frameworks like Vuejs which can help you do some cool stuff more easily.**

so it's all up to you whether you want to become a full-stack developer that can build a website without contacting some back-end developer to help you with the back-end which can be really useful or just focus on the front-end which is really powerful since you're focusing gon one thing.

so I really can't tell you what you have to learn after you've learned Javascript, but I can guide you to make sure that you choose the right path for you. so before asking this question you have to ask another question which is what do you want to become and what is the goal that you want to achieve from learning Javascript.

and that answer is what is going to help you know what you should learn and then figure out the path that you wanna follow in this domain. if that answer was to do some freelance you probably should focus on knowing some back-end languages and learn back-end skills as well, since freelancing doesn't require a deep knowledge but it requires many skills (front-end, back-end, maybe design, marketing).

but if the answer was getting a job at a company then you have the choice between full-stack and front-end and also depends on the companies that are hiring in your country/city, but it's better to focus on front-end since it's easy to be good at one thing than two things so you'll stand out for the recruiter.

## You never really finish learning Javascript

yes you read that right, learning Javascript never ends, that's why there are senior Javascript developers that know one thing and know it well which is Javascript, and also themselves still reading about it and going to meetings that talks all about Javascript, so keep that in mind.

there is one quote that I came across on Twitter that can change the way you think of Javascript:

> people who just learned vanilla Javascript and they ask "what should I learn after learning Javascript?" are like when a kid who just got his orange belt in Tae Kwon Do and ask "what should I learn after Tae Kwon Do?"

so keep in mind that Javascript never ends and I highly recommend you start following more developers on Twitter and Facebook and also subscribe to more channels on youtube that cover web development topics especially Javascript topics.

so to not add any more context, you have just learned the basics and you still have tons of things that should learn if your goal is to master Javascript.

## You should probably learn more JavaScript

if you have just learned vanilla Javascript, it's just the beginning of Javascript as I said earlier, so if you're willing to get good at Javascript then you should learn more Javascript unless all you need are the basics to build your own website or something like that.

so if you decided that you need to continue learning Javascript then  here the two things that can help you with that:

**1) learn ES6 (modern Javascript syntax):**  ES6 means EcmaScript 6 or EcmaScript 2015, now you have a solid understanding of ES5 which is what you've probably learned which you learned to use var instead of let & const in ES6. and with that solid understanding you can easily pick up ES6 and it's going to help you a lot with your journey especially when learning a Javascript framework.

ES6 has a really simple syntax that can help you reduce the lines of code that you have to write almost every time, and also introduce you to new Javascript concepts that are really helpful to know.

I was going to recommend learning ES6 after learning OOP and functional Javascript but you might get discouraged from facing all those new concepts, so think learning ES6 first is better.

**2) learn functional Javascript:** I think it's better to talk about what functional programming isn't, before talking about what it is. and here are all the language constructs that you should forget about when learning functional Javascript:

- Loops (**while, do...while, for, for...of, for...in**)
- Void functions
- Array mutator methods (<code>cop**y within, fill<strong>, sort, splice, unshift**, pop, push</strong></code>)
- Object mutation (for example: **o.x = 5;**)
- Variable declarations **var** or **let**
- Map mutator methods (**clear, delete, set**)
- Set mutator methods (**add, clear, delete**)

you might think seriously!! how would I program without these features? that is what functional programming takes care of.

if you read about this you'll what are the differences between pure which reduce the side effects in your code and unpure functions that you should avoid using, etc.

here is a little example to remove a little bit of confusion:

```js
//normal JS code 
let Ar = [4, 5, 6];
for (let i=0; i < Ar.length; i++)
    Ar [i] = Ar[i] + 1;
console.log(Ar); //here is the result [5, 6, 7]
```

```js
//here is the functional JS version of the code
let Ar = [4, 5, 6];
Ar.map( item => return item + 1  );
console.log(Ar); // the result is [4, 5, 6]
//the changes only exist in the function
```

the benefits of using functional Javascript (functional programming in general) are:

- clean code
- syntactic efficiency
- more abstract (no for loops, etc)
- reduction of errors

**3) learn Javascript OOP:** OOP can be really complicated very quickly and hard to understand, but I'm going to give a simplistic view of what it is, and if I tried to fully explain it, it would be very confusing for you than helpful.

the simple idea of OOP is that we use objects to model things in the real work inside our program, some functionalities are hard to if not impossible to access or make use of it, and OOP provides a simple way to do that. this is the basics idea of OOP, I know it may not make sense for you right now but don't worry about it.

basically, you can use OOP to contain related data of anything in the real world that you are trying to model and any function or behavior or feature of it. 

when I learned OOP I never found a necessity to use it and I didn't even know when and where should I use it, so don't let that confusion make you give up or something.

**4) learn JSON & AJAX:** this section very small, it's not going to take a lot of time and you'll be using them a lot with API when you get a little bit advanced.

**AJAX** means **A**synchronous **J**avaScript **A**nd **X**ML, it's a group of interrelated web development techniques that are used on the client-side and it's what makes a web application asynchronous.

an example would be when Facebook comments are loading new comments constantly without refreshing the page, so you can update anything on the page without reloading the whole page which is going to take more time and unnecessary requests to the server, and it interferes with the behavior and display of the page.

another example is live support and chat where the messages you send are stored in the server and the page on the guy who's helping you on the other end is refreshing the messages to get the new messages each time without reloading the page at all.

keep in mind that the technique that's doing all of this is called AJAX which using Javascript in some way to do that, and JSON is the formatted data that you retrieve and parse and perform some operations on them to get what you want using this technique AJAX.

**5) read some Javascript books:** the best way to learn code is by going through a book, I personally didn't go through a book, in the beginning, the only book I've read is Javascript the weird parts and that was after I've learned ES6 and jQuery, and that because I'm a visual learner.

I also didn't afford a book I just downloaded that book as a PDF for free, but if you can afford a book I highly recommend that you do since all those courses that you'll find on youtube are just a resume of books whether they've read those books or they've learned those things with practicing.

here are some books that are really going to change your way you understand Javascript:

- Eloquent JavaScript
- You don’t know JS
- Javascript the weird parts
- the specs on ES6/ES2016/Harmony (not a book but there are articles about this, it would be helpful)

## learn jQuery after javascript

I'm not going to recommend learning jQuery as an important thing to do but it might be good for you to learn. but one thing to know is that you can pretty much do anything with Javascript without ever needing to use jQuery but it's definitely easier to use than vanilla Javascript code.

in general, if you're looking towards being a good Javascript developer, it's better to focus on doing everything with Javascript, but you might not be interested in that, then head over to the jQuery track.

the only case when it's not recommended to learn jQuery is when you're don't have that strong understanding of Javascript, but if think you're good with Javascript, jQuery can really help you with speeding up your coding, but it's never a way to learn Javascript.

it becomes a little bit popular between people that you can learn Javascript through jQuery since jQuery is built with Javascript, I wrote an article that talks about that named <a href="/posts/is-it-necessary-to-learn-javascript-before-jquery/" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">Is It Necessary To Learn JavaScript In Order to Learn jQuery</a>.

without making it longer than it should, consider learning jQuery after you've learned Javascript if you see that it's required.

## learn CSS preprocessors

if you've never heard of something called CSS preprocessors before they are scripting languages that help you with simplifying your stylesheets and scale your website. or in other definition, it extends the default capabilities of pure CSS.

those preprocessors enable us to use logic properties such as those you implement in Javascript like loops, functions, variables, nesting, inheritance, mixins, functions, and mathematical operations. The logic you implement in the preprocessor like SASS can be converted into the pure CSS that the browser can understand.

learning them can help automate those repetitive tasks that you're writing with pure CSS, thus reducing the time needed to finish coding a task and reducing the number of errors, and also helps you with some compatibility issues since it automatically ads vendors and code that ensure your code will run on new and old browsers without doing it yourself.

the most used CSS preprocessors are SASS, LESS, and stylus, and each of them has its own syntax but as I said they get compiled into pure CSS code so it doesn't matter which one you learn. I personally used sass and never needed to change, and never even used its max potential.

they all do the same job, so pick up one and start with it. I highly recommend this sync after you learn even 30% of it it'll help you focus on your Javascript more. and that is going to help you in the long run.

## learning back-end languages after Javascript

I don't want to focus too much on back-end languages but they are a good way to have that full view of how a webpage is served from the server to the browser. also, there are developers who are calling themself MERN and MEAN developers, which are two stacks that include front-end and back-end technologies so those developers are full-stack developers.

**MERN **stands for **M**ongoDB **E**xpress.js **R**eact **N**ode.js, and **MEAN **is for **M**ongoDB **E**xpress.js **A**ngular **N**ode.js.

**MongoDB **is a database, **Express.js** is a node.js framework, **Node.js** is a back-end runtime that runs Javascript. and you probably know React and Angular which is Javascript front-end frameworks.

there is a big community behind each of them so if you find any problem with using node.js with the MongoDB database you'll definitely find the answer online. that's all that I'll write in this section to not make this article longer than it should be.

## learning front-end frameworks after Javascript

you should know what a Javascript framework is just from their name, to help you understand just imaging that you're building a house instead of a web page, using only pure Javascript is like making the tools that are used for building and then use them to build that house aka your web page. it's very time-consuming.

but when you learn a framework it's like you already have those tools and you just have to learn using them, you don't need to build the smaller features from scratch and one by one.

> "You Don't Have To Reinvent The Wheel".

for example, you'll need to add some feature that you like to have on your homepage, and let's see that this feature is a carousel, instead of building this from scratch which requires a lot of time and javascript lines as well as spending time figuring out which shapes and measurements are good and making it responsive and all that stuff, you just need to use that code from a framework. think of it like using jQuery but there is a small difference between libraries and frameworks.

## learning how to use task runners after learning Javascript

when watching courses or reading articles or books about coding you'll definitely hear the phrase "keep it DRY" which stands for **D**on’t **R**epeat **Y**ourself. so what that means that if you have some tasks that you have to repeat each time you should find a way that helps you repeat it less which eventually leads to less code and less time consumed.

on each project, you develop you'll find yourself repeating some tasks over and over not just in code but also things like minifying images and CSS and Javascript files, not just this but also can be very advanced like changing the code ou write and refreshing your browser so you don't need to do that yourself.

I always find myself very productive when since I knew task runners and learned how to use them. before I learned them I was spending a lot of time on things that are secondary and also I would get bored easily with doing these tasks again when making some mistakes and also the time cost of these tasks adds up really fast you want to change something which makes you do the task again and again just because you forget to edit something.

so it's inefficient for medium to big projects, not to mention that it's adding wear and tear on your fingers and keyboard keys :). task runners are here to help!

there are a lot of task runners out there such as **Gulp.js** (which I was using), **Grunt.js**, **Cake.js**, **Broccoli.js,** and **Brunch.js**, just to name some of them. their names sound like things you could have during your birthday (no Broccoli of course). so use task runners and save yourself.

but if you're not advanced enough and you think you don't want to spend more time learning them it's probably true.

## learn Git and Github

Git is a Version Control System that is made by Google to help developers work together in a team remotely on the same project.

these technologies are going to help you share your code with other developers that are working on the same project or if you are working with a team Github is helping you and your team to work on the same project at the same time and each one is working from his home using his laptop.

also, it helps backing up your project on each change you save to the project so if you missed up your project you can get your code back as it was 5 days ago. so it can be very helpful and many companies are requiring Git or other Version Control System.

## takeaway

the thing is it's only up to you to choose what to learn after you've finished your vanilla Javascript course. but in general, you might wanna go with some back-end languages to become a full-stack developer you have to learn PHP or Node.js if you want to stick with Javascript.

and you might also like to just stay in the front-end and master that, then there is a lot to learn, not because the back-end doesn't have more things to learn but when you don't have any back-end language you can't learn anything before learning that language.

within those things in front-end, there are things that just helps speed up your coding and to make it easy for you to continue learning and building projects like CSS preprocessors and task runners, and other things that are improving the core fundamentals of Javascript like ES6 and frameworks.