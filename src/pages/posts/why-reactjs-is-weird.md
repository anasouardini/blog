---
layout: "../../layouts/blog-post.astro"
slug: why-reactjs-is-weird
title: why reactjs is weird
seo_title: why reactjs is weird
description: 
seo_description: Reactjs has very wierd set of behaviours and tools, Since the time I've read React's documentation, I've been wondering why they say what they say, because most of their justifications are not really that convincing.
date: Tue, 11 Jul 2023
author: Anas Ouardini
category: javascript react
image: {
  url: /media/thumbnails/why-reactjs-is-weird.png,
  alt: why-reactjs-is-weird
}
---

To get any confusion out of the way, I love Reactjs, it's the first Library that popped up after the first Google search "What is the best js front-end framework/library", I still enjoy it and its vast ecosystem that keeps bettering the Developer Experience over time.

I've read articles and watched videos to get answers for my curious questions, but 80-90% just turn on a mic or open their CMS editor and hit replay of the same record.

React warns you about things and advises you to follow some "*best practices*", But never fully answers the **why**, and when you dig deeper you just find out that some of those things are just not true.

Without further Ado, let me share with you why I think what I think and say what I say. Remember I don't claim to know it all, I'm more than happy to be corrected and for my curious questions to be answered.

## React doesn't let you use "class" attribute

I know what you're thinking: "Bro, it's a reserved keyword", after I put those words in your mouth, let me correct you a little bit.

So, think about everything in life (verbs, adjectives, etc) as something relative, now let's finish the sentence: "Bro, it's a reserved keyword in JavaScript". Now it's much more accurate, but not necessarily true or truthy as we say in JS.

Now, before I go on about why reserved keywords in JavaScript have nothing to do with JSX. I'm going to make sure you understand how Reactjs works a little bit in depth.

We all know that React is all about **rendering**, now, how does it do that exactly? You basically give it HTML-like syntax (JSX) and it **transpiles** that to HTML for you. Let's see that in detail:

*I'll ignore class components since most developers don't use them.*

Every typical Reactjs app starts with this boilerplate or similar:

```js
const App = ()=>{
    return <h1>hello world</h1>
}
ReactDOM.createRoot(window.HTML).render(App);
```

That code my friend, doesn't make it to the browser like that, because obviously, browsers do not understand JSX, it's just a *syntactic sugar* that gets "transpiled" to pure JS. So in what form does that code reach the browser?

With the help of Babel, Reactjs converts that code into JavaScript code that the browser can run. Here is what It will look like after such "transpilation":

```js
const App = ()=>{
    return React.createElement('h1', {}, 'hello world');
}

ReactDOM.createRoot(window.HTML).render(App);
```

Now, that you know that React and Babel convert JSX to actual JS before it can even be delivered to the browser, you're wondering what has this to do with the **`className`** attribute? I'm going to use the same code and include `className` and show you how It's going to look like:

```js
const App = ()=>{
    // returns a vnode
    return React.createElement(
      'h1',
      {className: 'makeItBeautiful'},
      'hello world');
}

ReactDOM.createRoot(window.HTML).render(App);
```

That's if you follow what React's team tells you, what about ignoring the rules? I'll use `class` and you tell me if this JavaScript is invalid:

```js
return React.createElement(
  'h1',
  {class: 'makeItBeautiful'},
  'hello world');
```

Go ahead, press `Ctrl+Shift+J` and type `{class: 'makeItBeautiful'}` and tell me if you get any errors about a reserved keyword called `class`, the V8 engine is more than happy to run that sweet code of yours. For your information, the specific part in React that doesn't allow you to use `class` instead of `className` is the `render` function.

I can go a little deeper into this and write my own `render` function and allow myself to use the attribute `class` and nothing will break, the browser wouldn't complain at all, but let's not derail too much.

So all of this is about `class` vs `className`? **NO**, apply this to all more-than-one-word-camel-cased JSX elements attributes.

Next Reason as to why I think React is weird. This is where I might get a lot of hate, **some Reactjs hooks are just unnecessary**, [grinding my teeth].

## Reactjs useImperativeHandle is not necessary

Yes, another one, I said `useImperativeHandle` is unnecessary, but actually it might be even adding complexity to your React app. Again, let's see how it works in code, shall we:

