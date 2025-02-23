import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import {
  shippingMethod,
  shippingMethodResponse,
} from '../models/shipping.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShippingApiService {
  constructor(private http: HttpClient) {}
  private apiUrl = environment.apiUrl;

  getShippingMethods(): Observable<shippingMethod[]> {
    return this.http.get<shippingMethodResponse[]>(
      `${this.apiUrl}/shippingMethods`
    );
  }
}
