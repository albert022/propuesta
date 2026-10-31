'use client';

import React, { useState } from 'react';
import { DemoItem, PlanId } from '@/types';
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
  Layers,
} from 'lucide-react';
import { getWhatsAppUrl } from '@/data/config';

interface DemoDetailPreviewProps {
  demo: DemoItem;
  initialPlanId?: PlanId;
  onPlanChange?: (planId: PlanId) => void;
}

export const DemoDetailPreview: React.FC<DemoDetailPreviewProps> = ({
  demo,
  initialPlanId,
  onPlanChange,
}) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [activePlanId, setActivePlanId] = useState<PlanId>(initialPlanId || demo.defaultPlanId);

  const handlePlanSelect = (pId: PlanId) => {
    setActivePlanId(pId);
    if (onPlanChange) {
      onPlanChange(pId);
    }
  };

  const currentVariant = demo.variants[activePlanId];
  const coverImage = currentVariant.coverImage || demo.coverImage;
  const mobileCoverImage = currentVariant.mobileCoverImage || demo.mobileCoverImage;
  const activeScreenshot = deviceView === 'mobile' ? (mobileCoverImage || coverImage) : coverImage;
  const isAvailable = currentVariant.status === 'disponible';
  const hasExternalUrl = Boolean(currentVariant.demoUrl && currentVariant.demoUrl.trim().length > 0);

  const whatsappMessage = `Hola QRMOON, vi la propuesta para ${demo.name} en su versión "${currentVariant.planName}" y me gustaría cotizarla para mi negocio.`;

  return (
    <div className="bg-slate-900 rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-800 text-white space-y-6">
      {/* 2-DIMENSION TIER SELECTOR: Selector de Variante de Paquete */}
      <div className="bg-slate-800/90 rounded-2xl p-4 border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-blue-400 shrink-0" />
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Nivel de Demostración:
            </div>
            <div className="text-sm font-black text-white">{currentVariant.planName}</div>
          </div>
        </div>

        {/* 3 Package Tabs */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-700 w-full md:w-auto">
          <button
            type="button"
            onClick={() => handlePlanSelect('basico')}
            className={`flex-1 md:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activePlanId === 'basico'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Básico (RD$25k)
          </button>

          <button
            type="button"
            onClick={() => handlePlanSelect('pequena')}
            className={`flex-1 md:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activePlanId === 'pequena'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            P. Pequeña (RD$50k)
          </button>

          <button
            type="button"
            onClick={() => handlePlanSelect('mediana')}
            className={`flex-1 md:flex-none px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activePlanId === 'mediana'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            P. Mediana (RD$100k)
          </button>
        </div>
      </div>

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
                href={currentVariant.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors shadow-sm"
              >
                <span>Visitar demostración en vivo de este nivel</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-800/90 px-3.5 py-1.5 rounded-xl border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Demostración interactiva activa en catálogo</span>
              </div>
            )
          ) : (
            <div className="flex items-center gap-2 text-xs text-amber-300 bg-amber-950/60 border border-amber-600/40 px-3.5 py-1.5 rounded-xl">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Demostración de este nivel en fase de preparación</span>
            </div>
          )}
        </div>
      </div>

      {/* Frame Container */}
      <div className="pt-2 pb-2 flex justify-center items-center overflow-hidden">
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
            <div className="flex items-center gap-1.5 bg-slate-950 px-3 py-1 rounded-md text-[11px] font-mono text-slate-300 border border-slate-800 truncate max-w-[280px]">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>
                {currentVariant.demoUrl || `https://demo.qrmoon.do/${demo.slug}?plan=${activePlanId}`}
              </span>
            </div>
            <div className="text-[10px] text-slate-500 font-mono">
              {deviceView.toUpperCase()}
            </div>
          </div>

          {/* Rendered Preview Screen */}
          {activeScreenshot ? (
            <div className="relative bg-slate-950 overflow-hidden">
              <div className="relative max-h-[560px] overflow-y-auto scrollbar-thin">
                <img
                  src={activeScreenshot}
                  alt={`Captura real de la página ${demo.name}`}
                  className="w-full h-auto object-cover object-top block"
                />
              </div>
              {/* Bottom bar inside browser simulator */}
              <div className="bg-slate-900/95 backdrop-blur-md px-4 py-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-slate-300 font-medium">Demostración en vivo en línea</span>
                </div>
                {hasExternalUrl && (
                  <a
                    href={currentVariant.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-bold transition-colors"
                  >
                    <span>Abrir sitio web completo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ) : (
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

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                      {currentVariant.pagesScope.split('(')[0].trim()}
                    </span>
                  </div>
                </div>

                {/* Mock Hero Banner */}
                <div
                  className={`mt-6 rounded-2xl p-6 sm:p-8 text-white bg-gradient-to-br ${
                    currentVariant.previewGradient || 'from-blue-700 to-sky-600'
                  } relative overflow-hidden shadow-lg`}
                >
                  <div className="relative z-10 max-w-xl space-y-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/20 backdrop-blur-md">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>{currentVariant.planName}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black leading-tight text-white">
                      {demo.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                      {currentVariant.tagline}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      <div className="bg-white text-slate-900 font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 shadow-sm">
                        <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
                        <span>WhatsApp Directo</span>
                      </div>
                      <div className="bg-black/30 backdrop-blur-md text-white font-medium px-3 py-1.5 rounded-xl text-xs flex items-center gap-1.5 border border-white/20">
                        <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                        <span>Google Reviews</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mock Features Row */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentVariant.features.map((feat, i) => (
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
                  Inversión: {currentVariant.initialPricePrefix || 'RD$'}{' '}
                  {currentVariant.initialPrice.toLocaleString('es-DO')} inicial +{' '}
                  {currentVariant.monthlyPricePrefix || 'RD$'}{' '}
                  {currentVariant.monthlyPrice.toLocaleString('es-DO')}/mes
                </span>
                <a
                  href={getWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-700 font-bold hover:underline"
                >
                  <span>Solicitar esta variante por WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="text-center pt-2 text-[11px] text-slate-400">
        Simulación interactiva de la variante {currentVariant.planName}. Adaptada fielmente a los estándares de QRMOON.
      </div>
    </div>
  );
};

export default DemoDetailPreview;
