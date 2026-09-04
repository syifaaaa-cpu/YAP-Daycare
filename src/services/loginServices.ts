import api from "../lib/axios"; // Menggunakan instance api kustom yang mengarah ke port 7000
import type { AxiosError } from "axios";

export const loginService = {
  login: async (credentials?: { email: string; password: string }) => {
    try {
      // Menggunakan instance 'api' dan path endpoint yang benar sesuai backend Go
      const response = await api.post("/api/Auth/Login", credentials ?? {});
      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      // Ganti console.error jadi console.warn supaya tidak muncul overlay merah di layar
console.warn(
  "Login gagal (respons wajar untuk data dummy):",
  axiosError.response?.data?.message || axiosError.message,
);
      return null;
    }
  },
};