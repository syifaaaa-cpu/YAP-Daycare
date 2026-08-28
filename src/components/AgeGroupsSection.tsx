import React from 'react';
import { ProgramItem } from '../types';
import { ALL_PROGRAMS } from '../data/mockData';
import { ArrowUpRight, Clock, Users, BadgeCheck } from 'lucide-react';
import { CornerSticker } from './PlayfulDecorations';

interface AgeGroupsSectionProps {
  onSelectProgram: (program: ProgramItem) => void;
}

export const AgeGroupsSection: React.FC<AgeGroupsSectionProps> = ({ onSelectProgram }) => {
  const getStickerType = (id: string): 'baby-bottle' | 'blocks' | 'abc' | 'clock' => {
    switch (id) {
      case 'baby-care':
        return 'baby-bottle';
      case 'toddler':
        return 'blocks';
      case 'pra-tk-daycare':
        return 'abc';
      case 'daycare-harian':
        return 'clock';
      default:
        return 'blocks';
    }
  };

  return (
    <section id="layanan-usia-section" className="py-16 md:py-24 bg-[#FAF7F0] scroll-mt-16 relative overflow-hidden border-b border-amber-900/10">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-1.5 bg-[#FEF9E7] text-[#C37932] text-xs font-bold px-3.5 py-1 rounded-full mb-3 border border-amber-200 shadow-2xs">
            <BadgeCheck className="w-3.5 h-3.5 text-[#F39C12]" />
            <span>Layanan Pengasuhan Sesuai Tahap Usia</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#16332A] mb-3">
            Program Layanan Day Care Asih Putera
          </h2>
          <div className="w-24 h-1 bg-[#00A896] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Pendampingan penuh kasih sayang dengan rasio terjaga, rutinitas teratur, stimulasi sensori motorik, dan pembiasaan adab Islami.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ALL_PROGRAMS.map((program) => (
            <div
              key={program.id}
              onClick={() => onSelectProgram(program)}
              className="bg-white rounded-3xl flex flex-col h-full border border-amber-200/80 hover:border-[#00A896] shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1.5 relative overflow-hidden"
            >
              {/* Playful Top-Right Corner Sticker */}
              <CornerSticker type={getStickerType(program.id)} />

              {/* Card Image */}
              <div className="relative h-48 overflow-hidden rounded-t-3xl bg-amber-50">
                <img
                  src={program.imageUrl}
                  alt={program.title}
                  className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Age Group Tag */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-[#00473A] text-xs font-extrabold px-3 py-1 rounded-full shadow-xs">
                  {program.ageGroup}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#16332A] group-hover:text-[#00A896] transition leading-snug mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 mb-4">
                    {program.description}
                  </p>
                </div>

                <div>
                  {/* Ratio & Schedule badges */}
                  <div className="space-y-1.5 mb-4 text-xs font-semibold">
                    <div className="flex items-center text-teal-800 bg-teal-50 px-2.5 py-1 rounded-xl">
                      <Users className="w-3.5 h-3.5 mr-1.5 text-[#00A896]" />
                      <span>{program.ratio}</span>
                    </div>
                    <div className="flex items-center text-amber-900 bg-amber-50 px-2.5 py-1 rounded-xl">
                      <Clock className="w-3.5 h-3.5 mr-1.5 text-[#F39C12]" />
                      <span className="truncate">{program.schedule}</span>
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="pt-3 border-t border-amber-100 flex items-center justify-between text-xs font-bold text-[#00A896] group-hover:text-[#00473A] transition">
                    <span>Lihat Detail Program</span>
                    <div className="w-7 h-7 rounded-full bg-teal-50 flex items-center justify-center group-hover:bg-[#00A896] group-hover:text-white transition">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

