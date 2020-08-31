export interface UserAuthUser {
  hashid: string;
  name: string;
  avatar: string;
  mobile: string;
}

export interface UserAuth {
  token: string;
  user: UserAuthUser;
}
