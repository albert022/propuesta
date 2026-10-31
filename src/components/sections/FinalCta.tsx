import React from 'react';
import Link from 'next/link';
import { getWhatsAppUrl } from '@/data/config';
import { MessageSquare, ArrowRight, Sparkles } from 'lucide-react';

export const FinalCta: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-sky-200 border border-white/20">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Atención Directa en República Dominicana</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
          ¿Listo para llevar tu negocio al siguiente nivel?
        </h2>

        <p className="text-base sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Cuéntanos qué necesitas y te ayudamos a encontrar una solución digital que se adapte a tu negocio.
          Sin compromisos ni complicaciones.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl('Hola QRMOON, estoy listo para digitalizar mi negocio. ¿Podemos coordinar una cotización?')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-base shadow-xl shadow-emerald-950/30 hover:scale-105 active:scale-95 transition-all"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Solicitar cotización por WhatsApp</span>
          </a>

          <Link
            href="/demos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 backdrop-blur-md transition-all hover:scale-105"
          >
            <span>Explorar más demostraciones</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="pt-6 text-xs text-blue-200/80">
          Respuesta personalizada en menos de 2 horas en horario comercial dominicano.
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
