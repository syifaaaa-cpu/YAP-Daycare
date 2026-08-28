import React from 'react';
import { X, Check, Sparkles, Clock, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import { ProgramItem } from '../types';

interface ProgramDetailModalProps {
  program: ProgramItem | null;
  onClose: () => void;
  onOpenPpdb?: () => void;
  onRegister?: () => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onOpenPpdb,
  onRegister
}) => {
  if (!program) return null;

  const handleAction = () => {
    onClose();
    if (onOpenPpdb) onOpenPpdb();
    else if (onRegister) onRegister();
  };

  return (
    <div className="fixed inset-0 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative border border-gray-100 my-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-100 transition z-10 cursor-pointer"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col sm:flex-row gap-6 mb-6">
          {/* Image Column */}
          <div className="sm:w-1/2">
            <img
              alt={program.title}
              className="w-full h-48 sm:h-56 object-cover object-top rounded-2xl shadow-sm"
              src={program.imageUrl}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Details Column */}
          <div className="sm:w-1/2 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full uppercase tracking-wider inline-block">
                Kelompok Usia {program.ageGroup}
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#16332A] mt-2 mb-2">
                {program.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
                {program.description}
              </p>
            </div>

            <div className="bg-[#FEF9E7] p-3 rounded-xl border border-amber-200/80 space-y-1 text-xs text-gray-700">
              <div className="flex items-center">
                <Users className="w-3.5 h-3.5 text-[#00A896] mr-2" />
                <span>Rasio: <strong className="text-[#16332A]">{program.ratio}</strong></span>
              </div>
              <div className="flex items-center">
                <Clock className="w-3.5 h-3.5 text-[#C37932] mr-2" />
                <span>Jadwal: {program.schedule}</span>
              </div>
              <div className="flex items-center text-[#C37932] font-semibold pt-1">
                <span>Estimasi: {program.tuitionEstimate}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-xs font-bold text-[#00473A] uppercase tracking-wider mb-2 flex items-center">
              <Sparkles className="w-3.5 h-3.5 text-[#F39C12] mr-1.5" />
              Fokus Kegiatan & Stimulasi:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {program.keyActivities.map((act, idx) => (
                <div key={idx} className="flex items-start text-xs text-gray-700 bg-gray-50 p-2 rounded-lg border border-gray-100">
                  <Check className="w-3.5 h-3.5 text-emerald-600 mr-1.5 mt-0.5 shrink-0" />
                  <span>{act}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-100">
              <h5 className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-1.5 flex items-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                Fasilitas Khusus:
              </h5>
              <ul className="text-xs text-gray-600 space-y-1">
                {program.facilities.map((fac, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                    <span>{fac}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50/60 p-3 rounded-xl border border-amber-100">
              <h5 className="text-[11px] font-bold text-amber-800 uppercase tracking-wider mb-1.5">
                🍽️ Asupan Nutrisi & Makanan:
              </h5>
              <ul className="text-xs text-gray-600 space-y-1">
                {program.mealsIncluded.map((meal, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-2"></span>
                    <span>{meal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="w-1/3 border border-gray-200 text-gray-600 py-3 rounded-full font-semibold text-xs sm:text-sm hover:bg-gray-50 transition cursor-pointer"
          >
            Tutup
          </button>
          <button
            onClick={handleAction}
            className="w-2/3 bg-[#C37932] hover:bg-[#A35D20] text-white py-3 rounded-full font-bold text-xs sm:text-sm transition flex items-center justify-center cursor-pointer shadow-md"
          >
            <span>Daftar di Kelas {program.title}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

