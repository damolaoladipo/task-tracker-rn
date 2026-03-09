import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Task } from '@/types/task';
import { cn } from '@/lib/utils';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
}

export function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <Pressable
      onPress={() => onToggle(task.id)}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 14,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        // Figma: 307x57 — allow width to fill container
        minHeight: 57,
        shadowColor: '#000',
        shadowOpacity: 0.04,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
      }}
    >
      {/* Left icon placeholder — category icon 24x24 */}
      <View
        style={{
          width: 24,
          height: 24,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ fontSize: 16 }}>{getCategoryEmoji(task.categoryId)}</Text>
      </View>

      {/* Task title */}
      <Text
        className={cn(
          'flex-1 text-base font-medium',
          task.completed ? 'line-through text-muted' : 'text-primary'
        )}
        style={{ fontSize: 16, fontWeight: '500', lineHeight: 21 }}
        numberOfLines={2}
      >
        {task.title}
      </Text>

      {/* Right action icon — plus when incomplete, checkmark when complete */}
      <Pressable
        onPress={() => onToggle(task.id)}
        style={{
          width: 24,
          height: 24,
          borderRadius: 12,
          backgroundColor: task.completed ? '#242424' : 'transparent',
          borderWidth: task.completed ? 0 : 1.5,
          borderColor: '#d7d7d7',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        hitSlop={8}
      >
        <Text
          style={{
            color: task.completed ? '#ffffff' : '#757575',
            fontSize: task.completed ? 12 : 18,
            fontWeight: '700',
            lineHeight: task.completed ? 14 : 20,
            marginTop: task.completed ? 0 : -1,
          }}
        >
          {task.completed ? '✓' : '+'}
        </Text>
      </Pressable>
    </Pressable>
  );
}

function getCategoryEmoji(categoryId?: string): string {
  const map: Record<string, string> = {
    works: '💼',
    sport: '🏃',
    habits: '🔄',
  };
  return map[categoryId ?? ''] ?? '📌';
}
