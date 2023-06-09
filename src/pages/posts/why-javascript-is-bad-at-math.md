---
layout: "../../layouts/blog-post.astro"
title: Why Javascript Is Noob at Math?
slug: why-javascript-is-bad-at-math
description: 
date: Tue, 24 Nov 2020 15:18:21 +0000
author: anas ouardini
draft: false
category: javascript js-questions
---


so you just started learning Javascript and you heard in some Javascript course or an article or a thread on Quora that Javascript suck at math and you wondered how can a programming language using a computer be bad at math, and you might do some mathematical problems with Javascript to check if that's true, then you find that it's fine until you do some floating-point numbers.

if you don't even know anything about this topic and you didn't ever wonder about this then I like that you're interested in knowing more about Javascript because it's going to help you so much in the long run. here is an example of what I'm talking about: 

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">**For example: **26.4 - 25 = 1.3999999999999986</code></pre>

**Javascript is not accurate at math, suck at math, terrible at math, call it whatever you want to call it.** but let me first tell what I found when I did my research.

so if you're a beginner you might think that Javascript is not useful when it comes to math's problems, No I don't think you're not smart, not at all but it's more common to see this since most beginners don't have that solid understanding of the language. so if that's not the case then what's up with the floating-point numbers? is Javascript terrible at math? why it gives some weird result when using floating-point numbers?

**javascript is bad at math because it uses the system-provided floating-point format, and this system is representing numbers/values in machine code which is binary rather than using a decimal to do that, so floating-point numbers like 0.2 in decimal format for example can't be represented in this system in that same format, but instead, the closest value to it is stored, and that's what results in a small error.**

**let's take the same value 2.0 as an example, this numeric literal results in a floating-point value whose exact value in binary is 0.200000000000000011102230246251565404236316680908203125, of course, Javascript don't represent it like that but it cuts out some digits to make it look like so 0.20000000000000001, but both of them are confusing. and it's all about floating-point errors that appear when doing those calculations in binary.**

**the same case is with arithmetic operation on floating-point numbers, it also may result in a value that is not really representable, so to make the result more mathematically correct it needs to make that value closest to the representable value. these are the reasons why Javascript is might look bad at math for somebody.**

actually, Javascript doesn't suck at math it's just the nature of how computers work, every other language is showing these weird representations when trying to calculate floating-point numbers. but they also provide some  methods that help make these values representable, in Javascript for example we have <code>Math.round()</code>, try to use it if you came across some numbers like those above.

## example why Javascript is bad at math

let's pretend that we're trying to solve a problem and we're using javascript for that, and this problem including some math to be involved.

we're going to write a function that takes a number as an argument and give a string that represents the number's simplified fraction.

here is an example of that: fraction(1,5) === '3/2'

one way of solving this problem would be multiplying the decimal and its starting denominator which is by ten until the numerator is whole. and then we can calculate the greatest common denominator of both, and then return the result, let me show you the coding that's responding to the first part:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">var fraction =  function(num){  

    var denominator=1;

    //while num is not a whole number

    while(num%1!==0){

        denominator*=10;

        num*=10;

    }

    console.log(num,denominator);

}

fraction(0.253);  </code></pre>

then you execute this code expecting to see 253 and 100 to appear in the console, but javascript instead return this instead:

**25300000000000004 and 100000000000000000**

and this is not the only case when Javascript give this weird output to a very simple math problem, here are some additional examples to verify that for you:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">console.log(0.253 + 1); //1.2530000000000001  

console.log(0.2 * 0.1); //0.020000000000000004  </code></pre>

## not only javascript is bad at math

keep in mind that this is a very normal thing as long as computers still using binary language which is going to be around for a very long time or maybe forever.

Example in python 2\3

<pre title="Python Example" class="wp-block-code"><code lang="python" class="language-python line-numbers">python> .4 + .2

0.6000000000000001

python> .4 + .1 + .1

0.6</code></pre>

The same happens in Julia

<pre title="Julia  Example" class="wp-block-code"><code lang="python" class="language-python line-numbers">julia> .4 + .2

0.6000000000000001

julia> .4 + .1 + .1

0.6</code></pre>

and also Scala gives the same result:

<pre title="Scala Example" class="wp-block-code"><code lang="python" class="language-python line-numbers">scala> 0.4 + 0.2

0.6000000000000001

scala> 0.4 + 0.1 + 0.1

