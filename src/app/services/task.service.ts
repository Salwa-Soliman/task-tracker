import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Task from '../types';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private URL = 'http://localhost:5000/tasks';
  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.URL);
  }

  deleteTask(id: string): Observable<Task> {
    return this.httpClient.delete<Task>(`${this.URL}/${id}`);
  }

  // updateTask(task: Task): Observable<ArrayBuffer> {
  //   return this.httpClient.patch<ArrayBuffer>(
  //     `${this.URL}/${task.id}`,
  //     { ...task, isCompleted: !task.isCompleted },
  //     { headers: this.headers }
  //   );
  // }
}
