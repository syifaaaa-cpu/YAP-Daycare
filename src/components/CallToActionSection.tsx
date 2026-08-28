import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CTA_AVATARS } from '../data/mockData';

interface CallToActionSectionProps {
  onOpenPpdb: () => void;
  onOpenVisit: () => void;
}

export const CallToActionSection: React.FC<CallToActionSectionProps> = ({
  onOpenPpdb,
  onOpenVisit
}) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-asih-green rounded-3xl p-8 md:p-12 text-white flex flex-col lg:flex-row items-center justify-between relative overflow-hidden shadow-2xl">
          
          <div className="lg:w-2/3 mb-8 lg:mb-0 relative z-10 text-center lg:text-left flex flex-col md:flex-row items-center">
            {/* Overlapping Avatars */}
            <div className="shrink-0 mb-6 md:mb-0 md:mr-8 flex items-center justify-center">
              <img
                alt="Anak ceria 1"
                className="w-18 h-18 sm:w-20 sm:h-20 rounded-full object-cover border-3 border-asih-orange -mr-4 z-20 shadow-md transform hover:scale-105 transition"
                src={CTA_AVATARS[0]}
                referrerPolicy="no-referrer"
              />
              <img
                alt="Anak ceria 2"
                className="w-18 h-18 sm:w-20 sm:h-20 rounded-full object-cover border-3 border-asih-orange z-10 shadow-md transform hover:scale-105 transition"
                src={CTA_AVATARS[1]}
                referrerPolicy="no-referrer"
              />
            </div>

            <div>
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-2.5 tracking-tight">
                Bergabunglah Bersama Daycare Asih Putera
              </h2>
              <p className="text-green-100/90 text-sm md:text-base leading-relaxed max-w-xl">
                Tempat terbaik untuk menitipkan sekaligus menumbuhkan buah hati dengan aman, hangat, dan bermakna.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col space-y-3 sm:space-y-0 sm:space-x-3 lg:space-x-0 lg:space-y-3 relative z-10 w-full lg:w-auto shrink-0">
            <button
              onClick={onOpenPpdb}
              className="bg-asih-orange hover:bg-amber-700 text-white px-8 py-3.5 rounded-full font-medium transition inline-flex justify-center items-center shadow-md cursor-pointer group whitespace-nowrap"
            >
              <span>Daftar PPDB Sekarang</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onOpenVisit}
              className="bg-white text-asih-green hover:bg-gray-50 px-8 py-3.5 rounded-full font-medium transition inline-flex justify-center items-center shadow-sm cursor-pointer group whitespace-nowrap"
            >
              <span>Kunjungi Daycare</span>
              <ArrowRight className="w-4 h-4 ml-2 text-asih-green group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Decorative background geometry */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-15 hidden lg:block pointer-events-none">
            <svg height="220" viewBox="0 0 200 200" width="220" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,100 L200,100 M100,0 L100,200 M29,29 L171,171 M171,29 L29,171" stroke="#FFFFFF" strokeWidth="2"></path>
              <circle cx="100" cy="100" fill="none" r="70" stroke="#FFFFFF" strokeWidth="2"></circle>
              <rect fill="none" height="100" stroke="#FFFFFF" strokeWidth="2" width="100" x="50" y="50"></rect>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
