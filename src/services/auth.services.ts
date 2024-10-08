'use client'

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

export const signIn = async (userData: SignInParams) : Promise<string> => {
  // Public route should not have token
  localStorage.removeItem("finance_flow_auth_token");
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
  // Public route should not have token
  localStorage.removeItem("finance_flow_auth_token");
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

