import { CheckboxInputDataModel } from './checkboxInputData.model';

export interface PaymentMethodResponse extends CheckboxInputDataModel {
  id: number;
  name: string;
  worksWith: string[];
  comments: string;
}

export class PaymentMethod implements PaymentMethodResponse {
  constructor(
    public id: number,
    public name: string,
    public worksWith: string[],
    public comments: string
  ) {}
}
