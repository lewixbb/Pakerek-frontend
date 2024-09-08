import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Basket, Billing } from '../models/basket.model';
import { Order } from '../models/order.model';
import { BillingService } from './billing.service';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  orderIncome$ = new Subject<Basket>();
  private _basket: Basket = JSON.parse(localStorage.getItem('basket')!) ?? [];
  private orders: Order[] = this._basket?.orders ?? [];
  private billing: Billing = this._basket?.billing;
  private quantity!: number;
  private discount = 0;

  constructor(private billingService: BillingService) {}

  public get basket() {
    return this._basket;
  }

  orderCollector(order: Order) {
    this.orderSelectionForDuplicate(order);
    this.dataActuator();
  }

  ordersQuantityActualizator(quantity: number, id: number) {
    this.orders.forEach((order) => {
      if (order.products.id === id) {
        order.quantity = quantity;
        order.groupPrice = order.products.price * order.quantity;
      }
    });
    this.dataActuator();
  }

  removeFromBasket(id: number) {
    this.orders = this.orders.filter((order) => order.products.id !== id);
    this.dataActuator();
  }

  addDiscount(discount: number) {
    this.discount = discount;
    this.dataActuator();
  }

  dataActuator() {
    this.quantity = this.getTotalItemsInBasket(this.orders);
    this.billing = this.billingService.getTotalPriceFromOrders(
      this.orders,
      this.discount
    );
    this._basket = new Basket(this.orders, this.quantity, this.billing);
    this.orderIncome$.next(this.basket);
    localStorage.setItem('basket', JSON.stringify(this.basket));
  }

  private getTotalItemsInBasket(orders: Order[]): number {
    const array = orders.map((a) => a.quantity);
    return array.reduce((a, b) => a + b, 0);
  }

  private orderSelectionForDuplicate(order: Order) {
    if (this.orders.length) {
      if (this.orders.find((ord) => ord.products.id === order.products.id)) {
        this.orders.forEach((ord) => {
          if (ord?.products?.id === order.products?.id) {
            ord.quantity = ord.quantity + order.quantity;
            ord.groupPrice = ord.groupPrice + order.groupPrice;
          }
        });
        return;
      }
    }
    this.orders.push(order);
  }
}
