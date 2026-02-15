import { Component } from '@angular/core';
import { Task } from '../task/task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [Task, Task],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {}