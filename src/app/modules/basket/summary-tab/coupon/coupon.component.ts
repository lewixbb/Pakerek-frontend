import { Component } from '@angular/core';
import { DiscountService } from '../../../core/services/discount.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.scss'],
})
export class CouponComponent {
  couponName = '';
  feedbackText = '';
  alertType = '';

  constructor(private discountService: DiscountService) {}

  useCoupon() {
    if (!this.couponName) {
      this.feedbackText = '';
      return;
    }
    this.discountService.findCoupon(this.couponName);
    this.discountService.feedback.subscribe({
      next: (value) => {
        this.feedbackInfo(value);
      },
    });
  }

  feedbackInfo(feedback: number) {
    switch (feedback) {
      case 200: {
        this.feedbackText = 'Twój kod został dodany pomyślnie';
        this.alertType = 'success';
        console.log('200');
        break;
      }
      case 404: {
        this.feedbackText = 'Przykro nam, nie istnieje kupon o podanej nazwie';
        console.log('404');
        this.alertType = 'danger';
        break;
      }
      case 204: {
        this.feedbackText = 'Przykro nam, Twój kupon stracił ważność';
        console.log('204');
        this.alertType = 'danger';
        break;
      }
      default: {
        this.feedbackText = '';
        this.alertType = '';
        break;
      }
    }
  }
}
