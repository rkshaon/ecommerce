import axios from "axios";

export async function refreshToken() {
  try {
    const response = await axios.post("/api/refresh-token", {
      refreshToken: localStorage.getItem("refreshToken"),
    });
    const accessToken = response.data.accessToken;
    const refreshToken = response.data.refreshToken;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    return accessToken;
  } catch (error) {
    console.error(error);
  }
}