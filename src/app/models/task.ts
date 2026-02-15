export interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;     // ISO date string
  createdAt: string;   // ISO date string
  completed: false;
}