'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { DemoItem, PlanId } from '@/types';
import { DemoDetailPreview } from './DemoDetailPreview';
import { DemoPlanComparisonTable } from './DemoPlanComparisonTable';
import { getWhatsAppUrl } from '@/data/config';
import {
  MessageSquare,
  CheckCircle2,
  Layers,
  Sparkles,
  Shield,
  Clock,
  ExternalLink,
  Star,
} from 'lucide-react';

interface DemoDetailInteractiveViewProps {
  demo: DemoItem;
}

const DemoDetailInteractiveViewInner: React.FC<DemoDetailInteractiveViewProps> = ({ demo }) => {
  const searchParams = useSearchParams();
  const planQuery = searchParams.get('plan') as PlanId | null;

  const [activePlanId, setActivePlanId] = useState<PlanId>(
    planQuery && ['basico', 'pequena', 'mediana'].includes(planQuery)
      ? planQuery
      : demo.defaultPlanId
  );

  const currentVariant = demo.variants[activePlanId];
  const isAvailable = currentVariant.status === 'disponible';
  const hasExternalUrl = Boolean(currentVariant.demoUrl && currentVariant.demoUrl.trim().length > 0);

  const whatsappMessage = `Hola QRMOON, vi la demostración de ${demo.name} en su versión "${currentVariant.planName}" y me interesa cotizar una página web similar para mi negocio.`;

  return (
    <div className="space-y-12">
      {/* Active Variant Summary Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
              {demo.category}
            </span>

            {isAvailable ? (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Variante {currentVariant.planName.split('—')[0]} Disponible
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                Variante en preparación
              </span>
            )}
          </div>

          {/* Quick Plan Badges */}
          <div className="flex items-center gap-1.5 text-xs font-semibold">
            <span className="text-slate-500">Nivel activo:</span>
            <span className="px-2.5 py-1 rounded-lg bg-blue-100 text-blue-900 font-bold">
              {currentVariant.planName}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            {demo.name}
          </h1>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-4xl">
            {demo.fullDescription}
          </p>
        </div>

        {/* Pricing Card for Active Variant */}
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Inversión para este nivel ({currentVariant.planName.split('—')[0].trim()}):
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-black text-slate-900">
                {currentVariant.initialPricePrefix || 'RD$'}{' '}
                {currentVariant.initialPrice.toLocaleString('es-DO')}
              </span>
              <span className="text-xs text-slate-500 font-medium">inicial (único)</span>
              <span className="text-slate-300">|</span>
              <span className="text-xl sm:text-2xl font-extrabold text-blue-700">
                {currentVariant.monthlyPricePrefix || 'RD$'}{' '}
                {currentVariant.monthlyPrice.toLocaleString('es-DO')}
              </span>
              <span className="text-xs text-slate-500 font-medium">/mes</span>
            </div>
            <div className="text-xs text-slate-600 font-medium pt-0.5">
              Alcance:{' '}
              <span className="font-bold text-slate-800">{currentVariant.pagesScope}</span> —{' '}
              {currentVariant.tagline}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Cotizar variante por WhatsApp</span>
            </a>

            {isAvailable && hasExternalUrl && (
              <a
                href={currentVariant.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-sm transition-all"
              >
                <span>Ver demo externa</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Responsive Preview with Live 3-Variant Switcher */}
      <section aria-label="Vista previa interactiva">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Vista previa interactiva según el paquete
          </h2>
          <span className="text-xs text-slate-500 hidden sm:inline">
            Elige Básico, Pequeña o Mediana para ver cómo cambia la estructura
          </span>
        </div>
        <DemoDetailPreview
          demo={demo}
          initialPlanId={activePlanId}
          onPlanChange={setActivePlanId}
        />
      </section>

      {/* Interactive Side-by-Side Comparison Matrix */}
      <section aria-label="Comparativa de los 3 paquetes">
        <DemoPlanComparisonTable
          demo={demo}
          activePlanId={activePlanId}
          onSelectPlan={setActivePlanId}
        />
      </section>

      {/* Secciones y páginas incluidas en la variante activa */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recommended Pages for active variant */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Páginas incluidas en {currentVariant.planName.split('—')[0]}
              </h3>
              <p className="text-xs text-slate-500">
                Estructura dimensionada para {currentVariant.pagesScope}
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {currentVariant.recommendedPages.map((page, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center gap-3"
              >
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="font-bold text-slate-900 text-sm">{page}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features and Benefits for active variant */}
        <div className="space-y-8">
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Funcionalidades de este nivel
                </h3>
                <p className="text-xs text-slate-500">
                  Herramientas tecnológicas activas en {currentVariant.planName.split('—')[0]}
                </p>
              </div>
            </div>

            <ul className="space-y-2.5 pt-2">
              {currentVariant.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{feat}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Practical Benefits for business */}
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Star className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Beneficios comerciales para tu empresa
                </h3>
                <p className="text-xs text-slate-500">Rentabilidad y ahorro de tiempo</p>
              </div>
            </div>

            <ul className="space-y-2.5 pt-2">
              {demo.practicalBenefits.map((ben, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span>{ben}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* Suggested Services */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
        <h3 className="text-xl font-bold text-slate-900">
          Servicios recomendados para complementar este sector
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {demo.suggestedServices.map((srv, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/60 flex items-start gap-3"
            >
              <div className="p-1 rounded-lg bg-blue-700 text-white shrink-0 mt-0.5">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-blue-950">{srv}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Ethical Transparency Disclaimer */}
      <div className="p-5 rounded-2xl bg-slate-100/80 border border-slate-200 text-xs text-slate-500 flex items-start gap-3">
        <Shield className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <p>
          <strong>Aclaración de demostración:</strong> Las variantes presentadas en esta página son
          prototipos diseñados por QRMOON para ilustrar con fidelidad el alcance técnico y visual de
          cada paquete comercial en República Dominicana. No corresponden a marcas de clientes reales
          salvo que se indique de forma expresa.
        </p>
      </div>

      {/* Bottom CTA Banner with Active Variant Context */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-2xl sm:text-3xl font-black">
            ¿Quieres la versión {currentVariant.planName.split('—')[0]} para tu negocio?
          </h3>
          <p className="text-sm text-blue-100">
            Personalizamos esta variante con tu identidad corporativa, tus fotos reales y tu número de WhatsApp.
          </p>
        </div>

        <a
          href={getWhatsAppUrl(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-emerald-950/20 whitespace-nowrap shrink-0 hover:scale-105"
        >
          Solicitar cotización de este nivel por WhatsApp
        </a>
      </div>
    </div>
  );
};

export const DemoDetailInteractiveView: React.FC<DemoDetailInteractiveViewProps> = (props) => {
  return (
    <Suspense
      fallback={
        <div className="py-12 text-center text-slate-400 font-medium">
          Cargando detalles de la demostración...
        </div>
      }
    >
      <DemoDetailInteractiveViewInner {...props} />
    </Suspense>
  );
};

export default DemoDetailInteractiveView;
