//what are async?
// //async functions are functions that return a promise. They allow us to write asynchronous code in a synchronous manner.
//async functions are defined using the async keyword before the function declaration or expression.
//They can be used with the await keyword to pause the execution of the function until a promise is resolved.

//types of async functions
//1. async function declaration
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData();
//2. async function expression
const fetchData = async function () {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchData();
//3. async arrow function
const fetchData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
fetchData();

//why are async functions important in JavaScript?
/*Async functions are important in JavaScript because they allow us to write asynchronous code in a more 
readable and maintainable way. They help us avoid callback hell and make it easier to handle errors.
Async functions also allow us to take advantage of the benefits of asynchronous programming, such as improved
performance and responsiveness, while still maintaining a clean and organized code structure. They are widely used in 
web development and other applications that require asynchronous operations, such as fetching data from APIs or 
performing time-consuming tasks. */
