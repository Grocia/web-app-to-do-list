import { Injectable } from '@angular/core';
import { UserData } from '../model/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData: UserData = new UserData;

  constructor() { }

  getUserData(): UserData{
    return this.userData;
  }

  setUserData(userData: UserData): void{
    this.userData = userData;
  }

}
