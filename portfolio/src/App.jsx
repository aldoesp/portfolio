import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SplashCursor from './components/effects/SplashCursor'
import Navbar from './components/layout/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Conteneur principal en noir (style espace/sombre comme React Bits)
    <div className="min-h-screen bg-[#050508] text-white relative overflow-x-hidden selection:bg-purple-500/30">
      
      {/* 1. Effet de fond interactif (Prend tout l'écran en arrière-plan) */}
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={true}
        COLOR="#A855F7"
      />

      {/* 2. Barre de navigation (Fixée en haut de l'écran, au-dessus du Splash) */}
      <Navbar />

      {/* 3. Contenu de la page (Placé au premier plan grâce au z-index) */}
      <main className="relative z-10 pt-32 px-4 max-w-6xl mx-auto flex flex-col items-center justify-center min-h-screen text-center">
        
        {/* Section Logos */}
        <div className="flex gap-8 justify-center mb-8">
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="h-16 w-16 drop-shadow-[0_0_2em_#646cffaa] hover:scale-110 transition-transform" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="h-16 w-16 drop-shadow-[0_0_2em_#61dafbaa] hover:scale-110 transition-transform animate-[spin_20s_linear_infinite]" alt="React logo" />
          </a>
        </div>

        {/* Titre & Compteur */}
        <h1 className="text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500 mb-6">
          Vite + React
        </h1>
        
        <div className="p-6 bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 rounded-2xl mb-12">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="px-6 py-3 font-semibold bg-purple-600 hover:bg-purple-500 active:scale-95 transition-all rounded-xl shadow-lg shadow-purple-600/20"
          >
            Le compte est à {count}
          </button>
        </div>

        {/* Image Hero (votre illustration) */}
        <div className="w-full max-w-2xl rounded-2xl overflow-hidden border border-zinc-800/80 shadow-2xl shadow-purple-500/5">
          <img 
            src={heroImg} 
            alt="Hero Illustration" 
            className="w-full h-auto object-cover"
          />
        </div>

      </main>
    </div>
  )
}

export default App