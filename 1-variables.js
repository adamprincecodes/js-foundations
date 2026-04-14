//what are variables
//variables are places in memory for storing data values

//different variabe operations
//1. declaration - creating a variable without giving it a value
var name; //declaring a variable named 'name'

//2. assignment - changing the value of a variable
name = "Adam";
console.log(name); // Output: Adam
//3. initialization - declaring a variable and giving it a value at the
// same time(this is a combination of declaration and assignment)
var name = "Adam";
console.log(name); // Output: Adam
//4. re-assignment - changing the value of a variable
name = "Eve";
console.log(name); // Output: Eve
//5. deletion - removing a variable (possible with let and const)
//delete name; // This will not work with var, but can be done with let and const
name = null; // This is a way to "delete" a variable by setting it to null
console.log(name); // Output: null

//different ways to declare variables
//1. using var
var name = "Adam";
console.log(name); // Output: Adam
//2. using let-
let age = 30;
console.log(age); // Output: 30
//3. using const-const is used to declare variables that cannot be reassigned a new value(assign values at declaration)
const country = "Kenya";
console.log(country); // Output: Kenya
