import { Address } from './address.model';

export interface Customer {
  id: number;
}

export class PostPerson {
  constructor(
    public name: string,
    public surname: string,
    public phoneNumber: string,
    public address: Address[]
  ) {}
}

export class Person implements Customer {
  constructor(
    public id: number,
    public name: string,
    public surname: string,
    public phoneNumber: string,
    public address: Address[]
  ) {}
}

export class Company implements Customer {
  constructor(
    public id: number,
    public name: string,
    public nip: number,
    public phoneNumber: string,
    public address: Address[],
    public person: Person[]
  ) {}
}
