import { AuthUserState } from '../modules/auth/store/auth.reducer';

export interface AppState {
  authUser: AuthUserState;
}
