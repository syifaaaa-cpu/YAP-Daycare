import axios from "axios";
import { cookies } from "next/headers";

export interface FeaturedProgramItem {
  title: string;
  text: string;
  iconName: string;
  image: string;
}

export async function getFeaturedPrograms(): Promise<FeaturedProgramItem[]> {
  try {
    const baseApiUrl = (
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000"
    ).replace(/\/+$/, "");
    let token = (await cookies()).get("token")?.value;

    if (!token && process.env.CMS_USERNAME && process.env.CMS_PASSWORD) {
      const formData = new FormData();
      formData.append("Username", process.env.CMS_USERNAME);
      formData.append("Password", process.env.CMS_PASSWORD);
      if (process.env.CMS_SITE_ID)
        formData.append("SiteId", process.env.CMS_SITE_ID);

      const loginResponse = await axios.post(
        `${baseApiUrl}/api/Auth/Login`,
        formData,
      );
      token = loginResponse.data?.Data?.Token;
    }

    const response = await axios.get(`${baseApiUrl}/api/content`, {
      params: { KanalType: "K005" },
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    const rawData =
      response.data?.Data?.Content ||
      response.data?.data ||
      (Array.isArray(response.data) ? response.data : []);

    if (!Array.isArray(rawData)) return [];

    return rawData.map((item: any) => {
      const rawContent = item.Content || item.content || item.text || "";
      const imageName = item.SignedThumbnail || item.Thumbnail;
      let image =
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800";

      if (imageName) {
        image = imageName.startsWith("http")
          ? imageName
          : `${baseApiUrl}/resources/asset/${imageName.replace(/\.enc$/, "")}`;
      }

      return {
        title: item.Title || item.Judul || "",
        text: rawContent.replace(/<[^>]*>?/gm, ""),
        iconName: "Sparkles",
        image,
      };
    });
  } catch (error: any) {
    console.warn(
      "Gagal memuat program unggulan:",
      error.response?.status || error.message,
    );
    return [];
  }
}
