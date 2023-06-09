---
layout: "../../layouts/blog-post.astro"
title: How to remove duplicates from a javascript array
slug: remove-duplicates-from-a-javascript-array
description: 
date: Wed, 24 Feb 2021 20:56:18 +0000
author: Anas Ouardini
draft: false
category: javascript js-questions
---


<div class="wp-block-columns">

<div class="wp-block-column" style="flex-basis:66.66%">

I came across this question many times in my web development journey during interviews and also when I was preparing for them, they simply tell you to remove duplicates from a certain array, this problem can be asked in many different ways and with certain conditions, that's why I'm going to mention all the different methods techniques that can help you solve this really simple question.

so that you can answer this question whenever you encountered one in your interview or in your project, and whatever the conditions are.

</div>

<div class="wp-block-column" style="flex-basis:33.33%">

<figure class="wp-block-image size-large"><img src="/wp-content/uploads/2021/02/remove-duplicates-from-a-javascript-array-683x1024.webp" alt="" class="wp-image-943"/></figure>

</div>

</div>

**the easiest and the quickest way to get rid of duplicates from an array and leave only the unique values is by using the ES6 <code><a aria-label=" (opens in a new tab)" href="https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">Set</a> </code>object, you simply give it any type and let it extract only the unique entries automatically.**

there you go, the simple and to-the-point answer you're looking for. unless you want to know all of those other methods.

**Deleting duplicate elements from an array is done by using set and filter and other methods that I listed in this article, some of them are using ES5 Javascript syntax and some are implementing ES6 and jQuery and VueJS way. I also listed a clever and advanced way to get rid of duplicates from an array in your specified way.**

**also, I mentioned which ones are good for performance and which ones are not in case you're planning to take your project to the next level or you're trying to look very clever to the interviewer.**

**by using <code>Set</code> object like this, <code>let unique = hasDuplicates => [...new Set(hasDuplicates)];</code>, and this is the shortest, efficient and quickest way of doing it.**

## ways to remove duplicates from an array in JavaScript ES5

### 1. using the Brute force method

this method basically removes duplicates from an array using for loop, but that's how brute force works, so it's the simplest method to understand.

this solution is implementing two arrays to make things simpler, we're going to use the first one for our input and the other one for the output. this simple algorithm is basically looping through the array we want to make it unique (exclude duplicates).

and it checks each element in the list to see whether it's in the result list (an empty array). if the element from the original array is in the result array we move to the next element but if it's not we include it in it (the result array).

so whenever we copy an entry from the original array to the result array it's going to be copied only one time and that's how it's going to be clear from any duplicates.

> I'm only using the ES5 syntax in almost all of the snippets you're going to go through since not everybody knows ES6, but of course, you can use const and let instead of var, etc. 

```js
function makeItUnique(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var exists = false;

    for (var j = 0; j < result.length; j++) {
      if (array[i] === result[j]) {
        exists = true;
        break;
      }
    }

    if (!exists) {
      result.push(array[i]);
    }
  }
  return result;
}
```

here is what it will look like when you run the `makeItUnique()` function:

```js
  var notUniqueArray = ['1', '1', '3', '4', '5', '5', '🗿'];
  makeItUnique(notUniqueArray); 

  // it will return this array ["🗿", "1", "3", "4", "5"]
```

this algorithm is using the O(n²) time complexity, and that's because we're looping through two arrays, if you're interested in making it less complex which means using only O(n) (linear time), well you have to implement a method called `hash-map`, which I'm going to explain in the 3d method.

### 2. removing duplicates using for-each loop

this method is a lot like the previous one but instead, it uses a result object instead of an array and `forEach` instead of `for` loop.

and since the object has keys and values instead of just values like in arrays, you only need one function.

```js
function makeItUnique(array) {
  var uniqueValues = {};
  array.forEach(function(originalElement) {
    if(!uniqueValues[originalElement]) {
      uniqueValues[originalElement] = true
    }
  })

  return Object.keys(uniqueValues)
};
```

the same as the one above, it looks for the non-existence of elements of the notUniqueArray[] array in the uniqueValues[], using if(!uniqueValues [originalElement]) if it's `true` (doesn't exist) then it'll add it the `uniqueValues[]` array.

it checks if the element from the `notUniqueArray` array exists in the object, if not it assigns it to the key of the object and assigns `true` to the value just because it can't be empty, and then returns keys of that object which are the unique values of the `notUniqueArray` array, the cool thing about this method if your original array contains only numbers they will be ranged from the smallest to the biggest number.

```js
  var notUniqueArray = ['1', '1', '3', '4', '🗿', '🗿', '0'];
  makeItUnique(notUniqueArray); 

  // it will return this array ["0", "1", "3", "4", "🗿"]
```

### 3.implementing hash-map to eliminate duplicates from arrays

if you read through the previous solution (the brute force method) remember when I mentioned O(n²) time complexity and O(n) complexity, well this is the O(n) complexity which using the hash-map method to filter out the unique values.

here is a video that explains JS map:

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">

