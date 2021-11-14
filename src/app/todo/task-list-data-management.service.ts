import { Injectable } from '@angular/core';

export type TaskItem = {
  taskValue: string;
  taskId: number;
  isDone: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class TaskListDataManagementService {
  items!: TaskItem[];

  constructor() {
    this.loadFromLocalStorage();
  }

  /* helper functions */

  // finds the highest id number within the array and adds +1
  getNextId(): number {
    const idArray = this.items.map((item) => item.taskId);
    const maxNumber = Math.max(0, ...idArray);
    return maxNumber + 1;
  }

  // finds position by the index number of id
  findPositionbyId(taskId: number) {
    return this.items.findIndex((item) => item.taskId === taskId);
  }

  // creates new task item, puts it on top and spreads old tasks below and then new array into LS
  addTaskItem(taskValue: string) {
    const newItem: TaskItem = {
      taskValue,
      taskId: this.getNextId(),
      isDone: false,
    };
    this.items = [newItem, ...this.items];
    this.safeToLocalStorage();
  }

  /* update, delete, mark as done  */

  // uses find function to access task by id and updates, saves updated task into LS
  updateTaskItem(taskId: number, taskValue: string) {
    const position = this.findPositionbyId(taskId);
    const oldItem = this.items[position];
    const newItem = { ...oldItem, taskValue };
    this.items[position] = newItem;
    console.log('updated task:', newItem);
    this.safeToLocalStorage();
  }

  // filters tasks and spreads everything that doesn't have filtered id into new array and saves into LS
  deleteTaskItem(taskId: number) {
    const filteredTasks = this.items.filter((item) => item.taskId != taskId);
    this.items.length = 0;
    this.items.push(...filteredTasks);
    this.safeToLocalStorage();

    console.log('delete task with id:', taskId);
  }

  // finds position by id, changes done status and saves status into LS
  closeTaskItem(taskId: number) {
    const position = this.findPositionbyId(taskId);
    const oldItem = this.items[position];
    const newItem = { ...oldItem, isDone: true };
    this.items[position] = newItem;
    this.safeToLocalStorage();

    console.log('complete task with id:', taskId);
  }

  getTaskItems(): TaskItem[] {
    return this.items;
  }

  /* Local Storage */

  safeToLocalStorage() {
    localStorage.setItem('data', JSON.stringify(this.items));
  }

  loadFromLocalStorage() {
    const jsonString = localStorage.getItem('data');
    if (jsonString) {
      this.items = JSON.parse(jsonString);
    } else {
      this.items = [];
    }
  }
}
