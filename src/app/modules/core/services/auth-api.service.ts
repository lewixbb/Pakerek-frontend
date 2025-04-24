import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginData, LoginResponse } from '../models/auth.model';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { UserLoginResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  private apiUrl = environment.apiUrlJava;

  constructor(private http: HttpClient) {}

  login(body: LoginData): Observable<UserLoginResponse> {
    return this.http.post<LoginResponse>(
      `${this.apiUrl}/api/auth/login`,
      body,
      { withCredentials: true }
    );
  }
}
