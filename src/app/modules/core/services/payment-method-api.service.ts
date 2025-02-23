import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import {
  PaymentMethod,
  PaymentMethodResponse,
} from '../models/paymentMethod.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentMethodApiService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  get paymentMethods(): Observable<PaymentMethod[]> {
    return this.http.get<PaymentMethodResponse[]>(
      `${this.apiUrl}/paymentMethods`
    );
  }
}
