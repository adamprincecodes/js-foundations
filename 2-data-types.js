//what are data-types
//data types are the different types of values that can be stored in variables

//different data types in JavaScript
//1. String - a sequence of characters enclosed in quotes
let name = "Adam";
console.log(name); // Output: Adam
//2. Number - a numeric value
let Age = 30;
console.log(Age); // Output: 30
//3. Boolean - a logical value that can be either true or false
let IsStudent = true;
console.log(IsStudent); // Output: true
//4. Undefined - a variable that has been declared but not assigned a value
let Email;
console.log(Email); // Output: undefined
//5. Null - a variable that has been assigned the value of null
let Address = null;
console.log(Address); // Output: null
//6. Object - a collection of key-value pairs
let Person = {
  name: "Adam",
  age: 30,
  isStudent: true,
};
console.log(Person); // Output: { name: "Adam", age: 30, isStudent: true }

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
