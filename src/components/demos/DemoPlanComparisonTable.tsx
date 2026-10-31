import React from 'react';
import { DemoItem, PlanId } from '@/types';
import { getWhatsAppUrl } from '@/data/config';
import { Check, MessageSquare, Sparkles, Clock, ExternalLink } from 'lucide-react';

interface DemoPlanComparisonTableProps {
  demo: DemoItem;
  activePlanId?: PlanId;
  onSelectPlan?: (planId: PlanId) => void;
}

export const DemoPlanComparisonTable: React.FC<DemoPlanComparisonTableProps> = ({
  demo,
  activePlanId,
  onSelectPlan,
}) => {
  const plans: PlanId[] = ['basico', 'pequena', 'mediana'];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
      {/* Table Header Callout */}
      <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200/80 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>Comparativa por Niveles para este Sector</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Compara los 3 paquetes para {demo.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Conoce el alcance exacto de páginas, funcionalidades y presupuesto en pesos dominicanos (RD$).
          </p>
        </div>
      </div>

      {/* Responsive Comparison Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-200 text-slate-600 text-xs uppercase tracking-wider">
              <th className="py-4 px-5 font-bold w-1/4">Característica / Alcance</th>
              {plans.map((pId) => {
                const variant = demo.variants[pId];
                const isSelected = activePlanId === pId;

                return (
                  <th
                    key={pId}
                    onClick={() => onSelectPlan && onSelectPlan(pId)}
                    className={`py-4 px-5 text-center w-1/4 transition-colors cursor-pointer ${
                      pId === 'pequena'
                        ? 'bg-blue-50/70 text-blue-950 font-black'
                        : isSelected
                        ? 'bg-slate-100 font-extrabold text-slate-900'
                        : 'text-slate-800 font-bold hover:bg-slate-50'
                    }`}
                  >
                    <div className="space-y-1">
                      {pId === 'pequena' && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-600 text-white inline-block mb-1">
                          Más Elegido
                        </span>
                      )}
                      <div className="text-sm font-extrabold">{variant.planName.split('—')[0]}</div>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700">
            {/* Row 1: Inversión Inicial */}
            <tr className="hover:bg-slate-50/50">
              <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50">
                Implementación Inicial (Único)
              </td>
              {plans.map((pId) => {
                const v = demo.variants[pId];
                return (
                  <td
                    key={pId}
                    className={`py-3.5 px-5 text-center font-extrabold text-sm ${
                      pId === 'pequena' ? 'bg-blue-50/30 text-blue-900' : 'text-slate-900'
                    }`}
                  >
                    {v.initialPricePrefix || 'RD$'} {v.initialPrice.toLocaleString('es-DO')}
                  </td>
                );
              })}
            </tr>

            {/* Row 2: Mensualidad Operativa */}
            <tr className="hover:bg-slate-50/50">
              <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50">
                Mensualidad Operativa
              </td>
              {plans.map((pId) => {
                const v = demo.variants[pId];
                return (
                  <td
                    key={pId}
                    className={`py-3.5 px-5 text-center font-extrabold text-xs sm:text-sm ${
                      pId === 'pequena' ? 'bg-blue-50/30 text-blue-900' : 'text-slate-800'
                    }`}
                  >
                    {v.monthlyPricePrefix || 'RD$'}{' '}
                    {v.monthlyPrice.toLocaleString('es-DO')}/mes
                  </td>
                );
              })}
            </tr>

            {/* Row 3: Páginas y estructura */}
            <tr className="hover:bg-slate-50/50">
              <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50">
                Estructura de Páginas
              </td>
              {plans.map((pId) => {
                const v = demo.variants[pId];
                return (
                  <td
                    key={pId}
                    className={`py-3.5 px-5 text-center text-xs font-semibold ${
                      pId === 'pequena' ? 'bg-blue-50/30 text-blue-950' : 'text-slate-700'
                    }`}
                  >
                    {v.pagesScope}
                  </td>
                );
              })}
            </tr>

            {/* Row 4: Páginas recomendadas del sector */}
            <tr className="hover:bg-slate-50/50">
              <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50 align-top">
                Páginas y Secciones Incluidas
              </td>
              {plans.map((pId) => {
                const v = demo.variants[pId];
                return (
                  <td
                    key={pId}
                    className={`py-3.5 px-5 text-xs align-top ${
                      pId === 'pequena' ? 'bg-blue-50/30' : ''
                    }`}
                  >
                    <ul className="space-y-1 text-[11px] text-slate-600">
                      {v.recommendedPages.map((page, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                          <span>{page}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                );
              })}
            </tr>

            {/* Row 5: Funcionalidades sectoriales clave */}
            <tr className="hover:bg-slate-50/50">
              <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50 align-top">
                Funcionalidades Especializadas
              </td>
              {plans.map((pId) => {
                const v = demo.variants[pId];
                return (
                  <td
                    key={pId}
                    className={`py-3.5 px-5 text-xs align-top ${
                      pId === 'pequena' ? 'bg-blue-50/30' : ''
                    }`}
                  >
                    <ul className="space-y-1.5 text-[11px] text-slate-600">
                      {v.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <Check className="w-3 h-3 text-blue-600 mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                );
              })}
            </tr>

            {/* Row 6: Redes sociales */}
            <tr className="hover:bg-slate-50/50">
              <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50">
                Contenidos para Redes
              </td>
              <td className="py-3.5 px-5 text-center text-xs text-slate-500">
                Solo enlaces e integración
              </td>
              <td className="py-3.5 px-5 text-center text-xs font-semibold text-blue-900 bg-blue-50/30">
                4 a 8 contenidos / mes
              </td>
              <td className="py-3.5 px-5 text-center text-xs font-semibold text-slate-800">
                8 a 16 contenidos / mes
              </td>
            </tr>

            {/* Row 7: Estado de la demo */}
            <tr className="hover:bg-slate-50/50">
              <td className="py-3.5 px-5 font-bold text-slate-900 bg-slate-50/50">
                Estado de la Demo
              </td>
              {plans.map((pId) => {
                const v = demo.variants[pId];
                return (
                  <td
                    key={pId}
                    className={`py-3.5 px-5 text-center text-xs ${
                      pId === 'pequena' ? 'bg-blue-50/30' : ''
                    }`}
                  >
                    {v.status === 'disponible' ? (
                      v.demoUrl ? (
                        <a
                          href={v.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold text-xs transition-colors shadow-2xs"
                        >
                          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                          <span>Ver en vivo</span>
                          <ExternalLink className="w-3 h-3 text-emerald-700" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-xs">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Disponible
                        </span>
                      )
                    ) : (
                      <span className="inline-flex items-center gap-1 text-amber-700 font-semibold text-xs">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        Próximamente
                      </span>
                    )}
                  </td>
                );
              })}
            </tr>

            {/* Row 8: Acciones y Botones */}
            <tr>
              <td className="py-4 px-5 font-bold text-slate-900 bg-slate-50/50">
                Solicitar Cotización
              </td>
              {plans.map((pId) => {
                const v = demo.variants[pId];
                const waMessage = `Hola QRMOON, vi la demostración de ${demo.name} en su versión "${v.planName}" y me gustaría cotizar una página similar para mi negocio.`;

                return (
                  <td
                    key={pId}
                    className={`py-4 px-5 text-center ${pId === 'pequena' ? 'bg-blue-50/30' : ''}`}
                  >
                    <a
                      href={getWhatsAppUrl(waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl font-bold text-xs transition-all shadow-xs ${
                        pId === 'pequena'
                          ? 'bg-blue-700 hover:bg-blue-800 text-white shadow-sm'
                          : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                      }`}
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Cotizar {pId === 'pequena' ? 'Pequeña' : pId === 'basico' ? 'Básico' : 'Mediana'}</span>
                    </a>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DemoPlanComparisonTable;
