import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {ProductsService} from "../../core/services/products.service";
import {Product} from "../../core/models/product.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  product!: Product;

  constructor(private route: ActivatedRoute, private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(switchMap((params) => this.productService.getProduct(+params['id'])))
      .subscribe({
        next: (product) => {
          this.product = product;
        },
        error: (err) => console.log(err),
      })
  }



}
