import React, { useState } from 'react';

export default function Navbar() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'CTF', href: '#ctf' },
    { label: 'Contact', href: '#contact' },
  ];

  const [activeLink, setActiveLink] = useState('#about');

  return (
    <div className="w-full fixed top-0 left-0 p-4 z-50 flex justify-center">
      {/* Fenêtre du Terminal */}
      <nav className="w-full max-w-5xl bg-[#0a0a10]/90 backdrop-blur-md border border-zinc-700 rounded-lg shadow-2xl font-mono text-sm overflow-hidden">
        
        {/* Barre supérieure du terminal (Style Linux/Gnome) */}
        <div className="bg-[#12121a] px-4 py-2 flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-xs text-zinc-500 select-none">bash — root@dodo:~</span>
          <div className="w-12" /> {/* Équilibreur de centrage */}
        </div>

        {/* Corps du Terminal */}
        <div className="p-4 flex flex-col gap-3">
          
          {/* Ligne 1 : L'invite de commande de l'attaquant/admin */}
          <div className="flex items-center gap-2 select-none">
            <span className="text-red-500 font-bold">root@dodo</span>
            <span className="text-zinc-400">:</span>
            <span className="text-indigo-400">~</span>
            <span className="text-zinc-200 font-bold">$</span>
            <span className="w-2 h-4 bg-zinc-400 animate-[pulse_1s_infinite] inline-block ml-1" />
          </div>

          {/* Ligne 2 : Rubriques à gauche et Boutons à droite */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-1">
            
            {/* Liens de navigation (Style Commandes Linux) */}
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.href)}
                    className={`transition-all duration-150 relative ${
                      activeLink === link.href
                        ? 'text-green-400 font-bold before:content-[">_"] before:mr-1'
                        : 'text-zinc-400 hover:text-zinc-200 hover:underline decoration-zinc-600'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Actions de fin : [CV] et [GH] (Style Badges de terminal) */}
            <div className="flex items-center gap-3 self-end sm:self-auto text-xs">
              <a
                href="#cv"
                className="px-2.5 py-1 border border-green-500/40 text-green-400 rounded hover:bg-green-500/10 transition-colors"
              >
                [CV]
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 border border-zinc-600 text-zinc-300 rounded hover:bg-zinc-800 transition-colors"
              >
                [GH]
              </a>
            </div>

          </div>

        </div>
      </nav>
    </div>
  );
}