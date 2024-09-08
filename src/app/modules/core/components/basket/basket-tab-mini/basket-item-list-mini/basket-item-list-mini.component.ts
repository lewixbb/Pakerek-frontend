import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '../../../../models/order.model';

@Component({
  selector: 'app-basket-item-list-mini',
  templateUrl: './basket-item-list-mini.component.html',
  styleUrls: ['./basket-item-list-mini.component.scss'],
})
export class BasketItemListMiniComponent {
  @Input() basketItem!: Order;
  @Output() remove = new EventEmitter<number>();

  removeItem(id: number) {
    return this.remove.emit(id);
  }
}
