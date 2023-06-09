---
layout: "../../layouts/blog-post.astro"
title: What is Function Overloading in Javascript
slug: function-overloading-in-javascript
description: 
date: Tue, 02 Mar 2021 20:48:40 +0000
author: anas ouardini
draft: false
category: javascript js-questions
---


**In programming, function overloading is the ability of a language to present multiple instances of the same function, allowing the programmer to create more than one implementation of that function. The main advantage of function overloading is that you can have the same function accept different sets of parameters depending on your need. Unfortunately, JavaScript does not support function overloading, but it is possible to implement this functionality yourself.**

## Function Overloading: a Little More Detail

Function overloading is incredibly useful for keeping code clean, which we should all strive to do because, one day, someone might see your code, and on that day you should be proud, not ashamed.

So, let's imagine an example of a simple function in which you pass in a string. That string is the user's name, and the function simply logs a greeting to the user. Now, say you wanted to give the user the option to input their surname as well, but not *require* it. If you alter your function to take in a surname, you're going to have to pass in a surname whether the user wants to or not. You could create a separate function to handle first and last names, but that starts to get a little messy, and you then have two functions to update if you decide to change your user greeting.

So, let's take a look at how function overloading could make this easier. Remember, even though the below code example is in JavaScript, this code would *not* work. JavaScript will simply overwrite any previously declared functions with the one that was declared last. But it should help to illustrate what we mean.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">

    function greetuser(name) {

        console.log(name);

     }

     function greetuser(firstname, surname) {

         console.log(firstname, surname);

     }

     greetuser("John");

     greetuser("John", "Smith");

</code></pre>

And from there you could refine the code so that the first and last name overload, rather than directly logging the greeting, combines the two strings and then calls the first function, like so:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">

     function greetuser(name) {

         console.log(name);

     }

     function greetuser(firstname, surname) {

         var name = firstname + ' ' + surname;

         greetuser(name);

     }

     greetuser("John", "Smith");

</code></pre>

Now you would have the benefit of function overloading, but you still keep everything in one place, since the overloaded first and last name function simply combines the two names and throws it back to the original function (with a space in between the names, of course), so any changes to your user greeting code only need to be made in the first greetuser function.

But alas, JavaScript does not support this incredibly useful function. But fear not, intrepid coder; all is not lost!

## How to Implement Function Overloading in JavaScript

Okay, I'll be honest with you, this solution is not nearly as elegant as native function overloading support, but it *is* considerably more elegant than having fifteen different variations of the same function! Let's look at a code example first, and then we'll go through what is happening.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers"> function overloadFunction() {

     var str = 0;

     if (arguments.length == 0) {

         str = "No name was entered"

     }

     else if (arguments.length == 1) {

         str = arguments[0];

     }

     else if (arguments.length == 2) {

         str = arguments[0] + ' ' + arguments[1];

     }

     console.log(str);

 }

 overloadFunction();

 overloadFunction("John");

 overloadFunction("John", "Smith");</code></pre>

Now, if you're looking closely, you might be wondering where that "arguments" array came from. JavaScript may not support function overloading natively, but it does have some advantages. The arguments array is accessible inside of any function and contains all of the arguments passed to that function. So, as you can see, we don't need to have function overloading in the conventional sense, we can just create a catchall function that takes anything, and work out what to do with the arguments from there.

### About Those Arguments that you overload

One important thing to note about JavaScript's argument handling is that it is pass by value, not pass by reference. And if you don't understand what that means, don't worry; I got you.

When handing data to a function, you can give it a reference or a value. A reference is exactly what it sounds like; a reference to data somewhere else. Pass by value, on the other hand, essentially copies the data and hands the copy over to the function.

As it turns out, JavaScript is always pass by value, but it is important to understand what you are working with to avoid infuriating errors. This wouldn't be a problem with our above example, since we're not manipulating the data passed into the function; we're just logging it to console.

Picture a different example where we pass in some numerical data to a function to perform a bit of light maths on it, but the function is pass by reference, and we neglect to create a new variable and just manipulate the argument directly. This would result in the original data being manipulated, which may or may not be what you want, but it's certainly not the way you should be going about it.

Still, as I said, JavaScript is pass by value, not pass by reference, so you can rest easy knowing that any arguments you pass into your faux-overload function can be manipulated without affected the external data that the argument came from.

## Problems With The function overloading Method

For the most part, this method is perfectly fine. It could even be argued that it is neater than the method overloading example we gave above, since everything is contained in one function. There is the small matter of validation, however. And, no, I don't mean personal validation.

Because there is no restriction on what we can pass in as an argument, we are going to have to run these checks ourselves. An example of what I'm talking about would be if we had the above overload function and somehow ended up passing a number, or an array. The function might still "work" in some cases, but it almost certainly wouldn't be doing what we wanted it to do. The flip side of this is that we can handle such an exception however we want without having to "catch" the error.

## Final Thoughts

Hopefully now you're now well-versed in what function overloading is, why it's useful, and how to mimic the functionality in JavaScript. As a general rule, it is good practice to look for ways to make your code more efficient, and anything that makes your code more streamlined should be looked at as a good thing, and avoiding creating a dozen functions with the same purpose is certainly that.


