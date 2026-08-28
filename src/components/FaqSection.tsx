import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { HelpCircle, ChevronDown, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<'all' | 'internal' | 'pendaftaran' | 'kegiatan' | 'kesehatan'>('all');

  const filteredFaqs = activeCategory === 'all'
    ? FAQS
    : FAQS.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-16 md:py-24 bg-[#FAF7F0] relative overflow-hidden scroll-mt-16 border-b border-amber-900/10">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-1.5 bg-[#FEF9E7] text-[#C37932] text-xs font-bold px-3.5 py-1 rounded-full mb-3 border border-amber-200 shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#F39C12]" />
            <span>Pusat Tanya Jawab &amp; Penjelasan Unit</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-[#16332A] mb-3">
            Pertanyaan yang Sering Diajukan Orang Tua
          </h2>
          <div className="w-24 h-1 bg-[#00A896] mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Penjelasan transparan seputar filosofi pengasuhan, komunikasi harian, rutinitas, dan pendaftaran Day Care Asih Putera.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'Semua FAQ' },
              { id: 'internal', label: '⭐ Filosofi & Strategis' },
              { id: 'pendaftaran', label: 'Pendaftaran & Usia' },
              { id: 'kegiatan', label: 'Adaptasi & Kegiatan' },
              { id: 'kesehatan', label: 'Gizi & Kebersihan' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#00473A] text-white shadow-xs'
                    : 'bg-white text-gray-700 hover:bg-amber-100/60 border border-amber-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#00A896] bg-white shadow-sm ring-1 ring-[#00A896]/20'
                    : 'border-amber-200/80 bg-white hover:border-amber-300 shadow-2xs'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between space-x-4 cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    {faq.isStrategic && (
                      <span className="text-[10px] bg-amber-100 text-amber-900 font-extrabold px-2 py-0.5 rounded-full shrink-0">
                        Strategis
                      </span>
                    )}
                    <span className="font-serif font-bold text-sm sm:text-base text-[#16332A]">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#00A896] text-white rotate-180' : 'bg-gray-100 text-gray-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-gray-700 text-xs sm:text-sm leading-relaxed border-t border-amber-100 pt-3">
                    <p className="bg-[#FAF7F0] p-3.5 rounded-xl border-l-3 border-[#00A896] font-medium text-[#16332A]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Reassurance Callout */}
        <div className="max-w-2xl mx-auto mt-12 bg-white rounded-3xl p-6 border border-amber-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-sm text-[#16332A]">Masih ada pertanyaan seputar ananda?</h4>
            <p className="text-xs text-gray-600">Tim konselor Day Care Asih Putera siap berdiskusi dengan hangat.</p>
          </div>
          <a
            href="https://wa.me/6281223456789?text=Halo%20Day%20Care%20Asih%20Putera,%20saya%20ingin%20konsultasi%20pengasuhan%20ananda"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00A896] hover:bg-[#028090] text-white px-5 py-2.5 rounded-full text-xs font-bold transition flex items-center space-x-2 shrink-0 cursor-pointer shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Konsultasi WA</span>
          </a>
        </div>

      </div>
    </section>
  );
};
