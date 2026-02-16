import { Routes } from '@angular/router';
import { AddTask } from './add-task/add-task'
import { TaskDetail} from './task-detail/task-detail';
import {Home} from './home/home';
import {Task} from './task/task'

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  {path: 'task', component: Task, title: 'Tasks'},
  { path: 'task/:id', component: TaskDetail, title: 'Task Detail' },
  {path: 'addtask', component: AddTask, title: 'Add New Tasks'},
  { path: '**', redirectTo: '' }
];