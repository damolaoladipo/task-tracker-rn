import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useUserContext } from '@/hooks/use-user-context';

export default function SignupScreen() {
  const router = useRouter();
  const { signup, loading } = useUserContext();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    setError('');

    if (!name.trim()) {
      setError('Name is required');
      return;
    }
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
      await signup({ name: name.trim(), email: email.trim(), password });
      router.replace('/(tabs)');
    } catch (e: any) {
      setError(e?.message ?? 'Something went wrong. Please try again.');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-cream">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View className="flex-1 px-6 justify-center py-12">
            <Text className="text-3xl font-bold text-primary mb-2">Create account</Text>
            <Text className="text-muted text-base mb-8">Start tracking your tasks today</Text>

            {error ? (
              <View className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-4">
                <Text className="text-error text-sm">{error}</Text>
              </View>
            ) : null}

            <View className="gap-4 mb-6">
              <View>
                <Text className="text-sm font-medium text-primary mb-1">Full Name</Text>
                <TextInput
                  className="bg-white border border-offwhite rounded-lg px-4 py-3 text-primary text-base"
                  placeholder="Your name"
                  placeholderTextColor="#9e9e9e"
                  value={name}
                  onChangeText={setName}
                  autoCapitalize="words"
                  autoComplete="name"
                />
              </View>

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
                  autoComplete="new-password"
                />
              </View>
            </View>

            <Pressable
              onPress={handleSignup}
              disabled={loading}
              className="bg-primary py-4 rounded-full items-center mb-4"
            >
              {loading ? (
                <ActivityIndicator color="#fffce3" />
              ) : (
                <Text className="text-cream text-base font-semibold">Create Account</Text>
              )}
            </Pressable>

            <Pressable onPress={() => router.push('/(auth)/login')} className="py-3 items-center">
              <Text className="text-muted text-base">
                Already have an account?{' '}
                <Text className="text-primary font-semibold">Sign in</Text>
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
