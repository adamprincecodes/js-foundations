function getRectangleArea(width, height) {
  return width * height;
}
function celciusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
function dividebythree(num) {
  return fizz;
}
function dividebyfive(num) {
  return buzz;
}
function dividebythreeandfive(num) {
  return fizzbuzz;
}
function getFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * getFactorial(num - 1);
}
//Create two number variables and calculate their sum, difference, product, and quotient. Display all results.
let num1 = 20;
let num2 = 10;
console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);

//Find the remainder when 17 is divided by 5 and display the result.
let num1 = 17;
let num2 = 5;
console.log("reminder", num1 % num2);

//Create a variable x with a value of 10. Add 5 to it using a shorthand operator, then multiply the result by 2 using another shorthand operator. Display the final value.
let x = 10;
x += 5;
console.log((x *= 2));

/*
Perform the following operations and display the results:

A string "5" plus a number 2
A string "5" minus a number 2
*/
let num1 = "5";
let num2 = "2";
let x = Number(num1) + 2;
console.log(x);

let num3 = "5";
let num4 = "2";
let y = Number(num3) - Number(num4);
console.log(y);

/*
Convert a string "100" into a number and display the result. 
Then convert a number 50 into a string and display the result.
*/
let num1 = "100";
let num2 = 50;
let x = Number(num1);
console.log(x); // Output: 100
let y = String(num2);
console.log(y); // Output: "50"

//Compare the values 5 and "5" using both loose equality and strict equality. Display both results.
let num1 = "5";
let num2 = 5;
console.log(num1 == num2);
console.log(num1 === num2);

// Create variables for principal, rate, and time. Calculate the simple interest and display the result.
let principle = 100;
let rate = 0.05;
let time = 2;
let simpleinterest = principle * rate * time;
console.log(simpleinterest);

//Create variables for a student's score and the pass mark. Determine if the student has passed and scored above 50.
let score = 70;
let passmark = 60;
let passed = score >= passmark;
let above50 = score > 50;
console.log("passed:", passed);
console.log("Scored above 50:", above50);
