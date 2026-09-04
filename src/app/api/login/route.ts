import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const apiUrl = (
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000"
    ).replace(/\/$/, "");
    const body = await request.json().catch(() => ({}));
    const username = body.email || body.username || process.env.CMS_USERNAME;
    const password = body.password || process.env.CMS_PASSWORD;
    const siteId = process.env.CMS_SITE_ID;

    if (!username || !password) {
      return NextResponse.json(
        { message: "Username dan password wajib diisi." },
        { status: 400 },
      );
    }

    const formData = new FormData();
    formData.append("Username", username);
    formData.append("Password", password);
    if (siteId) formData.append("SiteId", siteId);

    const response = await fetch(`${apiUrl}/api/Auth/Login`, {
      method: "POST",
      body: formData,
    });

    const responseText = await response.text();
    let data: unknown = {};
    try {
      data = responseText ? JSON.parse(responseText) : {};
    } catch {
      data = { message: responseText || "Respons login tidak valid." };
    }

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    const token = (data as { Data?: { Token?: string } })?.Data?.Token;
    if (token) {
      const cookieStore = await cookies();
      cookieStore.set({
        name: "token",
        value: token,
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24, // Berlaku 1 hari
      });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("CMS login tidak tersedia:", error);
    return NextResponse.json(
      { message: "Server login tidak dapat dihubungi." },
      { status: 502 },
    );
  }
}
