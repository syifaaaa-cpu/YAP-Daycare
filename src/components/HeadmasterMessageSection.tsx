import React from 'react';
import { HEADMASTER_IMAGE } from '../data/mockData';
import { Quote, Sparkles, Heart, Award } from 'lucide-react';

export const HeadmasterMessageSection: React.FC = () => {
  return (
    <section id="sambutan-section" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-1/2 -left-20 w-72 h-72 bg-amber-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#FDFBF7] via-white to-amber-50/40 rounded-3xl border-2 border-amber-200/70 p-6 sm:p-10 lg:p-14 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Headmaster Photo & Badge */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative">
                {/* Outer frame */}
                <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-4 border-white shadow-xl relative z-10 bg-amber-100">
                  <img
                    src={HEADMASTER_IMAGE}
                    alt="Kepala TK & Koordinator Daycare Asih Putera"
                    className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-2 sm:right-2 z-20 bg-asih-green text-white px-4 py-2 rounded-2xl shadow-md flex items-center space-x-2 border border-emerald-600">
                  <Award className="w-4 h-4 text-amber-300" />
                  <span className="text-xs font-bold">Pendidik Berpengalaman</span>
                </div>
                {/* Decorative border square */}
                <div className="absolute -top-3 -left-3 w-full h-full rounded-3xl border-2 border-dashed border-asih-orange/40 pointer-events-none"></div>
              </div>

              <div className="mt-6">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-asih-green">
                  Bunda Hj. Siti Rohmah, S.Pd.I., M.M.Pd.
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-asih-orange mt-1">
                  Kepala TK & Koordinator PAUD Terpadu Asih Putera
                </p>
                <div className="inline-flex items-center space-x-1.5 mt-2 bg-emerald-50 text-emerald-800 text-[11px] font-medium px-3 py-0.5 rounded-full border border-emerald-200">
                  <span>🏛️</span>
                  <span>Yayasan Asih Putera • Mengabdi Sejak 1985</span>
                </div>
              </div>
            </div>

            {/* Right: Message Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-1.5 bg-amber-100/80 text-asih-orange text-xs font-semibold px-3.5 py-1 rounded-full mb-4 border border-amber-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Sambutan Pengelola PAUD Terpadu</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-asih-green leading-tight mb-4">
                Menyemai Benih Akhlak & Keimanan Sejak Detik Pertama Kehidupan
              </h2>

              <div className="relative mb-6">
                <Quote className="w-10 h-10 text-asih-orange/20 absolute -top-4 -left-3 pointer-events-none" />
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed relative z-10 pl-2">
                  <span className="font-serif italic font-semibold text-asih-green text-base sm:text-lg">
                    "Bismillahirrohmanirrohim. Ahlan wa Sahlan di Daycare, KOBer & TK Asih Putera."
                  </span>
                  <br className="my-2" />
                  Masa usia dini (golden age) adalah fase sakral di mana setiap sentuhan kasih sayang, doa yang didengar, dan keteladanan yang dilihat akan membentuk arsitektur otak dan nurani anak. 
                </p>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-3 pl-2">
                  Di bawah naungan Yayasan Asih Putera yang telah berdedikasi selama lebih dari 41 tahun, kami memadukan <strong>Kurikulum Merdeka PAUD Berbasis Sentra (BCCT)</strong> dengan falsafah luhur Sunda-Islami <strong>Panca Waluya (Cageur, Bageur, Bener, Pinter, Singer)</strong>. Setiap anak kami dampingi dengan penuh penghormatan atas keunikan fitrahnya.
                </p>
              </div>

              {/* 3 Pillars Badge */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-amber-200/60">
                <div className="bg-white p-3 rounded-2xl border border-amber-100 shadow-2xs flex items-center space-x-2.5">
                  <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-asih-green">Kasih Sayang</h4>
                    <p className="text-[11px] text-gray-500">Bebas kekerasan</p>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-2xl border border-amber-100 shadow-2xs flex items-center space-x-2.5">
                  <div className="p-2 rounded-xl bg-orange-50 text-orange-600">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-asih-green">Sentra Bermain</h4>
                    <p className="text-[11px] text-gray-500">Loose parts alam</p>
                  </div>
                </div>

                <div className="bg-white p-3 rounded-2xl border border-amber-100 shadow-2xs flex items-center space-x-2.5">
                  <div className="p-2 rounded-xl bg-teal-50 text-teal-600">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-asih-green">Adab & Tahfidz</h4>
                    <p className="text-[11px] text-gray-500">Cinta Al-Qur'an</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
