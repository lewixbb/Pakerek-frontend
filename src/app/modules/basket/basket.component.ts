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
  basketAmount!: number;
  basketItems!: Order[];
  totalPrice!: number;
  private sub = new Subscription();

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    const basketStatus = this.basketService.get();
    this.basketItems = basketStatus.orders;
    this.basketAmount = basketStatus.inTotal;
    this.totalPrice = basketStatus.totalPrice;
    this.sub = this.basketService.orderIncome$.subscribe({
      next: (basket) => {
        this.basketAmount = basket.inTotal;
        this.basketItems = basket.orders;
        this.totalPrice = basket.totalPrice;
      },
    });
  }

  removeItem(id: number) {
    this.basketService.removeFromBasket(id);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
