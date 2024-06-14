// src/services/api.js

import axios from "axios";
import { API_BASE_URL } from "@/config";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
    getCategoriesForAdmin() {
        return apiClient.get('/api/v1/categories/');
    },
};