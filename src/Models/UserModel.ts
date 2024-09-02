export declare type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string
  role: Role;
  bankIds: string[];
}

export const defaultUser: User = {
  id: "",
  firstName: "Guest",
  lastName: "",
  email: "",
  phone: "",
  role: "USER",
  bankIds: []
};

declare type Role = "ADMIN" | "USER";