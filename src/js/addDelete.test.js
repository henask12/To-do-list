/**
 * @jest-environment jsdom
 */

import handleDelete from './handleDelete.js';
import addTask from './add.js';

describe('addTask', () => {
  test('should add a new task to the task and update the local storage', () => {
    document.body.innerHTML = '<div id="checklist"><div class="header"><h1>Today\'s To Do</h1></div><div id="items"><form id="add-form" class="add-form"><label for="add-item"><input type="text" name="add-item" id="add-item" class="add-form__input" placeholder="Add a new item to the list..." required="" autofocus=""></label><button type="button" id="add-button"></button><div id="error"></div></form><ul id="list"></ul></div><div id="clear"><button type="button" id="clear-button">Clear all completed</button></div></div>';

    const tasks = [];
    const newItem = { index: 1, description: 'New Task Added', completed: false };
    localStorage.setItem('tasks', JSON.stringify(tasks));

    const newTask = document.createElement('label');
    newTask.setAttribute('id', 'add-item');
    const input = document.querySelector('#add-item');
    input.value = 'New Task Added';
    addTask();
    const updateTask = JSON.parse(localStorage.getItem('tasks'));
    expect(updateTask).toContainEqual(newItem);
  });
});

describe('handleDelete', () => {
  test('should remove a task from the task and update the local storage', () => {
    const tasks = [];
    const newItem = { index: 1, description: 'New Task Added', completed: false };
    const expectedTasks = [];
    localStorage.setItem('tasks', JSON.stringify(tasks));
    const newTask = document.createElement('label');
    newTask.setAttribute('id', 'add-item');
    const input = document.querySelector('#add-item');
    input.value = 'New Task Added';

    addTask();
    let updateTask = JSON.parse(localStorage.getItem('tasks'));
    expect(updateTask).toContainEqual(newItem);

    handleDelete(1);
    updateTask = JSON.parse(localStorage.getItem('tasks'));
    expect(updateTask).toEqual(expectedTasks);
    expect(updateTask).not.toContainEqual(newItem);
  });
});
