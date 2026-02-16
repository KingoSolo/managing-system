import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskModel } from '../models/task';

@Injectable({ providedIn: 'root' })
export class Taskservice {
  private http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/tasks';

  private tasksSubject = new BehaviorSubject<TaskModel[]>([]);
  tasks$ = this.tasksSubject.asObservable();

  private selectedTaskSubject = new BehaviorSubject<TaskModel | null>(null);
  selectedTask$ = this.selectedTaskSubject.asObservable();

  getAllTasks() {
    return this.http.get<TaskModel[]>(this.apiUrl).subscribe({
    next: (data) => {
      console.log('API data:', data);
      this.tasksSubject.next(data);
    },
    error: (err) => console.log('API error:', err),
  });
  }

  getTaskById(id: number) {
  return this.http.get<TaskModel[]>(`${this.apiUrl}?id=${id}`).subscribe({
    next: (tasks) => this.selectedTaskSubject.next(tasks[0] ?? null),
    error: (err) => console.log('getTaskById error:', err),
  });
}


  createTask(task: TaskModel) {
  return this.http.post<TaskModel>(this.apiUrl, task);
}

}
