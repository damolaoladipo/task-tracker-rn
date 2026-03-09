import React from 'react';
import { Pressable, View } from 'react-native';
import { cn } from '@/lib/utils';

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
  className?: string;
}

export function Checkbox({ checked, onPress, className }: CheckboxProps) {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        'w-6 h-6 rounded-full border-2 items-center justify-center',
        checked ? 'bg-primary border-primary' : 'bg-transparent border-muted',
        className
      )}
    >
      {checked ? (
        <View className="w-2 h-2 rounded-full bg-cream" />
      ) : null}
    </Pressable>
  );
}
