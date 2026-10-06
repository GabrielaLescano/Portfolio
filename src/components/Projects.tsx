import { Sparkles, ExternalLink, Disc3, Check, Circle } from 'lucide-react';
import { GithubIcon } from '../assets/icons/GithubIcon';

const DEMO_URL = 'https://orbita-me.vercel.app';
const REPO_URL = 'https://github.com/GabrielaLescano/orbita';

const STACK_ACTUAL = ['Next.js (App Router)', 'TypeScript', 'Tailwind CSS', 'Vercel'];
const STACK_PROXIMO = ['Auth.js', 'Drizzle ORM', 'Neon (Postgres)'];

const HECHO = [
  'Diseño de la interfaz y prototipo del perfil, responsive',
  'Panel de temas: los colores cambian en vivo con variables CSS',
  'Reproductor con interfaz completa (el audio todavía es simulado)',
  'Deploy en Vercel',
];

const EN_CAMINO = [
  'Login con GitHub y base de datos Postgres',
  'HTML y CSS propios por perfil, con sanitizado y iframe aislado',
  'Reproductor con embeds de servicios de música',
  'Comentarios y Top 8 reales',
];

export const Projects: React.FC = () => {
  return (
    <section id="proyectos" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Disc3 className="w-6 h-6 text-rose-400 animate-spin-slow" />
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Proyectos Destacados
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <article className="group relative p-8 rounded-3xl bg-neutral-900/30 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] shadow-black/50 transition-all duration-500 hover:border-rose-500/40 hover:shadow-[0_0_40px_rgba(124,58,237,0.25)]">

          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-medium backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>En desarrollo</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver el código de Órbita en GitHub"
                title="Código en GitHub"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white transition-colors"
              >
                <GithubIcon />
              </a>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir la demo de Órbita"
                title="Abrir la demo"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-rose-300 transition-colors">
            Órbita: perfiles personalizables con música
          </h3>

          <p className="mt-3 text-neutral-300 leading-relaxed font-light">
            Una red social al estilo MySpace pensada para hoy: cada persona le da a su perfil la
            estética que quiere, con HTML y CSS propios, y le suma su música. Es un proyecto
            personal para practicar arquitectura full-stack con Next.js.
          </p>

          <p className="mt-3 text-neutral-300 leading-relaxed font-light">
            El desafío central es dejar que los usuarios inyecten sus propios estilos sin
            comprometer la seguridad. El plan es sanitizar el contenido en el servidor y mostrarlo
            en un iframe aislado (sandbox y CSP), para evitar XSS y que el CSS de un perfil no
            rompa la interfaz.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {STACK_ACTUAL.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium backdrop-blur-sm shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
              >
                {tech}
              </span>
            ))}
            {STACK_PROXIMO.map((tech) => (
              <span
                key={tech}
                title="Próximamente"
                className="px-3 py-1 rounded-xl border border-dashed border-white/15 text-neutral-400 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-neutral-950/40 border border-white/10 p-5">
              <h4 className="text-sm font-semibold text-white mb-3">Hecho</h4>
              <ul className="space-y-2">
                {HECHO.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-neutral-300">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-rose-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-neutral-950/40 border border-white/10 p-5">
              <h4 className="text-sm font-semibold text-white mb-3">En camino</h4>
              <ul className="space-y-2">
                {EN_CAMINO.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-neutral-400">
                    <Circle className="w-4 h-4 mt-0.5 shrink-0 text-neutral-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-sm font-medium hover:bg-rose-500/20 transition-colors"
          >
            Ver demo en vivo
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </article>
      </div>
    </section>
  );
};