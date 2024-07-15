import { Component, OnInit } from '@angular/core';
import { PlaceholderDataService } from '../placeholder-data.service';
import { ToDoDtoResponse } from '../model/to-do-response.model';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-list-table',
  templateUrl: './task-list-table.component.html',
  styleUrls: ['./task-list-table.component.scss']
})
export class TaskListTableComponent implements OnInit{
  displayedColumns: string[] = ['completed', 'id', 'title', 'remove'];
  toDoListDataSource = new MatTableDataSource<ToDoDtoResponse>;
  taskForm = new FormGroup({
    taskTitle: new FormControl('')
  });

  constructor(
    private _placeholderDataService: PlaceholderDataService,
    private _authService: AuthService,
    private _router: Router
  ) {
    if(!this._authService.getUserData().id){
      this._router.navigate(['login'])
    }
   }

  ngOnInit(): void {

    this.loadTasks();
  }

  loadTasks(): void {
    this._placeholderDataService.getAllToDosByUser(this._authService.getUserData().id).subscribe((data) => {
      this.toDoListDataSource.data = data;
    });
  }

  deleteTask(id: number): void{
    this._placeholderDataService.deleteToDo(id).subscribe((_) => {
        //this.loadTasks(); //normally i would need to refresh the list
    });
    //fake delete:
    this.toDoListDataSource.data = this.toDoListDataSource.data.filter(task => task.id != id);
  }

  updatTask(id: number, newTitle: string): void{
    //fake update:
    //con un find y sustituyendo

  }

  createTask(): void{
    const taskTitle = this.taskForm.get('taskTitle')?.value;
    if(taskTitle){
      this._placeholderDataService.createToDo({ title: taskTitle, userId: 1 }).subscribe((response) => {
        //this.loadTasks(); //normally i would need to refresh the list
        //fake create:
        if(response && response.id){
          this.toDoListDataSource.data.push({ 
            userId: 1,
            id: this.toDoListDataSource.data.length+1,
            title: taskTitle,
            completed: false
          });
          this.refreshTaskList();
        }
      });
    }
  }

  refreshTaskList(): void{
    const aux = this.toDoListDataSource.data;
    this.toDoListDataSource.data = [];
    this.toDoListDataSource.data = aux;
  };

}
