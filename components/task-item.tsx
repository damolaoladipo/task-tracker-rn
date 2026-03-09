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
        paddingVertical: 0,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        height: 57,
        shadowColor: '#000',
        shadowOpacity: 0.04,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
      }}
    >
      {/* Left: category icon — Message for works, 3User for team tasks */}
      <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 16 }}>{getTaskIcon(task.categoryId)}</Text>
      </View>

      {/* Task title — line-through + muted when complete */}
      <Text
        className={cn(
          'flex-1',
          task.completed ? 'line-through text-muted' : 'text-primary'
        )}
        style={{ fontSize: 16, fontWeight: '500', lineHeight: 21 }}
        numberOfLines={1}
      >
        {task.title}
      </Text>

      {/* Right: Plus icon when incomplete, checkmark when complete — 24x24 */}
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
            color: task.completed ? '#ffffff' : '#9e9e9e',
            fontSize: task.completed ? 11 : 16,
            fontWeight: '700',
            lineHeight: task.completed ? 13 : 18,
          }}
        >
          {task.completed ? '✓' : '+'}
        </Text>
      </Pressable>
    </Pressable>
  );
}

/**
 * Maps category IDs to display icons.
 * Figma uses "Message" icon for works tasks (email check) and "3 User" icon for team tasks.
 */
function getTaskIcon(categoryId?: string): string {
  const map: Record<string, string> = {
    works: '✉️',   // Message icon — Figma: Iconly/Bulk/Message
    sport: '🏃',   // Activity icon
    habits: '🔄',  // Repeat icon
  };
  return map[categoryId ?? ''] ?? '📌';
}
