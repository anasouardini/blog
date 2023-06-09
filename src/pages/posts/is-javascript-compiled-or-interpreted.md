---
layout: "../../layouts/blog-post.astro"
title: Is JavaScript Compiled or Interpreted
slug: is-javascript-compiled-or-interpreted
description: 
date: Mon, 28 Dec 2020 20:15:56 +0000
author: Anas Ouardini
draft: false
category: javascript js-questions
---


<br>Did you know that there are only two ways of translating to machine language? It could be compiled or interpreted. One of the biggest questions is whether JavaScript is a compiled or interpreted language. While most people assume that it is an interpreted language, this might not necessarily be true. Here is what you should know.

**Typically, JavaScript is an interpreted language and not a compiled one. Unlike C++ or Java, that's because you do not have to run this language through a compiler. Compilers help translate languages like C++ and Java into bytecodes that the machine can understand and execute.**

But first, it will be important to understand the difference between compiling and interpreting.

## What is a Compiled Language?

Compiled languages are languages whose source files need to be compiled into machine code. Unless this happens, execution cannot suffice. This approach compiles each file in a language the machine understands which is ... yes binary.

This computer software transforms various computer codes from one language into a different programming language. For instance, it could translate the codes from JavaScript to C++.

## What is an Interpreted Language?

An interpreted language is one whose source code can be read directly and executed simultaneously. Usually, it follows a line-by-line approach, ensuring that nothing is left behind. Ideally, this approach takes a set of instructions and returns specific answers. It is the same way JavaScript works.

## How JavaScript Interpretation Works

The JavaScript engine executes the JavaScript code, which is ideally an interpretation. This engine ensures that the machine understands all the codes you have written down. The interpreter takes the time to execute each statement, line by line. On the other hand, its compiler optimizes the execution, ensuring that the results are at your disposal much sooner.

While the initial JavaScript engines were only interpreters, modern ones have embraced just-in-time compilation abilities too. JIT compilation is significantly dissimilar to the traditional compilation witnessed in languages such as C++. Instead, it ensures that the code is compiled into an executable bytecode.

This source code undergoes the following phases before execution.

- **Tokenizing: **This phase involves breaking up the source code into small yet meaningful tokens. For instance, suppose you have the code <code>var team = 9;</code>. If you were to tokenize it, the results would be <code>var, team, =, 9, and ;</code>.

- **Parsing:** This process involves the analysis of various token sequences, which helps determine the statement's grammatical structures. Typically, this phase ensures that the machine understands the grammar of the programming language. It forms a tree of nested elements, which is called the Abstract Syntax Tree.

- **Generating the code:** Code generation is the last stage of the process. Here, the AST comes in as the input, generating bytecode for execution. The entire platform understands this code, and it can be refined further by optimizing the JIT compiler.

## Why Do some Assume that JavaScript is a Compiled Language?

There is no denying that various people hold that JavaScript is a compiled language. Traditionally, it is an interpreted language, but this is not necessarily true at all times. For instance, JavaScript runs the V8 engine on Chrome, which compiles its native code internally. This compilation helps realize results on time. The same holds for TraceMonkey and Rhino.

The truth is that JavaScript has undergone significant evolution. This evolution has prompted the development of JIT compilers, which help optimize execution. This system plays a vital role in ensuring that you realize results within a short time. It also assures you of the following advantages.

- This method requires less memory, ensuring that the process is relatively seamless.

- It helps reduce faults on the page

- It is easy to perform code optimization per statistical analysis

A look at a practical example will help make logical decisions. Suppose you have the following program.

```js
    Console.log ("cool coolness") ;
```

okay okay

Theoretically, the JavaScript interpreter will read the first line first, which is 'cool coolness' followed by a syntax error. However, this is no longer the case with modern JavaScript. Here is yet another example.

```js
max (8, 9); // ==> 9

function max (num8, num9) num8 > num9 ? num8: num9
```

Here, JavaScript knows that 9 is the max, even before concluding. It shows that the code has to first compile before getting executed.

## Why JavaScript as an Interpreter is Beneficial

You can barely overlook what an impact JavaScript has made in the world of technology. But how about its interpreter? Here are the advantages you get from the interpreter.

- **Easy to set up and run:** Interpreters have grown to be relatively easy to set up. Because you do not need to convert its code to another language, this process is relatively straightforward.

- **No compilation:** Typically, there is no need to worry about compiling the codes. The execution is straightforward, and the translation is line by line. With the JIT system in place, this process is smooth, assuring you of results within a relatively short time.

The interpreter has significantly improved JavaScript, as you can execute files immediately they are sent from the server. The user needs to do no more than waiting at the end of the line. However, the process could be slow if you are running a similar code from time to time.

## Compiler vs. Interpreter

You can hardly avoid the battle between choosing an interpreter and a compiler. There is no denying that the compiler takes long, giving the interpreter an edge. However, the compiler seems to be much faster at generating results. Things become rosier if you combine the two, mostly in the form of JIT. JIT ensures that the process is smooth and the results stream in on time, providing you with the convenience you deserve.

## takeaway

In conclusion, JavaScript is an interpreted language. However, it boasts a compiler called JIT. This combination helps boost its speeds and efficiency. Its compilation process produces a binary bytecode that is relatively easier to execute. JavaScript's virtual machine does the execution. However, this compilation does not take place at the initial stage. For this reason, you can only conclude that it is an interpreted language.

**recommended articles:**

- <a href="/posts/why-javascript-is-powerful/" target="_blank" rel="noreferrer noopener">why JavaScript is so powerful and popular</a>

- <a href="/posts/why-javascript-is-considered-as-a-dynamic-language/" target="_blank" rel="noreferrer noopener">why JavaScript is considered as a dynamic language</a>

**references:**

- https://www.voidcanvas.com/is-javascript-really-interpreted-or-compiled-language/

- https://www.geeksforgeeks.org/what-is-just-in-time-jit-compiler-in-dot-net/

- https://medium.com/@allansendagi/inside-the-javascript-engine-compiler-and-interpreter-c8faa638b0d9

- https://medium.com/@almog4130/javascript-is-it-compiled-or-interpreted-9779278468fc