https://www.youtube.com/watch?v=G3BS3sh3D8Q

</div></figure>

now we have two arrays and an object (map), the first array is the original array that contains the duplicate entries and the second array is the result array which contains only the unique values.

and the <code>map{}</code> object is what we call the map which maps the values since when you check <code>if (!map[array[i]])</code> it will return <code>true</code> if the <code>array[i]</code> (a certain element from the original array) doesn't exist in the map object and if it is, it will return <code>undefinde</code> since we're using the <code>!</code> (logical Not).

and that's how we can keep track of whether we have added a value from the original array in the object's key or not. and then if it returns <code>true</code> 

```js
function makeItUnique(array) {
  var uniqueArray = [];
  var map = {};

  for (var i = 0; i < array.length; i++) {
    if (!map[array[i]]) {
      result.push(array[i]);
      map[array[i]] = true;
    }
  }

  return uniqueArray ;
}
```

as you're going to see this method only uses one <code>forEach</code> loop, this is of course a better solution than the first brute force method but it's not the most efficient one, since we're going to go through a better solution in the ES5 solutions section after this one.

let's run this script to see the result.

```js
var arrayWithDuplicates = [🗻,🗻,2,3,3,4,4,5,5];
removeDuplicates(arrayWithDuplicates); //[🗻,2,3,4,5]

var arrayWithDuplicates = [2,3,3,🗽,2,7,5,5,4,9,4,14];
removeDuplicates(arrayWithDuplicates); //[2,3,🗽,7,5,4,9,14]

var arrayWithDuplicates = [5,2,3,2,5,5,1,🗿,2,1,🗿,5,8];
removeDuplicates(arrayWithDuplicates); //[5,2,3,1,🗿,8]
```

I'm pretty sure that you have understood the idea of mapping the values inside of an object but, here is a brief explanation for a better understanding:

we have this chart that shows each element (variable, object, array) of our script in all their states while the script is running, it's demonstrating the first example of [1,1,2,3,3,4,4,5,5], it shows how the script is acting each time after the <code>map[array[i]]</code> object returns a certain value.

