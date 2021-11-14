import {
  TaskItem,
  TaskListDataManagementService,
} from './../task-list-data-management.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.scss'],
})
export class TaskCardComponent implements OnInit {
  @Input()
  taskItem!: TaskItem;
  service: TaskListDataManagementService;
  showEditField: boolean = false;

  constructor(service: TaskListDataManagementService) {
    this.service = service;
  }

  delete() {
    this.service.deleteTaskItem(this.taskItem.taskId);
  }

  complete() {
    this.service.closeTaskItem(this.taskItem.taskId);
  }

  update(taskValue: string): boolean {
    this.service.updateTaskItem(this.taskItem.taskId, taskValue);
    this.showEditField = false;
    return false;
  }

  ngOnInit(): void {}
}
