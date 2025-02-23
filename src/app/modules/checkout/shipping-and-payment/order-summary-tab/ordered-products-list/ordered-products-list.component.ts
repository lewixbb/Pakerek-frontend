import { AfterViewInit, Component, Input } from '@angular/core';
import { Order } from '../../../../core/models/order.model';

@Component({
  selector: 'app-ordered-products-list',
  templateUrl: './ordered-products-list.component.html',
  styleUrls: ['./ordered-products-list.component.scss'],
})
export class OrderedProductsListComponent {
  @Input() basketItem!: Order;
}
