import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { TaskFilter } from '@/types/task';
import { cn } from '@/lib/utils';

const FILTERS: { label: string; value: TaskFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

interface FilterTabsProps {
  activeFilter: TaskFilter;
  onFilterChange: (filter: TaskFilter) => void;
}

export function FilterTabs({ activeFilter, onFilterChange }: FilterTabsProps) {
  return (
    <View className="flex-row bg-primary rounded-full p-1 gap-1">
      {FILTERS.map((tab) => {
        const isActive = activeFilter === tab.value;
        return (
          <Pressable
            key={tab.value}
            onPress={() => onFilterChange(tab.value)}
            className={cn('flex-1 py-2 rounded-full items-center', isActive ? 'bg-white' : '')}
          >
            <Text
              className={cn(
                'text-sm font-medium',
                isActive ? 'text-primary' : 'text-cream'
              )}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
