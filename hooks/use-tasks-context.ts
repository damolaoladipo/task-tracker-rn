import { useContext } from 'react';
import TaskContext from '@/context/task/taskContext';

export function useTasksContext() {
  return useContext(TaskContext);
}
