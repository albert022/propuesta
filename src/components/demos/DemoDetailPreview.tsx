'use client';

import React, { useState } from 'react';
import { DemoItem } from '@/types';
import {
  Monitor,
  Tablet,
  Smartphone,
  ExternalLink,
  Lock,
  Sparkles,
  PhoneCall,
  Star,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { getWhatsAppUrl } from '@/data/config';

interface DemoDetailPreviewProps {
  demo: DemoItem;
}

export const DemoDetailPreview: React.FC<DemoDetailPreviewProps> = ({ demo }) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const isAvailable = demo.status === 'disponible';
  const hasExternalUrl = Boolean(demo.demoUrl && demo.demoUrl.trim().length > 0);

  const whatsappMessage = `Hola QRMOON, vi la propuesta para ${demo.name} y me gustaría una página similar para mi negocio. ¿Podemos cotizarla?`;

  return (
    <div className="bg-slate-900 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 text-white">
      {/* Top Device View Switcher and Live Demo Button */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-800">
        {/* Device Switcher */}
        <div className="flex items-center bg-slate-800/80 p-1 rounded-xl border border-slate-700">
          <button
            onClick={() => setDeviceView('desktop')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              deviceView === 'desktop'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span className="hidden sm:inline">Computadora</span>
          </button>

          <button
            onClick={() => setDeviceView('tablet')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              deviceView === 'tablet'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Tablet className="w-4 h-4" />
            <span className="hidden sm:inline">Tablet</span>
          </button>

          <button
            onClick={() => setDeviceView('mobile')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              deviceView === 'mobile'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span className="hidden sm:inline">Celular</span>
          </button>
        </div>

        {/* Live Demo Access or Status Notice */}
        <div>
          {isAvailable ? (
            hasExternalUrl ? (
              <a
                href={demo.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <span>Visitar demostración en vivo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/90 px-3.5 py-1.5 rounded-xl border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Demo disponible en catálogo interactivo</span>
              </div>
            )
          ) : (
            <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-950/60 border border-amber-600/40 px-3.5 py-1.5 rounded-xl">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Demostración en fase de diseño</span>
            </div>
          )}
        </div>
      </div>

      {/* Frame Container */}
      <div className="pt-6 pb-2 flex justify-center items-center overflow-hidden">
        <div
          className={`transition-all duration-300 overflow-hidden bg-slate-950 rounded-2xl border-4 border-slate-800 shadow-2xl ${
            deviceView === 'desktop'
              ? 'w-full max-w-4xl'
              : deviceView === 'tablet'
              ? 'w-[720px] max-w-full'
              : 'w-[360px] max-w-full'
          }`}
        >
          {/* Browser / Device Chrome */}
          <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center space-x-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            </div>
            <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-1 rounded-md text-[11px] font-mono text-slate-300 border border-slate-800 truncate max-w-[260px]">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>https://demo.qrmoon.do/{demo.slug}</span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono">
              {deviceView.toUpperCase()}
            </div>
          </div>

          {/* Rendered Preview Screen */}
          <div className="bg-white text-slate-900 p-5 sm:p-8 min-h-[420px] flex flex-col justify-between">
            {/* Mock Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-md"
                    style={{ backgroundColor: demo.accentColor || '#1e40af' }}
                  >
                    QM
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight">
                      {demo.name}
                    </h4>
                    <p className="text-[11px] text-slate-500">{demo.category}</p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    WhatsApp Activo
                  </span>
                </div>
              </div>

              {/* Mock Hero Banner */}
              <div
                className={`mt-6 rounded-2xl p-6 sm:p-8 text-white bg-gradient-to-br ${
                  demo.previewGradient || 'from-blue-700 to-sky-600'
                } relative overflow-hidden shadow-lg`}
              >
                <div className="relative z-10 max-w-xl space-y-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/20 backdrop-blur-md">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>Solución Digital Especializada</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black leading-tight text-white">
                    {demo.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    {demo.shortDescription}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <div className="bg-white text-slate-900 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 shadow-sm">
                      <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                      <span>Cotizar en 1 toque</span>
                    </div>
                    <div className="bg-black/30 backdrop-blur-md text-white font-medium px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 border border-white/20">
                      <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                      <span>5.0 en Google</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mock Features Row */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {demo.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 flex items-start gap-2 text-xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mock Bottom CTA Bar */}
            <div className="mt-8 pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <span className="font-medium">
                Diseño optimizado para teléfonos celulares en República Dominicana
              </span>
              <a
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-700 font-bold hover:underline"
              >
                <span>Solicitar demo personalizada por WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pt-2 text-[11px] text-slate-400">
        Simulación interactiva de visualización responsiva. No requiere descargas ni configuraciones complejas.
      </div>
    </div>
  );
};

export default DemoDetailPreview;
