import { Component, OnInit,inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Taskservice } from '../services/taskservice';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task';

@Component({
  selector: 'app-task-detail',
  standalone: true,
  imports: [RouterLink,AsyncPipe],
  templateUrl: './task-detail.html',
  styleUrl: './task-detail.css',
})
export class TaskDetail implements OnInit {
  taskService = inject(Taskservice);
  route = inject(ActivatedRoute);

task$: Observable<TaskModel | null> = this.taskService.selectedTask$;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTaskById(id);
  }
}
