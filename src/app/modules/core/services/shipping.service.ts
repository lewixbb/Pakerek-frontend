import { Injectable } from '@angular/core';
import { ShippingApiService } from './shipping-api.service';
import { Subject } from 'rxjs';
import { shippingMethod } from '../models/shipping.model';

@Injectable({
  providedIn: 'root',
})
export class ShippingService {
  constructor(private shippingApi: ShippingApiService) {}

  shippingMethods = new Subject<shippingMethod[]>();

  public getShippingMethods() {
    this.shippingApi.getShippingMethods().subscribe({
      next: (response) => {
        this.shippingMethods.next(response);
      },
    });
  }
}
