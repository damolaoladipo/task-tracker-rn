import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useUserContext } from '@/hooks/use-user-context';

export default function Index() {
  const router = useRouter();
  const { user, loading } = useUserContext();

  useEffect(() => {
    if (loading) return;

    if (user) {
      router.replace('/(tabs)');
    } else {
      // Always show walkthrough when not signed in
      router.replace('/(onboarding)/walkthrough');
    }
  }, [loading, user]);

  return (
    <View className="flex-1 items-center justify-center bg-cream">
      <ActivityIndicator size="large" color="#242424" />
    </View>
  );
}
