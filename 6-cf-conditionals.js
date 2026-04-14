//what are coditionals?
/*conditionals are statements that allow us to control the flow of our code based on certain conditions. 
They help us make decisions in our code and execute different blocks of code based on whether a condition is 
true or false.*/

//how to use conditionals in JavaScript
//1. if statement - executes a block of code if a specified condition is true
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
//2. if-else statement - executes one block of code if a specified condition is true, and another block of code if the condition is false
let age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}
//3. else-if statement - executes a block of code if a specified condition is true, and another block of code if the condition is false, and another block of code if the condition is false
let age = 20;
if (age >= 18 && age < 21) {
  console.log("You are a young adult.");
} else if (age >= 21) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}
//4. switch statement - executes a block of code based on different cases
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
//5. ternary operator - a shorthand for an if-else statement
let age = 18;
let message = age >= 18 ? "You are an adult." : "You are not an adult.";
console.log(message); // Output: You are an adult.

//why are conditionals important in JavaScript?
/*Conditionals are important in JavaScript because they allow us to make decisions in our code and control the 
flow of our program. They enable us to execute different blocks of code based on certain conditions, which is
essential for creating dynamic and interactive web applications. Conditionals also help us handle user input,
validate data, and implement complex logic in our code. They are a fundamental part of programming and are used 
extensively in JavaScript and other programming languages. */
