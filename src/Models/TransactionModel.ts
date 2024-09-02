export declare type Transaction = {
  id: string,
  type: TransactionType;
  amount: number;
  currency: string;
  date: Date;
  isRecurring: boolean;
  recurringType: RecurringType;
  note: string;
  category: string;
  description: string;
  linkedTransactionId: number;
}

export declare type TransactionType = "INCOME" | "EXPENSE" | "TRANSFER";

export declare type RecurringType = "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";