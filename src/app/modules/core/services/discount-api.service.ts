import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { map, Observable } from 'rxjs';
import {
  Coupon,
  CouponResponse,
  GetCouponResponse,
} from '../models/coupon.model';

@Injectable({
  providedIn: 'root',
})
export class DiscountApiService {
  constructor(private http: HttpClient) {}
  private apiUrl = environment.apiUrl;

  getCoupon(name: string): Observable<GetCouponResponse> {
    return this.http
      .get<CouponResponse[]>(`${this.apiUrl}/coupons?name=${name}`)
      .pipe(
        map((response) => {
          console.log(response);
          if (!response) {
            return { coupons: [], totalCount: 0 };
          }
          const totalCount = response.length;
          const coupons: Coupon[] = response.map(
            ({ id, name, amount, createdDate, expiryDate }) =>
              new Coupon(id, name, amount, createdDate, expiryDate)
          );
          return { coupons, totalCount };
        })
      );
  }

  getCoupons(): Observable<CouponResponse[]> {
    return this.http.get<Coupon[]>(`${this.apiUrl}/coupons/`);
  }

  // getCoupon(id: number): Observable<Coupon> {
  //   return this.http
  //     .get<CouponResponse>(`${this.apiUrl}/coupons/${id}`)
  //     .pipe(
  //       map(
  //         ({ id, name, amount, createdDate, expiryDate }) =>
  //           new Coupon(id, name, amount, createdDate, expiryDate)
  //       )
  //     );
  // }
}
