import { Task } from '@/types/task';

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Email Check',
    completed: false,
    createdAt: Date.now() - 3600000,
    categoryId: 'works',
    userId: 'mock-user-1',
  },
  {
    id: '2',
    title: 'Weekly Meeting',
    completed: true,
    createdAt: Date.now() - 7200000,
    categoryId: 'works',
    userId: 'mock-user-1',
  },
  {
    id: '3',
    title: 'Morning Run',
    completed: false,
    createdAt: Date.now() - 1800000,
    categoryId: 'sport',
    userId: 'mock-user-1',
  },
  {
    id: '4',
    title: 'Team Discussion',
    completed: false,
    createdAt: Date.now() - 900000,
    categoryId: 'works',
    userId: 'mock-user-1',
  },
];
