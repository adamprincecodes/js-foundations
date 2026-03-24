//what are data-types
//data types are the different types of values that can be stored in variables

//different data types in JavaScript
//1. String - a sequence of characters enclosed in quotes
let name = "Adam";
console.log(name); // Output: Adam
//2. Number - a numeric value
let age = 30;
console.log(age); // Output: 30
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

//different ways to declare data types
//1. using literals
let name = "Adam"; // String literal
let age = 30; // Number literal
let isStudent = true; // Boolean literal
let email; // Undefined literal
let address = null; // Null literal
let person = {
  // Object literal
  name: "Adam",
  age: 30,
  isStudent: true,
};
console.log(person); // Output: { name: "Adam", age: 30, isStudent: true }
//2. using constructors
let name = new String("Adam"); // String constructor
let age = new Number(30); // Number constructor
let isStudent = new Boolean(true); // Boolean constructor
let email = new String(); // Undefined constructor
let address = new String(null); // Null constructor
let person = new Object({
  // Object constructor
  name: "Adam",
  age: 30,
  isStudent: true,
});
console.log(person); // Output: { name: "Adam", age: 30, isStudent: true }
