import { NgModule } from '@angular/core';
import { BasketComponent } from './basket.component';
import { BasketTableComponent } from './basket-table/basket-table.component';
import { SharedModule } from '../shared/shared.module';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [BasketComponent, BasketTableComponent],
  imports: [SharedModule, RouterLink],
  exports: [],
})
export class BasketModule {}
