import { CheckboxInputDataModel } from './checkboxInputData.model';

export interface shippingMethodResponse extends CheckboxInputDataModel {
  id: number;
  name: string;
  price: number;
  method: string;
  deliveryDelay: number;
}

export class shippingMethod implements shippingMethodResponse {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public method: string,
    public deliveryDelay: number
  ) {}
}
