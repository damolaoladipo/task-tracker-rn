export type TaskFilter = 'all' | 'active' | 'completed';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: number;
  categoryId?: string;
  userId: string;
}

export interface Category {
  id: string;
  label: string;
  color: string;
  icon: string;
}
