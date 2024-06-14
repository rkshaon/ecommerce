// src/services/api.js

import axios from "axios";
import { API_BASE_URL } from "@/config";
import { refreshToken } from "@/services/refreshToken";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

// Request interceptor to add the token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor to handle errors
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      // Handle unauthorized error (e.g., refresh token or redirect to login)
      try {
        await refreshToken();
        return apiClient(error.config); // Retry the original request
      } catch (refreshError) {
        localStorage.removeItem("accessToken");
        window.location.href = "/login"; // Redirect to login page
      }
    }
    return Promise.reject(error);
  }
);

export default {
  getCategoriesForAdmin() {
    return apiClient.get('/api/v1/categories/');
  },
  
  createCategoryForAdmin(categoryData) {
    return apiClient.get('/api/v1/categories/', categoryData);
  }
};

