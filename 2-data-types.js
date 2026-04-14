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
//7. Array - a list of values enclosed in square brackets
let Colors = ["red", "green", "blue"];
console.log(Colors); // Output: ["red", "green", "blue"]
//8. Function - a block of code that can be executed when called
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Adam")); // Output: Hello, Adam!
//9. Symbol - a unique and immutable data type used to create unique identifiers
let id = Symbol("id");
console.log(id); // Output: Symbol(id)
//10. BigInt - a numeric data type that can represent integers with arbitrary precision
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt); // Output: 1234567890123456789012345678901234567890n

//different ways to declare data types
//1. using literals
let name = "Adam"; // String literal
let Age = 30; // Number literal
let IsStudent = true; // Boolean literal
let Email; // Undefined literal
let Address = null; // Null literal
let Person = {
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
