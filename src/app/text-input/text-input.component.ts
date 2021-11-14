import { TaskListDataManagementService } from './../task-list-data-management.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  service: TaskListDataManagementService;
  router: Router;

  constructor(service: TaskListDataManagementService, router: Router) {
    this.service = service;
    this.router = router;
  }

  add(task: string): boolean {
    this.service.addTaskItem(task);
    console.log('new task:', task);
    this.router.navigate(['home']);
    return false;
  }

  ngOnInit(): void {}
}
