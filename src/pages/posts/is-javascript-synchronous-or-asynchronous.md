---
layout: "../../layouts/blog-post.astro"
title: Is JavaScript Synchronous or Asynchronous
slug: is-javascript-synchronous-or-asynchronous
description: 
date: Wed, 30 Dec 2020 15:55:32 +0000
author: Anas Ouardini
draft: false
category: javascript js-questions
---


People tend to have a preferential inclination to established structures with relevant, orderly descriptions. Many, myself included, have found JavaScript rather confusing on first use. Most JavaScript developers and users lack a deep knowledge of the language’s use, causing them to render JavaScript confusing.

Many don’t understand the actual need and principal logic behind the nature of JavaScript. Today, I’ll be dealing with the nature of JavaScript: whether it is synchronous or asynchronous and what the two entail.

**It is somewhat difficult to correctly categorize JavaScript as synchronous or asynchronous with the changes over the years. JavaScript is always synchronous and single-threaded. If you’re running a JavaScript code block on a page, there will be no concurrent execution of JavaScript on that page.**

JavaScript is only asynchronous, in that, it can make Ajax calls. The call will stop running and the other code will be executed till the call returns. The call then runs synchronously. Since there is no other code being executed at this point, there will be no interruptions to the running code.

**Synchronous and asynchronous programming**: I’ll use live examples to help us get the gist of the two. It will help explain the difference between the two in an easy way. Debunking these two is a bombshell worth bursting many bubbles.

## Synchronous programming

Imagine being in a queue waiting to purchase a ticket for a baseball game. You can’t get a ticket until everyone in front of you gets one.

Or imagine sending your best friend on a couple of errands: to get some fruits and vegetables from the grocery that is afar and getting ingredients for your favorite pumpkin cake from a nearby store.

Your friend decides to first buy the groceries then later buys the cake ingredients. Now let’s picture the impact of hundreds of similar tasks. The total time increases fast for one person doing all those tasks individually in the order given.

Synchronous programming involves multiple tasks being executed sequentially. By default, JavaScript is a synchronous, blocking, single-threaded language in the manner by which its code is executed. Each operation is performed one at a time before moving on to another task. For the last command or task in the code to run, every code above it must first be executed.

The code is executed in a single thread. Meanwhile, if a function were to take a considerable amount of time to finish, it would freeze every other thing.

A synchronous request blocks the client long enough to complete the operation; the browser then becomes unresponsive because the JavaScript engine of the browser is blocked. The full-page is then refreshed at request time and the developer is blocked until the request is completed.

## To synchronize or not to synchronize?

Multi-threading issues may raise the need to synchronize your JavaScript object or class. If your shared object is mutable, you need to synchronize the object. However, if the shared object is immutable or a read-only object, you can run multiple threads without the need to synchronize your object.

It is impossible for two executions of synchronized methods on the same object to interleave. When a thread is running a synchronized method for your object, the other threads running a synchronized method for the same object block will suspend their executions till the first thread is completed.

Upon the exit of a synchronized method, a "happens-before relationship" is automatically established with any ensuing execution of a synchronized method for the same object. This ensures that any changes made to the object state are visible to all the threads.

The “synchronized” keyword provides various functionalities like locking for mutually exclusive access to the shared resource. “Synchronized” keyword prevents reordering of the code statement by the compiler which may lead to a subtle, coincidental issue.

On the downside, being rigidly synchronous can be disadvantageous. If you have many time-consuming lines of code, your application runs like a tortoise thus taking up so much of your precious time.

The solution to this nuisance is in the asynchronous programming model, which allows you to execute manifold things at a time. You don’t have to wait for the current operation to finish to move on to the next task. Yipee!!! Let's dive into it then, shall we?

## Asynchronous programming

Imagine going to a restaurant, the waiter takes your order and takes it to the kitchen. The waiter can move on to serve another table while the chef is preparing your crepes Suzette flambé. Others don't have to wait for your food to be cooked and served before they place their orders.

