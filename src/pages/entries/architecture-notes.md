---
title: "Architecture Notes"
---

Here are a few notes I have compiled through personal experience and while reading through Clean Code, Code Simplicity, and Software Architecture: An enggineering approach.

# Estimating Projects and Unknown Unknowns
One of the Achilles heels of software development is estimation — how much time, how many resources, how much money? Part of this difficulty lies with antiquated accounting practices that cannot accommodate the exploratory nature of software development, but another part is because we’re traditionally bad at estimation, at least in part because of unknown unknowns.

> As we know, there are known knowns; there are things we know we know. We also know there are known unknowns; that is to say we know there are some things we do not know. But there are also unknown unknowns—the ones we don’t know we don’t know. 

> ~ Former United States Secretary of Defense Donald Rumsfeld

Unknown unknowns are the nemesis of software systems. Many projects start with a list of known unknowns: things developers must learn about the domain and technology they know are upcoming. However, projects also fall victim to unknown unknowns: things no one knew were going to crop up yet have appeared unexpectedly. This is why all “Big Design Up Front” software efforts suffer: architects cannot design for unknown unknowns. To quote Mark Richards: “All architectures become iterative because of unknown unknowns, Agile just recognizes this and does it sooner.”

*Source: Fundamentals of Software Architecture: An Engineering Approach*

***

# Refactoring Legacy Code
**Tip #1:** If the program lacks structure, it’s usually easier for me to add structure to the program first, and then make the change I need. When you have to add a feature to a program but the code is not structured in a convenient way, first refactor the program to make it easy to add the feature, then add the feature.

**Tip #2:** If the code works and doesn’t ever need to change, it’s perfectly fine to leave it alone. It would be nice to improve it, but unless someone needs to understand it, it isn’t causing any real harm. Yet as soon as someone does need to understand how that code works, and struggles to follow it, then you have to do something about it.

**Tip #3:** Before you start refactoring, make sure you have a solid suite of tests. These tests must be self­ checking.

**Tip #4:** Temporary variables create a lot of locally scoped names that complicate extractions.

**Tip #5:** When I want to turn a chunk of code into a function, I first need to look in the fragment for any variables that will no longer be in scope. I ask myself which of these variables are referenced, and can thus simply be passed in the new function as parameters, and which of these out of scope variables are being changed. In the case of a variable that is changed, I ask if I can simply initialize and return it in my new function.

**Tip #6:** Refactoring changes the programs in small steps, so if you make a mistake, it
is easy to find where the bug is.

**Tip #7:** Temporarily variables create a lot of locally scoped names that complicate extractions

**Tip #8:** Naming is both important and tricky. Breaking a large function into smaller ones only adds value if the names are good. With good names I don't have to read the body of the function to see what it does, but it's hard to get names right the 1st time so I used the best name I can think of for the moment and don't hesitate to rename it later. Often it takes a second pass through some code to realize what the best name really is.

**Tip #9:**  Whenever things get difficult my 1st reaction is to take shorter steps. In particular, should a test fail during a refactoring, if I can't immediately see and fix the problem, I'll revert to my last good commit and redo what I just did with smaller steps. That works because I commit so frequently and because small steps are the key to moving quickly particularly when working with difficult code.

**Tip #10**:  When I use refactoring to develop software, I divide my time between 2 distinct activities: adding functionality and refactoring. When I add functionality I shouldn't be changing existing code. When I refactor, I make a point not to add functionality; I only restructure the code.

## Refactoring Functions
**Process #1:** When refactoring a long function, I mentally try to identify chucks of code that separate different parts of the overall behavior. As I look at a chunk of code, I conclude that it is doing. That conclusion is a piece of insight about the code. But I need to persist it by moving it from my head back into the code itself. That way, should I come back to it later, the code will tell me what it’s doing—I don’t have to figure it out again. The way to put that understanding into code is to turn that chunk of code into its own function, naming it after what it does—something like *amountForPerformance*.

**Process #2:** I take a look at what I’ve extracted to see if there are any quick and easy things I can do to clarify the extracted function. The first thing I do is rename some of the variables to make them clearer (It’s my coding standard to always call the return value from a function “result”).

*Source: Refactoring Improving the Design of Existing Code*

***

## The Thinning Line Between Front End and Back End
Over the past few years, I have found that the term “backend development” (aka server-side) is not very well defined in the minds of non-technical professionals. And while there does seem to be some inherent vagueness among technical professionals on what actually counts as backend development, I am going to attempt to come to my own understanding of it as I jump into the world of backend development.

I have had some exposure to the backend as a front end developer, but I have not had the level of pragmatic backend experience to consider myself a backend developer. Nowadays, however, a front end developer can come dangerously close to “surface” backend development through cloud platforms, serverless architectures, and backend frameworks that provide easier-to-use tools for managing backend operations. Furthermore, most modern coding languages offer backend frameworks. Two such frameworks that I have limited experience with include the NodeJS Express framework in JavaScript and the Flask framework in Python. 

## What a "Development Environment" means to me
One very important concept in web development is that of the development environment. According to PC Magazine’s Encyclopedia, a development environment is a “A programming language and related components. It includes the compiler, text editor, debugger, function library and any other supporting programs that enable a programmer to write a program”.

With the above definition in mind, it is clear to see that that any given language is only part of the overall development environment. In addition to the language I use, my development environment consists of VS Code which is my code editor, Git for version control, and Windows Subsystem for Linux as a sort of virtual machine over my windows OS that basically provides me compatibility with any Linux scripts and binaries.

One aspect to the development environment that is really important to me is the local development server. The local development server allows me to run my application and all the backend code for that application on my local computer as if it was being hosted on a remote server. Once running my local development server, I can really begin to play around with my framework and see how it functions.

## Some Lessons Learned the Hard Way
- Never trust the data coming back from a server: always have a check in place to verify the data returned after a request to a server (learned twice).
- Do not bite off more refactoring at once that you can chew.
- Use the developer debugging tools: code snippets, breakpoints, and real-time CSS changes are amazing.
- Do not create different types of users or different versions of an app for various users when what you really want to do is control access. The user and the app should be the same, it is just the permissions attached to a user that will vary (this came from all the trouble that resulted from a system where internal users and client users were fundamentally different and used seperate sysytems to interact with one application).
- Your code must contain error good error messages - this tip is closely related to the tip about never trusting your data.

*Source: Tidbits from my own ponderings*