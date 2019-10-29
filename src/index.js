document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form")
  form.addEventListener("submit",createListItem)
 
});

let i = 0;

function createListItem(event) {
  event.preventDefault();
  taskText = document.getElementById("new-task-description").value
  addToList(taskText);
  event.target.reset()
}

function changeColor(event) {
let y = event.target.value 
let x = event.target.parentNode
x.style = `color: ${y}`

}

function addToList(taskText) {

  let newLi = document.createElement("li");
  newLi.id = i
  i++
  newLi.innerText = taskText;

  let urgency = document.createElement("select")
  urgency.innerHTML = `<option></option><option value="red">Red</option><option value="orange">Orange</option><option value="green">Green</option>` 
  urgency.addEventListener("change", changeColor)
 
  let deleteTask = document.createElement("button")
  deleteTask.innerText = "Delete Task"

  unorderedList = document.getElementById("tasks"); 
  newLi.appendChild(urgency)
  newLi.appendChild(deleteTask);
  unorderedList.appendChild(newLi); 
  deleteTask.addEventListener("click", destroyLi)
}

function destroyLi(event) {
  let x = document.getElementById(event.target.parentNode.id)
  x.parentNode.removeChild(x)
}

destroyLi()