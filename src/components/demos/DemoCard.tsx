'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { DemoItem, PlanId } from '@/types';
import { DemoPreviewCardGraphic } from './DemoPreviewCardGraphic';
import { getWhatsAppUrl } from '@/data/config';
import {
  Check,
  ArrowRight,
  MessageSquare,
  ExternalLink,
  Clock,
  Layers,
} from 'lucide-react';

interface DemoCardProps {
  demo: DemoItem;
  initialPlanId?: PlanId;
  forcePlanId?: PlanId; // used when in "Por presupuesto/plan" mode
}

export const DemoCard: React.FC<DemoCardProps> = ({
  demo,
  initialPlanId,
  forcePlanId,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>(
    forcePlanId || initialPlanId || demo.defaultPlanId
  );

  // If a forced plan is provided from parent (e.g. budget mode), use it
  const activePlanId = forcePlanId || selectedPlan;
  const currentVariant = demo.variants[activePlanId];

  const isAvailable = currentVariant.status === 'disponible';
  const hasExternalUrl = Boolean(currentVariant.demoUrl && currentVariant.demoUrl.trim().length > 0);

  // WhatsApp message indicating both sector AND package
  const whatsappMessage = `Hola, vi la demostración de ${demo.name} en su versión "${currentVariant.planName}" en QRMOON y me interesa una página web similar. ¿Podrían brindarme información?`;

  return (
    <div className="group flex flex-col bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Top Graphic Mockup with the active variant styling */}
      <div className="relative">
        <DemoPreviewCardGraphic demo={demo} variant={currentVariant} />

        {/* Status Badge */}
        <div className="absolute top-3 right-3 z-20">
          {isAvailable ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white shadow-md shadow-emerald-500/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Demo disponible
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-200 shadow-md backdrop-blur-md">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Próximamente
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category Tag */}
          <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700 mb-1">
            {demo.category}
          </div>

          {/* Sector Name */}
          <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-blue-700 transition-colors mb-2">
            <Link href={`/demos/${demo.slug}`} className="focus:outline-none">
              {demo.name}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {demo.shortDescription}
          </p>

          {/* 2-DIMENSIONAL SELECTOR: Plan selector tabs (Básico, Pequeña, Mediana) */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
              <span className="flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-blue-600" />
                <span>Elegir nivel de paquete:</span>
              </span>
              <span className="text-[10px] text-blue-700 font-semibold uppercase tracking-wide">
                3 Variantes
              </span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
              <button
                type="button"
                onClick={() => setSelectedPlan('basico')}
                className={`py-1.5 px-1 rounded-lg text-xs font-extrabold transition-all text-center ${
                  activePlanId === 'basico'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Básico
              </button>

              <button
                type="button"
                onClick={() => setSelectedPlan('pequena')}
                className={`py-1.5 px-1 rounded-lg text-xs font-extrabold transition-all text-center ${
                  activePlanId === 'pequena'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                P. Pequeña
              </button>

              <button
                type="button"
                onClick={() => setSelectedPlan('mediana')}
                className={`py-1.5 px-1 rounded-lg text-xs font-extrabold transition-all text-center ${
                  activePlanId === 'mediana'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                P. Mediana
              </button>
            </div>
          </div>

          {/* Plan Specific Pricing & Scope Banner */}
          <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/80 mb-4 space-y-1.5">
            <div className="flex items-baseline justify-between">
              <span className="text-xs font-bold text-slate-900">
                {currentVariant.planName.split('—')[0].trim()}
              </span>
              <span className="text-[10px] uppercase font-bold text-blue-700 bg-white px-2 py-0.5 rounded-md border border-blue-200">
                {currentVariant.pagesScope.split('(')[0].trim()}
              </span>
            </div>

            <div className="flex items-center gap-3 pt-1 text-xs">
              <div>
                <span className="text-[10px] text-slate-500 block">Inicial:</span>
                <span className="font-extrabold text-slate-900">
                  {currentVariant.initialPricePrefix || 'RD$'}{' '}
                  {currentVariant.initialPrice.toLocaleString('es-DO')}
                </span>
              </div>
              <div className="w-px h-6 bg-slate-300" />
              <div>
                <span className="text-[10px] text-slate-500 block">Mensual:</span>
                <span className="font-extrabold text-blue-800">
                  {currentVariant.monthlyPricePrefix || 'RD$'}{' '}
                  {currentVariant.monthlyPrice.toLocaleString('es-DO')}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-slate-600 pt-1 leading-tight">
              {currentVariant.tagline}
            </p>
          </div>

          {/* Dynamic features for this tier */}
          <div className="space-y-1.5 mb-2">
            <div className="text-[11px] font-bold uppercase tracking-wide text-slate-900">
              Incluido en este nivel:
            </div>
            <ul className="space-y-1">
              {currentVariant.features.slice(0, 3).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-600">
                  <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-3 border-t border-slate-100 space-y-2">
          {/* Main action: Ver demostración */}
          {isAvailable ? (
            hasExternalUrl ? (
              <a
                href={currentVariant.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs"
              >
                <span>Ver demostración de este nivel</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <Link
                href={`/demos/${demo.slug}?plan=${activePlanId}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs"
              >
                <span>Explorar propuesta y alcance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )
          ) : (
            <button
              disabled
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-400 text-xs sm:text-sm font-semibold cursor-not-allowed border border-slate-200"
            >
              <Clock className="w-3.5 h-3.5 text-amber-500" />
              <span>Demo de este nivel en preparación</span>
            </button>
          )}

          {/* Secondary Action: Cotizar por WhatsApp con Sector + Paquete */}
          <div className="flex items-center gap-2">
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Cotizar {currentVariant.planName.split('—')[0].trim()}</span>
            </a>

            <Link
              href={`/demos/${demo.slug}`}
              className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              title="Comparar los 3 paquetes"
            >
              Comparar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
