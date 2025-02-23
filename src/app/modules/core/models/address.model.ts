export class Address {
  constructor(
    public id: number,
    public street: string,
    public doorNr: string,
    public postCode: string,
    public city: string
  ) {}
}

export class PostAddress {
  constructor(
    public street: string,
    public doorNr: string,
    public postCode: string,
    public city: string
  ) {}
}
