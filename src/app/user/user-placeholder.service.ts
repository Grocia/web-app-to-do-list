import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData } from '../shared/model/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserPlaceholderService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUserByEmail(email: string): Observable<UserData[]> {
    return this.http.get<UserData[]>(`${this.apiUrl}?email=${email}`);
  }
}