The same waiter can serve several different tables. This is how asynchronous programming operates. The waiter becomes the ‘thread’ assigned to the requests. A single thread is then used to deal with various requests.

Asynchronous programming involves independent operations that would otherwise have taken some time for execution. The request doesn’t block the client hence the browser remains responsive. Being a form of parallel programming, it allows a unit of work to run separately from the main application thread.

The developer can perform other operations as well as the JavaScript engine of the browser isn’t blocked. Since the full page isn’t refreshed at the request time, the developer gets the response from an ajax engine.

## Callbacks vs. Promises vs. Async/Await

There are several ways to deal with an asynchronous code: callbacks, promises and async/await.

### Callbacks

A callback function is passed into another function as an argument to be implemented inside the outer function to complete some other action. It is particularly useful when dealing with asynchronous operations by continuing code execution and event handling.

In JavaScript, the objects (functions) can be passed to functions as parameters. When the first function is completed, the second function is run.

A built-in method in JavaScript, “a set timeout” calls a function after a specified time period (in milliseconds). This simply means that the message function is being called after some event has happened.

The disadvantage of callbacks is an issue called “Callback Hell.” This is a result of nested callback functions that makes the code really hard to read. In such a situation, promises can comfortably and better handle the nested callback.

### Promises

We tend to make promises in real life, particularly to those we care about. A promise made is a guarantee of something being done in the future.

A promise can either be kept at the appointed time or be broken. Similarly, for Java, when a promise is defined, it will either be resolved at the appointed time or get rejected.

A promise is designed to handle the asynchronous result of a task. With promises, the execution of a code block can be deferred until an async request is completed. This ensures that other tasks continue running without interruption.

There are three states of promises:

- **Pending:** This is the initial state before the promise succeeds or fails.

- **Resolved:** This is the completed promise.

- **Rejected:** This is a failed promise.

Taking you through an example, upon requesting data from the server using a promise, it remains in pending mode until the data is received.

Suppose we get the information we need from the server, the promise will be successfully resolved. However, if we don’t get the information, the promise has been rejected.

Sometimes multiple asynchronous requests must be called. Thereafter, the first promise is resolved or rejected and a new process started. The promise is then attached directly to the process through chaining.

Promises are in effect a common way to orchestrate asynchronous action. The issue with promises is that the control flow can grow in complexity and become very difficult to understand. We then move on to using the async/await construct which makes coding cooler.

### Async/Await

The async/await pattern is a user-friendly syntax for promises that makes your asynchronous code appear like a synchronous code. It then becomes easier for people to understand. Await is only used with an async function, which acts as the wrapper function. It’s like a candy bar and it's wrapping.

The calls to Async/await are pure genius since they look like synchronous code. The calls are rewritten at build time or runtime, making the calls non-blocking. The async/await code is easier to read, write, and debug with a natural scaling. As the complexity of the async/await code increases, the normal clarification and restructuring tools can be used to tame the complexity.

The async/await pattern makes execution sequential which allows for paralleled execution which tends to be really fast.

The await keyword in the await function ensures that all the promises returned in the async function wait for each other (are synchronized). Await eliminates the use of some callbacks. Async is used when returning a promise (wrapping non-promises in it) while await is used when calling a promise, making JavaScript wait till the promise settles and returns the result.

## Conclusion

We’ve learnt about the synchronous and asynchronous programming models. We’ve narrowed down to the concept and application of Asynchronous Callbacks, Promises and Async/Await.

It can be concluded that JavaScript is a mix of both, synchronous and asynchronous. JavaScript is synchronous and single-threaded. It can only be asynchronous when functions require features like Ajax since the response isn’t immediate. It all depends on what you're doing and what yields the best workflow result.

**similar topics:**

- <a href="/posts/why-javascript-is-scripting-language/" target="_blank" rel="noreferrer noopener">Why JavaScript is Considered a Scripting Language</a>

