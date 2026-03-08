// Accessing Elements
let taskInput = document.querySelector(".input-field");
let addTaskButton = document.querySelector(".add-button");
let completedTaskStates = document.querySelector(".completed-stats");
let progressTaskStates = document.querySelector(".progress-stats");
let taskLists = document.querySelector(".Task-List");
// let taskConatiner = document.querySelector(".task-conatiner");

let taskCompleted = 0;
let taskProgress = 0;

const addTask = () => {
  const textTask = taskInput.value;
  if (textTask.trim() === "") {
    document.querySelector(".emptyInputError").style.visibility = "visible";
    return;
  }

  taskProgress++;

  // Element Creation
  let taskConatiner = document.createElement("div");
  // taskConatiner.createElement("div");
  let taskName = document.createElement("p");
  let buttonContainer = document.createElement("div");
  let deleteButton = document.createElement("button");
  let completeButton = document.createElement("button");

  //Setting text to buttons
  deleteButton.textContent = "Delete";
  completeButton.textContent = "Complete";

  // Assign Classes
  taskConatiner.setAttribute("class", "task-conatiner");

  taskName.setAttribute("class", "task-name");
  buttonContainer.setAttribute("class", "cta-container");
  deleteButton.setAttribute("class", "delete-button");
  completeButton.setAttribute("class", "complete-button");

  // Appending
  taskLists.appendChild(taskConatiner);
  taskConatiner.appendChild(taskName);
  taskConatiner.appendChild(buttonContainer);
  buttonContainer.appendChild(deleteButton);
  buttonContainer.appendChild(completeButton);
  taskName.textContent = taskInput.value;

  progressTaskStates.textContent = `Task in Progress : ${taskProgress}`;
  completedTaskStates.textContent = `Task Completed : ${taskCompleted}`;

  let isComplete = false;
  // Function for Completing Task
  completeButton.addEventListener("click", function () {
    if (!isComplete) {
      if (taskProgress > 0) {
        taskProgress--;
      }
      taskCompleted++;
      taskName.style.textDecoration = "line-through";
      completeButton.style.backgroundColor = "#9093a0";
      completeButton.style.color = "#ffffff";
      completeButton.textContent = "Completed";

      isComplete = true;
    }

    progressTaskStates.textContent = `Task in Progress : ${taskProgress}`;
    completedTaskStates.textContent = `Task Completed : ${taskCompleted}`;
  });

  // Function for Deleting Task
  deleteButton.addEventListener("click", function () {
    if (taskProgress > 0 && !isComplete) {
      taskProgress--;
    }
    if (taskCompleted > 0) {
      taskCompleted--;
    }
    taskConatiner.remove();
    progressTaskStates.textContent = `Task in Progress : ${taskProgress}`;
    completedTaskStates.textContent = `Task Completed : ${taskCompleted}`;
  });

  document.querySelector(".emptyInputError").style.visibility = "hidden";
  taskInput.value = "";
};

// Adding Task
addTaskButton.addEventListener("click", addTask);

// Adding Task through Enter Key
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "Enter") {
    addTask();
  }
});
