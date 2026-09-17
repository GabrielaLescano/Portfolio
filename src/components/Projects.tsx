import { Sparkles, ExternalLink, Disc3 } from 'lucide-react';
import { GithubIcon } from '../assets/icons/GithubIcon';

export default function Projects() {
  return (
    <section id="projects" className="py-8">
      {/* Encabezado de Sección */}
      <div className="flex items-center gap-3 mb-8">
        <Disc3 className="w-6 h-6 text-violet-400 animate-spin-slow" />
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Proyectos Destacados
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Proyecto en curso */}
        <article className="group relative p-8 rounded-3xl bg-neutral-900/30 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] shadow-black/50 transition-all duration-500 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.25)]">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>En desarrollo principal</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-400 group-hover:text-white transition-colors">
                <GithubIcon />
              </span>
              <span className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-400 group-hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />
              </span>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-violet-300 transition-colors">
            New MySpace / Social Music Platform
          </h3>

          <p className="mt-3 text-neutral-300 leading-relaxed font-light">
            Plataforma social de descubrimiento musical orientada a la hiper-personalización de perfiles. Cuenta con un reproductor de audio global persistente, maquetación modular responsiva, feed dinámico de interacción e integración de temas personalizables en tiempo real.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {['Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'Audio Player State', 'Supabase'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Vista Previa */}
          <div className="mt-8 relative h-48 sm:h-56 rounded-2xl bg-linear-to-br from-violet-900/20 via-neutral-900/50 to-fuchsia-900/20 border border-white/10 overflow-hidden flex items-center justify-center group-hover:border-violet-500/30 transition-all">
            <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm" />
            <div className="relative text-center px-4">
              <Disc3 className="w-10 h-10 text-violet-400 mx-auto mb-2 opacity-80 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-sm font-medium text-neutral-300">Prototipo & Reproductor Persistente en construcción</p>
              <span className="text-xs text-neutral-500">Próximamente versión Demo pública</span>
            </div>
          </div>

        </article>
      </div>
    </section>
  );
}