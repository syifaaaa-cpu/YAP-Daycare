import React from 'react';
import { TEACHERS } from '../data/mockData';
import { Award, Heart, CheckCircle2 } from 'lucide-react';

export const TeachersSection: React.FC = () => {
  return (
    <section id="pendidik-section" className="py-16 md:py-24 bg-asih-cream relative overflow-hidden scroll-mt-16">
      {/* Background doodles */}
      <div className="absolute top-10 right-10 text-amber-300/40 text-3xl pointer-events-none select-none">✦</div>
      <div className="absolute bottom-10 left-10 text-emerald-300/40 text-3xl pointer-events-none select-none">✿</div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-1.5 bg-emerald-100/80 text-emerald-800 text-xs font-semibold px-3.5 py-1 rounded-full mb-3 border border-emerald-200">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>Pendidik & Caregiver Tersertifikasi</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-asih-green mb-4">
            Didampingi Pendidik Penuh Kasih & Berpengalaman
          </h2>
          <div className="w-24 h-1 bg-asih-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Seluruh ustadzah, guru PAUD, perawat medis, dan psikolog anak kami melalui seleksi ketat serta pelatihan berkala dalam pengasuhan tanpa kekerasan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {TEACHERS.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-3xl p-6 border border-amber-200/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 relative overflow-hidden"
            >
              {/* Top Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-amber-100/90 border border-amber-300 text-asih-orange text-[10px] font-bold px-2.5 py-1 rounded-full shadow-2xs">
                  {teacher.badge}
                </span>
              </div>

              <div>
                {/* Photo with Frame */}
                <div className="relative mb-5 mx-auto w-32 h-32 rounded-2xl overflow-hidden border-3 border-amber-100 shadow-sm bg-amber-50">
                  <img
                    src={teacher.avatarUrl}
                    alt={teacher.name}
                    className="w-full h-full object-cover object-top group-hover:scale-108 transition duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="text-center mb-3">
                  <h3 className="font-serif font-bold text-base sm:text-lg text-asih-green leading-snug">
                    {teacher.name}
                  </h3>
                  <p className="text-xs font-semibold text-asih-orange mt-1">
                    {teacher.role}
                  </p>
                </div>

                <div className="space-y-2 mb-4 bg-asih-light p-3 rounded-2xl border border-amber-100/80">
                  <div className="flex items-start text-xs text-gray-600">
                    <Award className="w-3.5 h-3.5 text-asih-orange mr-1.5 mt-0.5 shrink-0" />
                    <span className="leading-tight">{teacher.certification}</span>
                  </div>
                  <div className="flex items-start text-xs text-emerald-700 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5 mt-0.5 shrink-0" />
                    <span>{teacher.experience}</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="pt-3 border-t border-gray-100 text-center">
                <p className="text-xs italic text-gray-500 leading-relaxed">
                  "{teacher.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Commitment Notice */}
        <div className="mt-12 max-w-4xl mx-auto bg-white/90 border border-amber-200 rounded-2xl p-4 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3 text-center sm:text-left">
            <div className="p-3 bg-emerald-100 text-emerald-700 rounded-xl shrink-0 hidden sm:block">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-asih-green">Standar Rasio Pendidik & Anak Ideal</h4>
              <p className="text-xs text-gray-600">
                Baby Care (1:2) • Toddler (1:4) • KOBer (1:6) • TK A & TK B (1:10) untuk memastikan perhatian personal maksimal.
              </p>
            </div>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center text-xs font-bold text-asih-orange bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-200">
              100% Bebas Gawai Saat Pendampingan
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
