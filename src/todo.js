
export default class Todo {
  constructor(type) {
    this.type = type; // "personal" or "work"
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(name) {
    this.tasks = this.tasks.filter(task => task.name !== name);
  }

  getTasks() {
    return this.tasks;
  }
}
