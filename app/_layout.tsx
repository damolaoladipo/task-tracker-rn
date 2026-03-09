import '../global.css';
import React, { useEffect } from 'react';
import { LogBox } from 'react-native';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

// expo-router / react-navigation internals still reference the deprecated RN
// SafeAreaView. Our own code uses react-native-safe-area-context throughout.
LogBox.ignoreLogs(['SafeAreaView has been deprecated']);
import { SafeAreaProvider } from 'react-native-safe-area-context';
import UserState from '@/context/user/UserState';
import TaskState from '@/context/task/TaskState';
import { useUserContext } from '@/hooks/use-user-context';

SplashScreen.preventAutoHideAsync();

function AuthenticatedTaskState({ children }: { children: React.ReactNode }) {
  const { user } = useUserContext();
  if (!user) return <>{children}</>;
  return <TaskState userId={user.id}>{children}</TaskState>;
}

function AppInitialiser({ children }: { children: React.ReactNode }) {
  const { loading } = useUserContext();

  useEffect(() => {
    if (!loading) {
      SplashScreen.hideAsync();
    }
  }, [loading]);

  return <>{children}</>;
}

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <UserState>
        <AuthenticatedTaskState>
          <AppInitialiser>
            <Stack screenOptions={{ headerShown: false }} />
          </AppInitialiser>
        </AuthenticatedTaskState>
      </UserState>
    </SafeAreaProvider>
  );
}
