"use client";
import React from 'react';
import { Heart, Sparkles, Smile, Users, BookOpen } from 'lucide-react';

export function WhyUsSection() {
  return (
    <section className="ref-wrap ref-section py-12" id="fasilitas">
      <div className="text-center mb-10">
        <span className="bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-block mb-3 shadow-sm">
          🌟 KEUNGGULAN KAMI
        </span>
        <h2 
          style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
          className="text-3xl lg:text-4xl font-bold text-[#00382E] mb-2"
        >
          Mengapa Daycare Asih Putera?
        </h2>
        <div className="w-16 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Card 1: Pengasuhan Penuh Kasih */}
        <div className="bg-gradient-to-br from-amber-50/90 via-white to-amber-50/30 p-6 rounded-[2rem] border-2 border-amber-200/60 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-400 text-white flex items-center justify-center shadow-md">
            <Heart className="w-6 h-6 fill-white/20" />
          </div>
          <div>
            <h3 
              style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
              className="text-lg font-bold text-[#00382E] mb-1.5"
            >
              Pengasuhan Penuh Kasih
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Anak merasa aman, nyaman, dan dicintai layaknya di rumah sendiri.
            </p>
          </div>
        </div>

        {/* Card 2: Pembiasaan Adab Sejak Dini */}
        <div className="bg-gradient-to-br from-emerald-50/90 via-white to-emerald-50/30 p-6 rounded-[2rem] border-2 border-emerald-200/60 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <h3 
              style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
              className="text-lg font-bold text-[#00382E] mb-1.5"
            >
              Pembiasaan Adab Sejak Dini
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Nilai Islami dan akhlak mulia ditanamkan melalui pembiasaan harian.
            </p>
          </div>
        </div>

        {/* Card 3: Stimulasi Tumbuh Kembang */}
        <div className="bg-gradient-to-br from-teal-50/90 via-white to-teal-50/30 p-6 rounded-[2rem] border-2 border-teal-200/60 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-500 text-white flex items-center justify-center shadow-md">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h3 
              style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
              className="text-lg font-bold text-[#00382E] mb-1.5"
            >
              Stimulasi Tumbuh Kembang
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Aktivitas motorik dan sensorik dirancang sesuai tahap usia anak.
            </p>
          </div>
        </div>

        {/* Card 4: Kolaborasi Orang Tua */}
        <div className="bg-gradient-to-br from-orange-50/90 via-white to-orange-50/30 p-6 rounded-[2rem] border-2 border-orange-200/60 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-500 text-white flex items-center justify-center shadow-md">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <h3 
              style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
              className="text-lg font-bold text-[#00382E] mb-1.5"
            >
              Kolaborasi Orang Tua
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Komunikasi rutin dan transparan untuk tumbuh kembang yang selaras.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}