import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Heart, 
  Smile, 
  BookOpen, 
  FileText, 
  Activity, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { CORE_PROGRAM_MEANINGS } from '../data/mockData';

export const CoreProgramsSection: React.FC = () => {
  const [activeProgId, setActiveProgId] = useState<string>(CORE_PROGRAM_MEANINGS[0].id);

  const activeProg = CORE_PROGRAM_MEANINGS.find(p => p.id === activeProgId) || CORE_PROGRAM_MEANINGS[0];

  return (
    <section id="program-inti-section" className="py-16 md:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-amber-900/10 scroll-mt-16">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#FEF9E7] border border-[#F39C12]/40 text-[#C37932] px-4 py-1.5 rounded-full text-xs font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Program Inti Berlandaskan Makna</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#16332A] tracking-tight mb-3">
            6 Program Inti &amp; Makna Pendidikan
          </h2>

          <p className="text-[#16332A]/80 text-sm sm:text-base leading-relaxed">
            Setiap aktivitas di Day Care Asih Putera dirancang memiliki makna pendidikan yang jelas, menanamkan nilai karakter dan kemandirian sejak dini.
          </p>
        </div>

        {/* 6 Programs Layout: Left List + Right Interactive Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start max-w-6xl mx-auto">
          
          {/* Left: 6 Program List Selection */}
          <div className="lg:col-span-5 space-y-2.5">
            {CORE_PROGRAM_MEANINGS.map((prog, idx) => {
              const isSelected = activeProgId === prog.id;

              return (
                <button
                  key={prog.id}
                  onClick={() => setActiveProgId(prog.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                    isSelected
                      ? 'bg-[#00473A] text-white border-[#00473A] shadow-md scale-101'
                      : 'bg-white text-[#16332A] hover:bg-amber-50/70 border-amber-200/80 shadow-xs'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center text-xs shrink-0 ${
                      isSelected ? 'bg-white/20 text-amber-300' : 'bg-teal-50 text-[#00A896]'
                    }`}>
                      0{idx + 1}
                    </span>
                    <div>
                      <div className={`font-bold text-sm leading-tight ${isSelected ? 'text-white' : 'text-[#16332A]'}`}>
                        {prog.program}
                      </div>
                      <div className={`text-[11px] truncate max-w-[200px] sm:max-w-[260px] ${isSelected ? 'text-teal-200' : 'text-gray-500'}`}>
                        {prog.maknaPendidikan}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-amber-300 translate-x-1' : 'text-gray-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Selected Program Details Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="bg-teal-50 text-[#00A896] text-xs font-bold px-3 py-1 rounded-full border border-teal-200">
                {activeProg.tag}
              </span>

              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold text-gray-500">Nilai Dibentuk:</span>
                {activeProg.nilaiYangDibentuk.map((n, nIdx) => (
                  <span key={nIdx} className="bg-amber-100 text-amber-900 font-extrabold text-[10px] px-2 py-0.5 rounded-full">
                    {n}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#16332A] mb-2">
              {activeProg.program}
            </h3>

            <div className="bg-[#FAF7F0] p-3.5 rounded-2xl border-l-4 border-[#00A896] mb-4">
              <div className="text-[10px] font-extrabold uppercase text-[#00A896] tracking-wider mb-0.5">
                Makna Pendidikan:
              </div>
              <p className="text-sm font-semibold text-[#16332A]">
                "{activeProg.maknaPendidikan}"
              </p>
            </div>

            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              {activeProg.description}
            </p>

            <div className="pt-4 border-t border-amber-100">
              <div className="text-xs font-extrabold uppercase text-[#C37932] tracking-wider mb-2.5">
                Contoh Aktivitas Harian:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {activeProg.contohAktivitas.map((act, aIdx) => (
                  <div key={aIdx} className="bg-teal-50/60 p-2.5 rounded-xl border border-teal-200/70 text-xs text-[#16332A] font-medium flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896] mr-2 shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
