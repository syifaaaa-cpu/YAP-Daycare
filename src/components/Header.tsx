import React, { useState } from 'react';
import { ArrowRight, ChevronDown, Mail, Menu, Phone, X } from 'lucide-react';

interface HeaderProps { onOpenPpdb: () => void; onOpenVisit: () => void; onOpenBrochure: () => void; onSelectNav: (id: string) => void; }

export const Header: React.FC<HeaderProps> = ({ onOpenPpdb, onSelectNav }) => {
  const [open, setOpen] = useState(false);
  const links = [['Profil Daycare','profil'], ['Program','program'], ['Fasilitas','fasilitas'], ['Galeri','program'], ['Publikasi','program'], ['Hubungi','footer']];
  const go = (id: string) => { onSelectNav(id); setOpen(false); };
  return <>
    <div className="ref-topbar"><div><span><Phone /> Hotline 0811 2233 4455</span><span><Mail /> info@asihputera.sch.id</span></div><div><span>Orang Tua</span><span>Alumni</span><span>Karier</span><span>Donasi</span></div></div>
    <header className="ref-header"><a href="#" className="ref-logo"><img src="/images/logo-daycare.png" alt="Daycare Asih Putera" /></a><nav>{links.map(([label,id]) => <button key={label} onClick={() => go(id)}>{label}{label === 'Program' && <ChevronDown />}</button>)}<button className="ref-header-cta" onClick={onOpenPpdb}>PPDB 2026/2027 <ArrowRight /></button></nav><button className="ref-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></header>
    {open && <div className="ref-mobile-nav">{links.map(([label,id]) => <button key={label} onClick={() => go(id)}>{label}</button>)}<button onClick={onOpenPpdb}>PPDB 2026/2027</button></div>}
  </>;
};
