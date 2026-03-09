import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '@/types/task';

const storageKey = (userId: string) => `TASK_TRACKER_TASKS_${userId}`;

export async function loadTasks(userId: string): Promise<Task[]> {
  try {
    const data = await AsyncStorage.getItem(storageKey(userId));
    return data ? (JSON.parse(data) as Task[]) : [];
  } catch {
    return [];
  }
}

export async function saveTasks(userId: string, tasks: Task[]): Promise<void> {
  try {
    await AsyncStorage.setItem(storageKey(userId), JSON.stringify(tasks));
  } catch {}
}
