import { createSelector } from 'reselect';
import { RootState } from '../store';
import { UserState } from './user.types';

const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrUser = createSelector(
  selectUserReducer,
  (user) => user.currUser
);
