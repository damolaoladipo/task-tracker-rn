import { useTasksContext } from '@/hooks/use-tasks-context';

export function useAddTask() {
  const { addTask } = useTasksContext();
  return addTask;
}
