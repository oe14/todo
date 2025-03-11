const maketodo(name, description, dueDate, priority){
return{ 
name, 
description, 
dueDate, 
priority, 
completed: false,

}
}


const createProject = (name) => {
    return {
        name, 
        todos: [],  
        
        addTodo(todo) {
            this.todos.push(todo);  t
        }, 
        
        removeTodo(index) {
            this.todos.splice(index, 1);  
        }
    };
};






// storing projects in a array
const projects = [], 
const defaultProject = createProject("default");
projects.push(defaultProject);

