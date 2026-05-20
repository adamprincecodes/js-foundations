function greet() {
  const name = document.getElementById("name").value;
  const greeting = "Hello there, " + name;
  document.getElementById("result").value = greeting;

  const clearButton = document.createElement("button");
  clearButton.textContent = "Clear";
  clearButton.onclick = clearResult;

  const resultcontainer = document.getElementById("result").parentNode;
  resultcontainer.appendChild(clearButton);

  //change the background color of the result input field based on the selected gender
  const gender = document.getElementById("gender").value;
  if (gender === "male") {
    document.getElementById("result").style.backgroundColor = "lightblue";
  } else if (gender === "female") {
    document.getElementById("result").style.backgroundColor = "lightpink";
  }

  const genderSymbol = document.getElementById("gender").value;
  if (genderSymbol === "male") {
    document.getElementById("result2").value += " ♂";
  } else if (genderSymbol === "female ") {
    document.getElementById("result2").value += " ♀";
  }
}
function clearResult() {
  document.getElementById("result").value = "";
  document.getElementById("result2").value = "";
}
