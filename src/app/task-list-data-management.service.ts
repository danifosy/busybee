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

  getNextId(): number {
    const idArray = this.items.map((item) => item.taskId);
    const maxNumber = Math.max(0, ...idArray);
    return maxNumber + 1;
  }

  addTaskItem(taskValue: string) {
    const newItem: TaskItem = {
      taskValue,
      taskId: this.getNextId(),
      isDone: false,
    };

    console.log(newItem);

    this.items = [newItem, ...this.items];
    this.safeToLocalStorage();
  }

  findPositionbyId(taskId: number) {
    return this.items.findIndex((item) => item.taskId === taskId);
  }

  updateTaskItem(taskId: number, taskValue: string) {
    const position = this.findPositionbyId(taskId);
    const oldItem = this.items[position];
    const newItem = { ...oldItem, taskValue };
    this.items[position] = newItem;
    console.log('updated task:', newItem);
    this.safeToLocalStorage();
  }

  deleteTaskItem(taskId: number) {
    const filteredTasks = this.items.filter((item) => item.taskId != taskId);
    this.items.length = 0;
    this.items.push(...filteredTasks);
    this.safeToLocalStorage();

    console.log('delete task with id:', taskId);
  }
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