0.6

</code></pre>

and this is in Haskell:

<pre title="Haskell Example" class="wp-block-code"><code lang="python" class="language-python line-numbers">Prelude> 0.4 + 0.2

0.6000000000000001    

Prelude> 0.4 + 0.1 + 0.1

0.6

</code></pre>

but only R v3 gets it right because the way it modifies that after the binary calculations:

<pre title="R v3 Example" class="wp-block-code"><code lang="python" class="language-python line-numbers">> .4 + .2

[1] 0.6

> .4 + .1 + .1

[1] 0.6</code></pre>

## here is a deep explanation of why programming languages are bad at math

you should know by now something about floating-point arithmetic, so you only can have limited precision as we saw in the above examples where **26.4 - 25** give you **1.3999999999999986**

here is a page on Wikipedia that talks about <a aria-label="floating-point (opens in a new tab)" rel="noreferrer noopener nofollow" href="http://en.wikipedia.org/wiki/Floating_point" target="_blank" class="rank-math-link">floating-point</a> numbers if you want to read more about it.

you might ask, what going on with Javascript? well, what it does is saving the decimal float numbers as binary floating-point numbers, you might look at a decimal number and find it simple but in binary it becomes a non-terminating series in binary **IEEE 754** format, so is using a different number type for math in javascript a solution for this? the answer is no, in Javascript we have only one type of numbers in Javascript. and this is because Javascript is meant to be running in the browser only.

all of the languages mentioned above are using the system-provided floating-point format, which instead of storing numbers in decimal it store them as binary, so it can't represent values like **0.4** or **0.7** can't be represented in their decimal format but instead the value stored is the closest representable value, and that what's resulting in a small error.

let's take 0.2 as an example, the exact value of the floating-point number is **0.200000000000000011102230246251565404236316680908203125**. any given arithmetic operation on floating-point numbers might output a result that it's not representable, so if you want the true mathematical result is removed and the one used is the closest representable value. and this is the basics of why that weir result when calculating numbers with fractions.

however, this doesn't explain all the differences between languages, in all those examples above all of the calculations are being made the exact same way and all the results are also the exact same, the way that each language chooses to display that result is where the difference lies.

there isn't an only way of formatting but there many used strategies for this, the three most common ones are:

- Calculate/Compute and display 17 correctly-rounded significant digits, and maybe stripping trailing zeros if there are any. If the output is containing 17 digits it is guaranteed that you'll have a distinct representation of that binary64 in order for a floating-point value can be undoubtedly recovered from its representation. the smallest integer with this feature is 17. it's the strategy that Python version 2.6 uses.

- Calculate and display the shortest decimal string that rounds back to the given binary64 number below the usual round-ties-to-even rounding mode. you might find this strategy complicated than the first one but preserves the property that distinct floats that have distinct representations. and it's more likely to output a more pleasant result.  and this special strategy is what all the languages I gave in the examples above are implementing except the R language.

- Calculate and display 15 or fewer correctly rounded significant digits. what this can do is hiding some errors that appear when converting from decimal values to binary. so shows you the exact decimal arithmetic while it's a kind of illusion, but it works. one negative thing about it is that distinct floats can share the same representation. so the second strategy is what the other languages are implementing except the R language which is using this one.

so now you know that this problem is also a thing that exists in other languages as well, but that doesn't mean that JavaScript doesn't have some weird and bad parts, check this article out where I talk only about <a href="/posts/why-javascript-is-weird/" target="_blank" rel="noreferrer noopener">why JavaScript is so weird</a>.

JavaScript also has lots of weird and bad parts, but this should never confuse you. Douglas Crockford wrote a book called "**JavaScript the good parts**" which is a way to focus on the good parts of JavaScript and learn them very well so that the weird parts can't interfere with your learning journey.

**here is the book if you want to check it out on amazon:**

- <a href="https://amzn.to/38tLDyD" rel="noreferrer noopener sponsored nofollow" target="_blank">JavaScript: The Good Parts: The Good Parts 1st Edition</a> (Affiliate Link)

## Why do computers use such a stupid system?

it's not stupid and if you still call it like that you definitely didn't understand what I wrote above, but anyway the takeaway is that decimal numbers can't represent numbers like 1/3 accurately so you need to round to 0.33, and it's never gonna be true 100% because if you add those three thirds like this (0.33 + 0.33 + 0.33) = 0.99 it's never going to result in 1.

