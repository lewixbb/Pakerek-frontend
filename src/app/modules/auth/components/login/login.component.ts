import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginData } from '../../../core/models/auth.model';
import { Store } from '@ngrx/store';
import * as AuthUserActions from '../../store/auth.action';
import { AppState } from '../../../../store/app.reducer';
import { selectAuth, selectAuthUser } from '../../store/auth.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginData: LoginData = { username: '', password: '' };
  hide = true;

  constructor(private store: Store<AppState>) {}

  onLogin(login: NgForm) {
    this.store.dispatch(
      AuthUserActions.login({ loginData: login.control.getRawValue() })
    );
    this.store.select('authUser').subscribe((value) => console.log(value));
  }
}
