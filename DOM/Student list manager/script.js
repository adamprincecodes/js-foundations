const studentInput = document.getElementById("student-Input");
const addButton = document.getElementById("addButton");
const studentList = document.getElementById("student-List");
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
// Event listener for the "Add Student" button
addButton.addEventListener("click", addStudent);
// Event delegation for delete buttons
studentList.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    event.target.parentElement.remove();
  }
});
