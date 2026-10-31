import React from 'react';
import { Smartphone, MessageSquare, Sparkles, Star, Wrench, Scissors, ShieldCheck } from 'lucide-react';

export const HeroCompositionVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Glow subtle effects */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Composition Container */}
      <div className="relative">
        {/* Desktop Screen Mockup */}
        <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden transform transition-all duration-500 hover:shadow-blue-500/10">
          {/* Top Browser Bar */}
          <div className="bg-slate-100/90 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="bg-white px-4 py-1 rounded-full text-xs font-mono text-slate-500 border border-slate-200 shadow-xs flex items-center gap-1.5 max-w-[280px] truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>https://demos.qrmoon.do/catalogo</span>
            </div>
            <div className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
              Demos en Vivo
            </div>
          </div>

          {/* Desktop Preview Content */}
          <div className="p-5 sm:p-6 bg-slate-50/60">
            {/* Header simulation */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200/80">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  CV
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">ClimaVolt RD</div>
                  <div className="text-[10px] font-mono text-slate-500">climavolt-servicios-rd.workers.dev</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Demo en Vivo
              </div>
            </div>

            {/* Grid of sample mini cards with real demo cover photos */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="group/card bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                <div className="relative h-20 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80"
                    alt="ClimaVolt RD Demo"
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-white flex items-center gap-1">
                    <Wrench className="w-3 h-3 text-sky-400" /> ClimaVolt RD
                  </span>
                </div>
                <div className="p-2.5">
                  <p className="text-[11px] text-slate-600 line-clamp-2">
                    Aires acondicionados, inversores y atención por WhatsApp.
                  </p>
                  <div className="mt-1.5 text-[10px] font-extrabold text-blue-700">Plan Básico • En Vivo</div>
                </div>
              </div>

              <div className="group/card bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow">
                <div className="relative h-20 w-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80"
                    alt="Navaja 809 Barbería Demo"
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-1.5 left-2 text-[10px] font-bold text-white flex items-center gap-1">
                    <Scissors className="w-3 h-3 text-amber-400" /> Navaja 809
                  </span>
                </div>
                <div className="p-2.5">
                  <p className="text-[11px] text-slate-600 line-clamp-2">
                    Menú de cortes, perfilado de barba y reserva de turnos.
                  </p>
                  <div className="mt-1.5 text-[10px] font-extrabold text-blue-700">Plan Básico • En Vivo</div>
                </div>
              </div>
            </div>

            {/* Mini Trust Bar */}
            <div className="bg-white p-2.5 rounded-xl border border-slate-200 flex items-center justify-between text-[11px] text-slate-600">
              <span className="flex items-center gap-1 text-slate-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                Presupuesto sin compromiso
              </span>
              <span className="flex items-center gap-1 font-semibold text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                5.0 Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Phone Mockup Overlay - Aura Beauty Studio (Live Demo) */}
        <div className="absolute -bottom-8 -right-4 sm:-right-8 w-52 sm:w-60 bg-slate-900 p-2.5 rounded-3xl shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-105">
          {/* Phone speaker notch */}
          <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto mb-2" />

          {/* Phone screen */}
          <div className="bg-white rounded-2xl overflow-hidden text-slate-800 text-[11px] shadow-inner">
            <div className="relative h-20 w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=400&q=80"
                alt="Aura Beauty Studio Demo"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
              <div className="absolute bottom-1.5 left-2 right-2 flex items-center justify-between">
                <span className="font-bold text-xs text-white truncate">Aura Beauty</span>
                <span className="text-[9px] bg-rose-500 text-white px-1.5 py-0.5 rounded-full font-semibold">
                  En Vivo
                </span>
              </div>
            </div>

            <div className="p-2.5 space-y-2">
              <div className="bg-slate-50 p-1.5 rounded-lg border border-slate-100 flex items-center justify-between text-[10px]">
                <span className="font-semibold text-slate-800">Balayage & Estilismo</span>
                <span className="text-rose-600 font-bold">Desde RD$3,500</span>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="bg-emerald-600 text-white rounded-xl py-1.5 px-2 flex items-center justify-center gap-1.5 shadow-xs font-semibold text-[10px]">
                <MessageSquare className="w-3 h-3" />
                <span>Agendar Cita WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Sector Badges */}
        <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Diseño para Celulares</div>
            <div className="text-[10px] text-slate-500">100% Mobile First</div>
          </div>
        </div>

        <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 hidden sm:flex bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Integración WhatsApp</div>
            <div className="text-[10px] text-slate-500">Cotizaciones inmediatas</div>
          </div>
        </div>

        <div className="absolute -bottom-6 left-6 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">Soluciones a Medida</div>
            <div className="text-[10px] text-slate-500">Tu marca y tus servicios</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCompositionVisual;