<figure class="wp-block-table"><table><tbody><tr><td><code>i</code></td><td><code>array[i]</code></td><td><code>map[array[i]]</code></td><td>if ( ! map[ array[ i ]] </td><td><code>uniqueArray</code></td></tr><tr><td>0</td><td>🗻</td><td>undefined</td><td>True</td><td>[🗻]</td></tr><tr><td>1</td><td>🗻</td><td>true</td><td>False</td><td>[🗻]</td></tr><tr><td>2</td><td>2</td><td>undefined</td><td>True</td><td>[🗻, 2]</td></tr><tr><td>3</td><td>3</td><td>undefined</td><td>True</td><td>[🗻, 2, 3]</td></tr><tr><td>4</td><td>3</td><td>true</td><td>False</td><td>[🗻, 2, 3]</td></tr><tr><td>5</td><td>4</td><td>undefined</td><td>True</td><td>[🗻, 2, 3, 4]</td></tr><tr><td>6</td><td>4</td><td>true</td><td>False</td><td>[🗻, 2, 3, 4]</td></tr><tr><td>7</td><td>5</td><td>undefined</td><td>True</td><td>[🗻, 2, 3, 4, 5]</td></tr><tr><td>8</td><td>5</td><td>true</td><td>False</td><td>[🗻, 2, 3, 4, 5]</td></tr></tbody></table></figure>

### 4.removing duplicates implementing forEach and include

the array <code><a aria-label=" (opens in a new tab)" href="https://www.w3schools.com/jsref/jsref_includes_array.asp" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">includes()</a></code> method can be used on strings and arrays, in our case, it checks if the given element or value exists in the array or not, if yes it returns true and if not it returns false.

and the <code>for-each</code> loop doesn't need to be explained.

this solution is the easiest one to understand and also the most efficient one among the ES5 solutions, it's very clean since you don't have to use two loops or implement another object.

here is the code example of what i just said:

```js
  var uniqueChars = [];
  function makeItUnique(array) {
    array.forEach((c) => {
      if (!uniqueChars.includes(c)) {
          uniqueChars.push(c);
      }
    });
    return uniqueChars;
  }
```

here is the output of this function.

```js
  var notUniqueArray = ['1', '1', '3', '4', '😁', '😁', '0'];
  makeItUnique(notUniqueArray);

  // it will return this array ["1", "3", "4", "😁", "0"]
```

here is a table of the sates of each variable in this script while running:

we're using the same example which is  ['1', '1', '3', '4', '😁', '😁', '0'].

<figure class="wp-block-table"><table><tbody><tr><td><code>c</code></td><td><code><code>uniqueChars.includes(c)</code></code></td><td><code>if (!uniqueChars.includes(c))</code></td><td><code><code>uniqueChars</code></code></td></tr><tr><td>1</td><td>False</td><td>True</td><td>[1]</td></tr><tr><td>1</td><td>True</td><td>False</td><td>[1]</td></tr><tr><td>3</td><td>False</td><td>True</td><td>[1, 3]</td></tr><tr><td>4</td><td>False</td><td>True</td><td>[1, 3, 4]</td></tr><tr><td>😁</td><td>False</td><td>True</td><td>[1, 3, 4, 😁]</td></tr><tr><td>😁</td><td>True</td><td>False</td><td>[1, 3, 4, 😁]</td></tr><tr><td>0</td><td>False</td><td>True</td><td>[1, 3, 4, 😁, 0]</td></tr></tbody></table></figure>

## What about using ES6 to clear an array from duplicates?

**BTW, if you don't know ES6 and you're wondering whether to learn ES6 right away or to master JavaScript first, I advise you to <a aria-label="check out this article (opens in a new tab)" href="/posts/should-you-start-with-es6-or-es5/" target="_blank" rel="noreferrer noopener" class="rank-math-link">check out this article</a> that I wrote just about this topic**, where you can determine whether you have to master JavaScript first or it doesn't matter for your case.

### remove duplicates from an array using set and Array Destructuring

in my opinion, this is the most simple and quick, and efficient one of all of them, and I'm also going to talk about which one to use in terms of performance later in the article.

for people who don't know what <code><a href="https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Set</a></code> is and what does it do, first of all, it's an ES6 feature, if you haven't learned ES6 yet, Set is a new data object that only stores unique values, so when providing this object with a set of values, if  those values contain some duplicates <code>Set</code> is not going to store all of them but it's going to store each value one time only.

and that's why when you provide it with an array of values that some of them are duplicated <code>new Set(arrayWithDuplicates)</code>, it will give you a unique version of the original array.

now after you know what <code>Set</code> object is really doing, let me explain the following code in two simple steps:

- the first step which we explained which is using Set as a constructor to filter out the given array to remove duplicates from its values, then we assign that result to a variable.

- the second step is where we have only unique values, but the thing is that <code>Set</code> is returning an array, so you can't use it like you normally use arrays, but we can convert that into an actual array.

I KNOW, the second step is a bit confusing, since you probably don't know how to convert <code>Set</code> object into an array.

well, there are two simple and easy ways of doing that.
- the first one is by using the <code>Array.from(SetResult)</code> method to store the unique result into an array like so <code>const uniqueArr = Array.from(new Set(hasDuplicatesArray))</code>.
- the second way of doing it is by implementing what's called the Array Destructuring method which as simple as adding 3 dots before an array, object, or a set of values to make those values spread basically which is used like so <code>[...arr, 1, 3]</code>, and those 3 dots are called a spread operator, this means that inside of those brackets we have the arr array values followed by 1 and 3. and we can use it on Set In the same way, <code>const uniqueArr = [...new Set(notUniqueArr)]</code>.

here is a video if you're a visual learner:

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">

https://www.youtube.com/watch?v=NIq3qLaHCIs

</div></figure>

now enough talking and let's wrap up the whole thing, so we can get this:

```js
  function makeItUnique(){
    // Step 1
    const uniqueSet = new Set(array);// Set { '🗻', 1, 2, 3 }                                             

    // Step 2
    // method one
    const uniqueArr = array.from(uniqueSet);

    // method two
    const uniqueArr = [...new Set(uniqueSet)];

    return uniqueArr;
  }
```

here is the result of the execution of <code>makeItUnique()</code> function:
```js
  const array = ['🗻', 1, 2, '🗻', '🗻', 3];
  makeItUnique(array);

  // ['🗻', 1, 2, 3 ]</code></pre>
```

there is no table for this since it's really obvious and there is only one input and output.

but here is the shortest line of code you can use to write this code:

```js
  let unique = a => [...new Set(a)]; 😁
```

the only thing you might not understand is the arrow function which is use like so:

```js
  let arr = function(par){ //do something; };

  //OR an arrow function
  let arr = (par) => { //do something; };

  //OR a short arrow function
  let arr = par => //do something;</code></pre>
```

if you ever used <code>Set</code> in Python you'll notice that they don't work the same, JavaScript's version keeps the insertion order, unlike Python's version which arranges values from the smaller to the bigger value.

### solving the problem by implementing generators

#### what are generators in JavaScript

here is a brief explanation of Generators or what some people call them generator functions:

let's imagine that you're watching a movie like "spider man 3", and while you're in the middle of an exciting dramatic event you heard the doorbell ringing, of course, you'll get up to get your pizza from the delivery guy, after you get it you get back to your movie, now your brain is going to forget all the past events and you have to watch the movie from the beginning. but instead, the events are still stored in your brain and you can continue where you stopped.

that pretty much how a generator works, it's basically a function that can be stopped in the middle of the execution and continue again with no problems.

in the case of a **normal function** like this, you can not stop it until it finishes the last line of code, because normal functions <a aria-label="follow run-to-completion (opens in a new tab)" href="https://en.wikipedia.org/wiki/Run_to_completion_scheduling" rel="noreferrer noopener nofollow" target="_blank" class="rank-math-link">follow the run-to-completion</a> model.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">function normalFunction() {

  let string = "";

  string += "I";

  string += "am";

  string += "unstoppable";

  string += "function";

}</code></pre>

