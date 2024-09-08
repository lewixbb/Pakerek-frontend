import { Component, OnDestroy, OnInit } from '@angular/core';
import { Order } from '../../../models/order.model';
import { Subscription } from 'rxjs';
import { BasketService } from '../../../services/basket.service';

@Component({
  selector: 'app-basket-tab-mini',
  templateUrl: './basket-tab-mini.component.html',
  styleUrls: ['./basket-tab-mini.component.scss'],
})
export class BasketTabMiniComponent implements OnInit, OnDestroy {
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

  onClose() {
    document.getElementById('basket')?.classList.remove('show');
  }

  removeItem(id: number) {
    this.basketService.removeFromBasket(id);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
