"use client";
import React, { useState } from "react";
import { ArrowRight, ChevronDown, Mail, Menu, Phone, X } from "lucide-react";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const links = [
    ["Profil Daycare", "profil"],
    ["Program", "program"],
    ["Fasilitas", "fasilitas"],
    ["Galeri", "program"],
    ["Publikasi", "program"],
    ["Hubungi", "footer"],
  ];

  const go = (id: string) => {
    setOpen(false);
    // Logika scroll halaman lokal
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenPpdb = () => {
    // Aksi ketika tombol PPDB diklik (bisa diisi link pendaftaran atau modal)
    alert("Membuka halaman PPDB 2026/2027");
  };

  return (
    <>
      <div className="ref-topbar">
        <div>
          <span>
            <Phone /> Hotline 0811 2233 4455
          </span>
          <span>
            <Mail /> info@asihputera.sch.id
          </span>
        </div>
        <div>
          <span>Orang Tua</span>
          <span>Alumni</span>
          <span>Karier</span>
          <span>Donasi</span>
        </div>
      </div>

      <header
        className="ref-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "4%",
          paddingRight: "4%",
        }}
      >
        <a href="#" className="ref-logo" style={{ flexShrink: 0 }}>
          <img
            src="/images/logo-daycare.png"
            alt="Daycare Asih Putera"
            style={{ height: "42px", width: "auto", objectFit: "contain" }}
          />
        </a>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.2rem",
            flexGrow: 1,
            marginLeft: "2rem",
            marginRight: "2rem",
            fontSize: "1rem",
            fontWeight: 600,
          }}
        >
          {links.map(([label, id]) => (
            <button
              key={label}
              onClick={() => go(id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#00382E",
                whiteSpace: "nowrap",
              }}
            >
              {label}
              {label === "Program" && (
                <ChevronDown style={{ width: "14px", height: "14px" }} />
              )}
            </button>
          ))}
        </nav>

        <div style={{ flexShrink: 0 }}>
          <button
            className="ref-header-cta"
            onClick={handleOpenPpdb}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: "8px",
              whiteSpace: "nowrap",
              fontSize: "0.95rem",
            }}
          >
            <span>PPDB 2026/2027</span>
            <ArrowRight style={{ width: "16px", height: "16px" }} />
          </button>
        </div>

        <button className="ref-menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>

      {open && (
        <div className="ref-mobile-nav">
          {links.map(([label, id]) => (
            <button key={label} onClick={() => go(id)}>
              {label}
            </button>
          ))}
          <button onClick={handleOpenPpdb}>PPDB 2026/2027</button>
        </div>
      )}
    </>
  );
};