this normal function can be exited only by using <code>return</code> or in the case of throwing an error. and it will start over when you call it again.

but as we said the generator function **can be stopped midway** and continue from where it stopped with no problem.

 developers give the generators many definitions, here are two of them that are really common:

- a generator is a unique class of function that made writing iterators a really simple task.

- instead of returning a single value, a generator can generate a sequence of results (series of values).

when a generator stops it returns an object on which you can call <code>next()</code>. in JavaScript each call of <code>next()</code> will result in an object like so:

<pre class="wp-block-code"><code lang="json" class="language-json line-numbers">{ 

  value: can be anything,

  done: true | false

} </code></pre>

the object contains a value that obviously contains the value and the done property which contains a **boolean **which indicates whether the generator **has done or not.** in the case <code>done : true</code>, the generator function has done and it will not generate more values.

it's defined using the <code>function*</code>, the syntax goes like this:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">function* funcName(){ 

  //function *funcName() also works

  yield "i am";

  yield "a stoppable";

  yield "generator";

}</code></pre>

and here is a video for visual learners:

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">

https://www.youtube.com/watch?v=dcP039DYzmE

</div></figure>

#### using generators for removing duplicates

now after you got the important thing about Generators understood, let's get into implementing them for removing **duplicate values** from an array.

let's take a look at this other version of the previous function, this "lazy" one is generator-based, it's a generator basically. it using the same steps as the previous one:

- take the values one by one.

- skip to the next one, if it's already been seen.

- yield it and add it to the list of unique values <code>uniqueValues[]</code>, if not been seen.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">function* makeItUnique(notUnique) {

    <code>for (let x of notUnique) {     </code>

      <code>  if (!uniqueValues.includes(x)) {         </code>

            <code>yield x;     </code>

    <code>   } </code>

  <code>  }</code>

<code> </code>

      <code>return 'done';</code>

 }</code></pre>

here is the code to run this function:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers"> let uniqueValues = [];

 let notUnique = ['🗻', 1, 2, '🗻', '🗻', 3];

 let generator = makeItUnique(notUnique);

 for(let uniqueVal of generator){

     uniqueValues.push(uniqueVal);

 }

 console.log(uniqueValues);</code></pre>

it might be very confusing to understand at first but keep in consideration that this is noway near efficient when it comes to removing duplicates.

now let's move on to the next solution.

### using map

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">

https://www.youtube.com/watch?v=G3BS3sh3D8Q

</div></figure>

JavaScript <code>map</code> accepts an array and "map" it into something else. here is a simple example of what <code>map</code> can do:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">const numbersArray = [1, 2, 4, 4, 6, 7];

const mappedArray = numbersArray.map(n => "-" + n + "-");

console.log(mappedArray);

//the result

//[-1-, -2-, -4-, -4-, -6-, -7-]</code></pre>

as simple as you see it doesn't filter any of the array values, it just returns each value as it is beside the "-" that we've added before and after each value.

<code>map </code>in this case, is used like <code>forEach</code> loop, so it's basically looping through the array and returning each of them, but the main thing that we're using in our <code>removeDuplicates</code> function is the way it loops through each element of the array.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">function removeDuplicates(array) {

  let uniqueValues = []

  array.map(value => 

    if(!uniqueValues.includes(value) {

      uniqueValues.push(value)

    }

  )

  return uniqueValues;

};

</code></pre>

her is an example of using this fucntion:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">const duplicatesArray= [1, 2, 4, 4, 6, '🗻', '🗻'];

removeDuplicates(duplicatesArray);

// [1, 2, 4, 6, '🗻']</code></pre>

so basically this function uses JS <code>map</code> to map through the array with duplicates and adds only unique elements to a new array.

### using reduce

here is a video for visual learners:

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">

https://www.youtube.com/watch?v=g1C40tDP0Bk

</div></figure>

this method is a little bit like <code>map</code> and <code>filter</code> except that it returns only one value, JS <code>reduce</code> method is looping through the array values one by one, it accepts two arguments:

- **the first one:** the callback function like in the <code>map</code> and <code>filter</code>, this function accepts two arguments.<li>one of them is the **accumulator** which is like a variable that holds a certain value and keeps changing it according to what you do with it inside the **callback function**. this argument is what contains the **final value** that this method returns.

- and the second one is the current value which is the value from the given array, and each time you return a value, that value is assigned to the accumulator. the arguments can be named whatever you like **BTW**.

</li>- **the second one:** the **Initial** value of the accumulator, the default value of this argument is the **first value** in the array, so you don't have to set its value if that's what you trying to do.

> matter of fact this method takes in 4 arguments, but only the two of them are commonly used. these four arguments are:1. **Accumulator** 2. **Current Value** 3.**Current Index** 4.**Source Array**

here is how the syntax works:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">const array = ['carrot', 'potato', 'turnip', 'cabbage'];

