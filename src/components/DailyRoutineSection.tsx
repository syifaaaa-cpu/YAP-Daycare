"use client";
import React from 'react';
import { Sun, Heart, Apple, Blocks, Utensils, Moon, Smile } from 'lucide-react';

export function DailyRoutineSection() {
  const routine = [
    { time: '07.30 - 08.30', label: 'Penyambutan', icon: Sun, color: 'text-amber-500 bg-amber-50 border-amber-200' },
    { time: '08.30 - 09.00', label: 'Morning Circle', icon: Heart, color: 'text-rose-500 bg-rose-50 border-rose-200' },
    { time: '09.00 - 09.30', label: 'Snack Sehat', icon: Apple, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
    { time: '09.30 - 11.00', label: 'Main & Eksplorasi', icon: Blocks, color: 'text-orange-500 bg-orange-50 border-orange-200' },
    { time: '11.00 - 11.30', label: 'Istirahat', icon: Utensils, color: 'text-teal-600 bg-teal-50 border-teal-200' },
    { time: '11.30 - 12.15', label: 'Makan Siang', icon: Sun, color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { time: '12.15 - 14.30', label: 'Nap Time', icon: Moon, color: 'text-indigo-500 bg-indigo-50 border-indigo-200' },
    { time: '14.30 - 15.00', label: 'Pulang & Update', icon: Smile, color: 'text-rose-500 bg-rose-50 border-rose-200' }
  ];

  return (
    <section className="ref-wrap ref-section py-12">
      <div className="text-center mb-10">
        <h2 
          style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
          className="text-3xl lg:text-4xl font-bold text-[#00382E] mb-2"
        >
          Rutinitas Harian Anak
        </h2>
        <div className="w-16 h-1.5 bg-amber-400 mx-auto rounded-full"></div>
      </div>

      <div className="bg-gradient-to-br from-amber-50/60 via-white to-emerald-50/40 p-6 sm:p-10 rounded-[2.5rem] border-2 border-amber-200/50 shadow-lg">
        <div className="overflow-x-auto pb-4 pt-2">
          <div className="flex items-center justify-between min-w-[900px] px-4 py-2 relative">
            
            {/* Garis penghubung di latar belakang */}
            <div className="absolute left-10 right-10 top-8 h-1 bg-amber-200/80 -z-0 rounded-full"></div>

            {routine.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center relative z-10 group">
                  {/* Lingkaran Ikon */}
                  <div className={`w-14 h-14 rounded-2xl ${item.color} border-2 flex items-center justify-center shadow-md mb-3 group-hover:scale-110 transition-transform duration-300 bg-white`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  {/* Nama Kegiatan dipindah ke atas & ditebalkan agar langsung dilirik */}
                  <span 
                    style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
                    className="block text-xs font-bold text-[#00382E] mb-1 whitespace-nowrap bg-white/95 px-2.5 py-1 rounded-lg shadow-sm border border-emerald-100"
                  >
                    {item.label}
                  </span>

                  {/* Jam kegiatan dipindah ke bawah dengan warna abu-abu lembut */}
                  <span className="text-[11px] text-gray-500 font-medium whitespace-nowrap">
                    {item.time}
                  </span>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}