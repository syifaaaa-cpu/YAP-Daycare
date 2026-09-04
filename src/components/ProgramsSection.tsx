"use client";
import React from 'react';
import { Heart, Smile, BookOpen, Clock } from 'lucide-react';

const programs = [
  { title: 'Baby Care', text: 'Pendampingan penuh kasih, stimulasi sensori, dan rutinitas aman.', icon: Heart, image: '/images/konten-web-daycare/babycare.jpg' },
  { title: 'Toddler', text: 'Eksplorasi aktif, bahasa awal, motorik, dan sosial.', icon: Smile, image: '/images/konten-web-daycare/toddlercare.jpg' },
  { title: 'Pra-TK', text: 'Kemandirian, bahasa, bermain terarah, dan kesiapan sekolah.', icon: BookOpen, image: '/images/konten-web-daycare/sensori.png' },
  { title: 'Daycare Harian', text: 'Program fleksibel setengah hari atau penuh hari.', icon: Clock, image: '/images/konten-web-daycare/hero1.jpg' },
];

export function ProgramsSection() {
  return (
    <section className="ref-wrap ref-section" id="program">
      <h2 
        style={{ fontFamily: "'Comic Sans MS', 'Quicksand', cursive, sans-serif" }}
        className="ref-title text-3xl font-bold text-[#00382E]"
      >
        Layanan & Kelompok Usia<span />
      </h2>
      <div className="ref-grid four">
        {programs.map(card => {
          const IconComponent = card.icon;
          return (
            <article className="ref-card" key={card.title}>
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