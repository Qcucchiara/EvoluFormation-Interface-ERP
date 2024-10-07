"use client";
import axios from "axios";
import toast from "react-hot-toast";

export const backend = axios.create({
  baseURL: "http://212.227.65.122:8443",
  // process.env.NEXT_PUBLIC_API_BACKEND_URL
  headers: {
    "content-type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    Authorization: `Bearer ${typeof window !== "undefined" && window.localStorage.getItem("token")}`,
  },
});
