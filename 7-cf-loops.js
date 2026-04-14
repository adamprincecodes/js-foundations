//what are loops?*
/*Loops are a fundamental programming construct that allow you to repeat a block of code multiple times. They are 
used to perform tasks that require repetition, such as iterating over arrays, performing calculations, or executing 
a set of instructions until a certain condition is met.*/

//2. types of loops
//1. for loop - executes a block of code a specified number of times
for (let i = 0; i < 5; i++) {
  console.log(i); // Output: 0, 1, 2, 3, 4
}
//2. while loop - executes a block of code as long as a specified condition is true
let i = 0;
while (i < 5) {
  console.log(i); // Output: 0, 1, 2, 3, 4
  i++;
}
//3. do-while loop - executes a block of code at least once, and then continues to execute as long as a specified condition is true
let i = 0;
do {
  console.log(i); // Output: 0, 1, 2, 3, 4
  i++;
} while (i < 5);
//4. for...in loop - iterates over the properties of an object
let person = { name: "Adam", age: 25, isStudent: false };
for (let key in person) {
  console.log(key + ": " + person[key]); // Output: name: Adam, age: 25, isStudent: false
}
//5. for...of loop - iterates over the values of an iterable object, such as an array
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color); // Output: red, green, blue
}
//3. why are loops important in JavaScript?
/*Loops are important in JavaScript because they allow us to perform repetitive tasks efficiently and effectively. 
They enable us to iterate over arrays, objects, and other data structures, making it easier to manipulate and 
process data. Loops also help us avoid code duplication and make our code more concise and readable. They are a 
fundamental part of programming and are used extensively in JavaScript and other programming languages. */
