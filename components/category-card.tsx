import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Category } from '@/types/task';

interface CategoryCardProps {
  category: Category;
  taskCount: number;
  onPress?: () => void;
}

export function CategoryCard({ category, taskCount, onPress }: CategoryCardProps) {
  const formattedCount = `+${String(taskCount).padStart(2, '0')} task`;

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
      }}
    >
      {/* Icon circle — top of card, 51x51 white fill with colored stroke */}
      <View
        style={{
          width: 51,
          height: 51,
          borderRadius: 50,
          backgroundColor: '#ffffff',
          borderWidth: 1.5,
          borderColor: category.strokeColor,
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 14,
        }}
      >
        <Text style={{ fontSize: 20 }}>{getCategoryEmoji(category.icon)}</Text>
      </View>

      {/* Label — Helvetica Bold 16px */}
      <Text
        style={{
          fontSize: 16,
          fontWeight: '700',
          color: '#000000',
          marginBottom: 3,
        }}
      >
        {category.label}
      </Text>

      {/* Count — "+03 task" format, 13px #757575 */}
      <Text
        style={{
          fontSize: 13,
          fontWeight: '500',
          color: '#757575',
        }}
      >
        {formattedCount}
      </Text>
    </Pressable>
  );
}

function getCategoryEmoji(icon: string): string {
  const map: Record<string, string> = {
    briefcase: '💼',
    activity: '🏃',
    repeat: '🔄',
    heart: '❤️',
    image: '🖼️',
  };
  return map[icon] ?? '📌';
}
