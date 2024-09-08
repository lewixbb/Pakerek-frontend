import { Order } from './order.model';

export class Basket {
  constructor(
    public orders: Order[],
    public inTotal: number,
    public billing: Billing
  ) {}
}

export class Billing {
  constructor(
    public totalPrice: number,
    public discount: number,
    public netPrice: number,
    public grossPrice: number
  ) {}
}
