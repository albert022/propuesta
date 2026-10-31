import React from 'react';
import Link from 'next/link';
import { HeroCompositionVisual } from './HeroCompositionVisual';
import { getWhatsAppUrl } from '@/data/config';
import {
  ArrowRight,
  MessageSquare,
  Smartphone,
  Zap,
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const whatsappAdvisorMessage =
    'Hola QRMOON, me gustaría hablar con un asesor sobre cómo digitalizar mi negocio.';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-slate-100">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-0 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Sector Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Digitalización para negocios en República Dominicana</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              Tu negocio merece una{' '}
              <span className="text-blue-700 bg-clip-text">
                mejor presencia digital.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Descubre cómo podría verse tu negocio en internet. Explora nuestras demostraciones para
              diferentes sectores y conoce las herramientas que podemos implementar para ayudarte a
              conectar con más clientes.
            </p>

            {/* Two Main CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/demos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-700/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explorar demostraciones</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={getWhatsAppUrl(whatsappAdvisorMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm sm:text-base border border-slate-300 shadow-xs hover:border-slate-400 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Hablar con un asesor</span>
              </a>
            </div>

            {/* Key feature pills */}
            <div className="pt-4 border-t border-slate-200/70 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-700">
                <div className="p-1 rounded-md bg-blue-100 text-blue-700">
                  <Smartphone className="w-3.5 h-3.5" />
                </div>
                <span>Diseño adaptable a celulares</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-700">
                <div className="p-1 rounded-md bg-emerald-100 text-emerald-700">
                  <MessageSquare className="w-3.5 h-3.5" />
                </div>
                <span>Integración con WhatsApp</span>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-700">
                <div className="p-1 rounded-md bg-sky-100 text-sky-700">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <span>Soluciones personalizadas</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <HeroCompositionVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
