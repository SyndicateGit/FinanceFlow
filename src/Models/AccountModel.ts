declare type Account = {
  id: string;
  accountType: AccountType,
  balance: number,
  currency: "CAD",
};

declare type AccountType = "SAVINGS" | "DEBIT" | "CREDIT";