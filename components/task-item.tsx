import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Task } from '@/types/task';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
}

export function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <Pressable
      onPress={() => onToggle(task.id)}
      className="flex-row items-center bg-white rounded-2xl px-4 py-4 mb-3 gap-3"
      style={{ elevation: 1, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 4, shadowOffset: { width: 0, height: 1 } }}
    >
      <View className="w-10 h-10 rounded-xl bg-offwhite items-center justify-center">
        <Text className="text-xl">
          {task.completed ? '✓' : '○'}
        </Text>
      </View>

      <Text
        className={cn(
          'flex-1 text-base font-medium',
          task.completed ? 'line-through text-muted' : 'text-primary'
        )}
        numberOfLines={2}
      >
        {task.title}
      </Text>

      <Checkbox checked={task.completed} onPress={() => onToggle(task.id)} />
    </Pressable>
  );
}
