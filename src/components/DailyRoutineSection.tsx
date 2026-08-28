import React, { useState } from 'react';
import { 
  Sun, 
  Users, 
  Apple, 
  Shapes, 
  Sparkles, 
  Utensils, 
  Moon, 
  Heart, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Smartphone,
  Smile,
  ShieldCheck
} from 'lucide-react';
import { ROUTINE_ITEMS } from '../data/mockData';

export const DailyRoutineSection: React.FC = () => {
  const [selectedRoutineId, setSelectedRoutineId] = useState<string>('r1');
  const [showDailyReportModal, setShowDailyReportModal] = useState<boolean>(false);

  const getRoutineIcon = (iconName: string, isSelected: boolean) => {
    const colorClass = isSelected ? 'text-white' : 'text-[#00A896]';
    switch (iconName) {
      case 'sun':
        return <Sun className={`w-5 h-5 ${colorClass}`} />;
      case 'users':
        return <Users className={`w-5 h-5 ${colorClass}`} />;
      case 'apple':
        return <Apple className={`w-5 h-5 ${colorClass}`} />;
      case 'shapes':
        return <Shapes className={`w-5 h-5 ${colorClass}`} />;
      case 'sparkles':
        return <Sparkles className={`w-5 h-5 ${colorClass}`} />;
      case 'utensils':
        return <Utensils className={`w-5 h-5 ${colorClass}`} />;
      case 'moon':
        return <Moon className={`w-5 h-5 ${colorClass}`} />;
      case 'heart':
        return <Heart className={`w-5 h-5 ${colorClass}`} />;
      default:
        return <Sun className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  const currentRoutine = ROUTINE_ITEMS.find((r) => r.id === selectedRoutineId) || ROUTINE_ITEMS[0];

  return (
    <section id="rutinitas-section" className="py-16 md:py-24 bg-[#FAF7F0] overflow-x-hidden scroll-mt-16 relative border-b border-amber-900/10">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-1.5 bg-[#FEF9E7] text-[#C37932] text-xs font-bold px-3.5 py-1 rounded-full mb-3 border border-amber-200 shadow-2xs">
            <Clock className="w-3.5 h-3.5 text-[#F39C12]" />
            <span>Rutinitas Sehat &amp; Pengalaman Belajar</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#16332A] mb-3">
            Ritme Harian di Day Care Asih Putera
          </h2>
          <div className="w-24 h-1 bg-[#00A896] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Jadwal yang konsisten dan penuh kasih sayang menyeimbangkan stimulasi sensori-motorik, adab makan sehat, istirahat tenang, dan laporan transparan.
          </p>
        </div>

        {/* 8-Item Interactive Timeline Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 sm:gap-3 text-center mb-8 max-w-6xl mx-auto">
          {ROUTINE_ITEMS.map((item, idx) => {
            const isSelected = selectedRoutineId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedRoutineId(item.id)}
                className={`p-3 rounded-2xl cursor-pointer transition-all duration-200 flex flex-col items-center border ${
                  isSelected
                    ? 'bg-[#00473A] text-white shadow-md scale-102 border-[#00473A] ring-2 ring-[#00A896]'
                    : 'bg-white hover:bg-amber-50/60 border-amber-200/80 text-[#16332A]'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-all ${
                    isSelected ? 'bg-white/20' : 'bg-teal-50'
                  }`}
                >
                  {getRoutineIcon(item.iconName, isSelected)}
                </div>

                <span className={`text-[10px] font-extrabold whitespace-nowrap mb-0.5 ${
                  isSelected ? 'text-amber-300' : 'text-[#C37932]'
                }`}>
                  {item.time.split(' ')[0]}
                </span>

                <span className={`text-[11px] font-bold leading-tight line-clamp-2 ${
                  isSelected ? 'text-white' : 'text-[#16332A]'
                }`}>
                  {item.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Detailed Card for Selected Routine */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-amber-200/80 shadow-md mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-amber-100 mb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-extrabold text-[#C37932] bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  {currentRoutine.time} WIB
                </span>
                <span className="text-xs font-bold text-[#00A896]">
                  {currentRoutine.category}
                </span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#16332A]">
                {currentRoutine.title}
              </h3>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-gray-500">Nilai Dibentuk:</span>
              {currentRoutine.nilaiTerkait.map((n, nIdx) => (
                <span key={nIdx} className="bg-teal-50 text-[#00A896] text-xs font-extrabold px-2.5 py-1 rounded-full border border-teal-200">
                  {n}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-extrabold uppercase text-[#006C59] tracking-wider mb-2">
                Aktivitas &amp; Pengasuhan:
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed mb-4">
                {currentRoutine.description}
              </p>
              <div className="p-3.5 rounded-2xl bg-[#FAF7F0] border border-amber-200/70 text-xs text-gray-700 leading-relaxed">
                {currentRoutine.details}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/70 mb-4">
                <div className="flex items-center text-xs font-extrabold text-[#00473A] mb-1.5">
                  <Heart className="w-4 h-4 mr-1.5 text-rose-500" />
                  <span>Sinergi Rumah &amp; Day Care:</span>
                </div>
                <p className="text-xs text-gray-700 leading-relaxed">
                  {currentRoutine.parentTips}
                </p>
              </div>

              <button
                onClick={() => setShowDailyReportModal(true)}
                className="w-full bg-[#00A896] hover:bg-[#028090] text-white py-3 px-4 rounded-2xl font-bold text-xs flex items-center justify-center space-x-2 transition cursor-pointer shadow-sm"
              >
                <Smartphone className="w-4 h-4 text-amber-200" />
                <span>Lihat Contoh Daily Report Digital Orang Tua</span>
              </button>
            </div>
          </div>
        </div>

        {/* Daily Report Interactive Preview Modal / Box */}
        {showDailyReportModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-amber-200 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
              
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-9 h-9 rounded-xl bg-[#00473A] text-white flex items-center justify-center">
                    <FileText className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#16332A]">Contoh Daily Report Harian</h4>
                    <span className="text-[10px] text-gray-500">Day Care Asih Putera</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowDailyReportModal(false)}
                  className="text-gray-400 hover:text-gray-700 text-lg font-bold p-1 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {/* Sample Digital Journal */}
              <div className="space-y-3 text-xs">
                
                <div className="bg-teal-50 p-3 rounded-2xl border border-teal-200 flex justify-between items-center">
                  <div>
                    <div className="font-bold text-[#00473A]">Ananda: Muhammad Rayyan (2 Thn)</div>
                    <div className="text-[11px] text-gray-500">Toddler Care • Ustadzah Pendamping: Bunda Siti</div>
                  </div>
                  <span className="bg-[#00A896] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Hari Ini
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 bg-[#FAF7F0] rounded-xl border border-amber-200">
                    <span className="text-gray-500 text-[10px] block">Makan Pagi &amp; Siang:</span>
                    <span className="font-bold text-[#16332A]">Habis 1 Porsi Mandiri 🌟</span>
                  </div>
                  <div className="p-3 bg-[#FAF7F0] rounded-xl border border-amber-200">
                    <span className="text-gray-500 text-[10px] block">Tidur Siang:</span>
                    <span className="font-bold text-[#16332A]">12.45 - 14.30 WIB (Nyenyak)</span>
                  </div>
                  <div className="p-3 bg-[#FAF7F0] rounded-xl border border-amber-200">
                    <span className="text-gray-500 text-[10px] block">Buang Air / Toilet Training:</span>
                    <span className="font-bold text-[#16332A]">2x BAK di Kloset Mini</span>
                  </div>
                  <div className="p-3 bg-[#FAF7F0] rounded-xl border border-amber-200">
                    <span className="text-gray-500 text-[10px] block">Mood &amp; Emosi:</span>
                    <span className="font-bold text-[#16332A]">Ceria, Ramah Berbagi Mainan</span>
                  </div>
                </div>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-gray-700 leading-relaxed">
                  <span className="font-bold text-emerald-800 block mb-1">Catatan Perkembangan Hari Ini:</span>
                  "Rayyan sangat antusias meraba tekstur loose parts kayu dan pasir kinetik. Sudah bisa mengucap 'terima kasih' saat dibantu mengambil botol minum."
                </div>

              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 flex justify-end">
                <button
                  onClick={() => setShowDailyReportModal(false)}
                  className="bg-[#00473A] text-white px-5 py-2 rounded-full font-bold text-xs cursor-pointer"
                >
                  Tutup Contoh
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
