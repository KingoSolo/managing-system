import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {}