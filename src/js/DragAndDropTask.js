// eslint-disable-next-line import/no-cycle
import { saveTasks } from './displayTask.js';

const setupDragAndDrop = (taskList, tasks) => {
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

export default setupDragAndDrop;
