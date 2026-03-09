import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useUserContext } from '@/hooks/use-user-context';
import { useOnboarding } from '@/hooks/use-onboarding';

export default function Index() {
  const router = useRouter();
  const { user, loading: userLoading } = useUserContext();
  const { isLoading: onboardingLoading, hasSeenWalkthrough } = useOnboarding();

  useEffect(() => {
    if (userLoading || onboardingLoading) return;

    if (!hasSeenWalkthrough) {
      router.replace('/(onboarding)/walkthrough');
    } else if (!user) {
      router.replace('/(auth)/login');
    } else {
      router.replace('/(tabs)');
    }
  }, [userLoading, onboardingLoading, user, hasSeenWalkthrough]);

  return (
    <View className="flex-1 items-center justify-center bg-cream">
      <ActivityIndicator size="large" color="#242424" />
    </View>
  );
}
