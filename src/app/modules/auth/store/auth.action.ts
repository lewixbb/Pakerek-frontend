import { createAction, props } from '@ngrx/store';
import { LoginData } from '../../core/models/auth.model';
import { UserLoginResponse } from '../../core/models/user.model';

const LOGIN_TYPE = '[Auth] Login';
const LOGIN_SUCCESS_TYPE = '[Auth] Login Success';
const LOGIN_FAILURE_TYPE = '[Auth] Login Failure';

export const login = createAction(
  LOGIN_TYPE,
  props<{ loginData: LoginData }>()
);

export const loginSuccess = createAction(
  LOGIN_SUCCESS_TYPE,
  props<{ loginResponse: UserLoginResponse }>()
);

export const loginFailure = createAction(
  LOGIN_FAILURE_TYPE,
  props<{ error: string }>()
);
