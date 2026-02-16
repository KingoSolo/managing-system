import { Component,inject, OnInit, } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Taskservice } from '../services/taskservice';  
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [RouterLink,AsyncPipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task implements OnInit {
  taskservice = inject(Taskservice)

  task$ = this.taskservice.tasks$

  ngOnInit(): void {
    this.taskservice.getAllTasks()
    console.log("hey")
  }
}