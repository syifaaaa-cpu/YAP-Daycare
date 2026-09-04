"use client";
import React from 'react';
import { Heart, Users, Star, Brain, Sparkles } from 'lucide-react';

export function CoreValuesSection() {
  const values = [
    ['Cageur', Heart], ['Bageur', Users], ['Bener', Star], ['Pinter', Brain], ['Singer', Sparkles]
  ];

  return (
    <section className="ref-wrap ref-values">
      <div className="ref-values-heading"><strong>Nilai Inti<br />Daycare Asih Putera</strong></div>
      {values.map(([label, Icon]) => (
        <div className="ref-value" key={label as string}>
          <Icon className="w-6 h-6 text-emerald-700" />
          <b>{label as string}</b>
          <small>Sehat, baik, jujur, cerdas, dan mandiri.</small>
        </div>
      ))}
    </section>
  );
}