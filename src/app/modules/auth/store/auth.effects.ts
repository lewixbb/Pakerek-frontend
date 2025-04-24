import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthApiService } from '../../core/services/auth-api.service';
import { Router } from '@angular/router';
import * as AuthUserActions from './auth.action';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private authService: AuthApiService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.action$.pipe(
      ofType(AuthUserActions.login),
      switchMap((action) => {
        return this.authService.login(action.loginData).pipe(
          map((response) => {
            console.log(response);
            return AuthUserActions.loginSuccess({ loginResponse: response });
          }),
          catchError((err) => of(AuthUserActions.loginFailure({ error: err })))
        );
      })
    )
  );
}
