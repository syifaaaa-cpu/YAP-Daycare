"use client";
import React from 'react';
import { Heart, ShieldCheck, Users, Sparkles, ArrowRight } from 'lucide-react';

export function HeroSection({ onOpenPpdb }: { onOpenPpdb: () => void }) {
  return (
    <section className="ref-hero" id="profil">
      <div className="ref-wrap ref-hero-inner">
        <div className="ref-hero-copy">
          <h1 
            style={{ 
              fontFamily: "'Comic Sans MS', 'Bubblegum Sans', 'Quicksand', cursive, sans-serif",
              letterSpacing: "normal" 
            }}
            className="text-[#00382E] text-4xl lg:text-5xl font-bold mb-3"
          >
            Daycare Asih Putera
          </h1>
          <h2 
            style={{ 
              fontFamily: "'Comic Sans MS', 'Bubblegum Sans', 'Quicksand', cursive, sans-serif" 
            }}
            className="leading-snug text-xl lg:text-2xl font-semibold text-[#00382E] mb-4"
          >
            Tempat Tumbuh Penuh Kasih,<br />Aman, dan Bermakna 
            <Heart className="inline text-amber-500 fill-amber-400 w-6 h-6 ml-1.5" />
          </h2>
          <p className="text-gray-600 text-base mb-6 leading-relaxed">Mendampingi anak usia dini dengan kasih sayang, stimulasi tumbuh kembang, pembiasaan adab, dan kolaborasi erat bersama orang tua.</p>
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
          
          {/* Trust Badges - Tanpa kotak putih */}
          <div className="ref-trust grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100">
            <span className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-emerald-700 shrink-0" />
              <div><b className="block text-xs sm:text-sm text-[#00382E] leading-tight">Aman & Nyaman</b><small className="text-[11px] text-gray-500">Lingkungan Islami terjaga</small></div>
            </span>
            <span className="flex items-center gap-3">
              <Heart className="w-8 h-8 text-rose-500 shrink-0" />
              <div><b className="block text-xs sm:text-sm text-[#00382E] leading-tight">Tumbuh Berkembang</b><small className="text-[11px] text-gray-500">Stimulasi menyeluruh</small></div>
            </span>
            <span className="flex items-center gap-3">
              <Users className="w-8 h-8 text-teal-600 shrink-0" />
              <div><b className="block text-xs sm:text-sm text-[#00382E] leading-tight">Bersama Orang Tua</b><small className="text-[11px] text-gray-500">Kolaborasi untuk anak</small></div>
            </span>
          </div>

        </div>
        <div className="ref-hero-image relative">
          <img src="/images/konten-web-daycare/hero1.jpg" alt="Anak-anak bermain bersama" className="rounded-2xl shadow-lg w-full object-cover" />
          <div className="ref-image-note absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md text-sm font-medium text-[#00382E] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" /> Bermain, belajar, dan bertumbuh
          </div>
        </div>
      </div>
    </section>
  );
}