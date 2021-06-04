---
title: "Rounding with Rust"
date: "2021-05-01"
---

One of the most basic operations we may want to do is to approximate a number to a specific place value. In many cases, you don’t need the exact value; an approximate number is good enough. The process of approximating is called rounding.

Rust actually has four different methods for rounding a floating point number to an integer. We are going to explore the most quote-unquote "common" method for rounding: *half-round up*. To understand what it means to round half-way up in Rust, let’s create a simple function that takes a floating point number and performs Rust's round() method on it. Let’s ignore the default main function for now, and declare the rounding function (we can declare it above or below the *main* function).


    fn round_float(number: f32) -> f32 {
      number.round()
    }

Here we have just declared a function named *round_float* and it accepts one parameter, named *number*. 

> Rust code uses snake case as the conventional style for function and variable names. In snake case, all letters are lowercase and underscores separate words.

Keep in mind that parameters, `(number: f32)`, are like variables that have not been given a value yet. Consequently, we can explicitly define the parameter's type the same way we would define the type of any other variable, with a colon `:`. In our round_float function, we have made sure that the `number` will be of 32bit float type: `f32`.

Our function will also return a value to the code that calls it. We declare the type of value our function will return by using an arrow followed by the type `-> f32`. The code inside our function applies Rust's round() method on “number” and returns that result.

Also notice how simple the syntax can be for returning a value from a Rust function; we can simply write out what we want returned, making sure not to include a semi-colon `;` at the end. In the case of our *round_float* function, we are returning the result of `number.round()`

Now that we have declared our *round_float* function, we will want to call it with an argument and do something with its result. *The main* function is a great place to call other functions and do something with their results. Inside `main()` Let’s call `round_float()`, passing in a value for the number parameter. 

We want to print the result out along with some favor text, so we will be using the `println!` statement, as we did in the previous section:

    fn main() {
      println!("round float is {}", round_float(-7.5));
    }

Now if you run the code, you should see that we are able to print out the result of the
round_float function.
Now we can pass in different arguments to round_float() and see exactly how it is rounding.

Notice how when the number ends in a .5, that our rounding function rounds up.
Also notice how when using a negitive number, round_float() returns a negative 
integer that is either equal to or less than the integer you pass into the function?
In other words, passing -7.3 to round_float() will return -7 and passing in -7.5 will return -8.

This section has just begun to scratch the surface of how rounding numbers works.
In addition to the round() method we used, Rust has rounding methods for floor, ceiling, and truncate
And there are external libraries that provide even more rounding variations, 
including the ability to round your floats with precision from 1 to 10.<br>

The topic of rounding numbers is surprisingly complex and worth a deeper look into, should you have an interest.
For us, however, we are next going to focus our attention on testing the divisibility of a number.
