import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import {
  GetPageUsersResponse,
  GetUserData,
  UserData,
  UsersPageData,
  UserStatus,
} from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  private apiUrl = environment.apiUrlJava;

  constructor(private http: HttpClient) {}

  addUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/user/add`);
  }

  getUser(id: number): Observable<UserData> {
    return this.http.get<GetUserData>(`${this.apiUrl}/api/user/${id}`);
  }

  getUsers(
    pageIndex: number,
    itemsPerPage: number,
    sortColumnName: string,
    sortDirection: string,
    value = ''
  ): Observable<UsersPageData> {
    let params = new HttpParams()
      .append('page', pageIndex)
      .append('size', itemsPerPage);
    if (sortColumnName) {
      params = params
        .append('sort', sortColumnName)
        .append('order', sortDirection);
    }
    if (value) {
      params = params.append('filter', value);
    }
    return this.http
      .get<GetPageUsersResponse>(`${this.apiUrl}/api/user`, {
        params,
      })
      .pipe(
        map((response) => {
          const users: UserData[] = response.content.map(
            ({ id, email, person, role, status }) =>
              new UserData(
                id,
                email,
                person,
                role,
                this.statusTranslator(status)
              )
          );
          const totalElements = response.totalElements;
          const totalPages = response.totalPages;
          return { users, totalElements, totalPages };
        })
      );
  }

  private statusTranslator(status: string): UserStatus {
    switch (status) {
      case 'ACTIVE': {
        return UserStatus.ACTIVE;
      }
      case 'BLOCKED': {
        return UserStatus.BLOCKED;
      }
      default: {
        return UserStatus.INACTIVE;
      }
    }
  }
}
