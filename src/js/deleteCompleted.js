function deleteCompleted(tasks) {
    tasks = tasks.filter((task) => !task.completed);

    tasks.forEach((task, index) => {
        task.index = index + 1;
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    return tasks;
}

export default deleteCompleted;
