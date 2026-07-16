const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskSummary = document.getElementById("taskSummary");
const errorMessage = document.getElementById("errorMessage");

// Starting tasks
let tasks = [];

// Display all tasks
function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        if (task.completed) {
            taskItem.classList.add("completed");
        }

        const taskText = document.createElement("span");
        taskText.classList.add("task-text");
        taskText.textContent = task.name;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "×";
        deleteBtn.setAttribute("aria-label", "Delete task");

        // Mark the task as completed
        taskText.addEventListener("click", function () {
            toggleTask(index);
        });

        // Delete the selected task
        deleteBtn.addEventListener("click", function () {
            deleteTask(index);
        });

        taskItem.appendChild(taskText);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
    });

    updateSummary();
}

// Add a new task
function addTask() {
    const taskName = taskInput.value.trim();

    if (taskName === "") {
        errorMessage.textContent = "Please enter a task.";
        taskInput.focus();
        return;
    }

    tasks.push({
        name: taskName,
        completed: false
    });

    taskInput.value = "";
    errorMessage.textContent = "";

    displayTasks();
    taskInput.focus();
}

// Change task completion status
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;

    displayTasks();
}

// Delete a task
function deleteTask(index) {
    tasks.splice(index, 1);

    displayTasks();
}

// Update completed task information
function updateSummary() {
    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(function (task) {
        return task.completed;
    }).length;

    taskSummary.textContent =
        `${completedTasks} of ${totalTasks} tasks done`;
}

// Add task when the button is clicked
addBtn.addEventListener("click", addTask);

// Add task when Enter is pressed
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Display the starting tasks
displayTasks();