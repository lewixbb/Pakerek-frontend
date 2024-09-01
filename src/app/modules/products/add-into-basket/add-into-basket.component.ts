import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../core/models/product.model";
import {BasketService} from "../../core/services/basket.service";
import {Order} from "../../core/models/order.model";

@Component({
  selector: 'app-add-into-basket',
  templateUrl: './add-into-basket.component.html',
  styleUrls: ['./add-into-basket.component.scss']
})
export class AddIntoBasketComponent implements OnInit, OnDestroy {

  @Input() product!: Product;
  order!: Order;
  quantity = 1;
  limitedQuantity!: number;

  constructor( private basketService: BasketService) {}

  ngOnInit(): void {
    this.limitedQuantity = 12;
  }

  addPiece(){
    if(this.quantity < this.limitedQuantity){
      this.quantity = this.quantity + 1;
    }
  }

  subtractPiece(){
    if(this.quantity > 1) {
      this.quantity = this.quantity - 1;
    }
  }

  addToBasket() {
    if(!this.product){
      return;
    }
    this.order = new Order(this.product , this.quantity, this.product.price);
    this.basketService.orderCollector(this.order);
  }

  ngOnDestroy(): void {
   }
}
