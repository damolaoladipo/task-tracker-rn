import { createContext } from 'react';
import { Task, TaskFilter } from '@/types/task';

interface TaskContextProps {
  tasks: Task[];
  filteredTasks: Task[];
  filter: TaskFilter;
  loading: boolean;
  addTask: (title: string) => Promise<void>;
  toggleTask: (id: string) => Promise<void>;
  setFilter: (filter: TaskFilter) => void;
}

const TaskContext = createContext<TaskContextProps>({} as TaskContextProps);

export default TaskContext;
