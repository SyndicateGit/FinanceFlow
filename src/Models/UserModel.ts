declare type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string
  role: Role;
  accountIds: string[];
};

declare type Role = "ADMIN" | "USER";