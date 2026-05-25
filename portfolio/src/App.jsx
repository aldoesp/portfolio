import { useState } from 'react'
import './App.css'
import SplashCursor from './components/effects/SplashCursor'
import Navbar from './components/layout/navbare'
import Hero from './components/sections/Hero'

function App() {
  return (
    <div className="min-h-screen bg-[#160f05] text-white relative overflow-x-hidden">
      
      {/* 1. Traînée de particule lumineuse de fond */}
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#22d3ee" // Forcé en Cyan pour correspondre à ton thème
      />

      {/* 2. En-tête Terminal persistant */}
      <Navbar />

      {/* 3. Section Hero principale */}
      <Hero />
      
      {/* Reste de tes sections ici, ex: <About />, <Skills />... */}

    </div>
  )
}

export default App
