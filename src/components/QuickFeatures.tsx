import React, { useState } from 'react';
import { Users, UserCheck, Gamepad2, GraduationCap, Sparkles, Info } from 'lucide-react';

interface QuickFeaturesProps {
  onLearnMore?: (feature: string) => void;
}

export const QuickFeatures: React.FC<QuickFeaturesProps> = ({ onLearnMore }) => {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const stats = [
    {
      id: 'stat-anak',
      label: 'Jumlah Anak',
      value: '120+',
      subtext: 'Santri Cilik Aktif',
      detail: 'Tersebar di unit Baby Care, Toddler Daycare, KOBer, dan TK Islam.',
      icon: Users,
      blockColor: 'bg-[#00A896]',
      lightBg: 'bg-[#E0F7F6]',
      textColor: 'text-[#00A896]',
      borderColor: 'border-[#00A896]/30',
      badgeColor: 'bg-[#007A6D]'
    },
    {
      id: 'stat-rasio',
      label: 'Rasio Pengasuh',
      value: '1:4',
      subtext: 'Pendampingan Intensif',
      detail: '1 Pendidik/Pengasuh mendampingi maksimal 4 anak (1:2 untuk Baby Care).',
      icon: UserCheck,
      blockColor: 'bg-[#F39C12]',
      lightBg: 'bg-[#FEF9E7]',
      textColor: 'text-[#F39C12]',
      borderColor: 'border-[#F39C12]/30',
      badgeColor: 'bg-[#D68910]'
    },
    {
      id: 'stat-fasilitas',
      label: 'Fasilitas Bermain',
      value: '50+',
      subtext: 'Area Sentra & Outdoor',
      detail: 'Montessori wooden toys, sensory gym, rooftop track, mini eco-farm & water play.',
      icon: Gamepad2,
      blockColor: 'bg-[#E76F51]',
      lightBg: 'bg-[#FDEDEC]',
      textColor: 'text-[#E76F51]',
      borderColor: 'border-[#E76F51]/30',
      badgeColor: 'bg-[#D35400]'
    },
    {
      id: 'stat-lulusan',
      label: 'Lulusan TK',
      value: '80+',
      subtext: 'Generasi Qur\'ani Beradab',
      detail: 'Lulusan siap masuk SD unggulan dengan bekal kemandirian & hafalan juz 30.',
      icon: GraduationCap,
      blockColor: 'bg-[#00473A]',
      lightBg: 'bg-[#E8F5E9]',
      textColor: 'text-[#00473A]',
      borderColor: 'border-[#00473A]/30',
      badgeColor: 'bg-[#00382E]'
    }
  ];

  return (
    <section className="py-4 bg-transparent relative z-20 -mt-10 md:-mt-14">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        {/* Stylized Colored Blocks Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {stats.map((item) => {
            const IconComponent = item.icon;
            const isHovered = activeTooltip === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveTooltip(item.id)}
                onMouseLeave={() => setActiveTooltip(null)}
                onClick={() => onLearnMore?.(item.label)}
                className={`bg-white rounded-2xl p-4 sm:p-5 border ${item.borderColor} shadow-lg toy-block-card cursor-pointer transition-all duration-300 relative overflow-hidden group`}
              >
                {/* Top Toy-Block Stud Accents */}
                <div className="flex space-x-1.5 absolute top-2 right-2 opacity-50">
                  <div className={`w-2 h-2 rounded-full ${item.blockColor}`}></div>
                  <div className={`w-2 h-2 rounded-full ${item.blockColor}`}></div>
                </div>

                {/* Block Header with Icon */}
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl ${item.blockColor} text-white flex items-center justify-center shadow-md transform group-hover:scale-105 transition-transform`}>
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] sm:text-xs font-bold text-gray-500 block uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium hidden sm:block">
                      {item.subtext}
                    </span>
                  </div>
                </div>

                {/* Stylized Large Number Block */}
                <div className="flex items-baseline justify-between mt-1">
                  <div className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-extrabold ${item.textColor} tracking-tight group-hover:translate-x-1 transition-transform`}>
                    {item.value}
                  </div>
                  
                  <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${item.lightBg} ${item.textColor} flex items-center`}>
                    <Sparkles className="w-2.5 h-2.5 mr-0.5" />
                    <span>Terstandar</span>
                  </div>
                </div>

                {/* Micro Detail on Hover */}
                <div className="mt-2.5 pt-2 border-t border-gray-100 text-[11px] text-gray-600 leading-snug">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
