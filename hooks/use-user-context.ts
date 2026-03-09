import { useContext } from 'react';
import UserContext from '@/context/user/userContext';

export function useUserContext() {
  return useContext(UserContext);
}
