import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import { cn } from '@/lib/utils';

interface AppTextProps extends TextProps {
  variant?: 'title' | 'subtitle' | 'body' | 'caption' | 'muted';
}

export function AppText({ variant = 'body', className, ...props }: AppTextProps) {
  const variants = {
    title: 'text-2xl font-bold text-primary',
    subtitle: 'text-lg font-semibold text-primary',
    body: 'text-base text-primary',
    caption: 'text-sm text-muted',
    muted: 'text-base text-muted',
  };

  return <RNText className={cn(variants[variant], className)} {...props} />;
}
