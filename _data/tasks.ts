import { Task } from '@/types/task';

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Review design mockups',
    completed: false,
    createdAt: Date.now() - 3600000,
    categoryId: 'work',
    userId: 'mock-user-1',
  },
  {
    id: '2',
    title: 'Buy groceries',
    completed: true,
    createdAt: Date.now() - 7200000,
    categoryId: 'personal',
    userId: 'mock-user-1',
  },
  {
    id: '3',
    title: 'Morning workout',
    completed: false,
    createdAt: Date.now() - 1800000,
    categoryId: 'health',
    userId: 'mock-user-1',
  },
];
