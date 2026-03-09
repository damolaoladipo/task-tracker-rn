import { Task } from '@/types/task';
import { mockTasks } from '@/_data/tasks';

export async function fetchTasks(userId: string): Promise<Task[]> {
  return mockTasks.filter((t) => t.userId === userId);
}

export async function createTask(task: Task): Promise<Task> {
  return task;
}

export async function toggleTask(id: string, tasks: Task[]): Promise<Task[]> {
  return tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t));
}
