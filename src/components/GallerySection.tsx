import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/mockData';
import { GalleryItem } from '../types';
import { Image as ImageIcon, Sparkles, X, Calendar, Tag } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'sentra' | 'tahfidz' | 'outdoor' | 'adab' | 'event'>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Momen' },
    { id: 'sentra', label: 'Sentra Main & Seni' },
    { id: 'tahfidz', label: 'Tahfidz & Ibadah' },
    { id: 'outdoor', label: 'Outdoor & Eco-Play' },
    { id: 'adab', label: 'Adab & Makan Sehat' },
    { id: 'event', label: 'Acara & Milad' }
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="galeri-section" className="py-16 md:py-24 bg-white relative overflow-hidden scroll-mt-16">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-1.5 bg-amber-100/80 text-asih-orange text-xs font-semibold px-3.5 py-1 rounded-full mb-3 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dokumentasi Kegiatan Nyata</span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-asih-green mb-4">
            Galeri Ceria Santri Cilik Asih Putera
          </h2>
          <div className="w-24 h-1 bg-asih-orange mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            Intip keceriaan santri cilik saat mengeksplorasi sentra, melafalkan ayat suci, dan bermain bersama sahabat.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-asih-green text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-amber-100 hover:text-asih-orange'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="bg-asih-light rounded-3xl overflow-hidden border border-amber-200/60 shadow-xs hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden bg-amber-50">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-semibold flex items-center">
                    <ImageIcon className="w-3.5 h-3.5 mr-1" />
                    Klik untuk memperbesar
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-bold text-asih-green shadow-xs">
                  {item.category.toUpperCase()}
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center text-[11px] text-gray-500 mb-1.5 space-x-3">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1 text-asih-orange" />
                    {item.date}
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base text-asih-green group-hover:text-asih-orange transition mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black text-white p-2 rounded-full transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[420px] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-2 text-xs text-asih-orange font-bold mb-2">
                <Tag className="w-3.5 h-3.5" />
                <span className="uppercase">{activeImage.category}</span>
                <span>•</span>
                <span className="text-gray-500">{activeImage.date}</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-asih-green mb-2">
                {activeImage.title}
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                {activeImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
