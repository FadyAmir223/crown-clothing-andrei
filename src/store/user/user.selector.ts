import { createSelector } from 'reselect';
import { UserState } from './user.types';

const selectUserReducer = (state): UserState => state.user;

export const selectCurrUser = createSelector(
  selectUserReducer,
  (user) => user.currUser
);
