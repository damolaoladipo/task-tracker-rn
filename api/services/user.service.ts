import AsyncStorage from '@react-native-async-storage/async-storage';
import { User, AuthCredentials, SignupCredentials } from '@/types/user';
import { mockUser } from '@/_data/user';

const USERS_STORAGE_KEY = 'AUTH_USERS';

interface StoredUser extends User {
  password: string;
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function getStableUserId(email: string): string {
  return `user-${normalizeEmail(email)}`;
}

function getFallbackName(email: string): string {
  const localPart = normalizeEmail(email).split('@')[0] ?? 'user';
  if (!localPart) return 'User';

  return localPart
    .split(/[._-]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

async function loadStoredUsers(): Promise<StoredUser[]> {
  try {
    const raw = await AsyncStorage.getItem(USERS_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredUser[]) : [];
  } catch {
    return [];
  }
}

async function saveStoredUsers(users: StoredUser[]): Promise<void> {
  try {
    await AsyncStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  } catch {}
}

export async function loginUser(credentials: AuthCredentials): Promise<User> {
  if (credentials.password.length < 6) {
    throw new Error('Invalid credentials');
  }

  const trimmedEmail = normalizeEmail(credentials.email);
  const storedUsers = await loadStoredUsers();
  const existingUser = storedUsers.find((user) => user.email === trimmedEmail);

  if (!existingUser) {
    throw new Error('No account found for this email');
  }

  if (existingUser.password !== credentials.password) {
    throw new Error('Incorrect password');
  }

  return {
    id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
  };
}

export async function signupUser(credentials: SignupCredentials): Promise<User> {
  if (credentials.password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }

  const trimmedEmail = normalizeEmail(credentials.email);
  const trimmedName = credentials.name.trim();
  const storedUsers = await loadStoredUsers();

  const hasExistingUser = storedUsers.some((user) => user.email === trimmedEmail);
  if (hasExistingUser) {
    throw new Error('An account with this email already exists');
  }

  const newUser: StoredUser = {
    id: getStableUserId(trimmedEmail),
    name: trimmedName,
    email: trimmedEmail,
    password: credentials.password,
  };

  await saveStoredUsers([...storedUsers, newUser]);

  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  };
}
