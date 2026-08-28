import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Heart, Smile, Star, Lightbulb, Globe } from 'lucide-react';
import { PANCA_WALUYA_VALUES } from '../data/mockData';

export const CoreValuesSection: React.FC = () => {
  const [selectedVal, setSelectedVal] = useState<number>(0);

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'cageur':
        return <Heart className="w-6 h-6 text-rose-500" />;
      case 'bageur':
        return <Smile className="w-6 h-6 text-[#00A896]" />;
      case 'bener':
        return <Star className="w-6 h-6 text-[#F39C12]" />;
      case 'pinter':
        return <Lightbulb className="w-6 h-6 text-blue-500" />;
      case 'singer':
        return <Globe className="w-6 h-6 text-emerald-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#00A896]" />;
    }
  };

  return (
    <section id="nilai-inti-section" className="py-16 md:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-amber-900/10 scroll-mt-16">
      
      {/* Background Decor */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#FEF9E7] border border-[#F39C12]/40 text-[#C37932] px-4 py-1.5 rounded-full text-xs font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Falsafah Luhur Panca Waluya</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#16332A] tracking-tight mb-3">
            Turunan Nilai Karakter di Day Care Asih Putera
          </h2>

          <p className="text-[#16332A]/80 text-sm sm:text-base leading-relaxed">
            Menanamkan 5 pilar karakter luhur Sunda-Islami (Cageur, Bageur, Bener, Pinter, Singer) melalui pembiasaan harian yang lembut, menyenangkan, dan teladan nyata.
          </p>
        </div>

        {/* Values 5 Column Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {PANCA_WALUYA_VALUES.map((item, idx) => {
            const isSelected = selectedVal === idx;

            return (
              <div
                key={item.name}
                onClick={() => setSelectedVal(idx)}
                className={`bg-white rounded-3xl p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 ${
                  isSelected
                    ? 'border-[#00A896] ring-2 ring-[#00A896]/30 shadow-md scale-102 bg-teal-50/20'
                    : 'border-amber-200/80 hover:border-amber-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] border border-amber-200/60 flex items-center justify-center shadow-2xs">
                      {getIcon(item.name)}
                    </div>
                    <span className="text-[11px] font-extrabold text-gray-400">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif font-extrabold text-xl text-[#16332A] mb-1">
                    {item.name}
                  </h3>

                  <p className="text-xs text-gray-600 font-medium leading-relaxed mb-4">
                    {item.maknaDiUnit}
                  </p>
                </div>

                <div className="pt-3 border-t border-amber-100">
                  <div className="text-[10px] font-extrabold text-[#00A896] uppercase tracking-wider mb-2">
                    Contoh Perilaku:
                  </div>
                  <ul className="space-y-1.5">
                    {item.contohPerilaku.map((perilaku, pIdx) => (
                      <li key={pIdx} className="text-[11px] text-gray-700 flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00A896] mt-1 mr-1.5 shrink-0"></span>
                        <span>{perilaku}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner of the Selected Value */}
        <div className="bg-gradient-to-r from-[#00473A] to-[#006C59] text-white rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 text-amber-300">
                {getIcon(PANCA_WALUYA_VALUES[selectedVal].name)}
              </div>
              <div>
                <div className="text-xs uppercase font-extrabold text-amber-300 tracking-wider">
                  Fokus Penguatan Nilai Terpilih
                </div>
                <h4 className="text-2xl font-bold font-serif">
                  {PANCA_WALUYA_VALUES[selectedVal].name}: {PANCA_WALUYA_VALUES[selectedVal].maknaDiUnit}
                </h4>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs">
              {PANCA_WALUYA_VALUES[selectedVal].contohPerilaku.map((cp, cIdx) => (
                <span key={cIdx} className="bg-white/15 backdrop-blur-xs px-3 py-1.5 rounded-full text-emerald-50 border border-white/20 flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-amber-300" />
                  {cp}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
