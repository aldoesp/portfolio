import React, { useState, useRef, useEffect } from 'react';

export default function TerminalMode({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: '=== BIENVENUE SUR LE TERMINAL PORTFOLIO (v2.1.0) ===', type: 'system' },
    { text: 'Tapez "help" pour voir la liste des commandes disponibles.', type: 'system' },
    { text: '', type: 'output' }
  ]);
  
  const terminalEndRef = useRef(null);

  // Auto-scroll vers le bas à chaque nouvelle commande
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  // Logique du parseur de commandes
  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    
    const cleanedInput = input.trim().toLowerCase();
    const newHistory = [...history, { text: `root@dodo:~$ ${input}`, type: 'command' }];

    if (cleanedInput === '') {
      setHistory(newHistory);
      setInput('');
      return;
    }

    switch (cleanedInput) {
      case 'help':
        newHistory.push({
          text: `Commandes disponibles :\n  about          - Qui suis-je ?\n  skills         - Mes compétences phares (Linux, Sécu, Réseau)\n  projects       - Découvrir mes réalisations d'infrastructure\n  ctf            - Mes scores et spécialités de capture de drapeau\n  clear          - Nettoyer l'écran du terminal\n  exit           - Retourner au mode visuel classique`,
          type: 'output'
        });
        break;
      case 'about':
        newHistory.push({
          text: `[ID] : Student L3 en Administration Systèmes et Réseaux.\n[Spécialité] : Hardening Linux, Détection d'intrusions (IDS), Sécurisation d'infras.\n[Objectif] : Concevoir des systèmes résilients et hautement sécurisés.`,
          type: 'output'
        });
        break;
      case 'skills':
        newHistory.push({
          text: `✦ OS & Infra  : Linux (Kali, Debian, RHEL), Docker, Virtualisation\n✦ Networking  : Architecture réseau, Firewalls OPNsense/pfSense\n✦ Cyber/Sec   : Surveillance SIEM (Wazuh), Suricata IDS, Pentesting`,
          type: 'output'
        });
        break;
      case 'projects':
        newHistory.push({
          text: `📂 PROJETS MAJEURS:\n1. MITM-Detection-Lab  -> Détection ARP Spoofing via pfSense & Suricata\n2. PIDS-Automator      -> Système d'analyse des transactions HTTP/HTTPS\n3. Portfolio-Terminal  -> Cette interface CLI même (React/Tailwind)`,
          type: 'output'
        });
        break;
      case 'ctf':
        newHistory.push({
          text: `🚩 CAPTURE THE FLAG:\n- Focus principal : Cryptographie (XOR, RSA), Exploitation binaire & Réseau.\n- Pratique intensive sur les plateformes de hacking lab.`,
          type: 'output'
        });
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'exit':
        onClose();
        return;
      default:
        newHistory.push({
          text: `bash: command not found: ${input}. Tapez "help" pour voir les commandes valides.`,
          type: 'error'
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <div className="fixed inset-0 bg-black text-green-400 font-mono text-sm z-[100] p-6 flex flex-col selection:bg-green-500/20 selection:text-green-300">
      {/* Top Bar de la console */}
      <div className="flex items-center justify-between border-b border-green-900/40 pb-3 mb-4 select-none">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <span onClick={onClose} className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer block" title="Fermer (exit)" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/30 block" />
            <span className="w-3 h-3 rounded-full bg-green-500/30 block" />
          </div>
          <span className="text-xs text-green-600 font-bold tracking-wider">[ INTERACTIVE PORTFOLIO SHELL v2.1 ]</span>
        </div>
        <button onClick={onClose} className="text-xs border border-green-800/60 px-2 py-0.5 rounded text-green-600 hover:text-green-400 hover:bg-green-950/30 transition-all">
          ESC_TO_EXIT
        </button>
      </div>

      {/* Zone de logs / Output */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-thin scrollbar-thumb-green-900/40">
        {history.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap leading-relaxed">
            {line.type === 'command' && <span className="text-zinc-200">{line.text}</span>}
            {line.type === 'system' && <span className="text-zinc-500 italic">{line.text}</span>}
            {line.type === 'output' && <span className="text-green-400 block pl-2 my-1">{line.text}</span>}
            {line.type === 'error' && <span className="text-red-500 font-semibold block">{line.text}</span>}
          </div>
        ))}
        
        {/* Ligne d'input active */}
        <div className="flex items-center gap-2 mt-3 bg-zinc-950/30 py-1 rounded">
          <span className="text-red-500 font-bold select-none">root@dodo</span>
          <span className="text-zinc-500 select-none">:</span>
          <span className="text-indigo-400 select-none">~</span>
          <span className="text-zinc-200 font-bold select-none">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent border-none outline-none text-zinc-100 font-mono p-0 focus:ring-0"
            autoFocus
          />
        </div>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}