import { Metadata } from 'next';
import { getAllDemos } from '@/data/demos';
import { DemoCatalogInteractive } from '@/components/demos/DemoCatalogInteractive';
import { Sparkles } from 'lucide-react';
import { getWhatsAppUrl } from '@/data/config';

export const metadata: Metadata = {
  title: 'Catálogo de Demostraciones y Soluciones por Sector',
  description:
    'Explora ejemplos reales y prototipos funcionales de cómo puede verse la página web de tu negocio en República Dominicana: técnicos, barberías, salones, talleres, ferreterías, bienes raíces y más.',
};

export default function DemosPage() {
  const allDemos = getAllDemos();

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>Muestras Interactivas</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Catálogo de Soluciones Digitales por Sector.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Navega por las demostraciones para tu industria, conoce las secciones recomendadas y
            prueba cómo tus clientes interactuarán con tu negocio.
          </p>
        </div>

        {/* Interactive Filter & Dynamic Catalog */}
        <DemoCatalogInteractive initialDemos={allDemos} />

        {/* Guidance Callout */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-slate-900">
              ¿No ves exactamente tu tipo de negocio?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Desarrollamos soluciones personalizadas para cualquier giro comercial en República Dominicana.
            </p>
          </div>

          <a
            href={getWhatsAppUrl(
              'Hola QRMOON, estuve revisando el catálogo y me gustaría saber qué solución digital recomiendan para mi negocio.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-colors whitespace-nowrap shadow-xs shrink-0"
          >
            Consultar propuesta a medida
          </a>
        </div>
      </div>
    </div>
  );
}
