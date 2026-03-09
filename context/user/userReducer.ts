import { User } from '@/types/user';
import { SET_USER, CLEAR_USER, SET_LOADING, UNSET_LOADING } from '@/helpers/types';

export interface UserState {
  user: User | null;
  loading: boolean;
}

type UserAction =
  | { type: typeof SET_LOADING }
  | { type: typeof UNSET_LOADING }
  | { type: typeof SET_USER; payload: User }
  | { type: typeof CLEAR_USER };

export function userReducer(state: UserState, action: UserAction): UserState {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case UNSET_LOADING:
      return { ...state, loading: false };
    case SET_USER:
      return { ...state, user: action.payload };
    case CLEAR_USER:
      return { ...state, user: null };
    default:
      return state;
  }
}
