import { Injectable } from '@angular/core';
import { DiscountApiService } from './discount-api.service';
import { Coupon } from '../models/coupon.model';
import { Subject } from 'rxjs';
import { BasketService } from './basket.service';

@Injectable({
  providedIn: 'root',
})
export class DiscountService {
  private coupon!: Coupon;
  private totalCount!: number;
  private today = new Date();
  feedback = new Subject<number>();

  constructor(
    private api: DiscountApiService,
    private basketService: BasketService
  ) {}

  findCoupon(name: string) {
    this.api.getCoupon(name).subscribe({
      next: (coupon) => {
        this.totalCount = coupon.totalCount;
        this.coupon = coupon.coupons[0];
        this.checkCoupon();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  private checkCoupon() {
    if (this.totalCount === 0) {
      this.feedback.next(404);
      return;
    }
    if (!this.totalCount) {
      return;
    }
    const expireDate = this.dateCalculation(this.coupon.expiryDate);
    if (expireDate < this.today) {
      this.feedback.next(204);
    } else {
      this.feedback.next(200);
      this.basketService.addDiscount(this.coupon.amount);
    }
  }

  private dateCalculation(date: string) {
    const [year, month, day] = date.split('/');
    const dateExp = new Date(Number(year), Number(month), Number(day));
    return dateExp;
  }
}
