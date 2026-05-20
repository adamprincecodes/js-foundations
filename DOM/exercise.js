/*1.  Dynamic Student List Manager

You are building a simple interface for managing a class list.

Problem Statement:
Create a web page with:

- An input field for entering a student’s name
- An "Add Student" button
- An empty list displayed on the page

Requirements:

- When the button is clicked, the student’s name should be added as a new list item (<li>) in the list
- Each list item must include an "X" button
- Clicking "X" should delete that specific student from the list
- Prevent adding empty names
*/

// Get references to DOM elements
const studentInput = document.getElementById("studentInput");
const addButton = document.getElementById("addButton");
const studentList = document.getElementById("studentList");
// Function to add a student to the list
function addStudent() {
  const studentName = studentInput.value.trim();
  if (studentName === "") {
    alert("Please enter a student name.");
    return;
  }
  // Create a new list item
  const listItem = document.createElement("li");
  listItem.textContent = studentName;
  // Create the "X" button    const deleteButton = document.createElement('button');
  deleteButton.textContent = "X";
  deleteButton.style.marginLeft = "10px";
  // Add the delete button to the list item
  listItem.appendChild(deleteButton);
  // Add the list item to the student list
  studentList.appendChild(listItem);
  // Clear the input field
  studentInput.value = "";
}
