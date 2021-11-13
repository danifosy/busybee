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
  constructor() {}

  addTaskItem(taskValue: string) {}
  updateTaskItem(taskId: number, taskValue: string) {}
  deleteTaskItem(taskId: number) {}
  closeTaskItem(taskId: number) {}
  getTaskItems(): TaskItem[] {
    return [
      {
        taskValue: 'gassi gehen',
        taskId: 1,
        isDone: false,
      },
      {
        taskValue: 'kochen',
        taskId: 2,
        isDone: false,
      },
    ];
  }
}