const finalValue = array.reduce(

  function(acc, currentVal) { return acc + ' ' + currentVal },

  'vegetables:'

);

//function short code

(acc, currentVal) => acc+' '+currentVal;</code></pre>

so it's basically reducing the number of elements you provide it with into one single value:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">console.log(finalValue);

// "vegetables: carrot potato turnip cabbage"</code></pre>

**that was a basic example of how this method works, now let's use this method to uniquify our array.**

in our case we want the accumulator to be an array of unique values that's why we're going to set its initial value to <code>[]</code>.

but each time it returns a value, the value should contain all the unique values you want them to be in the array since this method is not pushing the values returned to the end of the accumulator array, but it puts them in a new array and then assign them to the accumulator array, so the old ones are not saved.

yes I know, it's the same thing that happens with strings, but some people think that when you set the accumulator as an array, the method is pushing each value to that array. 

so, here is how our code works:

we check if the accumulator array contains each value of our array, if yes then we assign the accumulator with the accumulator itself, which means no changes. but if the value is not there already we use the spread operator to add that value to the array like so <code>[...accumulatorArray, currentValue]</code>.

> it's very difficult to understand how it works without actually looking into the code:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">const array = ['🗻', 1, 2, '🗻', '🗻', 3];

const uniqueArray = array.reduce((acc, currentVal) => {

  return acc.includes(currentVal) ? acc: [...acc, currentVal];

  // a short code for

  // if(acc.includes(currentVal)){

  // return acc

  // }else{ 

  // return [...acc, currentVal] 

  // }

}, []); // set the inital value to an empty array

console.log(uniqueArray);

// RESULT:

// ['🗻', 1, 2, 3];

</code></pre>

here are the variables values on the fly:

<figure class="wp-block-table"><table><thead><tr><th>Item</th><th>acc (BEFORE Reducer Function)</th><th>Push to Accumulator?</th><th>values assigned to the acc</th><th>acc (AFTER Reducer Function)</th></tr></thead><tbody><tr><td>🗻</td><td><code>[]</code></td><td>**Yes**</td><td>[...acc, currentVal]</td><td><code>[ '🗻' ]</code></td></tr><tr><td>1</td><td><code>['🗻']</code></td><td>**Yes**</td><td>[...acc, currentVal]</td><td><code>[ '🗻', 1 ]</code></td></tr><tr><td>2</td><td><code>[ '🗻', 1 ]</code></td><td>**Yes**</td><td>[...acc, currentVal]</td><td><code>[ '🗻', 1, 2 ]</code></td></tr><tr><td>🗻</td><td><code>[ '🗻', 1, 2 ]</code></td><td>No</td><td>acc</td><td><code>[ '🗻', 1, 2 ]</code></td></tr><tr><td>🗻</td><td><code>[ '🗻', 1, 2 ]</code></td><td>No</td><td>acc</td><td><code>[ '🗻', 1, 2 ]</code></td></tr><tr><td>3</td><td><code>[ '🗻', 1, 2 ]</code></td><td>**Yes**</td><td>[...acc, currentVal]</td><td><code>[ '🗻', 1, 2, 3 ]</code></td></tr></tbody></table></figure>

### implementing the filter method

if you don't know how array.filter is working, here is a video that explains this in a really simple way  for the visual learners:

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">

https://www.youtube.com/watch?v=4_iT6EGkQfk

</div></figure>

the <code>filter</code> method is working almost like the <code>reduce</code> and <code>map</code> methods, it also takes a callback and returns elements that pass our condition. it's like <code>map</code> since it also returns multiple values except that map returns all the values without filtering them.

we can enhance the previous solution, instead of using for loop we're going to implement this filter method since it loops through all the values in the array without using a <code>for</code>/<code>forEach</code> loop.

so with this JS method, we're going to get a loop that loops through the original array and only returns unique values.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">function uniqueWithFilter(notUnique) {

     const unique = [];

     return notUnique.filter(element => {

 <code>    if (unique.includes(element)) {   </code>

             <code>return false </code>

        <code>} else {   </code>

            <code>return unique.push(element);</code>

        <code>}</code>

     });

 }</code></pre>

let's run it:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers"> const notUniqueArr = [1,1,2,😁,😁,4];

 uniqueWithFilter(notUniqueArr);</code></pre>

here are the variables values on the fly:

<figure class="wp-block-table"><table><thead><tr><th>Item</th><th>unique.includes(element)</th><th>Push to unique[]?</th><th>acc (AFTER Reducer Function)</th></tr></thead><tbody><tr><td>1</td><td><code>False</code></td><td>**Yes**</td><td><code>[ 1 ]</code></td></tr><tr><td>1</td><td><code>True</code></td><td>No</td><td><code>[ 1 ]</code></td></tr><tr><td>2</td><td><code>False</code></td><td>**Yes**</td><td><code>[ 1, 2 ]</code></td></tr><tr><td>😁</td><td><code>False</code></td><td>**Yes**</td><td><code>[ 1, 2, 😁 ]</code></td></tr><tr><td>😁</td><td><code>True</code></td><td>No</td><td><code>[ 1, 2, 😁 ]</code></td></tr><tr><td>4</td><td><code>False</code></td><td>**Yes**</td><td><code>[ 1, 2, 😁, 4 ]</code></td></tr></tbody></table></figure>

