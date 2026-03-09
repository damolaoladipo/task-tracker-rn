import React, { useMemo, useReducer, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from './userContext';
import { userReducer } from './userReducer';
import { SET_USER, CLEAR_USER, SET_LOADING, UNSET_LOADING } from '@/helpers/types';
import { loginUser, signupUser } from '@/api/services/user.service';
import { AuthCredentials, SignupCredentials, User } from '@/types/user';

const AUTH_KEY = 'AUTH_USER';

interface UserStateProps {
  children: React.ReactNode;
}

const UserState = ({ children }: UserStateProps) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
    loading: true,
  });

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const raw = await AsyncStorage.getItem(AUTH_KEY);
        if (raw) {
          const user: User = JSON.parse(raw);
          dispatch({ type: SET_USER, payload: user });
        }
      } catch {
        // session restore failed — treat as logged out
      } finally {
        dispatch({ type: UNSET_LOADING });
      }
    };

    restoreSession();
  }, []);

  const login = useCallback(async (credentials: AuthCredentials) => {
    dispatch({ type: SET_LOADING });
    try {
      const user = await loginUser(credentials);
      await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(user));
      dispatch({ type: SET_USER, payload: user });
    } finally {
      dispatch({ type: UNSET_LOADING });
    }
  }, []);

  const signup = useCallback(async (credentials: SignupCredentials) => {
    dispatch({ type: SET_LOADING });
    try {
      const user = await signupUser(credentials);
      await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(user));
      dispatch({ type: SET_USER, payload: user });
    } finally {
      dispatch({ type: UNSET_LOADING });
    }
  }, []);

  const logout = useCallback(async () => {
    await AsyncStorage.removeItem(AUTH_KEY);
    dispatch({ type: CLEAR_USER });
  }, []);

  const contextValue = useMemo(
    () => ({
      user: state.user,
      loading: state.loading,
      login,
      signup,
      logout,
    }),
    [state.user, state.loading, login, signup, logout]
  );

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserState;
