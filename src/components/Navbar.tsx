import { Check, Mail } from 'lucide-react';
import React, { useState } from 'react';

const NAV_ITEMS = [
  { label: 'Perfil', href: '#hero' },
  { label: 'Experiencia', href: '#experiencia' },
  //{ label: 'Playground', href: '#playground' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Educación', href: '#educacion' },
  { label: 'Contacto', href: '#contacto' },
];

export const Navbar: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('lesc.gabriela@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-4xl bg-zinc-900/70 backdrop-blur-md border border-zinc-800/80 rounded-full px-5 py-3 flex items-center justify-between shadow-2xl shadow-black/80 transition-all duration-300">
        <a href="#hero" className="font-bold tracking-tight text-white hover:text-purple-400 transition-colors">
          GL<span className="text-rose-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-xs tracking-wider uppercase font-mono text-zinc-400">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
            <button 
              onClick={handleCopyEmail} 
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700/60 hover:border-rose-800/50 text-zinc-300 hover:text-white transition-all active:scale-95"
              title="Copiar email al portapapeles"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Mail className="w-3.5 h-3.5 text-rose-400" />}
              <span>{copiedEmail ? 'Copiado' : 'Contacto'}</span>
            </button>
          </div>
      </nav>
    </header>
  );
};