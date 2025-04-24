export interface LoginData {
  username: string;
  password: string;
}

export interface LoginResponse {
  username: string;
  role: string;
  jwtToken: string;
}
