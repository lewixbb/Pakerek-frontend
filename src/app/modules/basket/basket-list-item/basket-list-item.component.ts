import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Order } from '../../core/models/order.model';

@Component({
  selector: 'app-basket-list-item',
  templateUrl: './basket-list-item.component.html',
  styleUrls: ['./basket-list-item.component.scss'],
})
export class BasketListItemComponent {
  @Input() basketItem!: Order;
  @Output() quantityFeedback = new EventEmitter<number>();
  @Output() removeItem = new EventEmitter<void>();

  quantityActualization(quantity: number) {
    return this.quantityFeedback.emit(quantity);
  }

  remove() {
    return this.removeItem.emit();
  }
}
