import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Basket } from '../models/basket.model';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  orderIncome$ = new Subject<Basket>();
  private orders: Order[] = JSON.parse(localStorage.getItem('orders')!) ?? [];
  private _basket: Basket[] = JSON.parse(localStorage.getItem('basket')!) ?? [];
  private quantity!: number;
  private totalPrice = 0;

  public get basket() {
    return this._basket.slice();
  }

  get() {
    this.dataActuator();
    return new Basket(this.orders, this.quantity, this.totalPrice);
  }

  orderCollector(order: Order) {
    this.orderSelectionForDuplicate(order);
    this.dataActuator();
  }

  removeFromBasket(id: number) {
    this.orders = this.orders.filter((order) => order.products.id !== id);
    this.dataActuator();
  }

  dataActuator() {
    localStorage.setItem('orders', JSON.stringify(this.orders));
    this.quantity = this.getTotalItemsInBasket(this.orders);
    this.totalPrice = this.getTotalPriceFromOrders(this.orders);
    this.orderIncome$.next(
      new Basket(this.orders, this.quantity, this.totalPrice)
    );
  }

  private getTotalPriceFromOrders(orders: Order[]): number {
    let totalPrice = 0;
    orders.forEach((order) => {
      totalPrice = totalPrice + order.products.price * order.quantity;
    });
    return totalPrice;
  }

  private getTotalItemsInBasket(orders: Order[]): number {
    const array = orders.map((a, b) => a.quantity);
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
