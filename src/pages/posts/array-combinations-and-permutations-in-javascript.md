---
layout: "../../layouts/blog-post.astro"
title: How to do array combinations in Javascript?
slug: array-combinations-and-permutations-in-javascript
description: 
date: Mon, 08 Mar 2021 17:21:59 +0000
author: Anas Ouardini
draft: false
category: javascript js-questions
---


As a programmer, when you are coding an application, there may be a need of using too many variables of the same type. This is achieved by using Array Combinations. Generating the combinations of elements is similar to counting in a number system where the base is taken as the number of array elements in a given array.

There are various ways to do it in Javascript and in this piece, we will talk about Javascript Array Combinations and how they can be used.

## How to do Array Combinations in Javascript?

Though obtaining all possible array combinations depend mostly on the constraints that you use, you can still do array combinations in Javascript rather easily using various ways irrespective of the constraints you are using.

To accomplish that you can possibility list out all the arrays that you have and then make combinations of all the arrays to reduce complexity and wastage of time. For instance, you can convert values obtained from input arrays into a map and then combine the values from the n numbers of input arrays.

It is often required to generate all possible combinations of one item and two different Javascript arrays. Array Combinations in Javascript can be done in two ways:

- Recursive Way
- Iterative Way

We will talk about how both these methods can be used to get all possible array combinations in Javascript.

Let us understand each of these approaches with the help of examples.

### Recursive Way

Recursion is a way in which a certain thing is defined in its own terms or itself or in its own type. The recursive way of problem solving can be used to obtain array combinations using a number of approaches.

Here are some approaches on how you can obtain all array combinations recursively:

#### Approach 1

- You will first have to get all the arrays in one array.
- This is achieved recursively. Here a base condition is used - that is when the array length becomes zero, then the string that has been built up until that moment is returned as the result. Else
- The first array element can be reduced by using the .reduce() method and the result that is returned from recursion. Every time the first array item is left, recursion is being called. Plus the previous value of the array is concatenated with each array element.
- The final array that is returned contains the combination of all possible arrays.

Here's how this approach is used:

```js
function getArcobmn(arr, pre) {
  pre = pre || '';

  if (!arr.length) {
     return pre;
  }

  var ans = arr[0].reduce(function(ans, value) {
     return ans.concat(getArcobmn(arr.slice(1), pre + value));
  }, []);

  return ans;
}
```

#### Approach 2

- First, get all the arrays in one single array.
- We will be using recursion in this approach as well but here the base condition changes. The base condition in this array is that when the array length becomes one then the given element of the array is to be returned. Else
- Recursion is called after the first array element is left and the result is stored in the variable using otherCases.
- Then using a loop, loop through all elements of the Array using otherCases and inside each element and also loop through the first array element (Array(arr)).
- Then concatenate every array element and then push the results in the resultset or answer array.
Here's how this approach is used:

```js
function getArcombn(arr) {
    if (arr.length == 1) {
       return arr[0];
    } else {
       var ans = [];
       // recur with the rest of the array.
       var otherCases = getArcobmn(arr.slice(1));
       for (var i = 0; i &lt; otherCases.length; i++) {
         for (var j = 0; j &lt; arr[0].length; j++) {
           ans.push(arr[0][j] + otherCases[i]);
         }
       }
       return ans;
    }
}
```

Let us now look at the iterative way of combining arrays:

### Iterative Way

The process of repetition or doing a set of things or calculations again and again is termed as Iteration. In JavaScript, Iteration is achieved by using for loops.

You can achieve array combinations in JavaScript through the Iterative way. Most of the conditions and everything remains the same with the difference of the fact that loops are used to fetch the required combinations.

A simple way of doing it would be to do a double for loop on the array where you are skipping j number of elements in the second loop that you are using.

```js
let array = ["banana", "apple" , "lemon", "mango"];
let results = [];
for (let j = 0; j < array.length - 1; j++) {
    // This is where you'll capture that last value
    for (let k = j + 1; j &lt; array.length; k++) {
        results.push(`${array[j]} ${array[k]}`);
    } 
} 

console.log(results);
```

before we move on to the array permutations, I want you to check out this article which is also about arrays in JavaScript but this one talks about <a href="/posts/remove-duplicates-from-a-javascript-array/" class="rank-math-link">removing duplicate data from an array</a>, I listed out all the possible methods from basic to advanced ways of doing it.

not only that but, you'll going to know how to remove and filter out data from a JS array, I used <a href="/posts/should-you-start-with-es6-or-es5/" class="rank-math-link">ES5 as well as ES6</a> syntax for those who are using the modern syntax. I also talked about each method and how it affects the performance of your script.

in that article, I used many JS (ES6 and ES5) methods and also explained them one by one so that the article is going to be beneficial in many ways.

## Array Permutations in Javascript

After Array Combinations, you can also use Array Permutations in Javascript. The dictionary meaning of Permutations means the number of ways a given set of things can be rearranged. For instance, for three colors, you can have six different ways in which they can be ordered or arranged.

Think this to be <a href="/posts/convert-string-to-number-in-javascript/" class="rank-math-link">numbers and strings</a> when coding, this would translate to the number of ways a given set of numbers or characters can be rearranged. The concept of permutation is extremely useful in determining the possible set of results that can be obtained with a given condition or input date.

In Javascript different array permutations can be achieved by Iterations. This can be done as per the below steps:

- Create an array that has no values or is empty. This array will be used to store values and elements in case more than one value is returned.
- Loops need to be used to have iterations through all characters in the string.

The code for finding permutations can look something like this:

```js
let findPermutations = (string) => {
    if (!string || typeof string !== "string"){
        return "Please enter a string"
    } else if (string.length &lt; 2 ){
        return string
    }

    let permutationsArray = []
    for (let i = 0; i &lt; string.length; i++){
        // do something
    }
    return permutationsArray
}
```

**Takeaways**

To conclude and to summarize, it can be said that array combinations and permutations can be obtained in Javascript suing various ways and approaches. You can either use the recursive way and follow certain approaches to do it recursively. Alternatively, you can obtain array combinations using iteration and loops in Javascript.

This piece here provides you with a general idea about how these various techniques can be used to obtain array combinations and permutations. Use this piece to learn about the different approaches and ways that you can use to get array combinations.

You can but of course, use these approaches in your own way and in a manner that suits your code. **Happy Coding!!**


