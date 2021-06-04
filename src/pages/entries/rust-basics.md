---
title: "Basic Concepts of Rust"
date: "2021-04-15"
---

This is the beginning of a blog series that will help you learn the Rust programming language by creating simple algorithms that solve basic math problems.

Though I do try to explain each new topic comprehensively, a basic understanding of the following concepts will be helpful.

**Foundational programming concepts:**
1. function declaration
1. parameters
1. arguments
1. methods
1. language libraries
1. loop iterations
1. the basic meaning of true/false
1. mutability
1. and what String and Number types are

**Foundational math concepts:**
1. Some basic math knowledge like addition
1. subtraction
1. multiplication
1. division
1. whole numbers
1. integers
1. the number line
1. and decimals

If you would like to learn or refresh your knowledge in these areas, I suggest you check out ***[Free Code Camp](https://www.freecodecamp.org/)*** for foundational programming knowledge, and ***[Openstax's free math books](https://openstax.org/subjects/math)*** for the foundation math.

This section serves more as a gentle introduction to some common Rust syntax and features.
We will create a Rust program that performs the basic arithmetic operation of addition.
To get started, open the Rust playground by visiting: https://play.rust-lang.org/<br>

When the Rust playground loads, you should see something similar to this:

    fn main() {
      println!("Hello, world!");
    }

A standard greeting to the world may seem very simple, but there is actually a lot going on here.<br>

For starters, we have our first Rust function! In Rust, functions are created by typing fn, which is short for function, followed by the name of our function, which in this case is *main*. 

Immediately following the function’s name we must add a pair of parentheses `()`, a space, and then a pair of curly brackets `{}`. 

If you were to rename this function to something else like “myFunction”, the Rust compiler would abort the operation of printing out hello world. For this reason, the first function in our Rust program will always be called main; it is how Rust starts our program and it is more than just a convention, it is required by the compiler. Later, we will be coming up with many functions named as we see fit.

> The first function in our Rust program will always be called main

All of our function’s code will be placed inside of the curly brackets. In the case of our *main* function, the code inside the curly brackets prints a line of text to our terminal.<br>

Specifically, the line of text happens to be a greeting to the world. In Rust terms, the `println!` is classified as a statement. According to the Rust Book, “Statements are instructions that perform some action and do not return a value. For the moment, don’t worry too much about the details of what a statement is: As we work through this course, you will develop a good understanding of Rust statements.

So, back to our main function, we will modify our `println!` statement to print out two addends that we define, and the sum of those two addends. So, this is what our new statement should look like:

    fn main() {
      println!("adding {} and {} equals {}", 5, 7, 5 + 7);
    }

This function successfully prints out our two addends and the sum of adding them together. Let's look a little more closely at what is happening here.

The `println!` statement is actually able to dynamically place values into what it prints out. Curly brackets inside of the quotation marks, `"adding {} and {} equals {}"`, act as placeholders for some values that are to be defined outside of the quotation marks, `5, 7, 5 + 7`. We can have multiple curly bracket placeholders inside our quotation marks as long as each curly bracket has a coinciding value after the quotation marks.

There are two important things to remember about placing values in a print statement: First, the order of the values outside the quotation marks matters. And second, each value must be separated by a common.

The best way to solidify this knowledge is to play around a bit with the print statement. Try to change the order of the addends and modify the addition expression to get a better feel for how `println!` works. We will be seeing a lot more of it.

Instead of keeping all our logic inside of our print line statement, let add some variables to our function so that we can better visualize what is happening in our expression:

    fn main() {
      let a = 20;
      let b = 40;
 
      let sum = a + b;
      
      println!("adding {} and {} equals {}", a, b, sum);
    }

Here we can see how Rust creates variables: We create a variable with the `let` keyword followed by the name of our variable, an equal sign `=`, and the value that we want to bind. In our example, we have a variable that we have named “a” and we bind the value 20 to it.

Ok, Cool. We have already seen an example of adding counting numbers (20 and 40). Now, let’s rewrite our function to add a decimal number.

    fn main() {
      let a = 10;
      let b = 40.5;
    
      let sum = a + b;
    
      println!("adding {} and {} equals {}", a, b, sum);
    }

Try the program out. If this is your first experience with a Rust compiler error, welcome.

> The error messages that the Rust compiler provides are usually pretty helpful.

Reading through the error message, we see that the compiler cannot add an integer type, variable a, and a float type, variable b; adding these two types together can not be “implemented”. You see, Rust is a statically typed language meaning that every value in Rust is of a certain data type, which tells Rust what kind of data is being specified so it knows how to work with that data.<br>

Consequently, we will need to make sure that we are aware of what types we are working with and what we can do with them. Do not fret too much, however, the compiler will keep us accountable.

In our example, Rust is inferring that `a` is an integer and `b` is a float type based on how we have written our code. Fixing this error is not too hard. Actually there are multiple ways to fix it and we will quickly look at two simple ways: the first way is to implicitly change `a` to a float type. We can do that by adding a period and a 0 at the end of 10. In this solution, we are helping Rust to infer the proper type for `a`. It is actually quite common to let Rust infer the types for our data. Rust will often give our data a default type in absence of an explicit type.

    fn main() {
      let a = 10.0;
      let b = 40.5;
      
      let sum = a + b;
      
      println!("adding {} and {} equals {}", a, b, sum);
    }

After making that change, our program should again be working. If we do not want to infer the type, we can explicitly define the type of a variable by adding a colon, `:` and a type after the variable’s name. Let's do that now in our code:

    fn main() {
      let a: f32 = 10;
      let b = 40.5;
      
      let sum = a + b;
      
      println!("adding {} and {} equals {}", a, b, sum);
    }

In this section we have created a simple program in Rust that prints out the sum of two numbers. We defined a function, modified the default print line statement, and corrected an error by changing the type of a variable. In the next section we are going to begin working with whole numbers in more interesting ways like rounding, finding the prime factorization, and finding the least common multiple.