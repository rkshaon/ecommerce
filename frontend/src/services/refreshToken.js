import axios from "axios";
import { API_BASE_URL } from "@/config";

export async function refreshToken() {
  try {
    const URL = API_BASE_URL + '/api/users/refresh';

    console.log('Refresh token', URL);
    // console.log('Refresh', localStorage.getItem("refreshToken"));
    
    const response = await axios.post(URL, {
      refresh: localStorage.getItem("refreshToken"),
    });

    const accessToken = response.data.accessToken;
    const refreshToken = response.data.refreshToken;
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    console.log('Access', accessToken);
    console.log('Refresh', refreshToken);
    return accessToken;
  } catch (error) {
    console.error(error);
    console.log(error.response.status);

    if (error.response.status === 401) {
      console.log("Refresh Token is Invalid");
      console.log("Log out");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.reload();
    }
    // Access eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA0MzE0NzE2LCJpYXQiOjE3MDQzMTQ0MTYsImp0aSI6IjhiODQyMzg3MDRkYTRkM2M5OTRkNDcwOTMzMTNmYzFhIiwidXNlcl9pZCI6MTF9.xFEasmROdQGl4veuIE-Tncy9jxleICp5bEHdYMJrhIg
    // Refresh eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcwNDQwMDgxNiwiaWF0IjoxNzA0MzE0NDE2LCJqdGkiOiJhOWNiZmM0MDA2ZTA0NDNhYTA0ZTdjMjQwYzE1OGEyZCIsInVzZXJfaWQiOjExfQ.Ze1RGYRVYEwVtqzPiHylHHDPzW0Fwj4LE6jv160eG4Y
  }
}