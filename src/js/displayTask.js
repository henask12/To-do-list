import { makeTaskDescriptionEditable, handleDeleteButtonClick } from './taskHandlers.js';

export let tasks = [];
export const taskList = document.getElementById('todo-list');

export const loadTasks = () => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
};

export const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const populateTaskList = () => {
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
      saveTasks();
    });

    const taskDescription = document.createElement('span');
    taskDescription.addEventListener('click', makeTaskDescriptionEditable);
    taskDescription.textContent = task.description;

    listItem.appendChild(checkbox);
    listItem.appendChild(taskDescription);

    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', () => {
      editButton.style.display = 'none'; // Hide the edit button
      deleteButton.style.display = 'inline'; // Show the delete button
    });
    listItem.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn-delete');
    deleteButton.addEventListener('click', () => {
      deleteButton.style.display = 'none'; // Hide the delete button
      editButton.style.display = 'inline'; // Show the edit button
    });
    deleteButton.addEventListener('click', handleDeleteButtonClick);
    listItem.appendChild(deleteButton);

    // Add event listener to the document
    document.addEventListener('click', (event) => {
      const clickedElement = event.target;
      const isClickedOutsideButtons = !clickedElement.classList.contains('edit-btn') && !clickedElement.classList.contains('btn-delete');

      if (isClickedOutsideButtons) {
        deleteButton.style.display = 'none'; // Hide the delete button
        editButton.style.display = 'inline'; // Show the edit button
      }
    });

    if (task.completed) {
      listItem.classList.add('completed');
    }

    taskList.appendChild(listItem);
  });
};

export const addTask = (description) => {
  const newTask = {
    description,
    completed: false,
    index: tasks.length + 1,
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
