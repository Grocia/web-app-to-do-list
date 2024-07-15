import { Component } from '@angular/core';
import { AuthService } from './shared/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-app-to-do-list';
  isUserLogin: boolean = false;

  constructor(
    private _authService: AuthService,
    private _router: Router
  ){
    // console.log('this._authService.getUserData().id',this._authService.getUserData().id);
    // this.isUserLogin = this._authService.getUserData().id !== null  && this._authService.getUserData().id !== undefined ? true : false;
    //make observable
  }

  redirectToLoginPage(): void{
    this._router.navigate(['login'])
  }

  redirectToAboutPage(): void{
    this._router.navigate(['about'])
  }

  redirectToTaskListPage(): void{
    this._router.navigate(['task-list'])
  }

}
