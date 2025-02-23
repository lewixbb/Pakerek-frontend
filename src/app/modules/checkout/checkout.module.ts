import { NgModule } from '@angular/core';
import { CheckoutComponent } from './checkout.component';
import { BasketComponent } from './basket/basket.component';
import { BasketListItemComponent } from './basket/basket-list-item/basket-list-item.component';
import { SummaryTabComponent } from './basket/summary-tab/summary-tab.component';
import { CouponComponent } from './basket/summary-tab/coupon/coupon.component';
import { SharedModule } from '../shared/shared.module';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ShippingAndPaymentComponent } from './shipping-and-payment/shipping-and-payment.component';
import { ShippingCustomerDataComponent } from './shipping-and-payment/shipping-customer-data/shipping-customer-data.component';
import { ShippingMethodChoiceComponent } from './shipping-and-payment/shipping-method-choice/shipping-method-choice.component';
import { PaymentMethodChoiceComponent } from './shipping-and-payment/payment-method-choice/payment-method-choice.component';
import { OrderSummaryTabComponent } from './shipping-and-payment/order-summary-tab/order-summary-tab.component';
import { OrderedProductsListComponent } from './shipping-and-payment/order-summary-tab/ordered-products-list/ordered-products-list.component';

@NgModule({
  declarations: [
    BasketComponent,
    BasketListItemComponent,
    SummaryTabComponent,
    CouponComponent,
    CheckoutComponent,
    ShippingAndPaymentComponent,
    ShippingCustomerDataComponent,
    ShippingMethodChoiceComponent,
    PaymentMethodChoiceComponent,
    OrderSummaryTabComponent,
    OrderedProductsListComponent,
  ],

  imports: [SharedModule, RouterLink, RouterOutlet],
  exports: [],
})
export class CheckoutModule {}
