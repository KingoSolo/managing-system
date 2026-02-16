import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Taskservice } from '../services/taskservice';
import { TaskModel } from '../models/task';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrl: './add-task.css',
})
export class AddTask {
  private taskService = inject(Taskservice);
  private router = inject(Router);

  form: Omit<TaskModel, 'id'> = {
    title: '',
    description: '',
    dueDate: '',
    createdAt: new Date().toISOString(),
    completed: false,
  };

  submit() {
    const newTask: TaskModel = {
      id: Date.now(), 
      ...this.form,
      createdAt: new Date().toISOString(),
    };

    this.taskService.createTask(newTask).subscribe({
      next: () => {
        this.taskService.getAllTasks(); 
        this.router.navigate(['/task']);
      },
    });
  }
}
