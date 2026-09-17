import { Cpu, Code2, Palette, Wrench } from 'lucide-react';

const categories = [
  {
    title: 'Frontend Core',
    icon: Code2,
    color: 'from-violet-500/20 to-indigo-500/20',
    borderColor: 'group-hover:border-violet-500/40',
    skills: ['React', 'TypeScript', 'Next.js', 'Redux Toolkit', 'React Native', 'JavaScript (ES6+)'],
  },
  {
    title: 'Estilos & UI',
    icon: Palette,
    color: 'from-fuchsia-500/20 to-pink-500/20',
    borderColor: 'group-hover:border-fuchsia-500/40',
    skills: ['Tailwind CSS', 'Styled Components', 'CSS Modules', 'Responsive Design'],
  },
  {
    title: 'Herramientas & Quality',
    icon: Wrench,
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'group-hover:border-blue-500/40',
    skills: ['Jest', 'React Testing Library', 'Git / GitHub', 'Vite', 'Claude / Copilot'],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-8">
      {/* Header de Sección */}
      <div className="flex items-center gap-3 mb-8">
        <Cpu className="w-6 h-6 text-violet-400" />
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Stack Tecnológico
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((c) => {
          const Icon = c.icon;
          return (
            <div
              key={c.title}
              className={`group relative p-6 rounded-3xl bg-neutral-900/30 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] shadow-black/50 transition-all duration-300 ${c.borderColor} hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]`}
            >
              <div
                className={`absolute inset-0 rounded-3xl bg-linear-to-br ${c.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-violet-300 backdrop-blur-md">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white tracking-wide">
                    {c.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {c.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] transition-colors group-hover:border-white/20 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}