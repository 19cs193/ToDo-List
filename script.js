const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function AddTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value; // Add input field value to list item
    ListContainer.appendChild(li); // Append the list item to the list container
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Add a cross symbol at the end
    li.appendChild(span);
  }
  inputBox.value = ''; // Clear the input field
  saveData();
}

// Add an event listener to the input box for the Enter key
inputBox.addEventListener("keydown", function(event) {
  if (event.key === "Enter") { // Check if the key pressed is Enter
    AddTask();
  }
});

ListContainer.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", ListContainer.innerHTML);
}

function showTask() {
  ListContainer.innerHTML = localStorage.getItem("data");
}

showTask();
