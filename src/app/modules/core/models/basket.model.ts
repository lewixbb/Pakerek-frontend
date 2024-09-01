import {Order} from "./order.model";

export class Basket {
  constructor(
    public orders: Order[],
    public inTotal: number,
    public totalPrice: number,
  ) {}
}
