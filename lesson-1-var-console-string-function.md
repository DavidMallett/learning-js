
## Exercise 1: types, functions, vars, and console

A string is any text consisting of any number of characters between two quotation marks. For example, "I like turtles", "1234asdf@#$", and "1" are all strings.

The console.log command will output whatever string is passed into it (if given an object, it will automatically check to see if that object [we'll discuss objects in Lesson 2] has a toString() method - more on this later). You will use this command a whole lot while writing and editing code. Try it out with the following code (copy into your "hello.js" and save):  

```js
console.log("Hello world! This is a test!");  
```  

Take care to ensure you remember the semicolon at the end of the line (the end of a command or line in javascript is denoted by a semicolon), and to use double quotes, not single quotes. Run the script with `node ./src/js/hello.js`, assuming you are in the root of the project. Observe the following output:  

```
Hello world! This is a test!  
```

Let's break down what just happened:

1. The **nodejs** engine read your code
2. It then executed the **log** function of the **console** object, which is built in to javascript and automatically accessible at any time. This is also referred to as a **global**
3. The function took the text "Hello world! This is a test!" and printed it in the terminal 

A variable is a word or symbol that represents some sort of value or piece of data/information - a string, a number, or something more complex. Anything can be a variable; to declare a variable in javascript, use the word `var`, then a space and the word/symbol that will represent the variable, followed by = (equals sign) and the value you want the string to represent. Some examples:  

`var number = 12;`  
`var word = "platypus";`  
`var foo = "whatever, variables can represent any kind of data you want";`  
`var reallyLongAndDescriptiveVariableName78WithNumbers = {"An object representing all the files on your computer"};`  
  
Most of the time, you will console.log variables representing or containing strings. Replace the code in `hello.js` with:

```js
var greeting = "Hello world! This is a test!";
console.log(greeting);
```  

and save. Re-run the above command and observe that you get the same output as before.

A function, or method, is a piece of code that can do whatever you want it to do. Optionally, you may give the function any number of arguments (variables) which it will then use or transform to produce output. By creating a function, you can easily re-use bits of code without having to repeat yourself. This brings us to the DRY (Don't Repeat Yourself) principle, which basically says the best practice of writing code is to repeat yourself as little as possible (any time you have to repeat the same line of code more than twice, consider turning it into a function).  

To create a function, simply type in your IDE `function functionName() {}` where "functionName" is the name of the function you're creating. To use the function, you can type `functionName()` elsewhere in your code and it will execute all the code between the `{}`, which you will add (typically you want to separate these by a few line breaks to give yourself plenty of room to write code). Here are some code examples:
```js
// (When "//" or "/** ... */" appear in a javascript file,
// that indicates that that line is a comment, and that it
// will not be treated as code)
function sayHello() {
    console.log("Hello!");
} // in this example, the function will print "Hello!" every time it is called
sayHello();
```

The word "return" precedes the result of a function; whatever value comes after the word "return" in a function, shall be the the result of that function executing. You can return a static value (like a string or number) or a variable. A function that doesn't return anything is said to be **void**.

```js
function sayHello() {
    return "Hello!";
} // this example returns "hello" as a string, which can then be console.log'd
console.log(sayHello());
```
```js
function sayHello() {
    return "Hello!";
} // functions can be used to define variables:
var h = sayHello();
console.log(h); // this is the exact same thing as above
```

To add parameters to a function, simply put the name of the parameter in between the parentheses after the function name. A function can have any number of parameters; separate them with a comma. You may put a ? after a parameter to make it optional; however, all subsequent parameters of that function must also be optional (you can't have a required parameter after an optional parameter).

As a best practice, you should leave comments in your code indicating what each function does (if not obvious) and what type of data each input needs to be. Javascript is rather picky; if a function expects a number, and you give it a string (for example), then an error will occur and the program will crash.

Here are some examples of functions with parameters:

```js
/**
 * Greet: a function to greet people
 * @param {string} name 
 */
function greet(name) {
    // you can stick strings together with the + sign
    return "Hello, " + name + "!";
    // this is called "concatenation"
}
console.log(greet("David"));
```

```js
// This is exactly the same as above, but is a little less typing
function greet(name) {
    return `Hello, ${name}!`;
/** Note that while normal strings are wrapped in double quotes, this string is instead wrapped in backticks ( ` character, usually in the top-left corner of keyboards near or on the ~ key). This is called a Template Literal, and strings constructed this way may use placeholders, variables, etc using the above syntax */
}
console.log(greet("David"));
var someName = "Bob";
// you can also pass variables into functions as parameters:
console.log(greet(someName));
// similarly, variables can be assigned from functions:
var greeting = greet("friend");
// will assign the string value "Hello, friend!" to the variable "greeting"
```

```js
// an example with multiple parameters
function addThreeNumbers(number1, number2, number3) {
    return number1 + number2 + number3;
}
var result = addThreeNumbers(3, 4, 5);
console.log("3 + 4 + 5 = " + result);
// note: depending on the version of javascript, you may need to write
// addThreeNumbers(3, 4, 5).toString()
// instead of
// addThreeNumbers(3, 4, 5)
// if it doesn't work
```

```js
// Of course, you *can* name variables and functions whatever you want...
var hotdog = 3;
var jellyfish = 17;
// ...but you shouldn't.
function multiply(toast, beefcake) {
    return toast * beefcake;
}
var jimmy = multiply(hotdog, jellyfish);
// jimmy === 51, but it isn't obvious what's going on here
// If the function weren't named "multiply" I'd have no idea what this is
```

```js
/** Lastly, an example with optional parameters (NOTE: variable names are always case sensitive!) : */
function names(firstName, middleName?, lastName?) {
    var mname = middleName || "";
    // The "||" means "(inclusive) or" in javascript.
/** If the function is called and the value is not provided, then it will default to the value after the || */
    var lname = lastName || "";
/* If the function is called, the optional value is not provided, *and* there 
isn't anything given as a default value, then the value will become null.
Null in javascript means that the value does not exist. 
I would feel foolish if my name was "David null null", wouldn't I?
*/
}
```

As a final warning: if a non-optional parameter of a function ends up null, undefined, or the wrong type of data and you try to do something to it, your program will probably crash!
