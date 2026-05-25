import React, { useState, useEffect } from 'react';
// Si tu as lucide-react d'installé, sinon tu peux enlever les icônes
import { Terminal, Shield, Network } from 'lucide-react';

export default function Hero() {
  // Génération de faux logs d'infrastructure pour l'arrière-plan
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const backgroundLogs = [
      "[INFO] kernel: [ 0.000000] Linux version 6.1.0-kali3-amd64",
      "[SEC] Suricata: [1:2010935:3] ET POLICY Suspicious Inbound",
      "[SYS] systemd[1]: Started Wazuh manager.",
      "[NET] OPNsense: pf: rule 4/0(match): block in on wan",
      "[WARN] sshd[1432]: Failed password for invalid user root",
      "[INFO] kernel: eth0: link up, 1000Mbps, full-duplex",
      "[SEC] PIDS: HTTP transaction anomaly detected on port 443",
      "[SYS] Docker: container 'mitm-lab' started successfully.",
      "[NET] BGP: %BGP-5-ADJCHANGE: neighbor 192.168.10.1 Up",
      "[INFO] pam_unix(sudo:session): session opened for user root",
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      setLogs(prev => {
        const newLogs = [...prev, backgroundLogs[currentIndex]];
        return newLogs.length > 15 ? newLogs.slice(1) : newLogs;
      });
      currentIndex = (currentIndex + 1) % backgroundLogs.length;
    }, 800); // Vitesse d'apparition des logs

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-[#03050a] text-white overflow-hidden pt-20">
      
      {/* =========================================
          ARRIÈRE-PLAN : Terminal flou & Réseau
      ========================================= */}
      
      {/* 1. Grille très discrète */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size:[3rem_3rem] opacity-10" />
      
      {/* 2. Taches de lumière (Glow) bleues/cyan */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-blue-900/10 rounded-full blur-[150px] pointer-events-none" />

      {/* 3. Terminal de fond flou et défilant */}
      <div className="absolute right-[-10%] top-[20%] w-[60%] h-[70%] font-mono text-[10px] sm:text-xs text-cyan-500/20 opacity-50 blur-[2px] select-none pointer-events-none overflow-hidden flex flex-col justify-end pb-10 mask-image-fade">
        <div className="absolute inset-0 bg-gradient-to-t from-[#03050a] via-transparent to-[#03050a] z-10" />
        {logs.map((log, index) => (
          <div key={index} className="whitespace-nowrap mb-2 ml-8 tracking-widest">
            {log}
          </div>
        ))}
      </div>

      {/* =========================================
          CONTENU PRINCIPAL
      ========================================= */}
      
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-start justify-center">
        
        {/* Petit texte au-dessus (Étiquette technique) */}
        <div className="flex items-center gap-3 px-4 py-1.5 border border-zinc-800/80 bg-zinc-900/30 backdrop-blur-sm rounded-full mb-8">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span className="font-mono text-xs md:text-sm text-zinc-300 tracking-wide">
            Étudiant ENI <span className="text-cyan-500 mx-1">•</span> Infrastructure & Cybersécurité
          </span>
        </div>

        {/* Gros titre */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8 max-w-4xl text-zinc-100">
          Je construis des infrastructures <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            sécurisées et supervisées.
          </span>
        </h1>

        {/* Sous-texte */}
        <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mb-12 font-light">
          Passionné par Linux, les réseaux et la cybersécurité, je développe des projets autour de la supervision, du cloud et des infrastructures réseau.
        </p>

        {/* Boutons CTA */}
        <div className="flex flex-wrap items-center gap-5 font-mono text-sm">
          <a 
            href="#projects" 
            className="flex items-center gap-2 px-6 py-3.5 bg-cyan-500 text-[#03050a] font-bold rounded hover:bg-cyan-400 transition-all active:scale-95 shadow-[0_0_20px_rgba(34,211,238,0.2)]"
          >
            <Network className="w-4 h-4" />
            Voir mes projets
          </a>
          
          <a 
            href="#cv" 
            className="flex items-center gap-2 px-6 py-3.5 border border-zinc-700 text-zinc-300 rounded hover:bg-zinc-800 hover:text-white transition-all active:scale-95"
          >
            <Shield className="w-4 h-4 text-zinc-400" />
            Télécharger CV
          </a>
        </div>

      </div>
    </section>
  );
}