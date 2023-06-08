import './style.css';
import {
  loadTasks, populateTaskList, addTask, clearTasks,
} from './js/displayTask.js';

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const clearBtn = document.getElementById('clear-completed-button');

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const description = taskInput.value.trim();
  if (description !== '') {
    addTask(description);
    taskInput.value = '';
  }
});

clearBtn.addEventListener('click', (event) => {
  event.preventDefault();
  clearTasks();
});

loadTasks();
populateTaskList();
