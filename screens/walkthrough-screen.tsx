import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fffce3' }}>
      <View style={{ flex: 1, paddingHorizontal: 24, justifyContent: 'space-between', paddingBottom: 40 }}>

        {/* Decorative floating elements — abstract task icons */}
        <View style={{ flex: 1, position: 'relative' }}>
          {/* Top-left pill */}
          <View
            style={{
              position: 'absolute',
              top: 40,
              left: 0,
              backgroundColor: '#ffffff',
              borderRadius: 16,
              paddingHorizontal: 14,
              paddingVertical: 10,
              shadowColor: '#000',
              shadowOpacity: 0.06,
              shadowRadius: 8,
              elevation: 2,
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: '500', color: '#000' }}>💼  Email Check</Text>
            <View style={{ height: 1, backgroundColor: '#f0f0f0', marginVertical: 4 }} />
            <Text style={{ fontSize: 13, fontWeight: '500', color: '#9e9e9e' }}>Weekly Meeting</Text>
          </View>

          {/* Top-right bubble */}
          <View
            style={{
              position: 'absolute',
              top: 20,
              right: 0,
              backgroundColor: '#e3e6ff',
              borderRadius: 50,
              width: 64,
              height: 64,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 28 }}>🏃</Text>
          </View>

          {/* Center content */}
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 80 }}>
            <Text
              style={{
                fontSize: 26,
                fontWeight: '700',
                color: '#000000',
                textAlign: 'center',
                lineHeight: 36,
                marginBottom: 16,
              }}
            >
              Plan your Day{'\n'}in Details
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#606060',
                textAlign: 'center',
                letterSpacing: 0.64,
                lineHeight: 21,
                maxWidth: 280,
              }}
            >
              There are many variations of passages of Lorem Ipsum available.
            </Text>
          </View>

          {/* Bottom-left category bubble */}
          <View
            style={{
              position: 'absolute',
              bottom: 80,
              left: 0,
              backgroundColor: '#e9ffe3',
              borderRadius: 16,
              paddingHorizontal: 14,
              paddingVertical: 10,
            }}
          >
            <Text style={{ fontSize: 13, fontWeight: '700', color: '#000' }}>Sport</Text>
            <Text style={{ fontSize: 12, color: '#757575' }}>3 tasks</Text>
          </View>
        </View>

        {/* CTA — Figma: outer ring (84x84 border #b0b0b0) + inner circle (67x67 fill #242424) + arrow */}
        <View style={{ alignItems: 'center', marginBottom: 24 }}>
          <Pressable
            onPress={handleGetStarted}
            style={{
              width: 84,
              height: 84,
              borderRadius: 42,
              borderWidth: 1,
              borderColor: '#b0b0b0',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View
              style={{
                width: 67,
                height: 67,
                borderRadius: 34,
                backgroundColor: '#242424',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ color: '#ffffff', fontSize: 22, fontWeight: '700' }}>→</Text>
            </View>
          </Pressable>

          <Pressable onPress={handleGetStarted} style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 14, color: '#606060' }}>
              Already have an account?{' '}
              <Text style={{ color: '#242424', fontWeight: '700' }}>Sign in</Text>
            </Text>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  );
}
