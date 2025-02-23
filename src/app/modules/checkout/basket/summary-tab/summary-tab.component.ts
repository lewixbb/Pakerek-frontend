import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BasketService } from '../../../core/services/basket.service';
import { Basket } from '../../../core/models/basket.model';
import { Subscription } from 'rxjs';

import { DiscountService } from '../../../core/services/discount.service';

@Component({
  selector: 'app-summary-tab',
  templateUrl: './summary-tab.component.html',
  styleUrls: ['./summary-tab.component.scss'],
})
export class SummaryTabComponent implements OnInit {
  basket: Basket = this.basketService.basket;
  private sub = new Subscription();
  @Output() next = new EventEmitter();
  test = true;

  constructor(
    private basketService: BasketService,
    private m: DiscountService
  ) {}

  ngOnInit(): void {
    this.sub = this.basketService.orderIncome$.subscribe({
      next: (basket) => {
        this.basket = basket;
      },
    });
  }

  nextStep() {
    this.m.next$.next();
  }
}
