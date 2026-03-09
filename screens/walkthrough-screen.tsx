import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { DecorativeIllustration } from '@/components/decorative-illustration';

export default function WalkthroughScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.replace('/(auth)/signup');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fffce3' }}>
      <View style={{ flex: 1 }}>

        {/*
         * Figma node 2:2746 — Decorative SVG illustration
         * Exported at 331×673 covering the full visible decorative area of the screen.
         * Positioned at (x:0, y:0) so the large white circle bleeds from the top-left
         * exactly as in Figma. The SVG already contains both icon badges (Heart and Work).
         */}
        <View
          pointerEvents="none"
          style={{ position: 'absolute', top: 0, left: 0, width: 331, height: 673 }}
        >
          <DecorativeIllustration width={331} height={673} />
        </View>

        {/* Main content — text centered, CTA at bottom */}
        <View
          style={{
            flex: 1,
            paddingHorizontal: 24,
            justifyContent: 'space-between',
            paddingBottom: 40,
          }}
        >
          {/* Title + subtitle — vertically centered in the upper half */}
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop: 60 }}>
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

          {/*
           * CTA — Figma node 103:123 (Logo.png)
           * 84×84 PNG: outer ring (stroke #b0b0b0) + inner dark circle (#242424) + arrow-right
           */}
          <View style={{ alignItems: 'center', marginBottom: 24 }}>
            <Pressable
              onPress={handleGetStarted}
              accessibilityLabel="Get started"
              accessibilityRole="button"
            >
              <Image
                source={require('@/assets/Logo.png')}
                style={{ width: 84, height: 84 }}
                resizeMode="contain"
              />
            </Pressable>

            <Pressable
              onPress={() => router.replace('/(auth)/login')}
              style={{ marginTop: 20 }}
            >
              <Text style={{ fontSize: 14, color: '#606060' }}>
                Already have an account?{' '}
                <Text style={{ color: '#242424', fontWeight: '700' }}>Sign in</Text>
              </Text>
            </Pressable>
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}
