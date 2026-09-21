import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { SKILL_CATEGORIES, EDUCATION } from './data/portfolioData';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-rose-900 selection:text-rose-100 relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-rose-950/20 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/3 -right-40 w-125 h-125 bg-violet-950/15 rounded-full blur-[140px]"></div>
        <div className="absolute -bottom-40 left-1/3 w-150 h-150 bg-zinc-900/30 rounded-full blur-[160px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>
      </div>
      <Navbar />

      <main>
        <Hero />
        <Experience />

        <section id="habilidades" className="py-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <span className="text-purple-500 font-mono text-lg">.</span> Habilidades Técnicas
          </h2>
          <p className="text-zinc-400 text-sm mb-12">Stack tecnológico y herramientas de productividad.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_CATEGORIES.map((category) => (
              <div key={category.title} className="p-6 bg-zinc-900/60 rounded-2xl border border-zinc-800">
                <h3 className="text-lg font-semibold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-950 text-zinc-300 border border-zinc-800/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="educacion" className="py-20 px-6 max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
            <span className="text-purple-500 font-mono text-lg">.</span> Educación & Formación
          </h2>
          <p className="text-zinc-400 text-sm mb-12">Estudios formales, certificaciones y background artístico.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION.map((edu) => (
              <div key={edu.id} className="p-6 bg-zinc-900/40 rounded-2xl border border-zinc-800 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-purple-400 bg-purple-950/60 px-2.5 py-1 rounded-md border border-purple-800/40">
                    {edu.type}
                  </span>
                  <h3 className="text-base font-bold text-white mt-4 mb-2">{edu.title}</h3>
                  <p className="text-xs text-zinc-400">{edu.institution}</p>
                </div>
                <span className="text-xs font-mono text-zinc-500 mt-6">{edu.year}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="contacto" className="py-24 px-6 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">¿Hablamos de tu próximo proyecto?</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed font-light">
            Estoy disponible para roles de Frontend Developer enfocados en React, TypeScript y diseño de experiencias digitales excepcionales.
          </p>
          <a
            href="mailto:lesc.gabriela@gmail.com"
            className="inline-block px-8 py-4 rounded-xl bg-linear-to-r from-rose-900 to-rose-950 hover:from-rose-800 hover:to-rose-900 text-rose-100 font-medium text-sm border border-rose-700/50 shadow-lg shadow-rose-950/50 transition-all duration-300 items-center gap-2 group"
          >
            Enviar mensaje
          </a>
        </section>
      </main>

      <footer className="py-8 text-center text-xs text-zinc-600 border-t border-zinc-900">
        © {new Date().getFullYear()} Gabriela Lescano · Diseñado con React, TypeScript & Tailwind CSS
      </footer>
    </div>
  );
};

export default App;