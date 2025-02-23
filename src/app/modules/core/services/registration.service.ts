import { Injectable } from '@angular/core';
import { RegistrationApiService } from './registration-api.service';
import { Router } from '@angular/router';
import { Roles, User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(
    private registrationApi: RegistrationApiService,
    private router: Router
  ) {}

  registerUser(user: User) {
    user.blocked = false;
    user.enable = true;
    user.role = Roles.user;
  }
}
