import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from '../core/models/order.model';
import { Subscription } from 'rxjs';
import { BasketService } from '../core/services/basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit, OnDestroy {
  public basketAmount = this.basketService.basket.inTotal ?? 0;
  public basketItems: Order[] = this.basketService.basket.orders ?? [];
  public totalPrice = this.basketService.basket?.billing?.totalPrice ?? 0;
  private sub = new Subscription();

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.sub = this.basketService.orderIncome$.subscribe({
      next: (basket) => {
        this.basketAmount = basket.inTotal;
        this.basketItems = basket.orders;
        this.totalPrice = basket.billing.totalPrice;
      },
    });
  }

  removeItem(id: number) {
    this.basketService.removeFromBasket(id);
  }

  quantityActualization(quantity: number, id: number) {
    this.basketService.ordersQuantityActualizator(quantity, id);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
