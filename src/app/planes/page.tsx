import { Metadata } from 'next';
import { PricingTable } from '@/components/sections/PricingTable';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { FinalCta } from '@/components/sections/FinalCta';
import { Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Planes y Precios en Pesos Dominicanos (RD$) — QRMOON',
  description:
    'Compara nuestros paquetes de digitalización y desarrollo web para independientes, pequeñas y medianas empresas en República Dominicana. Precios transparentes sin costos ocultos.',
};

export default function PlanesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Top Banner */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>Tarifas Oficiales para República Dominicana</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Planes y Paquetes de Digitalización.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Inversión clara expresada en pesos dominicanos (RD$). Diseñado para negocios que buscan
            rentabilidad, atención continua y soporte local garantizado.
          </p>
        </div>
      </div>

      {/* Main Pricing Table */}
      <PricingTable showTitle={false} />

      {/* Why Initial vs Monthly Section */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              ¿Por qué dividimos el costo en Implementación y Mensualidad?
            </h2>
            <p className="text-sm text-slate-600">
              Un modelo justo que garantiza calidad en el lanzamiento y estabilidad en el tiempo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Pago de Implementación Inicial (Único)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Remunera todo el trabajo intensivo de creación: arquitectura del sitio, diseño visual,
                maquetación responsive para celulares, integración de WhatsApp, configuración de chatbot,
                pruebas en dispositivos y lanzamiento oficial en producción.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Mensualidad Operativa (Recurrente)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Mantiene tu sitio activo, seguro y rápido: servidores de alta disponibilidad, certificado
                de seguridad SSL, respaldos preventivos, soporte técnico para solventar dudas o cambios
                menores de información y generación de contenidos de redes en paquetes que lo contemplan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ on pricing */}
      <FaqAccordion />

      {/* Final CTA */}
      <FinalCta />
    </div>
  );
}
