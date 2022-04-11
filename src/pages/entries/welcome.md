---
title: "Using FastAPI and Astro"
---
I will be working on creating a new blog with a [FastAPI](https://fastapi.tiangolo.com/) backend and an Astro, TypeScript, React front end! See below for a rundown of why I am choosing that tech-stack.

## Why FastAPI
FastAPI is a modern and lightweight python server-side framework. For the first time, it was added to the [Stack Overflow Developer survey](https://insights.stackoverflow.com/survey/2021#most-popular-technologies-webframe) where almost 4 percent of professional developers said they use it. I am looking to polish my modern Python skills using something more modern that Flask and less monolithic than Django. I think Fast API fits the bill nicely.

## Why Astro*
[Astro](https://astro.build/) is an up-and-coming static site generator that makes it possible to ship less JavaScript to the browser by using the [Islands Architecture](https://jasonformat.com/islands-architecture/) to include only the JavaScript nessesary for updating the browser with dynamic components (those that depend on reactive state that changes based on user interaction). For non-dynamic components, Astro will convert them to pure HTML. This is in sharp contrast to front end frameworks that create the entire app by sending only JavaScript to the browser.

> Astro has its own template language, but it also supports writing components in 8 other front end frameworks, which means you can create Astro components with React!

## Why TypeScript
JavaScript is a flexible language: Functions to not have to be pure, asynchonious functions can be [infinitely nested](https://dev.to/somedood/please-don-t-nest-promises-3o1o), automatic garbage collection can give users a false sense of security, and types are assigned at runtime. With all that flexibilty comes a great deal of responsibilty to write "good" JavaScript. Thankfully there are tools available to help us: Linters, formatters, editor extensions, and TypeScript. I like TypeScript because it makes me think about my complex types, how I am interacting with them, and what I am returning from my functions (even when *void*).

## Why React**
One advantage to frameworks in general is that developers get a whole set of documentation and conventions for writing code. Frameworkds also make some of the challenging parts of modern web app development easier (for example, reactive state and UI modularization). React is unique among modern frameworks because it has the largest number of users which means that there are more libraries and those libraries are more often well maintained. React also has a generally small API surface area, so to me, writing React code feels much closer to writing "vanilla JavaScript" when compared to an API heavy framework like VueJS.

***

**Why limiting client-side JavaScript is a good thing*

The web development world has been evolving quickly over the past decade. JavaScript frameworks enspired by jQuery and Backbone brought a new era of development that focused on Ajax calls and client side JavaScript. React, Vue, Svelte, and friends are examples of frameworks that create Single Page Applications (SPA) with the goal of making developers more productive and happier by improving the development experience. However, improved tools, workflows, and options also introduced complexity and sizable client-side (browser) JavaScripts. Complexity decreases developer productivity and too much client-side JavaScript can decrease app performance.

Efficiently shipping all that JavaScript to the browser was (and still is) a chief concern. One solution was to "bundle" all the JavaScript files into one minimized file, which is what tools like Webpack, Rollup, and Parcel do. While bundling did improved the app's performance, it has only partially solved the issues of performance and it made spinning up a dev server and updating files take longer.

***How Frameworks influence the future of web standards*

There is a trend toward standardizing the great things that frameworks pioneer by add those things to the W3C or ECMA Script specifications. We can see this happening with CSS [Grids](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) and [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) as well as [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)