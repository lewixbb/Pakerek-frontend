import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  getUserAccInfo(): Observable<UserData> {
    return this.http.get<GetUserData>(`${this.apiUrl}/api/user/myAccount`);
  }

  //metoda strzela pod zabezpieczony endpoint, próbowałem wysyłać z nagłówkiem zdefiniowanym na różne sposoby, jednak zazwyczaj podczas próby dodania, wiadomość jest pozbawiona nagłówków
  getTest(): Observable<string> {
    // const headers = new HttpHeaders();
    const headers = new HttpHeaders({
      Authorization:
        'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcnplbWVrX2xld3lAd3AucGwiLCJpYXQiOjE3NDU0Mzc1NzAsImV4cCI6MTc0NTQzOTU3MH0.bXvMp1zHRYTVeFC5gPjfWAkuchShpXmlcIMm4zMbjQhN-L1ae0GSueNa0_TQhoB86wNYeRGzA8PZFN-j6_f7vA',
    });
    // headers.append('test', 'test');
    // headers.append(
    //   'Authorization',
    //   'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcnplbWVrX2xld3lAd3AucGwiLCJpYXQiOjE3NDU0Mzc1NzAsImV4cCI6MTc0NTQzOTU3MH0.bXvMp1zHRYTVeFC5gPjfWAkuchShpXmlcIMm4zMbjQhN-L1ae0GSueNa0_TQhoB86wNYeRGzA8PZFN-j6_f7vA'
    // );
    // console.log(headers);
    return this.http.get(`${this.apiUrl}/api/user/test`, {
      responseType: 'text',
      // headers: { test: 'testest' },
      headers,
      withCredentials: true,
    });
  }

  //metoda strzela pod niezabezpieczony endpoint, próba dodania naglówków skutkuje sukcesem, jednak są one nie wykorzystywane
  getTest2(): Observable<string> {
    // const headers = new HttpHeaders({ test: 'etst' });
    // headers.append(
    //   'Authorization',
    //   'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcnplbWVrX2xld3lAd3AucGwiLCJpYXQiOjE3NDU0Mzc1NzAsImV4cCI6MTc0NTQzOTU3MH0.bXvMp1zHRYTVeFC5gPjfWAkuchShpXmlcIMm4zMbjQhN-L1ae0GSueNa0_TQhoB86wNYeRGzA8PZFN-j6_f7vA'
    // );
    // console.log(headers);
    return this.http.get(`${this.apiUrl}/api/user/public/test`, {
      responseType: 'text',
      headers: { test: 'testest' },
      withCredentials: true,
    });
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
