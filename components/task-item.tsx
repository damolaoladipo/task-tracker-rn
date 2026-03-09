import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
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
        {getTaskIcon(task.categoryId)}
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
        {task.completed ? (
          <Feather name="check" size={12} color="#ffffff" />
        ) : (
          <Feather name="plus" size={16} color="#9e9e9e" />
        )}
      </Pressable>
    </Pressable>
  );
}

/**
 * Maps category IDs to display icons.
 * Figma uses "Message" icon for works tasks (email check) and "3 User" icon for team tasks.
 */
function getTaskIcon(categoryId?: string): React.ReactNode {
  switch (categoryId) {
    case 'works':
      return <Feather name="mail" size={18} color="#242424" />;
    case 'sport':
      return <Ionicons name="fitness-outline" size={18} color="#242424" />;
    case 'habits':
      return <Feather name="repeat" size={18} color="#242424" />;
    default:
      return <Feather name="bookmark" size={18} color="#242424" />;
  }
}
