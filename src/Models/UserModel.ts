export declare type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string
  role: Role;
}

export const defaultUser: User = {
  id: "",
  firstName: "Guest",
  lastName: "",
  email: "",
  phone: "",
  role: "USER",
};

declare type Role = "ADMIN" | "USER";