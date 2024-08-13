'user server';

import axiosInstance from "./axios-instance";

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

export const signIn = async (userData: SignInParams) => {
  return await axiosInstance()
    .post("/auth/sign-in", userData)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

export const signUp = async (newUser: SignUpParams) => {
  return await axiosInstance()
    .post("/auth/sign-up", newUser)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}