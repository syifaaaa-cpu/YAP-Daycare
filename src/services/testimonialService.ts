import axios from "axios";
import { cookies } from "next/headers";
import { cache } from "react";

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

// Bungkus fungsi utama dengan cache React agar tidak berulang kali login ke backend Go
export const getTestimonials = cache(async (): Promise<TestimonialItem[]> => {
  const baseApiUrl = (
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000"
  ).replace(/\/+$/, "");

  try {
    const cookieStore = await cookies();
    let sessionCookie =
      cookieStore.get("cms_session")?.value ||
      cookieStore.get("ci_session")?.value ||
      cookieStore.get("token")?.value ||
      "";

    if (
      !sessionCookie &&
      process.env.CMS_USERNAME &&
      process.env.CMS_PASSWORD
    ) {
      const formData = new FormData();
      formData.append("Username", process.env.CMS_USERNAME);
      formData.append("Password", process.env.CMS_PASSWORD);
      if (process.env.CMS_SITE_ID) {
        formData.append("SiteId", process.env.CMS_SITE_ID);
      }

      const loginResponse = await axios.post(
        `${baseApiUrl}/api/Auth/Login`,
        formData,
      );
      sessionCookie = loginResponse.data?.Data?.Token || "";
    }

    const res = await axios.get(`${baseApiUrl}/api/content`, {
      params: { KanalType: "K010" },
      headers: {
        ...(sessionCookie ? { Authorization: `Bearer ${sessionCookie}` } : {}),
      },
    });

    const response = res.data;
    const rawData =
      response?.Data?.Content ||
      response?.data ||
      (Array.isArray(response) ? response : []);

    if (!Array.isArray(rawData) || rawData.length === 0) {
      return [];
    }

    return rawData.map((item: any) => {
      const rawContent =
        item.Content || item.content || item.text || item.Description || "";
      const cleanText = rawContent.replace(/<[^>]*>?/gm, "");

      return {
        quote: cleanText,
        name: item.Title || item.Judul || "Orang Tua Murid",
        role:
          item.Kategori || item.Category || item.SubTitle || "Orang Tua Murid",
      };
    });
  } catch (error: any) {
    console.warn(
      "Gagal memuat testimoni:",
      error.response?.status || error.message,
    );
    return [];
  }
});