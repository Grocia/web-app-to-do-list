import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snackBar: MatSnackBar,) { }

  openInformationSnackBar(snackBarBody : string): void{
    this._snackBar.open(snackBarBody, 'Close', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  openSuccessSnackBar(snackBarBody : string): void{
    this._snackBar.open(snackBarBody, 'Close', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['green-snackbar']
    });
  }

}
