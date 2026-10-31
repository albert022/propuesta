import React from 'react';
import Link from 'next/link';
import { getAllDemos } from '@/data/demos';
import { DemoCatalogInteractive } from '@/components/demos/DemoCatalogInteractive';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HomeDemoCatalogSection: React.FC = () => {
  const allDemos = getAllDemos();

  return (
    <section id="demos" className="py-16 sm:py-24 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>Catálogo por Sectores Comerciales</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Descubre cómo podría verse tu negocio.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Selecciona tu sector y explora un ejemplo interactivo de las soluciones que podemos
            desarrollar para conectar tu empresa con más clientes.
          </p>
        </div>

        {/* Dynamic Interactive Filter and Cards Grid */}
        <DemoCatalogInteractive initialDemos={allDemos} />

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <Link
            href="/demos"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-blue-700 font-bold text-sm border border-slate-300 shadow-xs hover:shadow-md transition-all"
          >
            <span>Ver catálogo completo con detalles técnicos</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeDemoCatalogSection;
