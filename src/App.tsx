import Contact from './components/Contact';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';

export default function App() {
  return (
    <main className="relative min-h-screen bg-neutral-950 text-neutral-100 px-6 py-8 md:px-24 overflow-hidden selection:bg-violet-500/30 selection:text-violet-200">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-violet-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-87.5 h-87.5 bg-fuchsia-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-100 h-100 bg-indigo-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto space-y-16">
        <Hero />
        <Projects />
        <TechStack />
        <Contact />
      </div>
    </main>
  );
}