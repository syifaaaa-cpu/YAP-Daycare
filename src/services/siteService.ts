import { cookies } from "next/headers";

export interface SiteInfo {
  address?: string;
  phone?: string;
  email?: string;
  logo?: string;
  siteName?: string;
}

// Helper untuk membersihkan tag HTML jika respons dari API berupa tag <p><span>...</span></p>
function stripHtml(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "").trim();
}

export async function getSiteInformation(): Promise<SiteInfo | null> {
  try {
    const baseApiUrl = (
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000"
    ).replace(/\/+$/, "");
    
    const cookieStore = await cookies();
    let token = cookieStore.get("token")?.value || "";

    if (!token && process.env.CMS_USERNAME && process.env.CMS_PASSWORD) {
      const formData = new FormData();
      formData.append("Username", process.env.CMS_USERNAME);
      formData.append("Password", process.env.CMS_PASSWORD);
      if (process.env.CMS_SITE_ID)
        formData.append("SiteId", process.env.CMS_SITE_ID);

      const loginResponse = await fetch(`${baseApiUrl}/api/Auth/Login`, {
        method: "POST",
        body: formData,
        cache: "no-store",
      });
      if (loginResponse.ok) {
        const loginData = await loginResponse.json();
        token = loginData.Data?.Token || "";
      }
    }

    const res = await fetch(`${baseApiUrl}/api/SiteInformation`, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      cache: "no-store",
    });

    if (!res.ok) return null;

    const json = await res.json();
    const data = json?.Data || json?.data || json;

    // Mapping disesuaikan persis dengan keys dari Postman Anda
    const rawAddress = data.Alamat || "";
    const cleanAddress = stripHtml(rawAddress);

    return {
      address: cleanAddress || "Jl. Daeng Moh. Ardiwinata No. 12, Kota Cimahi, Jawa Barat",
      phone: data.Telp || data.Whatsapp || "0812-2182-8884",
      email: data.Email || "raudhah@asihputera.sch.id",
      logo: data.Logo ? `${baseApiUrl}/storage/${data.Logo}` : "/images/logo-daycare.png",
      siteName: data.Name || "yap daycare",
    };
  } catch (error) {
    console.error("Gagal memuat site information:", error);
    return null;
  }
}