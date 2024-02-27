document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const input = document.getElementById('new-task-description');
  const tasks = document.getElementById('tasks');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const newItem = document.createElement('li');
    newItem.textContent = input.value;
    tasks.appendChild(newItem);
    input.value = '';
  })

});
