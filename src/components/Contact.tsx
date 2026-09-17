import { Mail, MessageSquare, ArrowUp, Send } from 'lucide-react';
import { GithubIcon } from '../assets/icons/GithubIcon';
import { LinkedinIcon } from '../assets/icons/LinkedInIcon';

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-8 pb-12">
      <div className="relative p-8 md:p-12 rounded-3xl bg-neutral-900/30 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] shadow-black/50 text-center overflow-hidden">
        
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-72 h-72 bg-violet-600/20 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 max-w-xl mx-auto">
          <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-violet-300 mb-6 backdrop-blur-md">
            <MessageSquare className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            ¿Hablamos de tu próximo proyecto?
          </h2>

          <p className="mt-4 text-neutral-300 font-light leading-relaxed">
            Estoy disponible para sumarme a nuevos desafíos como Frontend Developer, crear interfaces de usuario o colaborar en ideas creativas.
          </p>

          <div className="mt-8 flex justify-center">
            <a
              href="mailto:lesc.gabriela@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-violet-600/80 hover:bg-violet-500/90 text-white font-semibold transition-all duration-300 backdrop-blur-md border border-violet-400/30 shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:shadow-[0_0_40px_rgba(124,58,237,0.6)] group"
            >
              <Mail className="w-5 h-5 text-violet-200" />
              <span>Enviar un mensaje</span>
              <Send className="w-4 h-4 text-violet-200 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="https://github.com/GabrielaLescano"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
            >
              <GithubIcon />
            </a>

            <a
              href="https://linkedin.com/in/Gabriela-Lescano"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-all backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 px-4">
        <p>© {new Date().getFullYear()} Gabriela Lescano.</p>
        
        {/* Botón arriba, ver de subirlo a app ? */}
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 hover:text-neutral-300 transition-colors cursor-pointer"
        >
          <span>Volver arriba</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}