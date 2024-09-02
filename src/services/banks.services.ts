import { Bank } from "@/Models/BankModel";
import axiosInstance from "./axios-instance";

export const getBanks = async (): Promise<Bank[]> => { 
  return await axiosInstance()
    .get("/banks/")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
