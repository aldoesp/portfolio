import React, { useState } from 'react';

export default function Navbar() {
  // État pour le thème : 'dark' (bleu cyber) ou 'night' (noir/vert matrix)
  const [theme, setTheme] = useState('dark');
  // État pour la langue : 'FR' ou 'EN'
  const [language, setLanguage] = useState('FR');
  const [activeLink, setActiveLink] = useState('#about');

  // Liens de navigation dynamiques selon la langue
  const navLinks = {
    FR: [
      { label: 'À propos', href: '#about' },
      { label: 'Compétences', href: '#skills' },
      { label: 'Projets', href: '#projects' },
      { label: 'CTF', href: '#ctf' },
      { label: 'Certifications', href: '#certifications' },
    ],
    EN: [
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Projects', href: '#projects' },
      { label: 'CTF', href: '#ctf' },
      { label: 'Certifications', href: '#certifications' },
    ]
  };

  // Fonction pour basculer le thème
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'night' : 'dark';
    setTheme(nextTheme);
    
    // On bascule la classe sur la balise HTML globale pour que tout le site change
    if (nextTheme === 'night') {
      document.documentElement.classList.add('night-mode');
    } else {
      document.documentElement.classList.remove('night-mode');
    }
  };

  return (
    <div className="w-full fixed top-0 left-0 p-4 z-50 flex justify-center font-mono">
      <nav className={`w-full max-w-6xl backdrop-blur-md border rounded-xl shadow-xl overflow-hidden transition-colors duration-300 ${
        theme === 'night' 
          ? 'bg-black/90 border-green-900/60' 
          : 'bg-[#070a1e]/80 border-zinc-800'
      }`}>
        
        {/* Barre supérieure style Gnome */}
        <div className={`px-4 py-1.5 flex items-center justify-between border-b select-none transition-colors duration-300 ${
          theme === 'night' ? 'bg-[#050505] border-green-950' : 'bg-[#0b0f26] border-zinc-900'
        }`}>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="text-zinc-500 text-[10px]">
            {theme === 'night' ? 'session: root@matrix:~' : 'session: root@dodo:~'}
          </span>
          <div className="w-10" />
        </div>

        {/* Corps de la Nav */}
        <div className="px-5 py-3 flex items-center justify-between gap-4">
          
          {/* Logo gauche */}
          <div className="flex items-center gap-2 cursor-pointer text-sm">
            <span className={theme === 'night' ? 'text-green-500 font-bold' : 'text-red-400 font-bold'}>
              root@dodo
            </span>
            <span className="text-zinc-500">:</span>
            <span className={theme === 'night' ? 'text-green-400' : 'text-cyan-400'}>~</span>
            <span className="text-zinc-200 font-bold">$</span>
          </div>

          {/* Liens du milieu (adaptatifs selon la langue) */}
          <ul className="hidden lg:flex items-center gap-6 text-xs">
            {navLinks[language].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`transition-colors duration-150 ${
                    activeLink === link.href
                      ? theme === 'night' ? 'text-green-400 font-bold' : 'text-cyan-400 font-bold'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {activeLink === link.href ? `> ${link.label}` : link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Boutons de contrôle (Thème, Langue, Contact) */}
          <div className="flex items-center gap-4 text-xs">
            
            {/* 1. Bouton TOGGLE THÈME */}
            <button 
              onClick={toggleTheme}
              className={`p-1.5 rounded border transition-all active:scale-95 cursor-pointer ${
                theme === 'night' 
                  ? 'border-green-500/30 text-green-400 hover:bg-green-500/10' 
                  : 'border-zinc-700 text-yellow-400 hover:bg-zinc-800'
              }`}
              title={theme === 'night' ? "Passer en mode Cyber Dark" : "Passer en mode Midnight Matrix"}
            >
              {theme === 'night' ? '🟢 NIGHT' : '🔵 DARK'}
            </button>

            {/* 2. Bouton SELECT LANGUE */}
            <button
              onClick={() => setLanguage(language === 'FR' ? 'EN' : 'FR')}
              className={`px-2 py-1.5 border rounded font-bold transition-all active:scale-95 cursor-pointer ${
                theme === 'night'
                  ? 'border-green-500/30 text-green-400 hover:bg-green-500/10'
                  : 'border-zinc-700 text-cyan-400 hover:bg-zinc-800'
              }`}
            >
              {language === 'FR' ? '🌐 FR' : '🌐 EN'}
            </button>

            {/* Bouton Contact */}
            <a
              href="#contact"
              className={`px-3 py-1.5 border rounded transition-all font-bold text-[10px] uppercase tracking-wider block ${
                theme === 'night'
                  ? 'border-green-500/40 text-green-400 hover:bg-green-500/20'
                  : 'border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10'
              }`}
            >
              [ Contact ]
            </a>
          </div>

        </div>
      </nav>
    </div>
  );
}