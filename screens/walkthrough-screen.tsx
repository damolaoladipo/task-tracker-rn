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
         * Figma node 2:2746 — Decorative SVG illustration.
         * Keep it in its own top section so the copy sits below the artwork,
         * matching the Figma walkthrough composition.
         */}
        <View style={{ height: 438, overflow: 'hidden' }}>
          <View
            pointerEvents="none"
            style={{ position: 'absolute', top: -6, left: 0, width: 331, height: 673 }}
          >
            <DecorativeIllustration width={331} height={673} />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingTop: 34,
            paddingBottom: 40,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={{ width: 335, alignItems: 'center' }}>
            <Text
              style={{
                fontSize: 26,
                fontWeight: '700',
                color: '#000000',
                textAlign: 'center',
                lineHeight: 35.6,
                marginBottom: 16,
                width: 208,
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
                lineHeight: 21.26,
                width: 335,
              }}
            >
              There are many variations of passagesThere are many variations.
            </Text>
          </View>

          {/*
           * CTA — Figma node 103:123 (Logo.png)
           * 84×84 PNG: outer ring (stroke #b0b0b0) + inner dark circle (#242424) + arrow-right
           */}
          <View style={{ alignItems: 'center', marginTop: 40 }}>
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
