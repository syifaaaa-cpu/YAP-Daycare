import { cookies } from "next/headers";

export interface NewsItem {
  title: string;
  image: string;
  date: string;
  slug?: string;
}

export async function getNews(): Promise<NewsItem[]> {
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

    const res = await fetch(`${baseApiUrl}/api/content?KanalType=K001`, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
      cache: "no-store",
    });

    if (!res.ok) {
      return [];
    }

    const json = await res.json();
    const items =
      json?.Data?.Content || json?.data || (Array.isArray(json) ? json : []);

    // Cek isi data mentah dari CMS di terminal VS Code
    console.log("RAW ITEMS FROM CMS:", JSON.stringify(items, null, 2));

    return items.map((item: any) => {
      let rawTitle = item.Title || item.judul || item.Judul;
      if (!rawTitle && item.SlugTitle) {
        rawTitle = item.SlugTitle.split("-")
          .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
      }

      let formattedDate = "04 Sep 2026";
      const rawDate = item.date || item.tanggal || item.TglPublish;
      if (rawDate) {
        const dateObj = new Date(rawDate);
        if (!isNaN(dateObj.getTime())) {
          formattedDate = dateObj.toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          });
        }
      }

      // Tangkap semua kemungkinan nama key gambar/thumbnail dari Laravel
      let imageUrl = "";
      const rawImage =
        item.SignedThumbnail || 
        item.Thumbnail || 
        item.image || 
        item.gambar || 
        item.Image || 
        item.thumbnail || 
        item.photo || 
        item.file ||
        item.foto;

      if (rawImage && typeof rawImage === "string") {
        if (rawImage.startsWith("http")) {
          imageUrl = rawImage;
        } else {
          const formattedPath = rawImage.startsWith("/")
            ? rawImage
            : `/storage/${rawImage}`;
          imageUrl = `${baseApiUrl}${formattedPath}`;
        }
      }
     

      return {
        title: rawTitle || "Tanpa Judul",
        image: imageUrl,
        date: formattedDate,
        slug: item.slug || item.SlugTitle || item.id?.toString(),
      };
    });
  } catch (error) {
    console.error("Gagal memuat berita:", error);
    return [];
  }
}
