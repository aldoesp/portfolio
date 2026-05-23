import React, { useState } from 'react';

export default function Navbar() {
  // 1. Vos rubriques gérées de façon dynamique
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'CTF', href: '#ctf' },
    { label: 'Certifications', href: '#certifications' },
  ];

  // Gestion de la rubrique active pour l'effet visuel
  const [activeLink, setActiveLink] = useState('#about');

  return (
    <div className="w-full fixed top-0 left-0 p-4 z-50 flex justify-center">
      <nav className="w-full max-w-5xl flex items-center justify-between px-6 py-3 bg-[#0d0d15]/60 backdrop-blur-md border border-zinc-800/50 rounded-2xl shadow-lg">
        
        {/* [Logo] - À remplacer par votre texte ou une image <img> */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500" /> 
          <span className="text-white font-bold text-lg tracking-tight">
            Aldo RANDRIAMANALINA
          </span>
        </div>

        {/* Liens et Bouton d'action */}
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {/* 2. Boucle dynamique sur vos liens */}
            {navLinks.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`transition-colors duration-200 ${
                    activeLink === link.href 
                      ? 'text-white font-semibold' 
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Bouton Contact mis en valeur (comme sur React Bits) */}
          <a 
            href="#contact"
            onClick={() => setActiveLink('#contact')}
            className="px-5 py-2 text-sm font-semibold text-zinc-950 bg-white rounded-xl hover:bg-zinc-100 transition-all active:scale-95 shadow-sm"
          >
            Contact
          </a>
        </div>

      </nav>
    </div>
  );
}