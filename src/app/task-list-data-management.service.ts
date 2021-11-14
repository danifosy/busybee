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
  items: TaskItem[] = [
    {
      taskValue: 'gassi gehen',
      taskId: 1,
      isDone: false,
    },
    {
      taskValue: 'kochen',
      taskId: 2,
      isDone: true,
    },
  ];

  constructor() {}

  getNextId(): number {
    const idArray = this.items.map((item) => item.taskId);
    const maxNumber = Math.max(...idArray);
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
  }

  deleteTaskItem(taskId: number) {
    const filteredTasks = this.items.filter((item) => item.taskId != taskId);
    this.items = filteredTasks;

    console.log('delete task with id:', taskId);
  }
  closeTaskItem(taskId: number) {
    const position = this.findPositionbyId(taskId);
    const oldItem = this.items[position];
    const newItem = { ...oldItem, isDone: true };
    this.items[position] = newItem;
    console.log('complete task with id:', taskId);
  }
  getTaskItems(): TaskItem[] {
    return this.items;
  }
}
