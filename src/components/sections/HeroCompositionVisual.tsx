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
              Demos RD
            </div>
          </div>

          {/* Desktop Preview Content */}
          <div className="p-5 sm:p-6 bg-slate-50/60">
            {/* Header simulation */}
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200/80">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-700 text-white flex items-center justify-center font-bold text-xs">
                  QM
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">ClimaPro Dominicana</div>
                  <div className="text-[10px] text-slate-500">Aire Acondicionado e Inversores</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                WhatsApp 24/7
              </div>
            </div>

            {/* Grid of sample mini cards */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="p-1 rounded-md bg-sky-100 text-sky-700">
                    <Wrench className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Mantenimiento</span>
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  Limpieza profunda de evaporador y condensador con garantía.
                </p>
                <div className="mt-2 text-[10px] font-semibold text-blue-600">Desde RD$1,800</div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="p-1 rounded-md bg-amber-100 text-amber-700">
                    <Scissors className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Barbería VIP</span>
                </div>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  Corte, perfilado y toalla caliente con reserva de turno.
                </p>
                <div className="mt-2 text-[10px] font-semibold text-blue-600">Turnos en vivo</div>
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

        {/* Mobile Phone Mockup Overlay */}
        <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-56 bg-slate-900 p-2.5 rounded-3xl shadow-2xl border-4 border-white transform transition-transform duration-500 hover:scale-105">
          {/* Phone speaker notch */}
          <div className="w-16 h-3 bg-slate-800 rounded-full mx-auto mb-2" />

          {/* Phone screen */}
          <div className="bg-white rounded-2xl p-3 text-slate-800 text-[11px] space-y-2">
            <div className="flex items-center justify-between border-b pb-1.5 border-slate-100">
              <span className="font-bold text-xs text-slate-900 truncate">El Rincón Criollo</span>
              <span className="text-[9px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-semibold">
                Delivery
              </span>
            </div>

            <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
              <div className="flex items-center justify-between font-medium text-slate-900">
                <span>Mofongo Especial</span>
                <span className="text-blue-600 font-bold">RD$450</span>
              </div>
              <p className="text-[9px] text-slate-500">Chicharrón crujiente con queso frito</p>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="bg-emerald-600 text-white rounded-xl py-2 px-2.5 flex items-center justify-center gap-1.5 shadow-sm font-semibold text-[10px]">
              <MessageSquare className="w-3 h-3" />
              <span>Pedir por WhatsApp</span>
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
