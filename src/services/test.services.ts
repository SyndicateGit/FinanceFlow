import { error } from "console";
import axiosInstance from "./axios-instance";

export const test = async () => {
  return await axiosInstance()
  .get("/test")
  .then((res) => {
    return res.data
  })
  .catch((error) => {
    console.log(error);
    throw error;
  })
}