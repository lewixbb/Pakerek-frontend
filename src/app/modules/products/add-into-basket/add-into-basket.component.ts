import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../core/models/product.model';
import { BasketService } from '../../core/services/basket.service';
import { Order } from '../../core/models/order.model';

@Component({
  selector: 'app-add-into-basket',
  templateUrl: './add-into-basket.component.html',
  styleUrls: ['./add-into-basket.component.scss'],
})
export class AddIntoBasketComponent implements OnInit {
  @Input() product!: Product;
  order!: Order;
  quantity = 1;
  limitedQuantity!: number;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.limitedQuantity = 12;
  }

  addToBasket() {
    if (!this.product) {
      return;
    }
    this.order = new Order(this.product, this.quantity, this.product.price);
    this.basketService.orderCollector(this.order);
  }

  quantityActualization(quantity: number) {
    this.quantity = quantity;
  }
}
