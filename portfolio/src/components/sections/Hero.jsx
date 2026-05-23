import React, { useState, useEffect } from 'react';

export default function Hero() {
  // Machine à états pour le faux terminal cyber
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [step, setStep] = useState(0);

  const script = [
    { type: 'command', text: 'sudo systemctl status wazuh-manager' },
    { type: 'output', text: '● wazuh-manager.service - Wazuh Manager\n   Loaded: loaded (/lib/systemd/system/wazuh-manager.service)\n   Active: active (running) since Tue 2026-05-12; 4h continuous\n   Tasks: 42 (limit: 4915)\n   CGroup: /system.slice/wazuh-manager.service' },
    { type: 'command', text: 'nmap -sV -T4 192.168.1.0/24' },
    { type: 'output', text: 'Starting Nmap 7.94 ( https://nmap.org )\nNmap scan report for local-gateway (192.168.1.1)\nHost is up (0.0012s latency).\nPORT   STATE SERVICE\n22/tcp open  ssh\n80/tcp open  http\n[+] Scan finished: 256 IP addresses scanned.' },
    { type: 'command', text: 'pids --live-analyze' },
    { type: 'alert', text: '[⚠️] ALERT: ARP Spoofing Mitigation Triggered\n[🛡️] ACTION: OPNsense dynamically isolated attacker MAC.' }
  ];

  useEffect(() => {
    if (step >= script.length) {
      const timeout = setTimeout(() => {
        setTerminalLines([]);
        setStep(0);
      }, 5000); // Reste figé 5s à la fin avant de relancer la boucle
      return () => clearTimeout(timeout);
    }

    const currentItem = script[step];

    if (currentItem.type === 'command') {
      let index = 0;
      setCurrentPrompt('root@dodo:~$ ');
      const interval = setInterval(() => {
        setCurrentPrompt((prev) => prev + currentItem.text[index]);
        index++;
        if (index >= currentItem.text.length) {
          clearInterval(interval);
          setTimeout(() => {
            setTerminalLines((prev) => [...prev, { type: 'command', text: 'root@dodo:~$ ' + currentItem.text }]);
            setCurrentPrompt('');
            setStep((prev) => prev + 1);
          }, 400);
        }
      }, 60); // Vitesse d'écriture des commandes
      return () => clearInterval(interval);
    } else {
      // Pour les outputs et alertes, affichage immédiat après un léger délai système
      const timeout = setTimeout(() => {
        setTerminalLines((prev) => [...prev, currentItem]);
        setStep((prev) => prev + 1);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [step]);

  return (
    <section className="min-h-screen bg-[#050816] text-white pt-28 flex items-center relative overflow-hidden">
      
      {/* Effet visuel de fond : Lueurs Cyber & Grille SOC */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1129_1px,transparent_1px),linear-gradient(to_bottom,#0c1129_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        
        {/* PARTIE GAUCHE: Identité et Accroche (5 Colonnes sur Large) */}
        <div className="lg:col-span-6 flex flex-col justify-center text-center lg:text-left">
          
          {/* Tag d'accueil style CLI */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/40 border border-cyan-800/60 rounded-full text-cyan-400 font-mono text-xs w-fit mx-auto lg:mx-0 mb-6 shadow-sm shadow-cyan-500/5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>sysadmin_identity_initialized</span>
          </div>

          {/* Titre Immense Scindé */}
          <h1 className="text-4xl md:text-6xl font-extrabold font-sans tracking-tight leading-[1.1] mb-6">
            System Administrator
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 font-black">
              & Security Enthusiast
            </span>
          </h1>

          {/* Phrase forte et résumé des compétences clés */}
          <p className="text-zinc-400 text-base md:text-lg font-normal max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            Building secure infrastructures, hardening server deployments, and engineering resilient automated network defensive systems.
          </p>

          <div className="font-mono text-xs text-zinc-500 mb-8 flex flex-wrap gap-x-4 gap-y-2 justify-center lg:justify-start">
            <span className="text-zinc-400">⚡ Linux OS</span> • <span>SIEM & Wazuh</span> • <span>OPNsense Firewalls</span> • <span>Docker/K8s</span>
          </div>

          {/* CTA Buttons - Style Terminal Rétro Tactique */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-cyan-500 text-[#050816] font-mono font-bold text-sm rounded shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 active:scale-95 transition-all"
            >
              ./view_projects.sh
            </a>
            <a 
              href="#cv" 
              className="px-6 py-3 border border-zinc-700 text-zinc-300 font-mono font-medium text-sm rounded hover:bg-zinc-900 hover:border-zinc-500 active:scale-95 transition-all"
            >
              cat cv_resume.pdf
            </a>
          </div>

        </div>

        {/* PARTIE DROITE: Le Cyber Terminal Interactif (6 Colonnes sur Large) */}
        <div className="lg:col-span-6 w-full">
          <div className="w-full bg-[#070a19]/90 border border-zinc-800 rounded-xl shadow-2xl shadow-cyan-950/20 font-mono text-xs overflow-hidden h-[340px] flex flex-col">
            
            {/* Header du composant terminal */}
            <div className="bg-[#0c1026] px-4 py-2.5 flex items-center justify-between border-b border-zinc-900/80 select-none">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <span className="text-[10px] text-zinc-400">interactive_monitor.sh</span>
              <span className="text-[10px] text-zinc-600">v1.4.2</span>
            </div>

            {/* Zone d'affichage des commandes */}
            <div className="p-4 flex-1 overflow-y-auto space-y-3 scrollbar-none bg-[#050713]">
              
              {terminalLines.map((line, idx) => (
                <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                  {line.type === 'command' && (
                    <span className="text-zinc-200">{line.text}</span>
                  )}
                  {line.type === 'output' && (
                    <span className="text-zinc-400 block pl-2 border-l border-zinc-800 my-1">{line.text}</span>
                  )}
                  {line.type === 'alert' && (
                    <span className="text-red-400 font-bold block bg-red-950/20 border border-red-900/50 p-2 rounded my-1 animate-[pulse_2s_infinite]">
                      {line.text}
                    </span>
                  )}
                </div>
              ))}

              {/* Ligne d'écriture courante */}
              {currentPrompt && (
                <div className="text-zinc-200">
                  {currentPrompt}
                  <span className="w-1.5 h-3.5 bg-cyan-400 inline-block align-middle ml-0.5 animate-[ping_1s_infinite]" />
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}