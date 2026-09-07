"use client";
import React, { useState, useEffect } from "react";
import { Heart, ShieldCheck, Users, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface AttachmentItem {
  AttachmentId?: number;
  Name?: string;
  Url?: string;
  SignedUrl?: string;
  [key: string]: any;
}

interface SliderItem {
  SliderId: number;
  Title: string;
  File?: string;
  Image?: string;
  Photo?: string;
  Thumbnail?: string;
  Attachment?: AttachmentItem[];
  [key: string]: any;
}

interface HeroSectionProps {
  onOpenPpdb?: () => void;
  sliders?: SliderItem[];
}

export function HeroSection({
  onOpenPpdb = () => alert("Membuka halaman PPDB 2026/2027"),
  sliders = [],
}: HeroSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fallback jika slider dari API benar-benar kosong
  const defaultSliders = [
    {
      Title: "Bermain, belajar, dan bertumbuh",
      File: "/images/konten-web-daycare/hero1.jpg",
    },
  ];

  const activeSliders = sliders.length > 0 ? sliders : defaultSliders;

  // Fungsi untuk mendapatkan URL gambar asli dari CMS
  const getImageUrl = (item: SliderItem) => {
    const rawFile = 
      item.File || 
      item.Image || 
      item.Photo || 
      item.Thumbnail || 
      (item.Attachment && item.Attachment.length > 0 ? item.Attachment[0].SignedUrl || item.Attachment[0].Url || item.Attachment[0].Name : "");

    if (!rawFile || typeof rawFile !== "string") return "/images/konten-web-daycare/hero1.jpg";
    
    if (rawFile.startsWith("http") || rawFile.startsWith("/")) {
      return rawFile;
    }

    const cleanFileName = rawFile.endsWith(".enc") ? rawFile.replace(/\.enc$/, "") : rawFile;
    const baseApiUrl = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:7000").replace(/\/+$/, "");
    
    return `${baseApiUrl}/resources/asset/${cleanFileName}`;
  };

  // Auto slide tiap 4 detik
  useEffect(() => {
    if (activeSliders.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % activeSliders.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeSliders.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activeSliders.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + activeSliders.length) % activeSliders.length);
  };

  const currentItem = activeSliders[currentIndex] || activeSliders[0];
  const currentImage = getImageUrl(currentItem);
  const currentTitle = currentItem.Title || "Bermain, belajar, dan bertumbuh";

  return (
    <section className="ref-hero" id="profil">
      <div className="ref-wrap ref-hero-inner">
        <div className="ref-hero-copy">
          <h1
            style={{
              fontFamily: "'Comic Sans MS', 'Bubblegum Sans', 'Quicksand', cursive, sans-serif",
              letterSpacing: "normal",
            }}
            className="text-[#00382E] text-4xl lg:text-5xl font-bold mb-3"
          >
            Daycare Asih Putera
          </h1>
          <h2
            style={{
              fontFamily: "'Comic Sans MS', 'Bubblegum Sans', 'Quicksand', cursive, sans-serif",
            }}
            className="leading-snug text-xl lg:text-2xl font-semibold text-[#00382E] mb-4"
          >
            Tempat Tumbuh Penuh Kasih,
            <br />
            Aman, dan Bermakna
            <Heart className="inline text-amber-500 fill-amber-400 w-6 h-6 ml-1.5" />
          </h2>
          <p className="text-gray-600 text-base mb-6 leading-relaxed">
            Mendampingi anak usia dini dengan kasih sayang, stimulasi tumbuh
            kembang, pembiasaan adab, dan kolaborasi erat bersama orang tua.
          </p>
          <div className="ref-actions flex flex-wrap gap-4 mb-6">
            <button
              onClick={onOpenPpdb}
              className="bg-[#00382E] hover:bg-[#002820] text-white px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all shadow-sm cursor-pointer"
            >
              Informasi Pendaftaran <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#program"
              className="border border-[#00382E] text-[#00382E] hover:bg-[#00382E]/5 px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all"
            >
              Jelajahi Program <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust Badges */}
          <div className="ref-trust grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
            <span className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-emerald-700 shrink-0" />
              <div>
                <b className="block text-xs sm:text-sm text-[#00382E] leading-tight">
                  Aman & Nyaman
                </b>
                <small className="text-[11px] text-gray-500">
                  Lingkungan Islami terjaga
                </small>
              </div>
            </span>
            <span className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-rose-500 shrink-0" />
              <div>
                <b className="block text-xs sm:text-sm text-[#00382E] leading-tight">
                  Tumbuh Berkembang
                </b>
                <small className="text-[11px] text-gray-500">
                  Stimulasi menyeluruh
                </small>
              </div>
            </span>
            <span className="flex items-center gap-3">
              <Users className="w-8 h-8 text-teal-600 shrink-0" />
              <div>
                <b className="block text-xs sm:text-sm text-[#00382E] leading-tight">
                  Bersama Orang Tua
                </b>
                <small className="text-[11px] text-gray-500">
                  Kolaborasi untuk anak
                </small>
              </div>
            </span>
          </div>
        </div>

        {/* Bagian Slider Gambar */}
        <div className="ref-hero-image relative group">
          <div className="overflow-hidden rounded-2xl shadow-lg relative aspect-[4/3] bg-gray-100">
            <img
              src={currentImage}
              alt={currentTitle}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/konten-web-daycare/hero1.jpg";
              }}
            />
            
            {activeSliders.length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          <div className="ref-image-note absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md text-sm font-medium text-[#00382E] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />{" "}
            {currentTitle}
          </div>
        </div>
      </div>
    </section>
  );
}