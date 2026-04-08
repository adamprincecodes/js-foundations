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

//Create variables for order amount and distance. Determine if delivery is free when the order amount is above a threshold and the distance is within a limit
let orderAmount = 150;
let distance = 5;
let freeDelivery = orderAmount > 100 && distance <= 10;
console.log("Free delivery:", freeDelivery);

//Create variables for salary and credit score. Determine if a loan is approved when salary is above a threshold and credit score is high enough.
let salary = 45000;
let creditScore = 690;
let loanApproved = salary > 40000 && creditScore >= 650;
console.log("Loan approved:", loanApproved);

//Create variables for attendance percentage and assignment completion status. Determine if a student can sit for an exam when both conditions are met.
let attendancePercentage = 80;
let assignmentCompleted = true;
let canSitForExam = attendancePercentage >= 75 && assignmentCompleted;
console.log("Can sit for exam:", canSitForExam);

/*
Write a function that:
Takes water units consumed
Applies:
First 10 units → KES 20/unit
Next 20 units → KES 15/unit
Remaining → KES 10/unit
Returns total bill
*/

function unitsconsumed(units) {
  let bill = 0;
  if (units <= 10) {
    bill = units * 20;
  } else if (units <= 30) {
    bill = 10 * 20 + (units - 10) * 15;
  } else if (units > 30) {
    bill = 10 * 20 + 10 * 15 + (units - 30) * 10;
  }
  return bill;
}
console.log(unitsconsumed(25)); // Output: 100

/*
A telecom system needs to validate airtime purchases. Write a function that:
- Takes phoneNumber, amount, and balance
- Checks:
    - Phone number must be 10 digits
    - Amount must be greater than 0
    - User must have enough balance
- Deducts the amount if valid and returns the new balance
- Otherwise returns an error message
*/
function airtimepurchase(phonenumber, amount, balance) {
  if (phonenumber.length !== 10) {
  }
  if (amount > 0) {
  }
  if (balance > amount) {
  }
  return balance - amount;
}
console.log(airtimepurchase("1234567890", 70, 100));

/*
A school wants to automate grading. Write a function that:
- Accepts an array of student scores
- Uses a loop to:
    - Assign grades: 70+ → A, 60–69 → B, 50–59 → C, Below 50 → Fail
- Returns a summary:
    - Total students
    - Number of passes and fails
*/
function gradeStudents(scores) {
  let summary = {
    totalStudents: scores.length,
    passes: 4,
    fails: 2,
  };

  for (let score of scores) {
    if (score >= 70) {
      // Assign grade A
    } else if (score >= 60) {
      // Assign grade B
    } else if (score >= 50) {
      // Assign grade C
    } else {
      // Assign grade Fail
    }
  }

  return summary;
}
console.log(gradeStudents([85, 72, 67, 45, 90, 49]));

/*
A supermarket applies discounts based on total purchase. Write a function that:
- Takes an array of item prices
- Calculates total cost using a loop
- Applies:
    - 10% discount if total > 5000
    - 5% discount if total > 2000
- Returns final payable amount
*/
function applydiscount(items) {
  let price = 0;
  for (let item of items) {
    price += item;
  }
  if (price > 5000) return price * 0.9;
  else if (price > 2000) return price * 0.95;
  else return price;
}
console.log(applydiscount([7000]));

/*
A parking system charges based on hours parked. Write a function that:
- Takes number of hours parked
- Charges:
    - First 2 hours → KES 50/hour
    - Additional hours → KES 30/hour
- Uses conditionals to calculate total cost
*/
function calcuteparkingcost(hours) {
  if (hours <= 2) {
    return 2 * 50;
  } else if (hours > 2) {
    return 2 * 50 + (hours - 2) * 30;
  }
}
console.log(calcuteparkingcost(7));
