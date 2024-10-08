import axiosInstance from "./axios-instance";
import { Account } from "@/Models/AccountModel";

export const getAccounts = async (): Promise<Account[]> => {
  return await axiosInstance()
    .get("/accounts/")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}