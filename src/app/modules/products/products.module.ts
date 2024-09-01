import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddIntoBasketComponent } from './add-into-basket/add-into-basket.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    AddProductComponent,
    AddIntoBasketComponent,
  ],
  imports: [SharedModule],
  exports: [AddIntoBasketComponent],
})
export class ProductsModule {}
