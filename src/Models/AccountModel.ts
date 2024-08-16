declare type Account = {
  id: string;
  accountType: AccountType,
  balance: number,
  currency: "CAD",
  transactionIds: string[],
};

declare type AccountType = "SAVINGS" | "DEBIT" | "CREDIT";