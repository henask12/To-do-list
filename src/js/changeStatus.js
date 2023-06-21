function changeStatus(taskIndex, taskStatus, tasks) {
  tasks[taskIndex].completed = taskStatus;
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default changeStatus;
