---
layout: "../../layouts/blog-post.astro"
title: why javascript is considered as a dynamic language?
slug: why-javascript-is-considered-as-a-dynamic-language
description: 
date: Sat, 14 Nov 2020 04:10:36 +0000
author: Anas Ouardini
draft: false
category: javascript js-questions
---


Javascript has a lot of names that most beginners don't know what all these names mean, and one of these names is dynamic, you probably heard about it in a course or when browsing some answers on StackOverflow. so what does dynamic language mean? and why Javascript is considered as a dynamic language?

I've done some research on forums and articles to find out what does it mean when a programming language is called a dynamic language.

**Javascript is considered as a dynamic language, not because of the result you're going to get when you run the code in the browser, but because of what you see when analyzing the code on paper. the real reason is that Javascript is using a loosely typed data structure and that means that you can use any of the declarations (var, const, let) and without specifying the variable type.**

in contrast, there are static languages which are don't compile into runnable code unless you make all value types known, if they are not known upfront your code is not going to get compiled.

and because Javascript uses loosely typed data structures, it doesn't restrict the variables to a static scope, but if you take a look at other languages like Flow, typeScript, Java, C, etc, you'll find that variables are statically typed which means you cannot define a variable without specifying git's type.

by the way, don't confuse the dynamically-typed and statically-typed with strongly and weakly-typed, those are other features that help class programming languages.

## what does it mean that Javascript is a dynamic language

I came across this definition when doing research for this topic, the definition is from Wikipedia which defines the dynamic language with computer science definition, which says that a dynamic programming language is a class of high-level languages, that instead of executing programming behaviors during compilation it performs that at runtime. and these behaviors could be adding a new code, modifying the type system, or extending objects.

this is a very general definition, I just wanted you to know that in general, now let's get to the details really help you see the difference between a dynamically-typed language and a statically-typed language. 

a lot of languages have that dynamic behavior in a way or another. some statically typed languages can also have a variant or dynamic data type that contains different data types.

bu the question is why those languages are being called statically typed and javascript is called dynamically typed language?

the reason why Javascript called like that because it doesn't have just a few aspects like other languages, it almost if not all of it is dynamic. 

all Javascript variables are dynamic in existence and type, even the whole code is dynamic since you can edit things at runtime with no errors to deal with, for example creating new variables and letting Javascript determining their type at runtime, creating functions, or replacing existing ones. Javascript code is added when more scripts are loaded in the browser, and loading more files is fine any time you like.

nowadays static code is generated in the background as well as static types, and Javascript is compiled in many implementations. but the behavior is still a dynamic behavior, only when the dynamic aspects are not used for a certain object the compiler generates static types.

with Javascript being dynamically typed is The most meaningful well-defined way in which Javascript is dynamic: data types are existing in the language but never checks if a program's types are okay until it's actually running. as we said earlier the opposite of dynamically typed is statically typed, as you might think the program's types are verified by inspecting their source code before running. some of those statically typed languages would be Java and ML.

**NOTE:** Most dynamic languages are also dynamically-typed, but not all languages. Dynamic programming languages are frequently referred to as scripting languages (ex: javascript), even though this term in its narrowest sense refers to languages specific to a given run-time environment.

## here is an example of what makes Javascript dynamic

I've been asking these kinds of questions and I was checking tons of articles and answers on forums until I find the one with examples then I'll read through it, I know how many examples are important especially when dealing with code.

let me show you an example of what makes Javascript a dynamic language:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers"><code>  var myString = 'I am a string';

  <code>myString</code></code>  <code>= 1; // assign an integer to <code>myString</code>

  console.log(<code>myString</code>); // 1 is loged to the console</code></code></pre>

The variable <code>myString</code> was a string before I assign the integer 1 to it, but then it switched to an integer when I did.

you can copy the code and run it on your browser and then open up the console (using F12 in most browsers), you'll find that there is no error even though I've changed the variable type by assigning an integer to a string variable. that what I meant when I was talking about changing the variable type during the execution time.

so what really makes Javascript dynamically-typed is being able to change the type of variables or functions during the execution without causing any errors to appear in the console or to stop the script from functioning well.

you may think it's a really good thing, since no errors are appearing,  well, it can be a good thing and a bad thing as well. this specific behavior doesn't come with only benefits but also with some drawbacks, that's why I recommend you go deeper if you want to understand your programming language very well.

i'll stop here since it's not our topic, let's talk a bit about the differences between dynamically-typed and statically-typed languages.

## dynamically-typed vs statically-typed

when writing transformation scripts, you really should be aware of the difference between dynamic typing and static typing, but don't worry there are only two differences.

the first one which you already know is that dynamically-typed languages (Javascript) don't perform type checking until the execution time while statically-typed languages perform the type checking at the compile time. and that means when you write a script in a dynamically-typed language such as groovy the code will be compiled even if it contained some variable type errors, and it'll run properly.

for example, if your code is written in a statically-typed language such as Java and contains errors, it will not compile until you fix that error. another thing is statically-typed languages require the data type of your variables to be declared before you can use them, while there is no such restriction in dynamically-typed languages, here are two examples about this:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">    // here is a statically-typed example written in Java

    int n;

    n = 5;</code></pre>

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">    // here is a dynamically-typed example written in Java

    n = 5</code></pre>

both of them are doing the same job which is creating a variable <code>num</code> and assign the number 5 as it's value, as you see there is a difference between the two which lies under the first line in the Java code, <code>int num</code>, which defines the data type of <code>num</code> as an integer. so it expects its variables to have their types declared before assigning values to them. Groovy on the other hand is dynamically-typed so it determines its variables' data types based on the values you assign to them, so it doesn't require type declaration. that's why dynamically-typed languages are a little bit easy to learn and they save you a lot of time and space.

speaking the easiness of a language, here is a topic where i talk about <a href="/posts/is-javascript-easy-to-learn/" class="rank-math-link">is javascript an easy langauge to learn?</a>

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">    // here is an example in Groovy

    number = 5

    numbre= (number + 15) / 2  // there is a typo in number when reassigning</code></pre>

I've written this code to show you a common problem that people face when learning a dynamically-typed language which is a typo in the variable's name if you didn't notice it yet. although it easy to learn and debug but it can lead to some issues like this. it may not show any error since <code>numbr</code> doesn't have to be declared with a data type behind it.

but when you try to do some calculations with <code>number</code> assuming that the first calculation <code>(number + 15)/2</code> is saved to <code>number</code> you'll face a really hard time figuring out where that weird number came from. but when using a statically-typed language it'll tell you that number is not defined and save you a lot of headaches.

so now you know what a dynamically-typed language and how it's different than a statically-typed language, and you know about the two concepts, you can pretty much tell the difference between some languages since it's easy for you to class the two types of languages.

## takeaway

there you have it, you got all the information that you need about this topic, and you've found the answer to your question which is why is javascript is called a dynamically-typed language or a dynamic language. and the most important thing is that you know what it means when a language is dynamically-typed.

I think a better question would be what does dynamically-typed mean and if Javascript is also considered a dynamic language, which the answer would be yes Javascript is dynamic/dynamically-typed language since it doesn't check the type of the variable until it is executing the script.

by the way languages, types are not limited to dynamic and static but there are tons of ways that you can class languages, other terms you might hear about during your learning curve are strongly and weakly typed languages, you can go ahead and read more about them as well if you're interested.


