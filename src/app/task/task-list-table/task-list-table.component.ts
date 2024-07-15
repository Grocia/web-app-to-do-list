import { Component, inject, OnInit, signal } from '@angular/core';
import { PlaceholderDataService } from '../placeholder-data.service';
import { ToDo } from '../model/to-do.model';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TaskEditDialogComponent } from '../task-edit-dialog/task-edit-dialog.component';


@Component({
  selector: 'app-task-list-table',
  templateUrl: './task-list-table.component.html',
  styleUrls: ['./task-list-table.component.scss']
})
export class TaskListTableComponent implements OnInit{
  displayedColumns: string[] = ['completed', 'id', 'title', 'remove'];
  toDoListDataSource = new MatTableDataSource<ToDo>;
  taskForm = new FormGroup({
    taskTitle: new FormControl('')
  });
  readonly animal = signal('');
  //readonly name = model('');
  readonly dialog = inject(MatDialog);
  
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

  openTaskEditDialog(completed: boolean, id : number, title: string): void {
    const dialogRef = this.dialog.open(TaskEditDialogComponent, {
      data: {taskState: completed, taskId: id, taskTitle: title},
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        //this.loadTasks(); //normally i would need to refresh the list
        //fake update
        this.toDoListDataSource.data = this.toDoListDataSource.data.filter(task => task.id != result.id);
        this.toDoListDataSource.data.push({ 
          userId: result.userId,
          id: result.id,
          title: result.title,
          completed: result.completed
        });
        this.toDoListDataSource.data.sort((a, b) => a.id - b.id)
        this.refreshTaskList();
      }
    });
  }

}
