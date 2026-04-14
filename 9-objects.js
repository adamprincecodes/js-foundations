//what is an object in JavaScript?
/*An object is a collection of key-value pairs, where each key is a string and each value can be any data type,
including another object. Objects are used to store and organize data in JavaScript.
*/
//how to create an object in JavaScript
//1. using object literal syntax
let person = {
  name: "Adam",
  age: 25,
  isStudent: false,
};
console.log(person); // Output: { name: "Adam", age: 25, isStudent: false }
//2. using the Object constructor
let person = new Object();
person.name = "Adam";
person.age = 25;
person.isStudent = false;
console.log(person); // Output: { name: "Adam", age: 25, isStudent: false }
//3. using a constructor function
function Person(name, age, isStudent) {
  this.name = name;
  this.age = age;
  this.isStudent = isStudent;
}
let person = new Person("Adam", 25, false);
console.log(person); // Output: Person { name: "Adam", age: 25, isStudent: false }

//example of an object
let person = {
  name: "Adam",
  age: 25,
  isStudent: false,
};
console.log(person); // Output: { name: "Adam", age: 25, isStudent: false }
//accessing object properties
console.log(person.name); // Output: Adam
console.log(person["age"]); // Output: 25

//why are objects important in JavaScript?
/*Objects are important in JavaScript because they allow us to store and organize data in a structured way. 
They are also used to create complex data structures, such as arrays and functions, and to implement 
object-oriented programming concepts, such as inheritance and encapsulation. Objects are a fundamental 
part of JavaScript and are used extensively in web development and other applications.*/
