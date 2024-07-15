import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDo } from './model/to-do.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderDataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  
  getAllToDos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.apiUrl);
  }

  getAllToDosByUser(userId: number): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(`${this.apiUrl}?userId=${userId}`);
  }

  getToDoById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createToDo(taskData: { title: string; userId: number }): Observable<any> {
    return this.http.post(this.apiUrl, taskData);
  }

  updateToDo(postData: ToDo): Observable<any> {
    return this.http.put(`${this.apiUrl}/${postData.id}`, postData);
  }

  deleteToDo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
