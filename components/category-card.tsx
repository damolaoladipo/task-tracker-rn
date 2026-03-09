import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Category } from '@/types/task';

interface CategoryCardProps {
  category: Category;
  taskCount: number;
  onPress?: () => void;
}

export function CategoryCard({ category, taskCount, onPress }: CategoryCardProps) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: category.color,
        width: 112,
        height: 136,
        borderRadius: 16,
        padding: 14,
        marginRight: 12,
        justifyContent: 'flex-end',
      }}
    >
      {/* Icon circle with colored stroke */}
      <View
        style={{
          width: 51,
          height: 51,
          borderRadius: 50,
          backgroundColor: '#ffffff',
          borderWidth: 2,
          borderColor: category.strokeColor,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 12,
          position: 'absolute',
          top: 14,
          left: 14,
        }}
      >
        <Text style={{ fontSize: 20 }}>{getCategoryEmoji(category.icon)}</Text>
      </View>
      <Text style={{ fontSize: 16, fontWeight: '700', color: '#000000', marginBottom: 2 }}>
        {category.label}
      </Text>
      <Text style={{ fontSize: 13, fontWeight: '500', color: '#757575' }}>
        {taskCount} {taskCount === 1 ? 'task' : 'tasks'}
      </Text>
    </Pressable>
  );
}

function getCategoryEmoji(icon: string): string {
  const map: Record<string, string> = {
    briefcase: '💼',
    activity: '🏃',
    repeat: '🔄',
    person: '👤',
    heart: '❤️',
    cart: '🛒',
  };
  return map[icon] ?? '📌';
}
