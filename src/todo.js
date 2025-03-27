class task{ 

constructor(name, description = "", priority = "normal", completed = "false"){
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


class Todo {
  constructor(type) {
    this.type = type; // personal/work
    this.tasks = [];
  }

 addTask(task) {
    this.tasks.push(task);
  }

  removeTask(name) {
    this.tasks = this.tasks.filter(task => task.name !== name);
  }
    getTasks() {
    return this.tasks; // Returns the array of tasks
}


const holiday = new Todo("personal"); 
const task1 = new Task("Buy gifts", "Get gifts for family", "high");
const task2 = new Task("Pack bags", "Prepare luggage", "medium");



holiday.addTask(task1);
holiday.addTask(task2);

console.log(holiday.getTasks()); 