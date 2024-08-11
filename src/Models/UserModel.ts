declare type User = {
  id: string;
  name: string;
  email: string;
  phone: string
  role: Role;
  accountIds: string[];
};

declare type Role = "ADMIN" | "USER";