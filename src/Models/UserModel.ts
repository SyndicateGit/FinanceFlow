export declare type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string
  role: Role;
  accountIds: string[];
};

export const defaultUser: User = {
  id: "",
  firstName: "Guest",
  lastName: "",
  email: "",
  phone: "",
  role: "USER",
  accountIds: []
};

declare type Role = "ADMIN" | "USER";