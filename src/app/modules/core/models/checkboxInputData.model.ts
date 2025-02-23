export interface CheckboxInputDataModel {
  id: number;
  name: string;
  price?: number;
  method?: string;
  deliveryDelay?: number;
  worksWith?: string[];
  comments?: string;
}

export class CheckboxInputData implements CheckboxInputDataModel {
  constructor(
    public id: number,
    public name: string,
    public price?: number,
    public method?: string,
    public deliveryDelay?: number,
    public worksWith?: string[],
    public comments?: string
  ) {}
}
