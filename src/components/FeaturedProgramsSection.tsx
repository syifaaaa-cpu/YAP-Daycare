import React from 'react';
import { Sparkles, BookOpen, Sprout, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Sparkles: Sparkles,
  BookOpen: BookOpen,
  Sprout: Sprout,
};

export interface FeaturedProgramItem {
  title: string;
  text: string;
  iconName: string;
  image: string;
}

interface FeaturedProgramsSectionProps {
  data?: FeaturedProgramItem[];
}

export function FeaturedProgramsSection({ data }: FeaturedProgramsSectionProps) {
  const defaultFeatured = [
    { title: 'Ragam Main Bermakna', text: 'Belajar sambil bermain yang menyenangkan dan terarah.', iconName: 'Sparkles', image: '/images/konten-web-daycare/sensori.png' },
    { title: 'Tahfidz & Adab Harian', text: 'Pembiasaan doa, adab, dan nilai Islam sejak dini.', iconName: 'BookOpen', image: '/images/konten-web-daycare/tahfiz.png' },
    { title: 'Sensori-Motorik & Kemandirian', text: 'Mengasah gerak, otot halus, dan rasa percaya diri.', iconName: 'Sprout', image: '/images/konten-web-daycare/kegiatan outdoor.png' },
  ];

  const itemsToDisplay = data && data.length > 0 ? data : defaultFeatured;

  return (
    <section className="ref-wrap ref-section">
      <h2 
        style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
        className="ref-title text-3xl font-bold text-[#00382E]"
      >
        Program Unggulan Daycare Asih Putera<span />
      </h2>
      <div className="ref-grid three">
        {itemsToDisplay.map((card, index) => {
          const IconComponent = iconMap[card.iconName] || Sparkles;
          return (
            <article className="ref-card" key={`${card.title}-${index}`}>
              {card.image && <img src={card.image} alt="" className="ref-card-image" />}
              <IconComponent className="ref-icon text-emerald-600" />
              <div>
                <h3 
                  style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
                  className="font-bold text-[#00382E]"
                >
                  {card.title}
                </h3>
                <p>{card.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}