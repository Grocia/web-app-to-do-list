import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListTableComponent } from './task-list-table.component';

describe('TaskListTableComponent', () => {
  let component: TaskListTableComponent;
  let fixture: ComponentFixture<TaskListTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskListTableComponent]
    });
    fixture = TestBed.createComponent(TaskListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
