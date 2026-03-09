import { User, AuthCredentials, SignupCredentials } from '@/types/user';
import { mockUser } from '@/_data/user';

export async function loginUser(credentials: AuthCredentials): Promise<User> {
  // Mock: accept any email with password length >= 6
  if (credentials.password.length < 6) {
    throw new Error('Invalid credentials');
  }
  return {
    ...mockUser,
    email: credentials.email,
    id: `user-${Date.now()}`,
  };
}

export async function signupUser(credentials: SignupCredentials): Promise<User> {
  if (credentials.password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }
  return {
    id: `user-${Date.now()}`,
    name: credentials.name,
    email: credentials.email,
  };
}
