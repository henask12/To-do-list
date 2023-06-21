function editTask(indexTask, taskDescription, tasks) {
  tasks[indexTask].description = taskDescription;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default editTask;
