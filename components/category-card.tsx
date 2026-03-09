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
      style={{ backgroundColor: category.color, width: 112, borderRadius: 16, padding: 16, marginRight: 12 }}
    >
      <View
        style={{
          width: 36,
          height: 36,
          borderRadius: 18,
          backgroundColor: 'rgba(255,255,255,0.6)',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 12,
        }}
      >
        <Text style={{ fontSize: 18 }}>{getCategoryIcon(category.icon)}</Text>
      </View>
      <Text style={{ fontSize: 13, fontWeight: '600', color: '#242424', marginBottom: 4 }}>
        {category.label}
      </Text>
      <Text style={{ fontSize: 11, color: '#9e9e9e' }}>
        {taskCount} {taskCount === 1 ? 'task' : 'tasks'}
      </Text>
    </Pressable>
  );
}

function getCategoryIcon(icon: string): string {
  const map: Record<string, string> = {
    briefcase: '💼',
    person: '👤',
    heart: '❤️',
    cart: '🛒',
  };
  return map[icon] ?? '📌';
}
