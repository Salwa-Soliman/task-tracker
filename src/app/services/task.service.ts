import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Task from '../types';

const httpOptions = new HttpHeaders({
  'Content-Type': 'application/json',
});
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

  updateTask(updatedTask: Task): Observable<ArrayBuffer> {
    return this.httpClient.put<ArrayBuffer>(
      `${this.URL}/${updatedTask.id}`,
      updatedTask
    );
  }

  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.URL, task);
  }
}

// httpOptions
