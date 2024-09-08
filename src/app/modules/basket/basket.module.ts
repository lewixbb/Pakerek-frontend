import { NgModule } from '@angular/core';
import { BasketComponent } from './basket.component';
import { SharedModule } from '../shared/shared.module';
import { RouterLink } from '@angular/router';
import { BasketListItemComponent } from './basket-list-item/basket-list-item.component';
import { SummaryTabComponent } from './summary-tab/summary-tab.component';
import { FormsModule } from '@angular/forms';
import { CouponComponent } from './summary-tab/coupon/coupon.component';

@NgModule({
  declarations: [BasketComponent, BasketListItemComponent, SummaryTabComponent, CouponComponent],
  imports: [SharedModule, RouterLink, FormsModule],
  exports: [],
})
export class BasketModule {}
