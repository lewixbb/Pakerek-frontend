import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppState } from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { selectAuth } from '../../auth/store/auth.selector';

@Injectable()
export class BearerInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.store.select(selectAuth).subscribe((value) => {
      // console.log(value.loginResponse?.jwtToken);
      if (request.method === 'POST') {
        // console.log('test');
      }
    });
    return next.handle(request).pipe();
  }
}
