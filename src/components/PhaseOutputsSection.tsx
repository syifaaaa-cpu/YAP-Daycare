import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Heart, GraduationCap } from 'lucide-react';
import { PHASE_OUTPUTS } from '../data/mockData';

export const PhaseOutputsSection: React.FC = () => {
  const [activeFaseIdx, setActiveFaseIdx] = useState<number>(0);

  const getFaseIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Heart className="w-5 h-5 text-rose-500" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-[#00A896]" />;
      case 2:
        return <GraduationCap className="w-5 h-5 text-[#F39C12]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#00A896]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-amber-900/10">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#FEF9E7] border border-[#F39C12]/40 text-[#C37932] px-4 py-1.5 rounded-full text-xs font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Peta Tumbuh Kembang Ananda</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#16332A] tracking-tight mb-3">
            Output Per Fase di Day Care Asih Putera
          </h2>

          <p className="text-[#16332A]/80 text-sm sm:text-base leading-relaxed">
            Perjalanan bertahap dari membangun rasa aman awal, pembiasaan adab dan kemandirian harian, hingga kesiapan penuh memasuki jenjang Taman Kanak-Kanak (TK).
          </p>
        </div>

        {/* 3 Phases Stepper Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {PHASE_OUTPUTS.map((phase, idx) => {
            const isSelected = activeFaseIdx === idx;

            return (
              <div
                key={phase.fase}
                onClick={() => setActiveFaseIdx(idx)}
                className={`bg-white rounded-3xl p-6 sm:p-7 border transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1 ${
                  isSelected
                    ? 'border-[#00A896] ring-2 ring-[#00A896]/30 shadow-md bg-teal-50/20'
                    : 'border-amber-200/80 hover:border-amber-300 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF7F0] border border-amber-200/60 flex items-center justify-center shadow-2xs">
                      {getFaseIcon(idx)}
                    </div>
                    <span className="text-[10px] font-extrabold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full">
                      {phase.rentangUsia}
                    </span>
                  </div>

                  <div className="text-xs font-extrabold text-[#00A896] uppercase tracking-wider mb-1">
                    Fase {idx + 1}
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-[#16332A] mb-2">
                    Fase {phase.fase}
                  </h3>

                  <div className="bg-[#FAF7F0] p-3 rounded-2xl border border-amber-200/60 mb-4 text-xs font-semibold text-[#16332A]">
                    <span className="text-gray-500 font-normal block text-[10px] uppercase">Fokus Utama:</span>
                    {phase.fokus}
                  </div>

                  <div className="p-3 rounded-2xl bg-teal-50/60 border border-teal-200/70 mb-4 text-xs text-gray-700 leading-relaxed font-medium">
                    <span className="text-[#006C59] font-bold block text-[10px] uppercase mb-1">Output Anak:</span>
                    {phase.outputAnak}
                  </div>
                </div>

                <div className="pt-3 border-t border-amber-100">
                  <div className="text-[10px] font-extrabold uppercase text-[#C37932] tracking-wider mb-2">
                    Praktik Kunci:
                  </div>
                  <ul className="space-y-1.5">
                    {phase.keyPractices.map((practice, pIdx) => (
                      <li key={pIdx} className="text-xs text-gray-600 flex items-start leading-tight">
                        <CheckCircle2 className="w-3 h-3 text-[#00A896] mr-1.5 mt-0.5 shrink-0" />
                        <span>{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
