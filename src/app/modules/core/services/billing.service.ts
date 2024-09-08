import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { Billing } from '../models/basket.model';

@Injectable({
  providedIn: 'root',
})
export class BillingService {
  getTotalPriceFromOrders(orders: Order[], discount: number): Billing {
    let totalPrice = 0;
    orders.forEach((order) => {
      totalPrice = totalPrice + order.products.price * order.quantity;
    });
    const grossPrice = this.discountCalculator(totalPrice, discount);
    const netPrice = this.netPriceCalculator(grossPrice);

    return new Billing(totalPrice, discount, netPrice, grossPrice);
  }

  private discountCalculator(totalPrice: number, discount: number): number {
    if (discount) {
      totalPrice = totalPrice * (1 - discount);
    }
    return totalPrice;
  }

  private netPriceCalculator(grossPrice: number): number {
    grossPrice = grossPrice + grossPrice * 0.08;
    grossPrice.toFixed(2);
    return grossPrice;
  }
}
