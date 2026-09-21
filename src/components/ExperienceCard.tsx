import React from 'react';
import type { ExperienceItem } from '../types/portfolio';

export const ExperienceCard: React.FC<ExperienceItem> = ({
  role,
  company,
  period,
  location,
  description,
  technologies,
}) => {
  return (
    <div className="relative pl-8 border-l border-zinc-800 group hover:border-purple-500/50 transition-colors">
      <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-700 group-hover:bg-purple-500 transition-colors" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
        <h3 className="text-xl font-bold text-white">
          {role} <span className="text-purple-400">@ {company}</span>
        </h3>
        <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800/80 w-fit">
          {period}
        </span>
      </div>

      <p className="text-xs text-zinc-500 mb-4">{location}</p>

      <ul className="space-y-2 mb-4 text-sm text-zinc-400 font-light">
        {description.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-purple-500 mt-1">›</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-300 border border-zinc-800"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};