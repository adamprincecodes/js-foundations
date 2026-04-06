//what are operators
//operators are symbols that perform operations on values and variables

//different types of operators in JavaScript
//1. Arithmetic operators - perform mathematical operations
let x = 5;
let y = 10;
let z = x + y; // Addition operator
console.log(z); // Output: 15
let a = y - x; // Subtraction operator
console.log(a); // Output: 5
let b = x * y; // Multiplication operator
console.log(b); // Output: 50
let c = y / x; // Division operator
console.log(c); // Output: 2
let d = y % x; // Modulus operator
console.log(d); // Output: 0
let e1 = ++y; // Increment operator
console.log(e1); // Output: 11
let f1 = --x; // Decrement operator
console.log(f1); // Output: 4

//2. Assignment operators - assign values to variables
let e = 5; // Assignment operator
e += 10; // Addition assignment operator
console.log(e); // Output: 15
e -= 5; // Subtraction assignment operator
console.log(e); // Output: 10
e *= 2; // Multiplication assignment operator
console.log(e); // Output: 20
e /= 2; // Division assignment operator
console.log(e); // Output: 10

//3. Comparison operators - compare values and return a boolean result
let f = 5;
let g = 10;
console.log(f == g); // Output: false (Equality operator)
console.log(f != g); // Output: true (Inequality operator)
console.log(f < g); // Output: true (Less than operator)
console.log(f > g); // Output: false (Greater than operator)
console.log(f <= g); // Output: true (Less than or equal to operator)
console.log(f >= g); // Output: false (Greater than or equal to operator)
console.log(f === g); // Output: false (Strict equality operator)
console.log(f !== g); // Output: true (Strict inequality operator)

//4. Logical operators - combine boolean values and return a boolean result
let h = true;
let i = false;
console.log(h && i); // Output: false (Logical AND operator)
console.log(h || i); // Output: true (Logical OR operator)
console.log(!h); // Output: false (Logical NOT operator)
console.log(!!i); // Output: false (Double NOT operator, converts a value to its boolean equivalent)

//5. Ternary operator - a shorthand for an if-else statement
let j = 5;
let k = j > 10 ? "Greater than 10" : "Less than or equal to 10";
console.log(k); // Output: Less than or equal to 10

//6. String operators - perform operations on strings
let str1 = "Hello";
let str2 = "World";
let str3 = str1 + " " + str2; // Concatenation operator
console.log(str3); // Output: Hello World
