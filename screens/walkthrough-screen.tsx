import React from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { useOnboarding } from '@/hooks/use-onboarding';

export default function WalkthroughScreen() {
  const router = useRouter();
  const { markSeen } = useOnboarding();

  const handleGetStarted = async () => {
    await markSeen();
    router.replace('/(auth)/login');
  };

  return (
    <SafeAreaView className="flex-1 bg-cream">
      <View className="flex-1 px-6 justify-between py-12">
        <View className="flex-1 justify-center items-center">
          <View className="w-48 h-48 rounded-full bg-primary mb-10 items-center justify-center">
            <Text className="text-6xl text-cream">✓</Text>
          </View>
          <Text className="text-4xl font-bold text-primary text-center leading-tight mb-4">
            Plan your Day{'\n'}in Details
          </Text>
          <Text className="text-base text-muted text-center leading-relaxed max-w-xs">
            Stay on top of your tasks and build better daily habits with a simple, focused task tracker.
          </Text>
        </View>

        <View className="gap-3">
          <Pressable
            onPress={handleGetStarted}
            className="bg-primary py-4 rounded-full items-center"
          >
            <Text className="text-white text-base font-semibold">Get Started</Text>
          </Pressable>
          <Pressable
            onPress={() => {
              markSeen();
              router.replace('/(auth)/login');
            }}
            className="py-4 items-center"
          >
            <Text className="text-primary text-base">Already have an account? Sign in</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
