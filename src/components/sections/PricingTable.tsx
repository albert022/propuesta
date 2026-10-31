import React from 'react';
import { plansData, pricingClarifications } from '@/data/plans';
import { getWhatsAppUrl } from '@/data/config';
import { Check, Info, Sparkles, MessageSquare, ShieldAlert } from 'lucide-react';

interface PricingTableProps {
  showTitle?: boolean;
}

export const PricingTable: React.FC<PricingTableProps> = ({ showTitle = true }) => {
  return (
    <section id="planes" className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
              Inversión Transparente en Pesos Dominicanos
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Planes para cada etapa de tu negocio.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Estructura de precios clara sin letras pequeñas. Comienza con una base sólida y escala
              conforme aumenten las ventas de tu negocio.
            </p>
          </div>
        )}

        {/* 3 Tier Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-14">
          {plansData.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-white border-2 border-blue-600 shadow-xl shadow-blue-500/10 lg:-translate-y-2'
                    : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Pill */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                    <span
                      className={`inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-sm ${
                        plan.isPopular
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-800 text-slate-200'
                      }`}
                    >
                      {plan.isPopular && <Sparkles className="w-3 h-3 text-amber-300" />}
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Target */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900">{plan.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{plan.target}</p>
                  </div>

                  {/* Dual Price Presentation: Initial + Monthly */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 space-y-3">
                    {/* Implementación Inicial */}
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Implementación Inicial
                      </div>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                          {plan.initialPricePrefix || 'RD$'}{' '}
                          {plan.initialPrice.toLocaleString('es-DO')}
                        </span>
                        <span className="text-xs text-slate-500">único</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                        Diseño, desarrollo de código, pruebas y publicación
                      </p>
                    </div>

                    <div className="h-px bg-slate-200" />

                    {/* Mensualidad */}
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
                        Mensualidad Operativa
                      </div>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="text-xl sm:text-2xl font-extrabold text-blue-800">
                          {plan.monthlyPricePrefix || 'RD$'}{' '}
                          {plan.monthlyPrice.toLocaleString('es-DO')}
                        </span>
                        <span className="text-xs text-slate-500">/ mes</span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">
                        Hosting en la nube, soporte continuo y mantenimiento
                      </p>
                    </div>
                  </div>

                  {/* What's included checklist */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wide text-slate-900">
                      Incluye en este paquete:
                    </div>
                    <ul className="space-y-2.5">
                      {plan.includedFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 mt-0.5 shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Honest Exclusion notice if any */}
                    {plan.notIncludedNotice && (
                      <div className="mt-3 p-2.5 rounded-xl bg-amber-50/80 border border-amber-200/70 text-[11px] text-amber-900 flex items-start gap-2">
                        <Info className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                        <span>{plan.notIncludedNotice}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card CTA: Consultar este plan */}
                <div className="pt-6 border-t border-slate-100">
                  <a
                    href={getWhatsAppUrl(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-xs ${
                      plan.isPopular
                        ? 'bg-blue-700 hover:bg-blue-800 text-white shadow-md shadow-blue-700/20 hover:scale-[1.01]'
                        : 'bg-slate-900 hover:bg-slate-800 text-white hover:scale-[1.01]'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Consultar este plan por WhatsApp</span>
                  </a>

                  <div className="text-center mt-2.5 text-[11px] text-slate-500">
                    Respuesta rápida con cotización adaptada
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Essential Disclaimers Box (Transparent & Ethical) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
            <ShieldAlert className="w-5 h-5 text-blue-600 shrink-0" />
            <span>Condiciones y alcance claro de los servicios</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600 leading-relaxed">
            <div className="space-y-1.5">
              <span className="font-semibold text-slate-800 block">Diferencia de pagos:</span>
              <p>{pricingClarifications.paymentDistinction}</p>
            </div>

            <div className="space-y-1.5">
              <span className="font-semibold text-slate-800 block">Alcance y cotización:</span>
              <p>{pricingClarifications.referenceDisclaimer}</p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed">
            <strong>Transparencia QRMOON:</strong> {pricingClarifications.honestScopeLimits}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
