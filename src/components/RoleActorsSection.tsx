import React from 'react';
import { UserCheck, Shield, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { ROLE_ACTORS } from '../data/mockData';

export const RoleActorsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'user-check':
        return <UserCheck className="w-7 h-7 text-[#00A896]" />;
      case 'shield':
        return <Shield className="w-7 h-7 text-[#F39C12]" />;
      case 'heart-handshake':
        return <HeartHandshake className="w-7 h-7 text-rose-500" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#00A896]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#FAF7F0] relative overflow-hidden border-b border-amber-900/10">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#FEF9E7] border border-[#F39C12]/40 text-[#C37932] px-4 py-1.5 rounded-full text-xs font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ekosistem Pengasuhan Terpadu</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#16332A] tracking-tight mb-3">
            Sinergi Pendidik, Koordinator &amp; Orang Tua
          </h2>

          <p className="text-[#16332A]/80 text-sm sm:text-base leading-relaxed">
            Pengasuhan terbaik terwujud saat pendidik di sekolah dan orang tua di rumah berjalan selaras dalam memberikan rasa aman dan pembiasaan adab bagi ananda.
          </p>
        </div>

        {/* 3 Actors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ROLE_ACTORS.map((actor, idx) => (
            <div
              key={actor.aktor}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-amber-200/80 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#FAF7F0] border border-amber-200/60 flex items-center justify-center shadow-2xs">
                    {getIcon(actor.iconName)}
                  </div>
                  <span className="text-[10px] font-extrabold bg-teal-50 text-[#00A896] px-2.5 py-1 rounded-full border border-teal-200">
                    {actor.badge}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-xl text-[#16332A] mb-1">
                  Peran {actor.aktor}
                </h3>
                <div className="text-xs font-bold text-[#C37932] mb-3">
                  {actor.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-5 font-medium">
                  {actor.peranUtama}
                </p>
              </div>

              <div className="pt-4 border-t border-amber-100">
                <div className="text-[10px] font-extrabold uppercase text-[#00A896] tracking-wider mb-2.5">
                  Bentuk Tindakan Nyata:
                </div>
                <ul className="space-y-2">
                  {actor.bentukTindakan.map((tindakan, tIdx) => (
                    <li key={tIdx} className="text-xs text-gray-600 flex items-start leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896] mr-2 mt-0.5 shrink-0" />
                      <span>{tindakan}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
