import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,
} from '@angular/material/dialog';
import { PlaceholderDataService } from '../placeholder-data.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { SnackbarService } from 'src/app/shared/service/snackbar.service';

export interface DialogData {
  taskState: boolean;
  taskId: number;
  taskTitle: string;
}

@Component({
  selector: 'app-task-edit-dialog',
  templateUrl: './task-edit-dialog.component.html',
  styleUrls: ['./task-edit-dialog.component.scss']
})
export class TaskEditDialogComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<TaskEditDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  constructor(
    private _placeholderDataService: PlaceholderDataService,
    private _authService: AuthService,
    private _snackbarService: SnackbarService
  ){}

  ngOnInit(): void {
  }
  
  onNoClick(): void {
    this.dialogRef.close(false);
  }

  saveEditedTask(){
    this._placeholderDataService.updateToDo(
      {userId: this._authService.getUserData().id,
      id: this.data.taskId,
      title: this.data.taskTitle,
      completed: this.data.taskState}
    ).subscribe((response) => {
      if(response && response.id){
        this._snackbarService.openSuccessSnackBar('Task edited successfully');
        this.dialogRef.close(response);
      }
    });
  }

}

