import { Component, OnDestroy, OnInit } from '@angular/core';
import { BasketService } from '../../../core/services/basket.service';
import { Subscription } from 'rxjs';
import { Order } from '../../../core/models/order.model';

@Component({
  selector: 'app-order-summary-tab',
  templateUrl: './order-summary-tab.component.html',
  styleUrls: ['./order-summary-tab.component.scss'],
})
export class OrderSummaryTabComponent implements OnInit, OnDestroy {
  basketAmount = this.basketService.basket.inTotal;
  basketItems: Order[] = this.basketService.basket.orders;
  totalPrice = this.basketService.basket.billing.totalPrice;
  private sub = new Subscription();

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    // this.sub = this.basketService.orderIncome$.subscribe({
    //   next: (basket) => {
    //     this.basketAmount = basket.inTotal;
    //     this.basketItems = basket.orders;
    //     this.totalPrice = basket.billing.totalPrice;
    //     console.log(basket);
    //   },
    // });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
