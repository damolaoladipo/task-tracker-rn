import React, { useMemo, useReducer, useEffect, useCallback } from 'react';
import TaskContext from './taskContext';
import { taskReducer } from './taskReducer';
import {
  SET_TASKS,
  ADD_TASK,
  TOGGLE_TASK,
  SET_FILTER,
  SET_LOADING,
  UNSET_LOADING,
} from '@/helpers/types';
import { loadTasks, saveTasks } from '@/storage/task-storage';
import { Task, TaskFilter } from '@/types/task';

interface TaskStateProps {
  userId: string;
  children: React.ReactNode;
}

const TaskState = ({ userId, children }: TaskStateProps) => {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [],
    filter: 'all',
    loading: false,
  });

  useEffect(() => {
    if (!userId) return;

    const load = async () => {
      dispatch({ type: SET_LOADING });
      const tasks = await loadTasks(userId);
      dispatch({ type: SET_TASKS, payload: tasks });
      dispatch({ type: UNSET_LOADING });
    };

    load();
  }, [userId]);

  const addTask = useCallback(
    async (title: string) => {
      const trimmed = title.trim();
      if (!trimmed) return;

      const newTask: Task = {
        id: Date.now().toString(),
        title: trimmed,
        completed: false,
        createdAt: Date.now(),
        userId,
      };

      dispatch({ type: ADD_TASK, payload: newTask });
      const updated = [newTask, ...state.tasks];
      await saveTasks(userId, updated);
    },
    [state.tasks, userId]
  );

  const toggleTask = useCallback(
    async (id: string) => {
      dispatch({ type: TOGGLE_TASK, payload: id });
      const updated = state.tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      );
      await saveTasks(userId, updated);
    },
    [state.tasks, userId]
  );

  const setFilter = useCallback((filter: TaskFilter) => {
    dispatch({ type: SET_FILTER, payload: filter });
  }, []);

  const filteredTasks = useMemo(() => {
    switch (state.filter) {
      case 'active':
        return state.tasks.filter((t) => !t.completed);
      case 'completed':
        return state.tasks.filter((t) => t.completed);
      default:
        return state.tasks;
    }
  }, [state.tasks, state.filter]);

  const contextValue = useMemo(
    () => ({
      tasks: state.tasks,
      filteredTasks,
      filter: state.filter,
      loading: state.loading,
      addTask,
      toggleTask,
      setFilter,
    }),
    [state.tasks, filteredTasks, state.filter, state.loading, addTask, toggleTask, setFilter]
  );

  return <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>;
};

export default TaskState;
