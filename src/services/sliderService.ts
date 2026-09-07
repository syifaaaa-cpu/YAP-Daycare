// File: src/services/sliderService.ts
import { cookies } from "next/headers";

export async function getSliders() {
  try {
    const baseApiUrl = (
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000"
    ).replace(/\/+$/, "");
    
    // Ambil seluruh cookie yang ada di request Next.js untuk diteruskan ke Laravel
    const cookieStore = await cookies();
    const cookieHeader = cookieStore
      .getAll()
      .map((c) => `${c.name}=${c.value}`)
      .join("; ");

    const res = await fetch(`${baseApiUrl}/api/Slider`, {
      headers: {
        "Accept": "application/json",
        // Teruskan cookie browser (seperti cms_session / ci_session) ke backend Laravel
        "Cookie": cookieHeader,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("API Slider error status:", res.status);
      return [];
    }

    const json = await res.json();
    
    // Sesuaikan dengan struktur JSON dari API Laravel kamu
    const sliderData = 
      json?.Data?.Slider || 
      json?.data?.slider || 
      json?.Data || 
      json?.data || 
      [];
    
    return Array.isArray(sliderData) ? sliderData : [];
  } catch (error) {
    console.error("Gagal memuat slider:", error);
    return [];
  }
}