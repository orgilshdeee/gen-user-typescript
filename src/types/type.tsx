import React from "react";

export interface User {
  img: string;
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  address: string;
  phone: string;
  password: string;
}

export type selectType =
  | "name"
  | "email address"
  | "birthday"
  | "address"
  | "phone number"
  | "password";

export type UserContextType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};
