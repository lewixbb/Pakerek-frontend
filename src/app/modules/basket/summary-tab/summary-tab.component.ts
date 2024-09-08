import { Component, OnInit } from '@angular/core';
import { BasketService } from '../../core/services/basket.service';
import { Basket } from '../../core/models/basket.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-summary-tab',
  templateUrl: './summary-tab.component.html',
  styleUrls: ['./summary-tab.component.scss'],
})
export class SummaryTabComponent implements OnInit {
  basket: Basket = this.basketService.basket;
  private sub = new Subscription();

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.sub = this.basketService.orderIncome$.subscribe({
      next: (basket) => {
        this.basket = basket;
      },
    });
  }

  nextStep() {
    console.log('sumary');
  }
}
