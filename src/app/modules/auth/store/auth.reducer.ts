import {
  User,
  UserLoginData,
  UserLoginResponse,
} from '../../core/models/user.model';
import { createReducer, Action, on } from '@ngrx/store';
import * as AuthUserActions from './auth.action';

export interface AuthUserState {
  user: User | null;
  loginData: UserLoginData | null;
  loginResponse: UserLoginResponse | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthUserState = {
  user: null,
  loginData: null,
  loginResponse: null,
  isLoading: false,
  error: null,
};

const _authUserReducer = createReducer(
  initialState,
  on(AuthUserActions.login, (state, action) => ({
    ...state,
    isLoading: true,
  })),
  on(AuthUserActions.loginSuccess, (state, action) => ({
    ...state,
    loginResponse: action.loginResponse,
    isLoading: false,
    error: null,
  })),
  on(AuthUserActions.loginFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);

export function authUserReducer(
  state: AuthUserState | undefined,
  action: Action
) {
  return _authUserReducer(state, action);
}
