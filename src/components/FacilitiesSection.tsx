"use client";
import React from 'react';
import { Home, Moon, Smile, Camera, Sun, Users } from 'lucide-react';

const facilities = [
  { title: 'Ruang Bermain Indoor', text: 'Area bermain aman & menyenangkan.', icon: Home, color: 'text-amber-500 bg-amber-50 border-amber-200' }, 
  { title: 'Area Tidur / Istirahat', text: 'Ruang istirahat nyaman & kondusif.', icon: Moon, color: 'text-indigo-500 bg-indigo-50 border-indigo-200' },
  { title: 'Toilet Training', text: 'Mendukung kemandirian anak.', icon: Smile, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' }, 
  { title: 'CCTV & Keamanan', text: 'Pengawasan ketat 24 jam.', icon: Camera, color: 'text-orange-500 bg-orange-50 border-orange-200' },
  { title: 'Area Outdoor', text: 'Eksplorasi motorik kasar.', icon: Sun, color: 'text-amber-600 bg-amber-50 border-amber-200' }, 
  { title: 'Update Orang Tua', text: 'Laporan harian buah hati.', icon: Users, color: 'text-rose-500 bg-rose-50 border-rose-200' },
];

export function FacilitiesSection() {
  return (
    <section className="ref-wrap ref-section py-12 overflow-hidden" id="fasilitas">
      <div className="text-center mb-10">
        <h2 
          style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
          className="text-3xl lg:text-4xl font-bold text-[#00382E] mb-2"
        >
          Fasilitas & Keamanan
        </h2>
        <div className="w-16 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
      </div>

      {/* Container utama dengan background gradasi hangat dan bisa digeser menyamping jika di layar kecil */}
      <div className="bg-gradient-to-br from-amber-50/60 via-white to-emerald-50/40 p-6 sm:p-8 rounded-[2.5rem] border-2 border-amber-200/50 shadow-lg">
        <div className="overflow-x-auto pb-4 pt-2">
          <div className="flex items-center gap-5 min-w-[1000px] px-2">
            {facilities.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div 
                  key={idx}
                  className="flex-1 bg-white p-5 rounded-[2rem] border-2 border-amber-200/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[190px]"
                >
                  {/* Bagian Ikon di Atas */}
                  <div className={`w-14 h-14 rounded-2xl ${card.color} border-2 flex items-center justify-center shadow-md mb-3`}>
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Bagian Teks di Bawah */}
                  <div>
                    <h3 
                      style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
                      className="text-xs sm:text-sm font-bold text-[#00382E] mb-1 leading-snug"
                    >
                      {card.title}
                    </h3>
                    <p className="text-[11px] text-gray-500 leading-tight">
                      {card.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}