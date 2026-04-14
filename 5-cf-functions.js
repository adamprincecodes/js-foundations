//what are functions
/* Functions are reusable blocks of code that perform a specific task. They allow you to break down your 
code into smaller, more manageable pieces, making it easier to read and maintain. Functions can take input 
parameters, perform operations on them, and return a result. They are 
fundamental building blocks in programming and are used to organize and structure code effectively. */

//How to use functions in JavaScript
//1. Function declaration - a named function that can be called before it is defined
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Adam")); // Output: Hello, Adam!
//2. Function expression - a function that is assigned to a variable(cannot be called before it is defined)
const greet = function (name) {
  return "Hello, " + name + "!";
};
console.log(greet("Adam")); // Output: Hello, Adam!
//3. Arrow function - a shorter syntax for writing functions, introduced in ES6(cannot be called before it is defined)
const greet = (name) => {
  return "Hello, " + name + "!";
};
console.log(greet("Adam")); // Output: Hello, Adam!
//4. Immediately Invoked Function Expression (IIFE)
(function (name) {
  console.log("Hello, " + name + "!");
})("Adam"); // Output: Hello, Adam!

//why are functions important in JavaScript?
/* Functions are important in JavaScript because they allow you to reuse code, making it more efficient and 
maintainable. They also enable you to break down complex problems into smaller, more manageable pieces, which 
improves code organization and readability. Functions can be passed as arguments to other functions, returned 
from functions, and assigned to variables, making them very flexible and powerful tools in JavaScript 
programming. */
