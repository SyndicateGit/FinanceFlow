import { User } from "../Models/UserModel";
import axiosInstance from "./axios-instance";
export const getUser = async (): Promise<User> => {
  return await axiosInstance()
    .get("/users/")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
