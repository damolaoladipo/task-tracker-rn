import { createContext } from 'react';
import { User, AuthCredentials, SignupCredentials } from '@/types/user';

interface UserContextProps {
  user: User | null;
  loading: boolean;
  login: (credentials: AuthCredentials) => Promise<void>;
  signup: (credentials: SignupCredentials) => Promise<void>;
  logout: () => Promise<void>;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export default UserContext;
