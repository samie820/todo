import deleteTask from "./deleteTask";

const createNewTaskElement = function(taskString) {
  const listItem = document.createElement("li");
  const label = document.createElement("label");
  const deleteButton = document.createElement("button");

  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  deleteButton.addEventListener("click", deleteTask);

  label.innerText = taskString;

  listItem.appendChild(label);
  listItem.appendChild(deleteButton);

  return listItem;
};

const addTask = function(e) {
  const taskList = document.getElementById("tasks");
  const task = document.getElementById("new-task");
  if (task.value !== "") {
    const newTaskItem = createNewTaskElement(task.value);
    taskList.appendChild(newTaskItem);
    task.value = "";
  }
};

export default addTask;
