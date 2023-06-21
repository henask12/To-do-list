import deleteCompletedTasks from "./deleteCompleted.js";
import addTask from "./add.js";
import handleDelete from "./handleDelete.js";
import editTask from "./edit.js";
import changeTaskStatus from "./changeStatus.js";

const addButton = document.getElementById("add-button");
const input = document.getElementById("add-item");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    const list = document.querySelector("#list");
    list.innerHTML = "";

    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.classList.add("item");

        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("name", "item");
        checkbox.setAttribute("id", `item-${task.index}`);
        checkbox.setAttribute("data-index", task.index);
        checkbox.checked = task.completed;
        li.appendChild(checkbox);

        const label = document.createElement("label");
        label.setAttribute("for", `item-${task.index}`);
        label.textContent = task.description;
        li.appendChild(label);

        const editButton = document.createElement("button");
        editButton.classList.add("btn");
        li.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("btn-delete");
        li.appendChild(deleteButton);

        list.appendChild(li);

        label.addEventListener("dblclick", () => {
            const inputField = document.createElement("input");
            inputField.setAttribute("type", "text");
            inputField.setAttribute("class", "edit");
            inputField.value = task.description;
            li.replaceChild(inputField, label);

            editButton.classList.replace("btn", "delete");

            inputField.focus();
            inputField.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.keyCode === 13 || event.type === "blur") {
                    event.preventDefault();

                    const taskIndex = task.index - 1;
                    editTask(taskIndex, inputField.value, tasks);

                    li.replaceChild(label, inputField);

                    editButton.classList.replace("delete", "btn");
                    displayTasks();
                }
            });

            const taskIndex = task.index;
            deleteButton.addEventListener("click", () => {
                handleDelete(taskIndex);
                window.location.reload();
            });
        });

        checkbox.addEventListener("click", (event) => {
            const index = event.target.dataset.index - 1;
            const status = event.target.checked;
            changeTaskStatus(index, status, tasks);
        });
    });
}

displayTasks();
addButton.addEventListener("click", (event) => {
    event.preventDefault();
    addTask();
    window.location.reload();
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
        window.location.reload();
    }
});

const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
    tasks = deleteCompletedTasks(tasks);
    displayTasks();
});

export default displayTasks;
