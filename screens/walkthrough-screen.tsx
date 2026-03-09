import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function WalkthroughScreen() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.replace('/(auth)/signup');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fffce3' }}>
      <View style={{ flex: 1, position: 'relative' }}>

        {/*
         * Figma node 2:2746 — Decorative Group 2
         * A 475x475 white circle illustration group that bleeds from the top-left.
         * Screen-relative position: starts at (-144, -55), visible portion 0→331 × 0→420
         * Rendered as a large white circle clipped to the screen edge.
         */}
        <View
          pointerEvents="none"
          style={{
            position: 'absolute',
            top: -55,
            left: -144,
            width: 475,
            height: 475,
            borderRadius: 238,
            backgroundColor: '#ffffff',
            opacity: 0.6,
          }}
        />

        {/* Heart icon badge — Frame 20: 51×51, white fill, stroke #c6ffdd, at screen (37, 108) */}
        <View
          pointerEvents="none"
          style={{
            position: 'absolute',
            top: 108,
            left: 37,
            width: 51,
            height: 51,
            borderRadius: 26,
            backgroundColor: '#ffffff',
            borderWidth: 1.5,
            borderColor: '#c6ffdd',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 22 }}>❤️</Text>
        </View>

        {/* Work icon badge — Frame 19: 51×51, white fill, stroke #fff9c6, at screen (243, 108) */}
        <View
          pointerEvents="none"
          style={{
            position: 'absolute',
            top: 108,
            left: 243,
            width: 51,
            height: 51,
            borderRadius: 26,
            backgroundColor: '#ffffff',
            borderWidth: 1.5,
            borderColor: '#fff9c6',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontSize: 22 }}>💼</Text>
        </View>

        {/* Small accent dots — Iconly/Bulk/Image (#6270f0), ~14×14 */}
        <View
          pointerEvents="none"
          style={{
            position: 'absolute',
            top: 209,
            left: 46,
            width: 14,
            height: 14,
            borderRadius: 7,
            backgroundColor: '#6270f0',
          }}
        />
        <View
          pointerEvents="none"
          style={{
            position: 'absolute',
            top: 438,
            left: 311,
            width: 14,
            height: 14,
            borderRadius: 7,
            backgroundColor: '#6270f0',
          }}
        />

        {/* Small heart accent dots — Iconly/Bulk/Heart, ~14×14 */}
        <View
          pointerEvents="none"
          style={{
            position: 'absolute',
            top: 168,
            left: 199,
            width: 14,
            height: 14,
            borderRadius: 7,
            backgroundColor: '#c6ffdd',
          }}
        />
        <View
          pointerEvents="none"
          style={{
            position: 'absolute',
            top: 659,
            left: 51,
            width: 14,
            height: 14,
            borderRadius: 7,
            backgroundColor: '#fff9c6',
          }}
        />

        {/* Main content */}
        <View style={{ flex: 1, paddingHorizontal: 24, justifyContent: 'space-between', paddingBottom: 40 }}>
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

          {/* CTA — outer ring 84×84 border #b0b0b0 + inner circle 67×67 fill #242424 + arrow */}
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
