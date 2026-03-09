import { useUserContext } from '@/hooks/use-user-context';

export function useUser() {
  return useUserContext();
}
