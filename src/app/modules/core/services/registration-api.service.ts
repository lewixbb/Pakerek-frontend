import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { map, Observable } from 'rxjs';
import { PostUser, User, UserResponse } from '../models/user.model';
import { Customer, Person } from '../models/customer.model';
import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root',
})
export class RegistrationApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // getUsers(): Observable<User[]> {
  //   return this.http
  //     .get<UserResponse[]>(`${this.apiUrl}/users`)
  //     .pipe(
  //       map((users) =>
  //         users.map(
  //           ({ id, email, password, customer, role, enable, blocked }) =>
  //             new User(id, email, password, customer, role, enable, blocked)
  //         )
  //       )
  //     );
  // }

  postUser(registrationUserData: PostUser): Observable<UserResponse> {
    return this.http.post<UserResponse>(
      `localhost:8080/api/user/registration`,
      registrationUserData
    );
  }

  postTest(email: string): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/user/email`, email);
  }

  // postUser(registrationUserData: PostUser): Observable<UserResponse> {
  //   return this.http.post<UserResponse>(
  //     `${this.apiUrl}/users`,
  //     registrationUserData
  //   );
  // }

  postPerson(registrationPersonData: Person): Observable<Person> {
    return this.http.post<Person>(
      `${this.apiUrl}/customers`,
      registrationPersonData
    );
  }

  postAddress(registartionAddress: Address): Observable<Address> {
    return this.http.post<Address>(
      `${this.apiUrl}/address`,
      registartionAddress
    );
  }
}
