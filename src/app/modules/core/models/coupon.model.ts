export interface CouponResponse {
  id: number;
  name: string;
  amount: number;
  createdDate: string;
  expiryDate: string;
}

export class Coupon implements CouponResponse {
  constructor(
    public id: number,
    public name: string,
    public amount: number,
    public createdDate: string,
    public expiryDate: string
  ) {}
}

export interface GetCouponResponse {
  coupons: Coupon[];
  totalCount: number;
}
