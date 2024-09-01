import {Component, Input} from '@angular/core';
import {Product} from "../../../core/models/product.model";

import {BasketService} from "../../../core/services/basket.service";
import {Order} from "../../../core/models/order.model";

@Component({
  selector: 'app-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent{

  @Input() product!: Product;

  constructor(private basketService : BasketService) {
  }

  addToBasket() {
    if(!this.product){
      return;
    }
    let order = new Order(this.product, 1, this.product.price);
    this.basketService.orderCollector(order);
  }
}
