import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ONBOARDING_KEY = 'HAS_SEEN_WALKTHROUGH';

export function useOnboarding() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasSeenWalkthrough, setHasSeenWalkthrough] = useState(false);

  useEffect(() => {
    const check = async () => {
      try {
        const value = await AsyncStorage.getItem(ONBOARDING_KEY);
        setHasSeenWalkthrough(value === 'true');
      } catch {
        setHasSeenWalkthrough(false);
      } finally {
        setIsLoading(false);
      }
    };

    check();
  }, []);

  const markSeen = useCallback(async () => {
    await AsyncStorage.setItem(ONBOARDING_KEY, 'true');
    setHasSeenWalkthrough(true);
  }, []);

  return { isLoading, hasSeenWalkthrough, markSeen };
}
