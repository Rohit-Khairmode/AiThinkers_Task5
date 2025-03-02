import { Dispatch, SetStateAction } from "react";

export interface User {
  userName: string;
}

export interface ServerUser extends User {
  password: string;
}

export type AuthError = {
  userName?: string;
  password?: string;
  type?: string;
  credentials?: string;
  method?: string;
};
export type AuthInputs = {
  userName: string;
  password: string;
  type: string;
};
export type AuthContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};
