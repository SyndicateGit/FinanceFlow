import axiosInstance from "./axios-instance";
import { Transaction } from "@/Models/TransactionModel";

export const getTransactions = async (): Promise<Transaction[]> => {
  return await axiosInstance()
    .get("/transactions/userAccount")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export const getTransactionsByAccountId = async (accountId: string): Promise<Transaction[]> => {
  return await axiosInstance()
    .get(`/transactions/userAccount/${accountId}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
