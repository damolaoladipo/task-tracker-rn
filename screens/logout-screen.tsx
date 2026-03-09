import React, { useState } from 'react';
import { View, Text, Pressable, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useUserContext } from '@/hooks/use-user-context';

export default function LogoutScreen() {
  const router = useRouter();
  const { user, logout } = useUserContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleLogout() {
    setIsSubmitting(true);
    try {
      await logout();
      router.replace('/(auth)/login');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fffce3' }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 24,
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 28,
            paddingHorizontal: 24,
            paddingVertical: 28,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: '700',
              color: '#242424',
              marginBottom: 10,
            }}
          >
            Logout
          </Text>

          <Text
            style={{
              fontSize: 16,
              lineHeight: 22,
              color: '#606060',
              marginBottom: 24,
            }}
          >
            {`Are you sure you want to sign out${user?.email ? ` of ${user.email}` : ''}?`}
          </Text>

          <Pressable
            onPress={handleLogout}
            disabled={isSubmitting}
            style={{
              height: 52,
              borderRadius: 999,
              backgroundColor: '#242424',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 12,
              opacity: isSubmitting ? 0.7 : 1,
            }}
          >
            {isSubmitting ? (
              <ActivityIndicator color="#fffce3" />
            ) : (
              <Text style={{ color: '#fffce3', fontSize: 16, fontWeight: '700' }}>Logout</Text>
            )}
          </Pressable>

          <Pressable
            onPress={() => router.back()}
            disabled={isSubmitting}
            style={{
              height: 52,
              borderRadius: 999,
              backgroundColor: '#fafafa',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: '#242424', fontSize: 16, fontWeight: '600' }}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
