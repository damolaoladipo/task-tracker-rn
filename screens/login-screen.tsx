import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useUserContext } from '@/hooks/use-user-context';

export default function LoginScreen() {
  const router = useRouter();
  const { login, loading } = useUserContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');

    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    if (!password) {
      setError('Password is required');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      await login({ email: email.trim(), password });
      router.replace('/(tabs)');
    } catch {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-cream">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View className="flex-1 px-6 justify-center">
          <Text className="text-3xl font-bold text-primary mb-2">Welcome back</Text>
          <Text className="text-muted text-base mb-8">Sign in to your account</Text>

          {error ? (
            <View className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-4">
              <Text className="text-error text-sm">{error}</Text>
            </View>
          ) : null}

          <View className="gap-4 mb-6">
            <View>
              <Text className="text-sm font-medium text-primary mb-1">Email</Text>
              <TextInput
                className="bg-white border border-offwhite rounded-lg px-4 py-3 text-primary text-base"
                placeholder="you@example.com"
                placeholderTextColor="#9e9e9e"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                autoComplete="email"
              />
            </View>

            <View>
              <Text className="text-sm font-medium text-primary mb-1">Password</Text>
              <TextInput
                className="bg-white border border-offwhite rounded-lg px-4 py-3 text-primary text-base"
                placeholder="Min. 6 characters"
                placeholderTextColor="#9e9e9e"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoComplete="current-password"
              />
            </View>
          </View>

          <Pressable
            onPress={handleLogin}
            disabled={loading}
            className="bg-primary py-4 rounded-full items-center mb-4"
          >
            {loading ? (
              <ActivityIndicator color="#fffce3" />
            ) : (
              <Text className="text-cream text-base font-semibold">Sign In</Text>
            )}
          </Pressable>

          <Pressable onPress={() => router.push('/(auth)/signup')} className="py-3 items-center">
            <Text className="text-muted text-base">
              Don't have an account?{' '}
              <Text className="text-primary font-semibold">Sign up</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
