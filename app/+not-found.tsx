import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function NotFound() {
  const router = useRouter();

  return (
    <View className="flex-1 items-center justify-center bg-cream px-6">
      <Text className="text-2xl font-bold text-primary mb-2">Page not found</Text>
      <Text className="text-muted text-base mb-8 text-center">
        The screen you are looking for does not exist.
      </Text>
      <Pressable
        onPress={() => router.replace('/')}
        className="bg-primary px-6 py-3 rounded-full"
      >
        <Text className="text-white font-semibold">Go Home</Text>
      </Pressable>
    </View>
  );
}