and when it comes to computers they are using binary since it's very fast at doing these calculations, and for most of the calculations, it doesn't matter if a tiny error is made in the calculations since it's not 100% accurate anyway and it needs to be rounded to the closest number.

## What can I do to avoid this problem?

it's easy to avoid this by rounding for example but it depends on the kind of calculations you're trying to do:

you might be working with money values, in this case,** you want your results to be added up exactly**, you have to use a special decimal datatype.

**if your goal is just not to show these extra digits after the coma**, just format your result rounded to a fixed number of decimal digits but don't use it in calculation or else it's not going to be very accurate.

**if you have no decimal datatype available**, the solution and alternative to that are to work with integers only, an example for that would be: when calculating money, instead of using 2 dollars and 344 cents in a calculation like this 2,344 you can calculate 2 alone and then calculate 344 with the other digits after the comma in the second value. but it's more work.

so why some calculations like 0.1 + 0.4 work exactly as it should.

in this case, the output 0.5 can be represented exactly as floating-point values, and you can to rounding errors in the input numbers in order for those errors to cancel each other out. but it's not always can be relied upon for example when the two numbers we talk about are being stored in differently sized floating_ponit representations first, those rounding errors might not offset each other so they're not going to cancel each other.

let's take a look at another case, for example, 0.1 + 0.3 is not going to result in 0.4, but it can output a close enough result so that 0.4 would be the closest shortest value to the result. a lot of languages display that number rather than converting the actual result back to the nearest decimal fraction.

## using Math js - an extensive math library

this is not a solution to the floating-point problem, but this is for people who need to deal with complex numbers, big numbers, fractions, and matrices. it comes with a huge set of built-in functions for taking your math with JavaScript to the next level.

if you're interested and you want to know more about this library, go to <a rel="noreferrer noopener" href="http://mathjs.org" target="_blank">Mathjs.org</a>.

### how to use math.js library

in case you want to use Math.js ni the browser, you can copy the following code:

<pre class="wp-block-code"><code lang="markup" class="language-markup line-numbers"><code><!DOCTYPE HTML> </code>

<code><html></code>

  <code><head></code>

    <code><script src="<code><a href="https://cdnjs.cloudflare.com/ajax/libs/mathjs/3.3.0/math.min.js" target="_blank" rel="noreferrer noopener">https://cdnjs.cloudflare.com/ajax/libs/mathjs/3.3.0/math.min.js</a></code>" type="text/javascript"></script></code>

  <code></head></code>

  <code><body></code>

    <code><script type="text/javascript"></code>

      <code>// the implementation of math.js</code>

      <code>math.sqrt(-4); // 2i</code>

    <code></script></code>

  <code></body></code>

<code></html></code></code></pre>

if you're using a task runner such as Gulp.js, you need to install it using:

<pre class="wp-block-code"><code lang="bash" class="language-bash line-numbers"><code>npm install mathjs</code></code></pre>

and then you have to include it in your gulpfile.js:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">import {   atan2, chain, derivative, e, evaluate, log, pi, pow, round, sqrt } from 'mathjs'

// functions and constants

round(e, 3)                    // 2.718

atan2(3, -3) / pi              // 0.75

log(10000, 10)                 // 4

sqrt(-4)                       // 2i

pow([[-1, 2], [3, 1]], 2)      // [[7, 0], [0, 7]]

derivative('x^2 + x', 'x')     // 2 * x + 1</code></pre>

## takeaway

it might cause you some considerable hair loss if you put too much energy into understanding the basics of this. in C# we have the Decimal class and java has a BigDecimal class. but they always going to have errors due to what we talked about above.

there are two methods that Javascript provides in order to help rounding <code>Number.toFixed()</code> and <code>Number.toPrecision</code>.

just remember that it's not because Javascript sucks at doing math but all languages are facing this kind of problem. and also it's possible to avoid this error using some methods in the language.

another thing to keep in mind is that floating point math is not precise by definition. since the values are represented with limited precision, all numbers can't be represented.

to not make this article longer than it should be which I think it's already long for this kind of small topic, I'll end this here and if you're interested in reading more about this you can follow the links provided in this article.

**recommended articles:**

- <a rel="noreferrer noopener" href="/posts/need-to-be-good-at-math-to-learn-javascript/" target="_blank">Do You Need to Be Good at Math to Learn JavaScript?</a>


