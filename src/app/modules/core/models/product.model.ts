export interface ProductResponse {
  id: number;
  name: string;
  size: string;
  price: number;
  producer: string;
  type: string;
  description: string;
  img: string;
}

export class Product implements ProductResponse {
  constructor(
    public id: number,
    public name: string,
    public size: string,
    public price: number,
    public producer: string,
    public type: string,
    public description: string,
    public img: string,
  ) {}
}

