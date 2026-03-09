import React from 'react';
import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function EmptyState() {
  return (
    <View className="flex-1 items-center justify-center py-16">
      <View className="w-20 h-20 rounded-full bg-offwhite items-center justify-center mb-4">
        <Feather name="clipboard" size={34} color="#757575" />
      </View>
      <Text className="text-lg font-semibold text-primary mb-1">No tasks yet</Text>
      <Text className="text-sm text-muted text-center">Add your first task above to get started</Text>
    </View>
  );
}
