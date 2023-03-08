import { User } from 'firebase/auth';

export enum USER_ACTIONS {
  SET_CURR_USER = 'SET_CURR_USER',
}

export type UserState = {
  readonly currUser: User | null;
};
