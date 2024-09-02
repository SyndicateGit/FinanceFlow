import { Transaction } from "./TransactionModel";

export declare type Account = {
  id: string;
  accountType: AccountType,
  balance: number,
  currency: "CAD",
  transactionIds: string[],
  transactions?: Transaction[]
};

declare type AccountType = "SAVINGS" | "DEBIT" | "CREDIT";