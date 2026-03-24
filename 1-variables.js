//what are variables
//variables are containers for storing data values

//different variabe operations
//1. declaration - creating a variable
var name; //declaring a variable named 'name'
//2. initialization - assigning a value to a variable
name = "Adam";
console.log(name); // Output: Adam
//3. re-assignment - changing the value of a variable
name = "Eve";
console.log(name); // Output: Eve
//4. deletion - removing a variable (not possible with var, but possible with let and const)
//delete name; // This will not work with var, but can be done with let and const
name = null; // This is a way to "delete" a variable by setting it to null
console.log(name); // Output: null

//different ways to declare variables
//1. using var
var name = "Adam";
console.log(name); // Output: Adam
//2. using let
let age = 30;
console.log(age); // Output: 30
//3. using const
const country = "Kenya";
console.log(country); // Output: Kenya
