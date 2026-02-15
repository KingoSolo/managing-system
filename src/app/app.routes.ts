import { Routes } from '@angular/router';
import { AddTask } from './add-task/add-task'
import { TaskDetail} from './task-detail/task-detail';

export const routes: Routes = [
  { path: '', component: AddTask, title: 'Home' },
  { path: 'task', component: TaskDetail, title: 'Task Detail' },
  { path: '**', redirectTo: '' },
];