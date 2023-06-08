import { tasks, saveTasks, populateTaskList } from './displayTask';

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
  for (let i = index; i < tasks.length; i++) {
    tasks[i].index = i + 1;
  }

  saveTasks();
  populateTaskList();
};
