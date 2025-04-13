
export default class Task {
  constructor(name, description = "", priority = "normal", completed = false) {
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.completed = completed;
  }

  toggleComplete() {
    this.completed = !this.completed;
  }

  edit(name, description, priority) {
    if (name) this.name = name;
    if (description) this.description = description;
    if (priority) this.priority = priority;
  }
}
