import { TestBed } from '@angular/core/testing';

import { TaskListDataManagementService } from './task-list-data-management.service';

describe('TaskListDataManagementService', () => {
  let service: TaskListDataManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskListDataManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
