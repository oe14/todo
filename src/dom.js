
export function renderTasks(todo, container) {
  container.innerHTML = ""; // Clear the task list

  todo.getTasks().forEach(task => {
    const taskItem = document.createElement("div");
    taskItem.classList.add("task");

    taskItem.innerHTML = `
      <h3>${task.name}</h3>
      <p>${task.description}</p>
      <p>Priority: ${task.priority}</p>
      <button class="toggle-complete">${task.completed ? "Undo" : "Complete"}</button>
      <button class="delete-task">Delete</button>
    `;

    taskItem.querySelector(".toggle-complete").addEventListener("click", () => {
      task.toggleComplete();
      renderTasks(todo, container);
    });

    taskItem.querySelector(".delete-task").addEventListener("click", () => {
      todo.removeTask(task.name);
      renderTasks(todo, container);
    });

    container.appendChild(taskItem);
  });
}

export function setupForm(todo, renderTarget) {
  const form = document.getElementById("new-task-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("task-name").value;
    const desc = document.getElementById("task-desc").value;
    const priority = document.getElementById("task-priority").value;

    if (!name.trim()) return;

    const Task = require('./task.js').default;
    const newTask = new Task(name, desc, priority);
    todo.addTask(newTask);

    renderTasks(todo, renderTarget);
    form.reset();
  });
}
