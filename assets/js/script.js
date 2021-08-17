const buttonEl = document.getElementById("save-task");
const taskToDoEl = document.getElementById("tasks-todo");
const formEl = document.querySelector("#task-form");

var createTaskHandler = function (event) {
  event.preventDefault();
  const taskNameInput = document.querySelector("input[name='task-name']").value;
  const taskTypeInput = document.querySelector(
    "select[name='task-type']"
  ).value;

  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };

  createTaskEl(taskDataObj);
};

var createTaskEl = function (taskDataObj) {
  // create list item
  const listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";
  // add HTML content to div
  taskInfoEl.innerHTML =
    "<h3 class='task-name'>" +
    taskDataObj.name +
    "</h3><span class='task-type'>" +
    taskDataObj.type +
    "</span>";

  listItemEl.appendChild(taskInfoEl);
  taskToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
