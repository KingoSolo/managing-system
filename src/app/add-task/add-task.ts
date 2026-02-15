import { Component } from '@angular/core';
import { TaskCard} from '../task-card/task-card';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [TaskCard],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {}