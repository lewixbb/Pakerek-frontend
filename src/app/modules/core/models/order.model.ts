import {Product} from "./product.model";

export class Order {
  constructor(
    public products: Product,
    public quantity: number,
    public groupPrice: number,
  ) {
  }
}
