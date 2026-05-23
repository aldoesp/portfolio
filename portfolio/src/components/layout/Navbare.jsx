import React, { useState } from 'react';

export default function Navbar() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'CTF', href: '#ctf' },
    { label: 'Certifications', href: '#certifications' },
  ];

  const [activeLink, setActiveLink] = useState('#about');

  return (
    <div className="w-full fixed top-0 left-0 p-4 z-50 flex justify-center">
      <nav className="w-full max-w-6xl bg-[#070a1e]/80 backdrop-blur-md border border-zinc-800 rounded-xl shadow-xl font-mono text-xs overflow-hidden">
        {/* Barre supérieure */}
        <div className="bg-[#0b0f26] px-4 py-2 flex items-center justify-between border-b border-zinc-900 select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="text-zinc-500 text-[10px]">session: root@dodo:~</span>
          <div className="w-10" />
        </div>

        {/* Corps de la Nav */}
        <div className="px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-1">
            <span className="text-red-400 font-bold">root@dodo</span>
            <span className="text-zinc-500">:</span>
            <span className="text-cyan-400">~</span>
            <span className="text-zinc-200 font-bold">$</span>
          </div>

          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.href)}
                  className={`transition-colors duration-150 relative ${
                    activeLink === link.href
                      ? 'text-cyan-400 font-bold before:content-["_>"] before:text-cyan-500'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="px-3 py-1 border border-cyan-500/30 text-cyan-400 rounded hover:bg-cyan-500/10 transition-all font-bold text-[11px] uppercase tracking-wider"
          >
            [ Contact ]
          </a>
        </div>
      </nav>
    </div>
  );
}