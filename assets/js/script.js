const buttonEl = document.getElementById("save-task");
const taskToDoEl = document.getElementById("tasks-todo");

buttonEl.addEventListener("click", function () {
  createTaskHandler();
});

var createTaskHandler = function () {
  const taskItemEl = document.createElement("li");
  taskItemEl.className = "task-item";
  taskItemEl.textContent = "This is a Task";
  taskToDoEl.appendChild(taskItemEl);
};
