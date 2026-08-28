import React, { useState } from 'react';
import { Star, ArrowRight, Play, Sparkles, Volume2, Heart, CheckCircle2, MessageCircle, X } from 'lucide-react';
import { TESTIMONIALS, NEWS_ITEMS } from '../data/mockData';
import { NewsItem, TestimonialItem } from '../types';

interface TestimonialsAndNewsSectionProps {
  onSelectNews: (news: NewsItem) => void;
  onSelectTestimonial?: (testi: TestimonialItem) => void;
}

export const TestimonialsAndNewsSection: React.FC<TestimonialsAndNewsSectionProps> = ({
  onSelectNews,
  onSelectTestimonial
}) => {
  const [isPlayingKidVideo, setIsPlayingKidVideo] = useState(false);

  return (
    <section id="berita-section" className="py-16 md:py-24 bg-[#FAF7F0] relative overflow-hidden scroll-mt-16 border-b border-amber-900/10">
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Kid's Voice Spotlight Banner */}
        <div className="mb-16 bg-white rounded-3xl p-6 sm:p-8 border-2 border-amber-200 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 5 Columns: Video Thumbnail of Child Saying "Aku Suka Raudhah!" */}
            <div className="lg:col-span-5 relative">
              <div 
                onClick={() => setIsPlayingKidVideo(true)}
                className="relative rounded-2xl overflow-hidden shadow-lg border-4 border-white cursor-pointer group bg-gradient-to-tr from-teal-100 via-amber-50 to-emerald-100 p-2"
              >
                {/* Child Video/Artwork Frame */}
                <div className="relative h-60 sm:h-64 rounded-xl overflow-hidden bg-[#E0F7F6] flex flex-col items-center justify-center text-center p-4">
                  
                  {/* Stylized Kid Illustration / Video Poster */}
                  <div className="relative mb-2">
                    <div className="w-20 h-20 rounded-full bg-[#FAF7F0] border-4 border-[#00A896] flex items-center justify-center text-4xl shadow-md transform group-hover:scale-105 transition-transform">
                      👦✨
                    </div>
                    <span className="absolute -bottom-1 -right-1 bg-[#F39C12] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-xs">
                      Usia 4 Th
                    </span>
                  </div>

                  <div className="font-serif font-extrabold text-lg sm:text-xl text-[#00473A] mb-1">
                    "Aku suka Raudhah!"
                  </div>
                  <div className="text-xs text-[#C37932] font-bold">
                    — Rayyan (Santri TK A Raudhah)
                  </div>

                  {/* Big Play Button Overlay */}
                  <div className="mt-3 w-12 h-12 rounded-full bg-[#00A896] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#028090] transition-all glow-teal">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center">
                  <span className="w-2 h-2 rounded-full bg-red-500 mr-1.5 animate-pulse"></span>
                  Video Suara Santri Cilik
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Child Quote & Spontaneous Joy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 bg-[#FEF9E7] border border-[#F39C12]/40 text-[#C37932] px-3.5 py-1 rounded-full text-xs font-bold mb-3 shadow-xs">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
                <span>Cerita Tulus Dari Sang Buah Hati</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#16332A] mb-3 leading-snug">
                "Ustadzah Baik Sekali, Bisa Bikin Istana Balok &amp; Hafal Surat Pendek!"
              </h3>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-5 italic font-medium">
                “Di Raudhah seru banget! Aku suka main kebun sayur, makan bento bareng teman-teman, sama ustadzah diajarin hafalan doa mau tidur dan wudhu sambil senandung ceria. Setiap pagi aku selalu semangat mau berangkat!”
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
                <div className="bg-teal-50 text-[#00A896] px-3.5 py-2 rounded-xl border border-teal-200/60 flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1.5" />
                  Kemandirian Tanpa Cemas Pisah (Separation Anxiety)
                </div>
                <div className="bg-amber-50 text-[#C37932] px-3.5 py-2 rounded-xl border border-amber-200/60 flex items-center">
                  <Sparkles className="w-4 h-4 mr-1.5" />
                  Hafal 12 Surat Pendek &amp; Hadits Pilihan
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2 Columns: Parent Testimonials & Latest Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left 6 Columns: Parent Testimonials */}
          <div id="testimoni-section" className="lg:col-span-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#16332A]">
                  Kisah Bahagia Orang Tua
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Pengalaman nyata ayah &amp; bunda yang mempercayakan ananda di Raudhah
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.id}
                  onClick={() => onSelectTestimonial?.(t)}
                  className="bg-white p-5 sm:p-6 rounded-3xl border border-amber-900/10 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      alt={t.parentName}
                      className="w-13 h-13 rounded-2xl object-cover border-2 border-amber-200 shadow-xs shrink-0"
                      src={t.avatarUrl}
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-1 mb-1.5 text-amber-400">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>

                      <p className="text-xs sm:text-sm text-gray-700 italic mb-3 leading-relaxed font-normal">
                        "{t.quote}"
                      </p>

                      <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                        <div>
                          <h4 className="font-bold text-xs sm:text-sm text-[#16332A]">
                            {t.parentName}
                          </h4>
                          <p className="text-[11px] text-[#00A896] font-semibold">
                            {t.childName}
                          </p>
                        </div>

                        <span className="text-[10px] text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded-full">
                          Terverifikasi
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right 6 Columns: Blog & Parenting Education */}
          <div className="lg:col-span-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#16332A]">
                  Blog &amp; Edukasi Parenting
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Wawasan tumbuh kembang, gizi balita, dan panduan mendidik anak islami
                </p>
              </div>

              <button
                onClick={() => onSelectNews(NEWS_ITEMS[0])}
                className="text-xs font-bold text-[#00A896] hover:text-[#028090] hidden sm:flex items-center group cursor-pointer"
              >
                <span>Lihat Semua</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="space-y-4">
              {NEWS_ITEMS.map((news) => (
                <div
                  key={news.id}
                  onClick={() => onSelectNews(news)}
                  className="bg-white rounded-3xl p-4 sm:p-5 border border-amber-900/10 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row items-center gap-4 cursor-pointer group"
                >
                  <div className="w-full sm:w-32 h-28 rounded-2xl overflow-hidden shrink-0 relative">
                    <img
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      src={news.imageUrl}
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2 left-2 bg-[#00473A]/90 text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
                      {news.category}
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1">
                      <span>{news.dateDay} {news.dateMonthYear}</span>
                      <span className="text-[#C37932] font-semibold">5 mnt baca</span>
                    </div>

                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#16332A] group-hover:text-[#00A896] transition-colors leading-snug mb-2 line-clamp-2">
                      {news.title}
                    </h4>

                    <div className="text-xs font-bold text-[#00A896] flex items-center group-hover:underline">
                      <span>Baca Rangkuman</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Video Modal if Kid Video clicked */}
      {isPlayingKidVideo && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative border border-gray-100">
            <button
              onClick={() => setIsPlayingKidVideo(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center py-4">
              <div className="w-16 h-16 rounded-full bg-teal-50 border-2 border-[#00A896] text-3xl flex items-center justify-center mx-auto mb-3">
                👦🎬
              </div>
              <h3 className="font-serif text-xl font-bold text-[#16332A] mb-1">
                "Aku Suka Sekolah di Raudhah!"
              </h3>
              <p className="text-xs text-gray-500 mb-4">
                Dokumentasi Keceriaan Santri Cilik Kelas TK A
              </p>

              {/* Simulated Interactive Video player with voice playback */}
              <div className="bg-[#FAF7F0] rounded-2xl p-5 border border-amber-200 text-left mb-5">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#00A896] mb-2">
                  <Volume2 className="w-4 h-4 animate-bounce" />
                  <span>Kutipan Langsung Suara Ananda:</span>
                </div>
                <p className="text-sm text-gray-800 italic leading-relaxed">
                  "Ustadzah selalu menyambut aku dengan senyuman hangat di gerbang. Aku paling suka waktu bikin miniatur masjid dari balok kayu dan dengar cerita Nabi Nuh di Sentra Bermain Peran!"
                </p>
              </div>

              <button
                onClick={() => setIsPlayingKidVideo(false)}
                className="bg-[#00A896] hover:bg-[#028090] text-white px-6 py-2.5 rounded-full font-bold text-xs transition"
              >
                Tutup Video
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
