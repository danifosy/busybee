import {
  TaskListDataManagementService,
  TaskItem,
} from './../task-list-data-management.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-card-list',
  templateUrl: './task-card-list.component.html',
  styleUrls: ['./task-card-list.component.scss'],
})
export class TaskCardListComponent implements OnInit {
  service: TaskListDataManagementService;
  taskItems: TaskItem[];

  constructor(service: TaskListDataManagementService) {
    this.service = service;
    this.taskItems = service.getTaskItems();
  }

  ngOnInit(): void {}
}
