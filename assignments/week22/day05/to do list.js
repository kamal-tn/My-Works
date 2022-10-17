const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", addTodoTask);

function addTodoTask() {
  
  const newTaskText = document.getElementById("newTaskInput").value;
 
  

  const newTaskInput = document.createElement("input");
  newTaskInput.type = "checkbox";
  newTaskInput.className = "task";

  const newTaskSpan = document.createElement("span");
  newTaskSpan.innerText = newTaskText;

  

  const newTaskElement = document.createElement("div");
  newTaskElement.appendChild(newTaskInput);
  newTaskElement.appendChild(newTaskSpan);
  

  
  newTaskElement.addEventListener("click", markTaskCompleted);
  
  document.getElementById("taskList").appendChild(newTaskElement);
}

function markTaskCompleted(event) {
  
  if (event.target.tagName === "SPAN") {
    event.target.style.textDecoration = "line-through";
    event.target.previousSibling.checked = true;
  } else if (event.target.tagName === "INPUT") {
    event.target.nextSibling.style.textDecoration = "line-through";
    event.target.checked = true;
  }

}

