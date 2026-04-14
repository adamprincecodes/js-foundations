//ES6 stands for ECMAScript 2015, which is the sixth edition of the ECMAScript standard.
/* It introduced several new features and improvements to JavaScript, making it more powerful 
and easier to work with. Some of the key features introduced in ES6 include*/

//what was introduced in ES6
//let and const
//arrow functions
//template literals
//destructuring
//spread operator
//classes
//modules

//function in es6
//1. Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Adam")); // Output: Hello, Adam!
//2. Function expression
const greet = function (name) {
  return "Hello, " + name + "!";
};
console.log(greet("Adam")); // Output: Hello, Adam!
//3. Arrow function
const greet = (name) => {
  return "Hello, " + name + "!";
};
console.log(greet("Adam")); // Output: Hello, Adam!

//loops in es6
//1. for...of loop - used to iterate over iterable objects like arrays and strings
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color); // Output: red, green, blue
}
//2. for...in loop - used to iterate over the properties of an object
const person = { name: "Adam", age: 25, isStudent: false };
for (const key in person) {
  console.log(key + ": " + person[key]); // Output: name: Adam, age: 25, isStudent: false
}

//operators in es6
//1. Spread operator - used to expand an iterable object into individual elements
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]
//2. Rest operator - used to collect multiple elements into an array
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // Output: 6

//variables in es6
//1. let - used to declare block-scoped variables
let name = "Adam";
console.log(name); // Output: Adam
//2. const - used to declare block-scoped constants
const PI = 3.14;
console.log(PI); // Output: 3.14

//data types in es6
//1. String - a sequence of characters enclosed in quotes
let name = "Adam";
console.log(name); // Output: Adam
//2. Number - a numeric value
let age = 30;
console.log(age);

//3. Boolean - a logical value that can be either true or false
let isStudent = true;
console.log(isStudent); // Output: true
//4. Undefined - a variable that has been declared but not assigned a value
let email;
console.log(email); // Output: undefined
//5. Null - a variable that has been assigned the value of null
let address = null;
console.log(address); // Output: null
//6. Object - a collection of key-value pairs
let person = {
  name: "Adam",
  age: 30,
  isStudent: true,
};
console.log(person); // Output: { name: "Adam", age: 30, isStudent: true }
//7. Array - a list of values enclosed in square brackets
let colors = ["red", "green", "blue"];
console.log(colors); // Output: ["red", "green", "blue"]
//8. Function - a block of code that can be executed when called
function greet(name) {
  return "Hello, " + name + "!";
}

//conditional statements in es6
//1. if statement
let age = 18;
if (age >= 18) {
  console.log("You are an adult."); // Output: You are an adult.
}
//2. if...else statement
let age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult."); // Output: You are not an adult.
}
//3. else...if statement
let age = 20;
if (age >= 18 && age < 21) {
  console.log("You are an adult but not yet 21."); // Output: You are an adult but not yet 21.
} else if (age >= 21) {
  console.log("You are an adult and 21 or older."); // Output: You are an adult and 21 or older.
} else {
  console.log("You are not an adult."); // Output: You are not an adult.
}
//4. switch statement
let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's Monday.");
    break;
  case "Tuesday":
    console.log("It's Tuesday.");
    break;
  case "Wednesday":
    console.log("It's Wednesday.");
    break;
  default:
    console.log("It's not a weekday.");
}
//5. ternary operator
let age = 18;
let message = age >= 18 ? "You are an adult." : "You are not an adult.";
console.log(message); // Output: You are an adult.

//arrays in es6
//1. Array literal syntax
let colors = ["red", "green", "blue"];
console.log(colors); // Output: ["red", "green", "blue"]
//2. Array constructor
let colors = new Array("red", "green", "blue");
console.log(colors); // Output: ["red", "green", "blue"]
//3. Array.of() method
let colors = Array.of("red", "green", "blue");
console.log(colors); // Output: ["red", "green", "blue"]
//4. Array.from() method
let colors = Array.from(["red", "green", "blue"]);
console.log(colors); // Output: ["red", "green", "blue"]

//objects in es6
//1. Object literal syntax
let person = {
  name: "Adam",
  age: 25,
  isStudent: false,
};
console.log(person);
//2. Object constructor
let person = new Object();
person.name = "Adam";
person.age = 25;
person.isStudent = false;
console.log(person);
//3. Object.create() method
let person = Object.create(Object.prototype, {
  name: { value: "Adam", writable: true, enumerable: true, configurable: true },
  age: { value: 25, writable: true, enumerable: true, configurable: true },
  isStudent: {
    value: false,
    writable: true,
    enumerable: true,
    configurable: true,
  },
});
console.log(person);

//async/await in es6
//1. async function - a function that returns a promise and can be used with the await keyword
async function fetchData() {
  return "Data fetched!";
}
fetchData().then((data) => console.log(data)); // Output: Data fetched!
//2. await keyword - used to wait for a promise to resolve before continuing with the execution of the code
async function fetchData() {
  return "Data fetched!";
}
async function main() {
  const data = await fetchData();
  console.log(data); // Output: Data fetched!
}
main();
