export const updateStatus = (checkbox, task, listItem, saveTasks) => {
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
        task.completed = checkbox.checked;
        listItem.classList.toggle("completed", task.completed);
        saveTasks();
    });
};
