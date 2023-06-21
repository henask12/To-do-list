const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function handleDelete(taskIndex) {
  tasks.splice(taskIndex - 1, 1);

  tasks.forEach((task, index) => {
    task.index = index + 1;
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

export default handleDelete;
