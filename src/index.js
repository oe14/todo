
import './style.css';
import Task from './task';
import Todo from './todo';
import { renderTasks, setupForm } from './dom';

const holiday = new Todo("personal");
const task1 = new Task("Buy gifts", "Get gifts for family", "high");
const task2 = new Task("Pack bags", "Prepare luggage", "medium");

holiday.addTask(task1);
holiday.addTask(task2);

const taskListDiv = document.getElementById("task-list");

renderTasks(holiday, taskListDiv);
setupForm(holiday, taskListDiv);
