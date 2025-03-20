import { SxProps } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

export interface User {
  userName: string;
}

export interface ServerUser extends User {
  password: string;
}
export type TabsInFile = {
  title: string;
  count: string;
  countChange: string;
  color: string;
};

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
export interface WrapperComponetBaseProps {
  sx?: SxProps;
  children?: React.ReactNode;
}
export type LineDataType = {
  name: string;
  thisYear: number;
  lastYear: number;
};
