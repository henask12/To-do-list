import { updateStatus } from "./statusUpdates.js";
let tasks = [];

export const taskList = document.getElementById("todo-list");

export const loadTasks = () => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks); // Replace this line
    }
};

export const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const makeTaskDescriptionEditable = (event) => {
    const taskDescription = event.target;
    taskDescription.setAttribute("contenteditable", "true"); // Make the task description editable
    taskDescription.focus(); // Focus on the task description element

    const saveDescription = () => {
        const newDescription = taskDescription.textContent.trim();
        if (newDescription !== "") {
            const listItem = taskDescription.parentElement;
            const index = Array.from(listItem.parentNode.children).indexOf(listItem);
            if (index !== -1) {
                tasks[index].description = newDescription;
                saveTasks();
            }
        }

        taskDescription.setAttribute("contenteditable", "false"); // Make the task description non-editable
        taskDescription.removeEventListener("blur", saveDescription); // Remove the blur event listener
    };

    taskDescription.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default behavior of the Enter key
            saveDescription();
        }
    });

    taskDescription.addEventListener("blur", saveDescription);
};

export const handleDeleteButtonClick = (event) => {
    const deleteButton = event.target;
    const listItem = deleteButton.parentNode;
    const index = Array.from(listItem.parentNode.children).indexOf(listItem);

    tasks.splice(index, 1); // Remove the task from the array

    // Adjust the index of remaining tasks
    for (let i = index; i < tasks.length; i += 1) {
        tasks[i].index = i + 1;
    }

    saveTasks(); // eslint-disable-next-line no-use-before-define
    populateTaskList();
};

export const populateTaskList = () => {
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        const listItem = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        updateStatus(checkbox, task, listItem, saveTasks);

        const taskDescription = document.createElement("span");
        taskDescription.addEventListener("click", makeTaskDescriptionEditable);
        taskDescription.textContent = task.description;

        listItem.appendChild(checkbox);
        listItem.appendChild(taskDescription);

        const editButton = document.createElement("button");
        const deleteButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.addEventListener("click", () => {
            editButton.style.display = "none"; // Hide the edit button
            deleteButton.style.display = "inline"; // Show the delete button
        });
        listItem.appendChild(editButton);

        deleteButton.classList.add("btn-delete");
        deleteButton.addEventListener("click", () => {
            deleteButton.style.display = "none"; // Hide the delete button
            editButton.style.display = "inline"; // Show the edit button
        });
        deleteButton.addEventListener("click", handleDeleteButtonClick);
        listItem.appendChild(deleteButton);

        // Add event listener to the document
        document.addEventListener("click", (event) => {
            const clickedElement = event.target;
            const isClickedOutsideButtons =
                !clickedElement.classList.contains("edit-btn") && !clickedElement.classList.contains("btn-delete");

            if (isClickedOutsideButtons) {
                deleteButton.style.display = "none"; // Hide the delete button
                editButton.style.display = "inline"; // Show the edit button
            }
        });

        if (task.completed) {
            listItem.classList.add("completed");
        }

        taskList.appendChild(listItem);
    });
};

export const addTask = (description) => {
    const newTask = {
        description,
        completed: false,
        index: tasks.length + 1
    };

    tasks.push(newTask);
    populateTaskList();
    saveTasks();
};

export const clearTasks = () => {
    tasks = tasks.filter((task) => !task.completed);
    populateTaskList();
    saveTasks();
};
