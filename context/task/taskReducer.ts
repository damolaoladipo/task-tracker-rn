import { Task, TaskFilter } from '@/types/task';
import {
  SET_TASKS,
  ADD_TASK,
  TOGGLE_TASK,
  SET_FILTER,
  SET_LOADING,
  UNSET_LOADING,
} from '@/helpers/types';

export interface TaskState {
  tasks: Task[];
  filter: TaskFilter;
  loading: boolean;
}

type TaskAction =
  | { type: typeof SET_LOADING }
  | { type: typeof UNSET_LOADING }
  | { type: typeof SET_TASKS; payload: Task[] }
  | { type: typeof ADD_TASK; payload: Task }
  | { type: typeof TOGGLE_TASK; payload: string }
  | { type: typeof SET_FILTER; payload: TaskFilter };

export function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case UNSET_LOADING:
      return { ...state, loading: false };
    case SET_TASKS:
      return { ...state, tasks: action.payload };
    case ADD_TASK:
      return { ...state, tasks: [action.payload, ...state.tasks] };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, completed: !task.completed } : task
        ),
      };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
