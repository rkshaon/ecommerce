import axios from "axios";
import { API_BASE_URL } from "@/config";

export async function refreshToken() {
  try {
    let URL = API_BASE_URL + '/api/v1/users/refresh';
    
    let response = await axios.post(URL, {
      refresh: localStorage.getItem("refreshToken"),
    });

    let accessToken = response.data.accessToken;
    let refreshToken = response.data.refreshToken;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    
    return accessToken;
  } catch (error) {
    if (error.response.status === 401) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.reload();
    }
  }
}