### implementing sort and filter

here is another way of doing it, which is to sort the array and then delete elements that are equal to the value preceding it.

I will not go in-depth in <code>sort</code> method but here is a video that explains what is it and what it does:

<figure class="wp-block-embed is-type-video is-provider-youtube wp-block-embed-youtube wp-embed-aspect-16-9 wp-has-aspect-ratio"><div class="wp-block-embed__wrapper">

https://www.youtube.com/watch?v=RsFBsBep-hA

</div></figure>

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">function makeItUnique(notUnique) {

    return notUnique.sort().filter(function(value, pos, array) {

        return !pos || value != array[pos - 1];

    });

}</code></pre>

let's run it:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">const notUnique = [1, 1, 2, 😁, 😁, 4];

makeItUnique(notUnique);</code></pre>

remember that this method doesn't work with objects, since <code>sort</code> sees them all the same, however, the original array is going to be changed as a side effect.

## let us discuss this non-optimal solution

### filter and indexOf

by now you already know what is <code>filter</code> and how it works. if you don't know what <code>indexOf</code> is for, it's used for getting the index of an element in the array.

we utilize indexOf in a way that helps us spot the duplicate values just by their indexes, indexOf gives us the index of the first occurrence all the time even if we have different instances of a particular value, so each occurrence of a value should point you to its first instance using <code>indexOf</code>.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers"><code>let notUnique= [1, 1, 2, 😁, 😁, 4];

notUnique.indexOf(😁);</code></code></pre>

the output is always the the index of  the first instance:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">3</code></pre>

and by comparing each value's indexOf with the exact index of the same element we get to know if that element is duplicate or not.  if those two values match then it's not duplicate, but if they point to different indexes then this value is a duplicate value.

the <code>indexOf()</code> method gives you the index if the value exists but if not it gives you -1, just to help you debug in case there is a problem with your version of code.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers"><code>let notUnique= [1, 1, 2, 😁, 😁, 4];

notUnique.forEach((value, index) => {

    console.log(`${value} - ${index} </code>

        <code>- ${notUnique.indexOf(value)}`);

});</code></code></pre>

here is the output on the fly:

<figure class="wp-block-table"><table><tbody><tr><td>Value</td><td>**Index**</td><td>**notUnique.indexOf(value)**</td><td>**Output**</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>1</td><td>1</td><td>0</td><td></td></tr><tr><td>2</td><td>2</td><td>2</td><td>2</td></tr><tr><td>😁</td><td>3</td><td>3</td><td>😁</td></tr><tr><td>😁</td><td>4</td><td>3</td><td></td></tr><tr><td>4</td><td>5</td><td>5</td><td>4</td></tr></tbody></table></figure>

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">1

2

😁

4</code></pre>

now let me show you how we should implement <code>filter</code> to remove duplicate values, we're doing that by only including values whose indexes match their <code>indexOf</code> values.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers"><code>let notUnique= [1, 1, 2, 😁, 😁, 4];

let unique = <code>notUnique</code>.filter((item, index) => {

    return <code>notUnique</code>.indexOf(item) === index;

});</code>

<code>

console.log(<code>unique</code>);</code></code></pre>

here is the output on the fly:

<figure class="wp-block-table"><table><tbody><tr><td>Value</td><td>**Index**</td><td>**notUnique.indexOf(value)**</td><td>**Condition**</td><td>**Unique**</td></tr><tr><td>1</td><td>0</td><td>0</td><td>**True**</td><td>[ 1 ]</td></tr><tr><td>1</td><td>1</td><td>0</td><td>**False**</td><td>[ 1 ]</td></tr><tr><td>2</td><td>2</td><td>2</td><td>**True**</td><td>[ 1, 2 ]</td></tr><tr><td>😁</td><td>3</td><td>3</td><td>**True**</td><td>[ 1, 2, 😁 ]</td></tr><tr><td>😁</td><td>4</td><td>3</td><td>**False**</td><td>[ 1, 2, 😁 ]</td></tr><tr><td>4</td><td>5</td><td>5</td><td>**True**</td><td>[ 1, 2, 😁, 4 ]</td></tr></tbody></table></figure>

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers"><code>[ 1, 2, 😁, 4 ]</code></code></pre>

however if you want only the duplicate values you only need to reverse the condition.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers"><code>let notUnique= [1, 1, 2, 😁, 😁, 4];

let duplicateValues = <code>notUnique</code>.filter((c, index) => {

    return <code>notUnique</code>.indexOf(c) != index;

});

console.log(<code>unique</code>);</code></code></pre>

Output:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">[ 1, 😁 ]</code></pre>

