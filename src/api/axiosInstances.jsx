// src/api/axiosInstance.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://test.siara.tech/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // optional: 10s timeout
});

// Optional interceptors (for tokens/logs)
axiosInstance.interceptors.request.use(
  (config) => {
    // Example: add token if available
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error);
    return Promise.reject(error.response?.data || error.message);
  }
);

export default axiosInstance;
