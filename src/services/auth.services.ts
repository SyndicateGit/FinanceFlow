'use client'
import { Account } from "@/Models/AccountModel";
import axiosInstance from "./axios-instance";
import { User } from "@/Models/UserModel";

interface SignUpParams {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
}

interface SignInParams {
  email: string;
  password: string;
}

export const signIn = async (userData: SignInParams) : Promise<string> => {
  return await axiosInstance()
    .post("/auth/authenticate", userData)
    .then((res) => {
      localStorage.setItem("finance_flow_auth_token", res.data.token);
      return res.data.token;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const signUp = async (newUser: SignUpParams) => {
  return await axiosInstance()
    .post("/auth/register", newUser)
    .then((res) => {
      localStorage.setItem("finance_flow_auth_token", res.data.token);
      return res.data.token;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export const signOut = () => {
  localStorage.removeItem("finance_flow_auth_token");
  window.location.href = "/sign-in";
}

export const getUser = async (): Promise<User> => {
  return await axiosInstance()
    .get("/users/fetchUser")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

export const getAccounts = async (): Promise<Account[]> => {
  return await axiosInstance()
    .get("/accounts/fetchUserAccounts")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}