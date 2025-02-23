import { Component } from '@angular/core';
import { UserLoginData } from '../../../core/models/user.model';
import { AbstractControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginData: UserLoginData = { username: '', password: '' };
  hide = true;

  onLogin(info: NgForm) {
    // console.log(info.controls?.['password'].errors);
  }
}