**here is a shorter syntax of the same code above:**

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">let notUnique= [1, 1, 2, 😁, 😁, 4];

let unique = notUnique.filter(

     (values, index) => notUnique.indexOf(values) === index

);</code></pre>

you'd think that this a good solution but only in some cases, it is a concise solution but when it comes to large arrays it's not going to be efficient at all.

### hash tables (using filter and hasOwnProperty)

hash table method is just a different way of storing these values from the original array one by one and check for their existence as we go, as we did in the previous solution where we needed two arrays.

except for in this method we're implementing the <code>filter</code> method which you should be familiar with if you read through the previous solutions. and <code>hasOwnProperty</code> which a little bit like <code>array.includes()</code>. except for this method is used with objects and <code>includes</code> is used with arrays.

here is the code that implements these methods:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">function makeItUnique(doubled) {

    var unique = {};

    return doubled.filter(function(item) {

        return unique.hasOwnProperty(item) ? false : (unique[item] = true);

    });

}

// unique{} has only unique items as the keys

// of the object, and true is assigned to the values of them keys</code></pre>

this gives you a linear time as it checks for the presence of an element instantly, but it has some drawbacks, which are these two:

- **because hash keys only accept strings and symbols:** there will be no difference between the number 1 and the string "1", since they're all considered as a string.

- **because hash keys only accept strings and symbols:** other objects are also going to be considered equal to each other. <code>{1:true}</code> is going to be equal to <code>{2:true}</code>.

> so if you don't care about types then this solution can be considered as an optimal solution.

### combining hashtables method with filter and indexOf for the best

after you saw those two solutions, here is a solution that combines the two together for a better universal solution. instead of only the primitives or the linear search, we're supporting both of the approaches.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">function makeItUnique(notUnique) {

    var valueType = {"boolean":{}, "number":{}, "string":{}},

          objs = [];

    return notUnique.filter(function(value) {

        var type = typeof value;

        if(type in valueType)

            return valueType[type].hasOwnProperty(value) ? false : (valueType[type][value] = true);

        else

            return objs.indexOf(value) >= 0 ? false : objs.push(value);

    });

}</code></pre>

I know how this solution sounds to you, but it's just for understanding more about sorting elements from an array.

## removing duplicates in a specific way [Advanced Solution]

### using Unique by

all the previous methods are great and some of them are more efficient than others but they are all able to get the job done, but sometimes you need to process a more complicated list than a simple list of numbers or strings.

some times we have a list that contains different objects but they share other criteria in common other than equality (previous methods), removing these kinds of elements can't be done with the methods above. but we can use a callback instead.

let's call it the "key" callback, this callback is going to be applied to every element, and we're going to be removing elements that have the same key.

as you saw earlier with the hash tables method, **hash keys only accept strings and symbols**, but since we're using a hash table in this example everything is going to work fine since the key is going to return a primitive.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">function advancedUniq(notUnique, key) {

    var unique = {};

    return notUnique.filter(function(value) {

        var itemKey = key(value);

        return unique.hasOwnProperty(itemKey) ? false : (unique[itemKey] = true);

    })

}</code></pre>

a useful key for example is <code>JSON.stringify</code>, this key will eliminate objects that look the same although they're physically different.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">notUnique = [[1,🗻,3], [4,5,6], [1,🗻,3]]

result = advancedUniq(notUnique, JSON.stringify)

console.log(result) // [[1,🗻,3], [4,5,6]]</code></pre>

resorting to the linear search is the solution in case the key is not primitive:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">function advancedUniq(notUnique, key) {

    var index = [];

    return notUnique.filter(function (value) {

        var itemKey = key(value);

        return index.indexOf(itemKey) >= 0 ? false : index.push(itemKey);

    });

}

</code></pre>

in case you want to implement **ES6**, you can use **<code>set</code>**:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">function advancedUniq(notUnique, key) {

    let unique = new Set();

    return notUnique.filter(value => {

        let itemKey = key(value);

        return unique.has(itemKey) ? false : unique.add(itemKey);

    });

}

</code></pre>

or **<code>map</code>**, which going to make things look cleaner:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">function advancedUniq(notUnique, key) {

    return [

        ...new Map(

            notUnique.map(x => [key(x), x])

        ).values()

    ]

}

</code></pre>

> **both <code>Set </code>and <code>Map</code> work with key that are not primitive.**

## using libraries for removing duplicates

other than jQuery, there two famous libraries which are <a aria-label="Lo-Dash (opens in a new tab)" href="https://lodash.com/docs#uniq" rel="noreferrer noopener nofollow" target="_blank" class="rank-math-link">Lo-Dash</a> and <a aria-label="underscore (opens in a new tab)" href="http://underscorejs.org/#uniq" target="_blank" rel="noreferrer noopener nofollow" class="rank-math-link">underscore</a>. some people use them only for doing these kinds of tasks like our task here which is to remove duplicate entries from an array. if you only use them for simple tasks it would be better to start avoiding them and implement the vanilla code since it's not very difficult to do.

