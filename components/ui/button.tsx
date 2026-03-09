import React from 'react';
import { Pressable, Text, ActivityIndicator } from 'react-native';
import { cn } from '@/lib/utils';

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

export function Button({
  label,
  onPress,
  variant = 'primary',
  loading = false,
  disabled = false,
  className,
}: ButtonProps) {
  const base = 'py-3 px-6 rounded-full items-center justify-center';
  const variants = {
    primary: 'bg-primary',
    secondary: 'bg-accent-blue',
    ghost: 'bg-transparent',
  };
  const textVariants = {
    primary: 'text-cream font-semibold',
    secondary: 'text-primary font-semibold',
    ghost: 'text-primary',
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      className={cn(base, variants[variant], disabled && 'opacity-50', className)}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? '#fffce3' : '#242424'} />
      ) : (
        <Text className={cn('text-base', textVariants[variant])}>{label}</Text>
      )}
    </Pressable>
  );
}
