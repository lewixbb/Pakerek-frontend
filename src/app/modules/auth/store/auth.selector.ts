import { AppState } from '../../../store/app.reducer';
import { createSelector } from '@ngrx/store';
import { AuthUserState } from './auth.reducer';

export const selectAuth = (state: AppState) => state.authUser;

export const selectAuthUser = createSelector(
  selectAuth,
  (state: AuthUserState) => {
    state.loginData;
    state.loginResponse;
  }
);

export const selectAuthIsLoading = createSelector(
  selectAuth,
  (state: AuthUserState) => state.isLoading
);

export const selectAuthError = createSelector(
  selectAuth,
  (state: AuthUserState) => state.error
);
