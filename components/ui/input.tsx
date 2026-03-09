import React from 'react';
import { TextInput, View, Text, TextInputProps } from 'react-native';
import { cn } from '@/lib/utils';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerClassName?: string;
}

export function Input({ label, error, containerClassName, className, ...props }: InputProps) {
  return (
    <View className={cn('gap-1', containerClassName)}>
      {label ? (
        <Text className="text-sm font-medium text-primary">{label}</Text>
      ) : null}
      <TextInput
        className={cn(
          'bg-white border border-offwhite rounded-lg px-4 py-3 text-primary text-base',
          error && 'border-error',
          className
        )}
        placeholderTextColor="#9e9e9e"
        {...props}
      />
      {error ? <Text className="text-error text-xs">{error}</Text> : null}
    </View>
  );
}
