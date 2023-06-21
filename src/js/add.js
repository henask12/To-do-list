const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
    const input = document.getElementById("add-item");
    const description = input.value;
    const index = ItemsArray.length + 1;
    const completed = false;
    const newTask = { index, description, completed };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("add-form").reset();
}

export default addTask;
