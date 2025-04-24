import { Person } from './customer.model';

export interface UserResponse {
  id: number;
  email: string;
  password: string;
  customer: Person;
  role: Roles;
  enable: boolean;
  blocked: boolean;
}

export type PostUser = Omit<UserResponse, 'id'>;

export class PostUserData implements PostUser {
  constructor(
    public email: string,
    public password: string,
    public customer: Person,
    public role: Roles,
    public enable: boolean,
    public blocked: boolean
  ) {}
}

export class User {
  constructor(
    public id: number,
    public email: string,
    public password: string,
    public person: Person,
    public role: Roles,
    public enable: boolean,
    public blocked: boolean
  ) {}
}

export interface GetUserData {
  id: number;
  email: string;
  person: Person;
  role: Roles;
  status: UserStatus;
}

export interface UsersRespo {
  id: number;
  email: string;
  person: Person;
  role: Roles;
  status: UserStatus;
}

export interface GetPageUsersResponse {
  content: UsersRespo[];
  totalElements: number;
  totalPages: number;
}

export class UsersPageData {
  constructor(
    public users: UserData[],
    public totalElements: number,
    public totalPages: number
  ) {}
}

export class UserData implements GetUserData {
  constructor(
    public id: number,
    public email: string,
    public person: Person,
    public role: Roles,
    public status: UserStatus
  ) {}
}

export class UserLoginData {
  constructor(public username: string, public password: string) {}
}

export class UserLoginResponse {
  constructor(
    public username: string,
    public role: string,
    public jwtToken: string
  ) {}
}

export enum UserStatus {
  INACTIVE = 'nieaktywny',
  ACTIVE = 'aktywny',
  BLOCKED = 'zablokowany',
}

export enum Roles {
  user = 'użytkownik',
  administrator = 'administrator',
}
