import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { Taskservice } from '../services/taskservice';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private taskService = inject(Taskservice);

  tasks$ = this.taskService.tasks$;

  stats$ = this.tasks$.pipe(
    map(tasks => {
      const total = tasks.length;
      const completed = tasks.filter(t => t.completed).length;
      const pending = total - completed;
      const recent = [...tasks].slice(-3).reverse(); // last 3
      return { total, completed, pending, recent };
    })
  );

  constructor() {
  this.taskService.getAllTasks();
}

}
