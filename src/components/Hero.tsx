import { Mail, Sparkles } from 'lucide-react';
import { GithubIcon } from '../assets/icons/GithubIcon';
import { LinkedinIcon } from '../assets/icons/LinkedInIcon';

export default function Hero() {
  return (
    <section id="hero" className="relative py-12 md:py-20">
      {/* Contenedor Glass Principal */}
      <div className="relative p-8 md:p-12 rounded-3xl bg-neutral-900/30 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] shadow-black/50">
        
        {/* Badge de Disponibilidad */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Disponible
        </div>

        {/* Titulo */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-sm">
          Hola, soy <span className="bg-linear-to-r from-violet-400 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">Gabriela</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-2xl font-light">
          Frontend Developer especializada en <span className="text-white font-medium">React</span>, <span className="text-white font-medium">TypeScript</span>.
        </p>

        {/* Botones de Acción y Redes Sociales */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          {/* Botón Principal Glass Neon */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-violet-600/80 hover:bg-violet-500/90 text-white font-medium transition-all duration-300 backdrop-blur-md border border-violet-400/30 shadow-[0_0_25px_rgba(124,58,237,0.4)] hover:shadow-[0_0_35px_rgba(124,58,237,0.6)]"
          >
            <Sparkles className="w-4 h-4 text-violet-200" />
            Ver Proyectos
          </a>

          {/* Links de Redes */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/GabrielaLescano"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-white/20"
            >
              <GithubIcon />
            </a>

            <a
              href="https://linkedin.com/in/Gabriela-Lescano"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-white/20"
            >
              <LinkedinIcon />
            </a>

            <a
              href="mailto:lesc.gabriela@gmail.com"
              aria-label="Email"
              className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] hover:border-white/20"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}