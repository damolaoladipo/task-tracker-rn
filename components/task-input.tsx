import React, { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import { cn } from '@/lib/utils';

interface TaskInputProps {
  onAdd: (title: string) => void;
}

export function TaskInput({ onAdd }: TaskInputProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const trimmed = value.trim();
    if (!trimmed) {
      setError('Task cannot be empty');
      return;
    }
    onAdd(trimmed);
    setValue('');
    setError('');
  };

  return (
    <View className="mb-4">
      <View className="flex-row gap-2">
        <TextInput
          className={cn(
            'flex-1 bg-white border rounded-xl px-4 py-3 text-primary text-base',
            error ? 'border-error' : 'border-offwhite'
          )}
          placeholder="Add a new task..."
          placeholderTextColor="#9e9e9e"
          value={value}
          onChangeText={(text) => {
            setValue(text);
            if (error) setError('');
          }}
          onSubmitEditing={handleSubmit}
          returnKeyType="done"
        />
        <Pressable
          onPress={handleSubmit}
          className="bg-primary px-4 rounded-xl items-center justify-center"
        >
          <Text className="text-cream font-semibold">Add</Text>
        </Pressable>
      </View>
      {error ? <Text className="text-error text-xs mt-1 ml-1">{error}</Text> : null}
    </View>
  );
}
