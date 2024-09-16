document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todo-form');
  const newTaskInput = document.getElementById('new-task');
  const todoList = document.getElementById('todo-list');

  todoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      addTask(newTaskInput.value);
      newTaskInput.value = '';
  });

  function addTask(taskText) {
      if (taskText.trim() === '') return;

      const li = document.createElement('li');
      li.textContent = taskText;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Remover';
      deleteButton.addEventListener('click', () => li.remove());

      li.addEventListener('click', () => li.classList.toggle('completed'));

      li.appendChild(deleteButton);
      todoList.appendChild(li);
  }
});