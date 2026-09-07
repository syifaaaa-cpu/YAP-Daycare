"use client";
import React, { useState } from 'react';
import { Star, ArrowRight, X } from 'lucide-react';
import { TestimonialItem } from '@/services/testimonialService';
import { NewsItem } from '@/services/newsService';

interface TestimonialsAndNewsSectionProps {
  testimonialsData?: TestimonialItem[];
  newsData?: NewsItem[];
}

export function TestimonialsAndNewsSection({ testimonialsData, newsData }: TestimonialsAndNewsSectionProps) {
  const [isTestimonialModalOpen, setIsTestimonialModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [isAllNewsModalOpen, setIsAllNewsModalOpen] = useState(false);

  const defaultTestimonials: TestimonialItem[] = [
    {
      quote: "Anak saya jadi jauh lebih mandiri, aktif, dan ceria setiap hari semenjak bergabung di sini. Para pengasuh dan gurunya sangat hangat, sabar, telaten, serta perhatian. Selain itu, kondisi lingkungan sekolah juga sangat bersih, aman, dan nyaman untuk tumbuh kembang anak.",
      name: "Ibu Rina Septiani",
      role: "Orang Tua Murid",
    },
    {
      quote: "Program pembelajaran yang ditawarkan sangat lengkap dan seimbang. Dasar-dasar nilai Islam ditanamkan dengan cara yang menyenangkan sejak usia dini. Kami sebagai orang tua merasa sangat tenang, aman, dan bersyukur bisa menitipkan buah hati di tempat ini.",
      name: "Bapak Ilman Pratama",
      role: "Orang Tua Murid",
    }
  ];

  const testimonials = testimonialsData && testimonialsData.length > 0 ? testimonialsData : defaultTestimonials;
  const displayedTestimonials = testimonials.slice(0, 2);

  const newsList = newsData || [];
  const displayedNews = newsList.slice(0, 2);

  return (
    <section className="ref-wrap ref-bottom-grid py-12 relative">
      {/* Bagian Testimoni */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 
            style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
            className="ref-title text-3xl font-bold text-[#00382E] mb-0"
          >
            Apa Kata Orang Tua?
          </h2>
          <button 
            onClick={() => setIsTestimonialModalOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-700 bg-amber-100/85 hover:bg-amber-200 px-4 py-2 rounded-full transition-colors shadow-2xs shrink-0 cursor-pointer"
          >
            Lihat Selengkapnya <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {displayedTestimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm flex flex-col justify-between min-h-[295px]">
              <blockquote className="text-xs sm:text-sm text-gray-700 leading-relaxed italic text-center px-2 pt-2">
                "{item.quote}"
              </blockquote>
              
              <div className="text-center pt-4 border-t border-gray-100 mt-4">
                <h3 
                  style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
                  className="text-xs sm:text-sm font-bold text-[#00382E] mb-0.5"
                >
                  {item.name}
                </h3>
                <span className="text-[11px] text-gray-500 block mb-2">{item.role}</span>
                <div className="flex justify-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bagian Berita & Agenda */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 
            style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
            className="ref-title text-3xl font-bold text-[#00382E] mb-0"
          >
            Berita & Agenda
          </h2>
          <button 
            onClick={() => setIsAllNewsModalOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-700 bg-amber-100/80 hover:bg-amber-200 px-4 py-2 rounded-full transition-colors shadow-2xs shrink-0 cursor-pointer"
          >
            Lihat Selengkapnya <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ref-news">
          {displayedNews.length > 0 ? (
            displayedNews.map((news, idx) => (
              <div key={idx} className="bg-white p-3 rounded-2xl border border-amber-100 shadow-sm flex flex-col justify-between min-h-[295px]">
                <div>
                  {news.image ? (
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-32 object-cover rounded-xl mb-3" 
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                  ) : null}
                  <span className="text-[11px] text-amber-600 font-semibold block mb-1">{news.date}</span>
                  <h3 
                    style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
                    className="text-xs sm:text-sm font-bold text-[#00382E] mb-2 leading-snug"
                  >
                    {news.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedNews(news)}
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 mt-2 text-left cursor-pointer"
                >
                  Baca Selengkapnya &rarr;
                </button>
              </div>
            ))
          ) : (
            <div className="col-span-2 bg-white p-6 rounded-2xl border border-amber-100 text-center text-gray-500 text-sm">
              Belum ada berita yang diunggah dari database.
            </div>
          )}
        </div>
      </div>

      {/* Popup Modal untuk Detail Satu Berita (Baca Selengkapnya) */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white w-full max-w-2xl rounded-3xl p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button 
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {selectedNews.image && (
              <img 
                src={selectedNews.image} 
                alt={selectedNews.title} 
                className="w-full h-48 object-cover rounded-2xl mb-4" 
              />
            )}
            <span className="text-xs text-amber-600 font-semibold block mb-2">{selectedNews.date}</span>
            <h3 
              style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
              className="text-xl font-bold text-[#00382E] mb-4"
            >
              {selectedNews.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {selectedNews.title} merupakan salah satu rangkaian program unggulan di Yap Daycare yang berfokus pada pembentukan karakter, keceriaan, serta tumbuh kembang optimal buah hati tercinta.
            </p>
          </div>
        </div>
      )}

      {/* Popup Modal untuk Semua Berita (Lihat Selengkapnya Berita) */}
      {isAllNewsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white w-full max-w-3xl rounded-3xl p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button 
              onClick={() => setIsAllNewsModalOpen(false)}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 
              style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
              className="text-2xl font-bold text-[#00382E] mb-6 text-center"
            >
              Semua Berita & Agenda
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {newsList.map((item, idx) => (
                <div key={idx} className="bg-amber-50/40 p-4 rounded-2xl border border-amber-100 flex items-center gap-4">
                  {item.image && (
                    <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-xl shrink-0" />
                  )}
                  <div className="flex-grow">
                    <span className="text-[11px] text-amber-600 font-semibold block mb-1">{item.date}</span>
                    <h4 
                      style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
                      className="text-sm font-bold text-[#00382E] mb-2"
                    >
                      {item.title}
                    </h4>
                    <button 
                      onClick={() => {
                        setIsAllNewsModalOpen(false);
                        setSelectedNews(item);
                      }}
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 cursor-pointer"
                    >
                      Baca Selengkapnya &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Popup Modal untuk Semua Testimoni */}
      {isTestimonialModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white w-full max-w-3xl rounded-3xl p-6 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button 
              onClick={() => setIsTestimonialModalOpen(false)}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 
              style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
              className="text-2xl font-bold text-[#00382E] mb-6 text-center"
            >
              Semua Testimoni Orang Tua Murid
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {testimonials.map((item, idx) => (
                <div key={idx} className="bg-amber-50/40 p-5 rounded-2xl border border-amber-100 flex flex-col justify-between">
                  <blockquote className="text-sm text-gray-700 leading-relaxed italic mb-4">
                    "{item.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between border-t border-amber-100/60 pt-3">
                    <div>
                      <h4 
                        style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
                        className="text-sm font-bold text-[#00382E]"
                      >
                        {item.name}
                      </h4>
                      <span className="text-xs text-gray-500">{item.role}</span>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}