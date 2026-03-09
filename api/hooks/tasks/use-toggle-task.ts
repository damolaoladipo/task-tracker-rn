import { useTasksContext } from '@/hooks/use-tasks-context';

export function useToggleTask() {
  const { toggleTask } = useTasksContext();
  return toggleTask;
}