the methods that are included in these libraries are very similar to examples I've explained here in this article, **especially the "indexOf and Filter" method**, matter of fact it's just a variation of it. here is what their <code>makeItUnique()</code> method looks like:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">var unique = [];

notUnique.forEach(function(item) {

     if(unique.indexOf(item) < 0) {

         unique.push(item);

     }

});</code></pre>

when it comes to jQuery, you do this in the following way:

> as you know Jquery can't stand using anything without a dollar sign before it.

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">  $.unique = function(notUnique) {

        return $.grep(notUnique, function(item, pos) {

            return $.inArray(item, notUnique) === pos;

        });

  }</code></pre>

> and as i said they're just a variation of the **"indexOf and Filter" method**.

## what is the best method for performance

one important thing to know when it comes to using functions in JavaScript is that they are very **expensive** which means you have to use them carefully.

so it's better to reduce the number of function calls in your code, and also try to replace things like <code>filter</code> with loops also **reduce the CPU usage**.

if you're just coding this simple script where you could have **10 functions at max**, then this doesn't matter to you but it's a good thing to know.

### ES6 Set

I know I've mentioned it above but just to justify things, modern JavaScript(ES6) gives us this cool method Set that really simplifies things for us and for our CPUs:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">function makeItUnique(notUnique) {

   return Array.from(new Set(notUnique));

}

</code></pre>

or in a shorter way:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">let unique = notUnique => [...new Set(notUnique)];

</code></pre>

### Generators

I've mentioned generators above in detail, but in general, it's a lazy way of doing this and it **costs almost no CPU usage.**

as I mentioned earlier it's based on the same steps as the other methods:

- reads the next value from the passed, not unique array

- if it's already been seen, already stored in the unique array, then skip it

- otherwise, yield it insert it next to the other unique values

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">function* makeItUnique(notUnique) {

    <code>for (let x of notUnique) {     </code>

      <code>  if (!uniqueValues.includes(x)) {         </code>

            <code>yield x;     </code>

    <code>   } </code>

  <code>  }</code>

      <code>return 'done';</code>

 }</code></pre>

## another way using jQuery:

**I wrote an article on whether you need jQuery or it's not useful to you, and whether you're ready to learn it in case it's mandatory for you, I named the article <a aria-label=" (opens in a new tab)" href="/posts/is-it-necessary-to-learn-javascript-before-jquery/" target="_blank" rel="noreferrer noopener" class="rank-math-link">is it mandatory to learn JavaScript before jQuery</a>.** you're going to know a lot about jQuery that you probably don't know.

her is another way to make an array unique using jQuery:

<pre class="wp-block-code"><code lang="javascript" class="language-javascript line-numbers">var notUnique = [1, 1, 2, 😁, 😁, 4];

var unique = [];

$.each(notUnique, function(i, item){

    if($.inArray(item, unique) === -1) unique.push(item);

});</code></pre>

## here is how to do it using VueJS

Vue.js is a really beautiful and powerful framework, if you're <a aria-label="planning to learn Vue.js (opens in a new tab)" href="/posts/is-vue-js-worth-learning/" target="_blank" rel="noreferrer noopener" class="rank-math-link">planning to learn Vue.js</a> in the future you really should read my article about this, where you know everything about learning Vue js and whether it's worth it for you to learn it or not. 

although it's very powerful <a aria-label="it's not that popular (opens in a new tab)" href="/posts/why-vue-js-is-not-popular/" target="_blank" rel="noreferrer noopener" class="rank-math-link">it's not that popular</a> compared to the other frameworks. but it's <a href="/posts/is-vue-js-easy-to-learn/" target="_blank" aria-label="very easy to learn (opens in a new tab)" rel="noreferrer noopener" class="rank-math-link">very easy to learn</a> when it comes to the learning path.

You can just use <a href="https://medium.com/front-end-weekly/es6-set-vs-array-what-and-when-efc055655e1a" target="_blank" aria-label=" (opens in a new tab)" rel="noreferrer noopener nofollow" class="rank-math-link">Set</a> when using Vue.js to remove duplicates from an array:

> The <code>Set</code> object lets you store **unique** values of any type, whether primitive values or object references.

I've mentioned this method above in ES6 methods.

## takeaway

the number of ways to make a list unique is unlimited, and each method differs from another with what data type that it supports and whether it respects order or not, and so on.

but certainly, each method is using the CPU in a different way than the other so you have to choose the method that suits your project.

if you're just looking for a random solution to answer your interviewer question any of them would work but if you know some of the characteristics of some of them it can be really useful when explaining why you used that particular one and also show the interviewer that you know what you're talking about.

in general, those were some ways to remove duplicate values from your array using JavaScript, some of them are using only vanilla JavaScript code, and some of them using jQuery (two of them actually). and you have everything you need to know about each of them and also you know which of them are the efficient ones when it comes to performance.

also if you were using libraries, now you know what method they use in the background and that you can code the same thing without implementing any library. 

I hope this wasn't a waste of your time and that I've provided the kind of information you needed.


