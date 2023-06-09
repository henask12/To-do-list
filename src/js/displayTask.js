import updateStatus from './statusUpdates.js';

let tasks = [];

export const taskList = document.getElementById('todo-list');

export const loadTasks = () => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks); // Replace this line
  }
};

export const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export const makeTaskDescriptionEditable = (event) => {
  const taskDescription = event.target;
  taskDescription.setAttribute('contenteditable', 'true'); // Make the task description editable
  taskDescription.focus(); // Focus on the task description element

  const saveDescription = () => {
    const newDescription = taskDescription.textContent.trim();
    if (newDescription !== '') {
      const listItem = taskDescription.parentElement;
      const index = Array.from(listItem.parentNode.children).indexOf(listItem);
      if (index !== -1) {
        tasks[index].description = newDescription;
        saveTasks();
      }
    }

    taskDescription.setAttribute('contenteditable', 'false'); // Make the task description non-editable
    taskDescription.removeEventListener('blur', saveDescription); // Remove the blur event listener
  };

  taskDescription.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default behavior of the Enter key
      saveDescription();
    }
  });

  taskDescription.addEventListener('blur', saveDescription);
};

export const handleDeleteButtonClick = (event) => {
  const deleteButton = event.target;
  const listItem = deleteButton.parentNode;
  const index = Array.from(listItem.parentNode.children).indexOf(listItem);

  tasks.splice(index, 1); // Remove the task from the array

  // Adjust the index of remaining tasks
  for (let i = index; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }

  saveTasks(); // eslint-disable-next-line no-use-before-define
  populateTaskList();
};

export const setupDragAndDrop = (taskList, tasks) => {
  const listItems = document.querySelectorAll('#todo-list li');

  let draggedItem = null;

  function handleDragStart(event) {
    draggedItem = this;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', this.innerHTML);
    this.classList.add('dragging');
  }

  function handleDragOver(event) {
    if (event.preventDefault) {
      event.preventDefault();
    }
    event.dataTransfer.dropEffect = 'move';
    return false;
  }

  function handleDragEnter() {
    this.classList.add('drag-over');
  }

  function handleDragLeave() {
    this.classList.remove('drag-over');
  }

  function handleDrop(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    }
    if (draggedItem !== this) {
      const draggedIndex = Array.from(taskList.children).indexOf(draggedItem);
      const dropIndex = Array.from(taskList.children).indexOf(this);

      // Reorder the tasks array based on the drag and drop
      const [draggedTask] = tasks.splice(draggedIndex, 1);
      tasks.splice(dropIndex, 0, draggedTask);

      // Update the display order of the list items
      taskList.insertBefore(draggedItem, this);

      saveTasks(); // Save the updated tasks array in local storage
      draggedItem.innerHTML = this.innerHTML;
      this.innerHTML = event.dataTransfer.getData('text/html');
    }
    return false;
  }

  function handleDragEnd() {
    listItems.forEach((listItem) => {
      listItem.classList.remove('drag-over');
      listItem.classList.remove('dragging');
    });
  }

  listItems.forEach((listItem) => {
    listItem.addEventListener('dragstart', handleDragStart, false);
    listItem.addEventListener('dragover', handleDragOver, false);
    listItem.addEventListener('dragenter', handleDragEnter, false);
    listItem.addEventListener('dragleave', handleDragLeave, false);
    listItem.addEventListener('drop', handleDrop, false);
    listItem.addEventListener('dragend', handleDragEnd, false);
  });
};

export const populateTaskList = () => {
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    updateStatus(checkbox, task, listItem, saveTasks);

    const taskDescription = document.createElement('span');
    taskDescription.addEventListener('click', makeTaskDescriptionEditable);
    taskDescription.textContent = task.description;

    listItem.appendChild(checkbox);
    listItem.appendChild(taskDescription);

    const editButton = document.createElement('button');
    const deleteButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', () => {
      editButton.style.display = 'none'; // Hide the edit button
      deleteButton.style.display = 'inline'; // Show the delete button
    });
    listItem.appendChild(editButton);

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
  setupDragAndDrop(taskList, tasks);
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
  const incompleteTasks = tasks.filter((task) => !task.completed);

  // Adjust the index of remaining tasks
  incompleteTasks.forEach((task, index) => {
    task.index = index + 1;
  });

  tasks = incompleteTasks;

  populateTaskList();
  saveTasks();
};
