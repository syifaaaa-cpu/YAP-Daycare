"use client";
import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CtaSection({ onOpenPpdb = () => alert("Membuka halaman PPDB 2026/2027") }: { onOpenPpdb?: () => void }) {
  return (
    <section className="ref-wrap ref-cta">
      <div>
        <h2>Bergabunglah Bersama<br />Daycare Asih Putera</h2>
        <p>Tempat terbaik untuk menitipkan sekaligus menumbuhkan buah hati dengan aman, hangat, dan bermakna.</p>
      </div>
      <button onClick={onOpenPpdb}>Daftar PPDB Sekarang <ArrowRight className="w-4 h-4 ml-1" /></button>
    </section>
  );
}