- <a href="/posts/is-javascript-compiled-or-interpreted/" target="_blank" rel="noreferrer noopener">Is JavaScript Compiled or Interpreted</a>

- <a href="/posts/why-javascript-is-a-lightweight-language/" target="_blank" rel="noreferrer noopener">Why JavaScript Is a Lightweight Language</a>

- <a href="/posts/why-javascript-is-considered-as-a-dynamic-language/" target="_blank" rel="noreferrer noopener">why javascript is considered as a dynamic language?</a>

**resources:**

- [duplicate], W. (n.d.). What Does "Synchronised" Mean in Java? Retrieved from Stack Overflow: <a href="https://stackoverflow.com/questions/7848471/what-does-synchronised-mean-in-java" target="_blank" rel="noreferrer noopener nofollow">https://stackoverflow.com/questions/7848471/what-does-synchronised-mean-in-java</a>

- Async Await in Java - DZone Java. (n.d.). Retrieved from dzone.com: <a href="https://dzone.com/articles/async-await-in-java" target="_blank" rel="noreferrer noopener nofollow">https://dzone.com/articles/async-await-in-java</a>

- Async/Await. (n.d.). Retrieved from Javascript.info: <a href="https://javascript.info/async-await" target="_blank" rel="noreferrer noopener nofollow">https://javascript.info/async-await</a>

- Callback vs Promises vs Async Await. (n.d.). Retrieved from Loginradius.com: <a href="https://www.loginradius.com/blog/async/callback-vs-promises-vs-async-await/" target="_blank" rel="noreferrer noopener nofollow">https://www.loginradius.com/blog/async/callback-vs-promises-vs-async-await/</a>

- How to Use Async Await in JavaScript. (n.d.). Retrieved from Medium: <a href="https://medium.com/javascript-in-plain-english/async-await-javascript-5038668ec6eb#:~:text=The%20await%20operator%20is%20used,not%20the%20who" target="_blank" rel="noreferrer noopener nofollow">https://medium.com/javascript-in-plain-english/async-await-javascript-5038668ec6eb#:~:text=The%20await%20operator%20is%20used,not%20the%20who</a>

- Javin, P. (n.d.). Java Synchronization Tutorial: What, How, and Why? Retrieved from Javarevisited.blogspot.com: <a href="https://javarevisited.blogpost.com/2011/04/synchronization-in-java-synchronized.html?m=1" target="_blank" rel="noreferrer noopener nofollow">https://javarevisited.blogpost.com/2011/04/synchronization-in-java-synchronized.html?m=1</a>

- Synchronous vs Asynchronous - Javatpoint. (n.d.). Retrieved from www.javatpoint.com: <a href="https://www.javapoint.com/understanding-synchronous-vs-asynchronous" target="_blank" rel="noreferrer noopener nofollow">https://www.javapoint.com/understanding-synchronous-vs-asynchronous</a>

- Synchronous vs Asynchronous Programming - DZone Web Dev. (n.d.). Retrieved from dzone.com: <a href="https://dzone.com/articles/synchronous-vs-asynchronous-programming" target="_blank" rel="noreferrer noopener nofollow">https://dzone.com/articles/synchronous-vs-asynchronous-programming</a>

- Synchronous?, W. (n.d.). When is JavaScript Synchronous? Retrieved from Stack Overflow: <a href="https://stackoverflow.com/questions/2035645/when-is-javascript-synchronous" target="_blank" rel="noreferrer noopener nofollow">https://stackoverflow.com/questions/2035645/when-is-javascript-synchronous</a>

- When to Use (and Not to Use) Asynchronous Programming. (n.d.). Retrieved from Stackify: <a href="https://www.google.com/amp/s/stackify.com/when-to-use-asynchronous-programming/amp/" target="_blank" rel="noreferrer noopener nofollow">https://www.google.com/amp/s/stackify.com/when-to-use-asynchronous-programming/amp/</a>


