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
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#242424',
        borderRadius: 100,
        height: 60,
        padding: 8,
        gap: 4,
      }}
    >
      {FILTERS.map((tab) => {
        const isActive = activeFilter === tab.value;
        return (
          <Pressable
            key={tab.value}
            onPress={() => onFilterChange(tab.value)}
            style={{
              flex: 1,
              height: 43,
              borderRadius: 100,
              backgroundColor: isActive ? '#ffffff' : 'transparent',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontFamily: 'System',
                fontSize: 16,
                fontWeight: '700',
                color: isActive ? '#242424' : '#ffffff',
              }}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}