```js
const C1 = React.forwardRef((ref)=>{
    const inputRef = React.useRef(null);

    React.useImperativeHandle(ref, ()=>{
        return {
            changeValue: (newValue)=>{inputRef.value = newValue;}
        }
    });

    return <input ref={inputRef}/>
})

const C2 = ()=>{
  const handleRef = React.useRef(null);
  const change = ()=>{
    handleRef.current.changeValue('parent value');
  }
  return <>
    <C1 handle={handleRef} />
    <button onClick={change}>change from parent</button>
  </>
}
```

Here is my simple solution to the problem that is as effective and maybe even less complex.

```js
const C1 = (props)=>{
    const inputRef = React.useRef(null);
    
    props.handle.current = {
        changeValue: (newValue)=>{
            inputRef.current.value = newValue;
        }
    };

    return <input ref={inputRef} />
}

const C2 = ()=>{
  const handleRef = React.useRef(null);
  const change = ()=>{
    handleRef.current.changeValue('parent value');
  }
  return <>
    <C1 handle={handleRef} />
    <button onClick={change}>change from parent</button>
  </>
}
```

Or maybe you like to use `forwardRef` for some reason:

```js
const C1 = React.forwardRef((props, ref)=>{
    const inputRef = React.useRef(null);
    console.log(ref.current);
    ref.current = {
        changeValue: (newValue)=>{
            inputRef.current.value = newValue;
        }
    };

    return <input ref={inputRef} />
})

const C2 = ()=>{
  const handleRef = React.useRef(null);
  const change = ()=>{
    handleRef.current.changeValue('parent value');
  }
  return <>
    <C1 ref={handleRef} />
    <button onClick={change}>change from parent</button>
  </>
}
```

Althouhg, I've never used neither of them, I always give full access of the child's DOM elements to the parent, that way, the parent component **has all of it's logic in it**, which looks like a clean code to me, if the parent is the only component that's going to use that function `changeValue` why not move that logic to the parent itself!, maybe it's not a good idea, it's arguable anyways.

Maybe I would use `useImperativeHandle` when working with a team just because it's more common.

## are props really immutable?

There is not much to say about this, you might even know that already, it's obvious that you can modify props all day long. Is it good to do that? I don't think so, think of it like modifying a passed argument to a function, they call it impure function.

But keep in mind that "best practices" are not always *good*, sometimes you have to ignore them for easier developement and other times you have to ignore them just because they make it worse.

I don't know why they say that, but props are defenitely not immutable.

**Maybe I'm confused but also almost everyone else**. In React's Docs, They say [props are Read-Only](https://legacy.reactjs.org/docs/components-and-props.html#props-are-read-only). Maybe they only mean that they shall not be modified which I mostly agree with that, modifying arguments has caused me a lot of headaches.

Maybe it's one of the famous misconceptions about Reactjs, such as ["The VDOM makes Reacjs Fast"](/posts/does-virtual-dom-make-reactjs-faster)

But since a lot of people say that props are not mutable, I think it's the Documentation's maintainer's fault.

## do you really need forwardRef to reference a DOM element in a child component?

This one perplexes me, React doesn't let you simply pass an attribute called `ref` to your child component, if you try to do that all you'll get is an error.

Again, as to why, I'm not entirely sure but it's totally possible to allow this behavior and it should be the case in my opinion.

Here is how I would do it without using `forwardRef`, let me use the same code from above:

```js
const C1 = (props)=>{
    return <input ref={props.reff} value='value from child' />
}

const C2 = ()=>{
    const inputRef = React.useRef(null);
    const change = ()=>{
        inputRef.current.value = 'value from parent';
    }
    return <>
        <C1 reff={inputRef} />
        <button onClick={change}>change from parent</button>
    </>
}
```

Just rename the ref to anything else such as `reff` to avoid the silly error since `ref` is "reserved" to `forwardRef`, and what annoys me even more, is that they completely ignore that it could be passed as a simple attribute.

So yeah, just another boilerplate that you're being advised to use when there is no justification as to why you have to.

## Takeaway

There is not much to take away from this article, to be honest, I just want to say: use less React and more JavaScript whenever it's possible. Although some of these tools are really common in the real world, I myself would use them to keep the codebase consistent and the debugging easier.

All of what I said doesn't make the library bad or useless, it has some quircks that I've learned to cope with, just like silly JavaScript.

That was it, I hope you found this little post interesting in some way.