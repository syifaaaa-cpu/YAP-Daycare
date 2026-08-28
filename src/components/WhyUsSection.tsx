import React, { useState } from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  FileText, 
  Clock, 
  Target, 
  BookOpen, 
  Sun,
  Award,
  Smile
} from 'lucide-react';
import { 
  STRATEGIC_SUMMARY, 
  UNIT_PROFILE_NARRATIVE, 
  EDUCATIONAL_GOALS, 
  UNIT_ADVANTAGES,
  HEADMASTER_IMAGE 
} from '../data/mockData';

export const WhyUsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'narasi' | 'strategis' | 'tujuan' | 'keunggulan'>('narasi');

  return (
    <section id="why-us-section" className="py-16 md:py-24 bg-[#FAF7F0] scroll-mt-16 relative overflow-hidden border-b border-amber-900/10">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-1.5 bg-[#FEF9E7] text-[#C37932] text-xs font-bold px-3.5 py-1 rounded-full mb-3 border border-amber-200 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F39C12]" />
            <span>Profil &amp; Fondasi Pengasuhan</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#16332A] mb-3">
            {UNIT_PROFILE_NARRATIVE.title}
          </h2>
          <p className="text-[#00A896] text-base md:text-lg font-bold">
            "{UNIT_PROFILE_NARRATIVE.tagline}"
          </p>
          <div className="w-20 h-1 bg-[#F39C12] mx-auto rounded-full mt-4"></div>
        </div>

        {/* Tab Navigation Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveTab('narasi')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'narasi'
                ? 'bg-[#00473A] text-white shadow-md'
                : 'bg-white text-[#16332A] hover:bg-amber-50 border border-amber-200/80'
            }`}
          >
            Narasi Profil Unit
          </button>
          <button
            onClick={() => setActiveTab('strategis')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'strategis'
                ? 'bg-[#00473A] text-white shadow-md'
                : 'bg-white text-[#16332A] hover:bg-amber-50 border border-amber-200/80'
            }`}
          >
            Ringkasan Strategis
          </button>
          <button
            onClick={() => setActiveTab('tujuan')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'tujuan'
                ? 'bg-[#00473A] text-white shadow-md'
                : 'bg-white text-[#16332A] hover:bg-amber-50 border border-amber-200/80'
            }`}
          >
            6 Tujuan Pendidikan
          </button>
          <button
            onClick={() => setActiveTab('keunggulan')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'keunggulan'
                ? 'bg-[#00473A] text-white shadow-md'
                : 'bg-white text-[#16332A] hover:bg-amber-50 border border-amber-200/80'
            }`}
          >
            5 Keunggulan Utama
          </button>
        </div>

        {/* Tab 1: Narasi Profil Unit */}
        {activeTab === 'narasi' && (
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-amber-200/80 shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-wider text-[#00A896] mb-3">
                    <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                    <span>Filosofi Ruang Tumbuh Awal</span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#16332A] mb-4 leading-snug">
                    Bukan Sekadar Menitipkan, Tapi Ruang Tumbuh dengan Kasih Sayang
                  </h3>

                  <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
                    <p className="bg-[#FAF7F0] p-4 rounded-2xl border-l-4 border-[#00A896] text-[#16332A] font-medium italic">
                      "{UNIT_PROFILE_NARRATIVE.positioning}"
                    </p>
                    <p>
                      {UNIT_PROFILE_NARRATIVE.paragraf1}
                    </p>
                    <p>
                      {UNIT_PROFILE_NARRATIVE.paragraf2}
                    </p>
                    <p>
                      {UNIT_PROFILE_NARRATIVE.paragraf3}
                    </p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-amber-100 flex flex-wrap items-center gap-4">
                    <div className="flex items-center text-xs font-bold text-[#00473A] bg-teal-50 px-3.5 py-1.5 rounded-full border border-teal-200">
                      <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#00A896]" />
                      Pengasuhan Sepenuh Hati
                    </div>
                    <div className="flex items-center text-xs font-bold text-[#00473A] bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
                      <CheckCircle2 className="w-4 h-4 mr-1.5 text-[#F39C12]" />
                      Pembiasaan Adab Lembut
                    </div>
                    <div className="flex items-center text-xs font-bold text-[#00473A] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-4 h-4 mr-1.5 text-emerald-600" />
                      Komunikasi Terbuka Orang Tua
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative">
                    <div className="bg-gradient-to-tr from-[#00473A] to-[#006C59] text-white p-6 sm:p-7 rounded-3xl shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-xl pointer-events-none"></div>
                      
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 text-amber-300">
                        <Smile className="w-6 h-6" />
                      </div>

                      <div className="text-xs uppercase font-extrabold tracking-wider text-amber-300 mb-1">
                        Janji Utama Unit
                      </div>
                      <h4 className="text-xl font-bold mb-3 text-white">
                        Rasa Aman &amp; Diterima
                      </h4>
                      <p className="text-xs sm:text-sm text-emerald-50/90 leading-relaxed mb-4">
                        {STRATEGIC_SUMMARY.janjiUtamaUnit}
                      </p>

                      <div className="bg-white/10 backdrop-blur-xs p-3.5 rounded-2xl border border-white/15 text-xs text-amber-100">
                        <span className="font-bold text-white block mb-1">Output Utama Anak:</span>
                        {STRATEGIC_SUMMARY.outputUtamaAnak}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Ringkasan Strategis Unit */}
        {activeTab === 'strategis' && (
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-md">
              <h3 className="font-serif text-2xl font-bold text-[#16332A] mb-6 text-center">
                Ringkasan Strategis Unit Day Care Asih Putera
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* 1. Segmentasi Utama */}
                <div className="p-5 rounded-2xl bg-[#FAF7F0] border border-amber-200/70">
                  <div className="flex items-center space-x-2 text-xs font-extrabold text-[#C37932] uppercase tracking-wider mb-2">
                    <Users className="w-4 h-4 text-[#F39C12]" />
                    <span>Segmentasi Utama</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    {STRATEGIC_SUMMARY.segmentasiUtama}
                  </p>
                </div>

                {/* 2. Kebutuhan Orang Tua */}
                <div className="p-5 rounded-2xl bg-teal-50/50 border border-teal-200/70">
                  <div className="flex items-center space-x-2 text-xs font-extrabold text-[#006C59] uppercase tracking-wider mb-2">
                    <Heart className="w-4 h-4 text-[#00A896]" />
                    <span>Kebutuhan Orang Tua</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    {STRATEGIC_SUMMARY.kebutuhanOrangTua}
                  </p>
                </div>

                {/* 3. Janji Utama Unit */}
                <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/70">
                  <div className="flex items-center space-x-2 text-xs font-extrabold text-emerald-800 uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Janji Utama Unit</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    {STRATEGIC_SUMMARY.janjiUtamaUnit}
                  </p>
                </div>

                {/* 4. Kesan Brand yang Harus Terasa */}
                <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/70">
                  <div className="flex items-center space-x-2 text-xs font-extrabold text-amber-800 uppercase tracking-wider mb-2">
                    <Sparkles className="w-4 h-4 text-[#F39C12]" />
                    <span>Kesan Brand yang Terasa</span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    {STRATEGIC_SUMMARY.kesanBrand}
                  </p>
                </div>

                {/* 5. Output Utama Anak (Full Width) */}
                <div className="md:col-span-2 p-5 rounded-2xl bg-gradient-to-r from-teal-50 via-emerald-50 to-amber-50 border border-teal-200">
                  <div className="flex items-center space-x-2 text-xs font-extrabold text-[#00473A] uppercase tracking-wider mb-2">
                    <Target className="w-4 h-4 text-[#00A896]" />
                    <span>Output Utama Anak</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#16332A] font-semibold leading-relaxed">
                    {STRATEGIC_SUMMARY.outputUtamaAnak}
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Tab 3: 6 Tujuan Pendidikan Unit */}
        {activeTab === 'tujuan' && (
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-md">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h3 className="font-serif text-2xl font-bold text-[#16332A] mb-2">
                  6 Tujuan Pendidikan Day Care Asih Putera
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Membimbing ananda tumbuh utuh secara emosional, fisik, sosial, dan spiritual sesuai tahap perkembangannya.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {EDUCATIONAL_GOALS.map((goal, index) => (
                  <div 
                    key={index}
                    className="p-4 sm:p-5 rounded-2xl bg-[#FAF7F0] border border-amber-200/70 flex items-start space-x-4 hover:bg-white hover:shadow-xs transition"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#00473A] text-amber-300 font-extrabold flex items-center justify-center text-sm shrink-0 shadow-2xs">
                      0{index + 1}
                    </div>
                    <div>
                      <p className="text-sm text-[#16332A] font-medium leading-relaxed">
                        {goal}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: 5 Keunggulan Utama Unit */}
        {activeTab === 'keunggulan' && (
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {UNIT_ADVANTAGES.map((adv, index) => (
                <div
                  key={adv.id}
                  className={`bg-white p-6 rounded-3xl border border-amber-200/80 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all ${
                    index === 0 ? 'md:col-span-2 bg-gradient-to-br from-white via-teal-50/20 to-emerald-50/30' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-extrabold bg-teal-50 text-[#00A896] px-2.5 py-1 rounded-full border border-teal-200">
                        {adv.highlight}
                      </span>
                      <span className="text-xs font-bold text-gray-400">#0{index + 1}</span>
                    </div>
                    <h4 className="font-serif font-bold text-lg text-[#16332A] mb-2">
                      {adv.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {adv.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-amber-100 flex items-center text-xs font-bold text-[#00A896]">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-[#00A896]" />
                    Standar Day Care Asih Putera
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
