export interface User {
  name: string;
  avatar: string;
  email: string;
}

export interface UserAuth {
  token: string;
  user: User;
}