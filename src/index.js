import './style.css';

const tasks = [
  { description: 'Task 1', completed: false, index: 1 },
  { description: 'Task 2', completed: true, index: 2 },
  { description: 'Task 3', completed: false, index: 3 },
];

const taskList = document.getElementById('todo-list');

const populateTaskList = () => {
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      listItem.classList.toggle('completed', task.completed);
    });

    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;

    listItem.appendChild(checkbox);
    listItem.appendChild(taskDescription);

    if (task.completed) {
      listItem.classList.add('completed');
    }

    taskList.appendChild(listItem);
  });
};

populateTaskList();
