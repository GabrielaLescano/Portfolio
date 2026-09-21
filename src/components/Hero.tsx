import { ArrowUpRight, ChevronRight } from 'lucide-react';
import React from 'react';
import { LinkedinIcon } from '../assets/icons/LinkedInIcon';
import { GithubIcon } from '../assets/icons/GithubIcon';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-36 pb-20 px-6 max-w-5xl mx-auto flex flex-col items-start gap-6">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Disponible para nuevos desafíos
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] font-sans">
          Gabriela Lescano
        </h1>
        <p className="text-2xl sm:text-4xl font-light text-zinc-400 tracking-tight leading-snug">
          Frontend Developer con <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-400 via-rose-200 to-violet-300 font-normal">sensibilidad estética</span> y criterio técnico.
        </p>
      </div>

      <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-normal">
        Especializada en desarrollo web y mobile con <strong className="text-zinc-200">React, React Native, TypeScript y Tailwind CSS</strong>. Unifico formación académica en <span className="text-rose-300/90 underline decoration-rose-900/60 underline-offset-4">Artes Visuales</span> con metodologías de <span className="text-violet-300/90 underline decoration-violet-900/60 underline-offset-4">Testing de Software (UTN)</span> para construir interfaces fluidas, sistemas de diseño escalables y experiencias web de alto rendimiento.
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-4">
        <a
          href="#experiencia"
          className="px-6 py-3 rounded-full bg-linear-to-r from-rose-900 to-rose-950 hover:from-rose-800 hover:to-rose-900 text-rose-100 font-medium text-sm border border-rose-700/50 shadow-lg shadow-rose-950/50 transition-all duration-300 flex items-center gap-2 group"
        >
          Ver Trayectoria
          <ChevronRight className="w-4 h-4 text-rose-300 group-hover:translate-x-1 transition-transform" />
        </a>
        <a
          href="https://linkedin.com/in/gabriela-lescano"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-sm border border-zinc-800 hover:border-zinc-700 transition-all flex items-center gap-2"
        >
          <LinkedinIcon />
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
        </a>

        <a
          href="https://github.com/GabrielaLescano"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-medium text-sm border border-zinc-800 hover:border-zinc-700 transition-all flex items-center gap-2"
        >
          <GithubIcon />
          <span>GitHub</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
        </a>
      </div>

      <div className="pt-8 border-t border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono text-zinc-400">
            <div>
              <span className="block text-zinc-600 mb-1">ENFOQUE</span>
              <span className="text-zinc-200">Component Architecture & Design Tokens</span>
            </div>
            <div>
              <span className="block text-zinc-600 mb-1">EXPERIENCIA DESTACADA</span>
              <span className="text-zinc-200">Real Trends & Chiper</span>
            </div>
            <div>
              <span className="block text-zinc-600 mb-1">METODOLOGÍA</span>
              <span className="text-zinc-200">TDD, SOLID, A11y, Performance First</span>
            </div>
            <div>
              <span className="block text-zinc-600 mb-1">UBICACIÓN</span>
              <span className="text-zinc-200">Bs As, Argentina (Remote LATAM/Global)</span>
            </div>
          </div>
    </section>
  );
};