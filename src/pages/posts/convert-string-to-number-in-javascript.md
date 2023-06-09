---
layout: "../../layouts/blog-post.astro"
title: How to Convert String to Number in JavaScript?
slug: convert-string-to-number-in-javascript
description: 
date: Thu, 24 Dec 2020 12:44:33 +0000
author: Anas Ouardini
draft: false
category: javascript js-questions
---


Did you know that data management is inalienable from programming? A well-conceived data management system ensures that you have an easier time creating meaningful visual representations of data. It also helps create complementary tools to analyze this data. During this time, converting from string to number and vice versa would be vital.

Conversion of a number to a string is an inevitable operation. While it is a little straightforward, one will have to learn a few intrigues. Here are a few insights to keep in mind.

**Converting a string to a number in JavaScript is straightforward. Typically, the conversion is all about parsing. The process can happen in three main ways, including parseInt, parseFloat, and Number(). You could also consider the unary operator method.**

**Parameters**

- String

**A string is a value to parse or convert.**

- Syntax<br>These are sets of rules that help define correctly structured programs. For instance, you need to understand the concept of capitalization and the proper use of parentheses. Otherwise, you will barely get the results you envision.

- Return Value<br>It is the result you get after the conversion of a string to a number. It could be a number or NaN. NaN stands for not a number, which means the variable is not an integer.

## Can You Convert String to Number in JavaScript?

**Yes. JavaScript provides a myriad of functions that help convert a string to a primitive number. Some of the methods will include the following.**

### using the parseInt() method

This method helps convert a string into a number with decimal points. This approach can take up to two arguments, the string and the radix. If there is no integer in this string, the output will be a NaN.

It usually starts at position zero, and it determines whether the character there can get converted into a real number. If there is no character to convert, the result is a NaN. Here is one such example:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">Const str = ‘What is better than 56?’

console.log(parseInt(str)) //NaN</code></pre>

Ideally, this example has no character at position zero, meaning the result will always be a NaN. Unless the character at position zero is valid, the method cannot carry out the test. Once it gets to an invalid point, it converts the current string to a number. For instance:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">console.log(parseInt (“42aspect23”)) //42</code></pre>

Here, the result is 42, as the method stops parsing at ‘aspect,’ a NaN.

On the other hand, you could rely on a radix to avoid unreliability. Usually, an undefined or zero radices are assumed to be 10. The exception is when the number starts with character pairs, including 0X and 0x. In this case, the assumed radix will be 16.

Undoubtedly, there are times that the radix can be undefined or absent. In such instances, JavaScript relies on ECMAScript 5 to specify that the decimal is used. However, some browsers might not support this, prompting you to specify the radix when using parseInt.

### using the parseFloat() method

There is no denying that parseFloat and parseInt are relatively similar. However, parseFloat does not use radix as an argument. As such, the string has to represent floating-point numbers in decimal form. There are no octal or hexadecimal. Further, this approach considers decimal points as valid characters. That means it stops parsing at the first instance of a decimal.

**Here is an example**:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">Console.log (parseFloat (“2.156.3”)) // 2.156</code></pre>

The return is 2.156. Typically, the first number in the string is the only one returned. Leading trailing and whitespaces are ignored. However, if the first character is not a number, the result will be a NaN.

### using the Number() method

This approach focuses on the number value. While it can handle one decimal, it will readily fail whenever there is an increase in the decimal points. It does allow trailing and white spaces, despite ignoring them.

Ideally, this method does not attempt to parse through strings piece-by-piece. Instead, it converts the entire string argument into a number at once. Here is an example to illustrate this.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">Const str = ‘156xgf’;

Number (str); // NaN fails to convert the entire string despite attempting

parseInt (s); // 156 It stops once it reaches the first letter, x</code></pre>

Based on the illustration above, this approach relies on type conversion, which attempts to convert values to a number. Here are a few things that happen.

- An empty string ‘’ becomes zero

- Non-numerical strings become NaN

- Number ‘’ results in a 0

- parseInt returns a NaN

- While undefined becomes NaN, null becomes 0

- True becomes 1

- False returns 0

### Unary+ Operator

The Unary+ Operator has also become a relatively popular option for many people. Ideally, this approach tends to mimic the Number() method. Often, it uses a single argument to operate. The argument could be after or even before the operator. Because you cannot override it, this function has proven reliable and, it provides guaranteed functionality.

You can easily rely on it to parse various functions or the Number() functionalities. It uses less code, but that does not mean it is the most concise. For that reason, ensure that you are relatively careful when dealing with this.

**Here are a few examples of how it works.**

<pre class="wp-block-code"><code class="">+”698” returns // 698

+”325.236” returns // 325.236

+”325.236.25” returns NaN

+”Bet on me” returns // NaN</code></pre>

**The unary operator could also use a negative or minus sign. For instance:**

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">Let a =65

a =+a; // 65</code></pre>

Ideally, the unary minus comes in to negate the value.

## So, which method is best?

There is barely any straightforward answer to this. That is because people will always have distinct preferences, depending on what they find easy for them. However, the Number() method has become relatively popular, thanks to how straightforward it is. Its reliability, conciseness, and functionality have always remained astounding.

## takeaway

In conclusion, converting strings to numbers in JavaScript is an inevitable task. However, its simplicity and straightforwardness mean you can carry it out at any time. As long as you embrace a suitable method, you will have no reason to worry. The most common choices for you would be parseInt, parseFloat, and Number(object). You could also consider unary operators. Whichever you choose from these, you will be confident of the best returns.

here some recommended articles:

- <a href="/posts/what-language-is-javascript-written-in/" target="_blank" rel="noreferrer noopener">what language is JavaScript is written in?</a>

- <a href="/posts/why-javascript-is-bad-at-math/" target="_blank" rel="noreferrer noopener">why JavaScript is bad at math?</a>

**Sources**:

- <a rel="noreferrer noopener nofollow" href="https://stackabuse.com/javascript-convert-string-to-number/" target="_blank">https://stackabuse.com/javascript-convert-string-to-number/</a>

- <a rel="noreferrer noopener nofollow" href="https://www.freecodecamp.org/news/convert-string-to-number-javascript/" target="_blank">https://www.freecodecamp.org/news/convert-string-to-number-javascript/</a>

- https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript

- https://www.sitepoint.com/data-management-visualization-javascript/

- https://www.javascripttutorial.net/javascript-unary-operators/

- https://www.bitdegree.org/learn/javascript-convert-string-to-number#learn-syntax


