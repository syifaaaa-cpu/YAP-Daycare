import React, { useState } from 'react';
import { 
  Heart, 
  Activity, 
  Users, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2, 
  Target,
  ArrowRight
} from 'lucide-react';
import { DEVELOPMENT_FOCUS_ITEMS } from '../data/mockData';

export const DevelopmentFocusSection: React.FC = () => {
  const [selectedArea, setSelectedArea] = useState<string>('Emosi');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'heart':
        return <Heart className="w-6 h-6 text-rose-500" />;
      case 'activity':
        return <Activity className="w-6 h-6 text-amber-500" />;
      case 'users':
        return <Users className="w-6 h-6 text-teal-600" />;
      case 'message-circle':
        return <MessageCircle className="w-6 h-6 text-blue-500" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-teal-600" />;
    }
  };

  const currentItem = DEVELOPMENT_FOCUS_ITEMS.find(item => item.area === selectedArea) || DEVELOPMENT_FOCUS_ITEMS[0];

  return (
    <section id="fokus-perkembangan-section" className="py-16 md:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-amber-900/10 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#FEF9E7] border border-[#F39C12]/40 text-[#C37932] px-4 py-1.5 rounded-full text-xs font-bold mb-3 shadow-xs">
            <Target className="w-3.5 h-3.5" />
            <span>Fokus &amp; Capaian Tumbuh Kembang</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#16332A] tracking-tight mb-3">
            5 Area Perkembangan di Day Care Asih Putera
          </h2>

          <p className="text-[#16332A]/80 text-sm sm:text-base leading-relaxed">
            Stimulasi menyeluruh yang terukur dan disesuaikan dengan tahapan usia ananda, menumbuhkan anak yang sehat emosi, mandiri fisik, aktif sosial, dan beradab.
          </p>
        </div>

        {/* 5 Area Tab Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mb-8">
          {DEVELOPMENT_FOCUS_ITEMS.map((item) => {
            const isSelected = selectedArea === item.area;

            return (
              <button
                key={item.area}
                onClick={() => setSelectedArea(item.area)}
                className={`p-4 rounded-3xl text-left transition-all duration-200 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-white border-[#00A896] ring-2 ring-[#00A896]/30 shadow-md scale-102'
                    : 'bg-white/80 hover:bg-white border-amber-200/80 shadow-xs'
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF7F0] border border-amber-200/60 flex items-center justify-center mb-3">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="font-serif font-bold text-base text-[#16332A] mb-1">
                    {item.area}
                  </h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full inline-block ${item.badgeColor}`}>
                    Area Inti
                  </span>
                </div>

                <div className="mt-4 pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#00A896]">
                  <span>Detail</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Focus Item Expanded Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            <div className="md:col-span-4 bg-gradient-to-br from-teal-50 to-emerald-50 p-6 rounded-2xl border border-teal-200 text-center">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-xs border border-teal-200 flex items-center justify-center mx-auto mb-3">
                {getIcon(currentItem.iconName)}
              </div>
              <div className="text-xs uppercase font-extrabold text-[#00A896] tracking-wider mb-1">
                Area Perkembangan
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#16332A]">
                {currentItem.area}
              </h3>
            </div>

            <div className="md:col-span-8 space-y-4">
              <div>
                <span className="text-xs uppercase font-extrabold text-[#C37932] tracking-wider block mb-1">
                  Fokus Pengasuhan &amp; Stimulasi:
                </span>
                <p className="text-base text-[#16332A] font-semibold">
                  {currentItem.fokus}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F0] border border-amber-200/70">
                <span className="text-xs uppercase font-extrabold text-[#006C59] tracking-wider block mb-1 flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-1 text-[#00A896]" />
                  Capaian Utama Anak:
                </span>
                <p className="text-sm text-gray-700 leading-relaxed font-medium">
                  {currentItem.capaian}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
