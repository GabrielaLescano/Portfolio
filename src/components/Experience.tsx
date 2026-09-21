import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { ExperienceCard } from './ExperienceCard';

export const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
        <span className="text-purple-500 font-mono text-lg">.</span> Experiencia Laboral
      </h2>
      <p className="text-zinc-400 text-sm mb-12">
        Trayectoria centrada en valor de negocio, calidad de código y diseño de interacción.
      </p>

      <div className="space-y-12">
        {EXPERIENCES.map((exp) => (
          <ExperienceCard key={exp.id} {...exp} />
        ))}
      </div>
    </section>
  );
};