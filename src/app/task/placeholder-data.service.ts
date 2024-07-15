import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoDtoResponse } from './model/to-do-response.model';

@Injectable({
  providedIn: 'root'
})
export class PlaceholderDataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  
  getAllToDos(): Observable<ToDoDtoResponse[]> {
    return this.http.get<ToDoDtoResponse[]>(this.apiUrl);
  }

  getAllToDosByUser(userId: number): Observable<ToDoDtoResponse[]> {
    return this.http.get<ToDoDtoResponse[]>(`${this.apiUrl}?userId=${userId}`);
  }

  getToDoById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createToDo(taskData: { title: string; userId: number }): Observable<any> {
    return this.http.post(this.apiUrl, taskData);
  }

  updateToDo(id: number, postData: { title: string; body: string; userId: number }): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, postData);
  }

  deleteToDo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
