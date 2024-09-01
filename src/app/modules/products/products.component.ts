import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products.service';
import { Product } from '../core/models/product.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products!: Product[];
  private sub = new Subscription();

  constructor(private prodApi: ProductsService) {}

  ngOnInit(): void {
    this.sub = this.prodApi.getProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (err) => console.log(err),
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
