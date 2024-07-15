import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserPlaceholderService } from '../user-placeholder.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = signal(true);
  loginForm = new FormGroup({
    userEmail: new FormControl('', [Validators.email, Validators.required ]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private _userPlaceholderService : UserPlaceholderService,
    private _authService: AuthService,
    private _snackBar: MatSnackBar,
    private _router: Router
  ){}

  get emailInput() { 
    return this.loginForm.get('userEmail')?.value; 
  }

  get passwordInput() {
     return this.loginForm.get('password')?.value; 
  }  

  clickEvent(event: MouseEvent): void {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  loginUser(): void{
    if(this.emailInput){
      this._userPlaceholderService.getUserByEmail(this.emailInput).subscribe((response) => {
        if(response && response.length > 0){
          this.openSnackBar('Login successful')
          this._authService.setUserData(response[0]);
          this._router.navigate(['task-list'])
        }
        else{
          this.openSnackBar('Login failure')
        }
      });
    }
  }

  openSnackBar(snackBarBody : string): void{
    this._snackBar.open(snackBarBody, 'Close', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

}
