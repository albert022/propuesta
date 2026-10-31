'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { DemoItem, CategoryGroupId } from '@/types';
import { DemoFilterBar } from './DemoFilterBar';
import { DemoCard } from './DemoCard';
import { HelpCircle } from 'lucide-react';
import { getWhatsAppUrl } from '@/data/config';

interface DemoCatalogInteractiveProps {
  initialDemos: DemoItem[];
  initialCategory?: CategoryGroupId;
}

const DemoCatalogInteractiveInner: React.FC<DemoCatalogInteractiveProps> = ({
  initialDemos,
  initialCategory = 'todas',
}) => {
  const searchParams = useSearchParams();
  const catParam = searchParams.get('cat') as CategoryGroupId | null;

  // React 19 idiomatic state: derive activeCategory directly without cascading effect
  const [selectedCategory, setSelectedCategory] = useState<CategoryGroupId | null>(null);
  const activeCategory: CategoryGroupId = selectedCategory ?? (catParam || initialCategory);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredDemos = useMemo(() => {
    let list = initialDemos;

    // Filter by category
    if (activeCategory !== 'todas') {
      list = list.filter((demo) => demo.categoryGroup === activeCategory);
    }

    // Filter by search query
    const q = searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter((demo) => {
        return (
          demo.name.toLowerCase().includes(q) ||
          demo.shortDescription.toLowerCase().includes(q) ||
          demo.category.toLowerCase().includes(q) ||
          demo.features.some((f) => f.toLowerCase().includes(q)) ||
          demo.tags.some((t) => t.toLowerCase().includes(q))
        );
      });
    }

    return list;
  }, [initialDemos, activeCategory, searchQuery]);

  return (
    <div className="space-y-10">
      {/* Search and Category Filter Bar */}
      <DemoFilterBar
        activeCategory={activeCategory}
        onSelectCategory={setSelectedCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        resultsCount={filteredDemos.length}
      />

      {/* Demos Grid */}
      {filteredDemos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDemos.map((demo) => (
            <DemoCard key={demo.id} demo={demo} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-10 text-center max-w-xl mx-auto my-8 space-y-4">
          <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
            <HelpCircle className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">
            No encontramos soluciones con esos términos
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            No encontramos ninguna demostración que coincida con &ldquo;
            <span className="font-semibold text-slate-800">{searchQuery}</span>&rdquo; en esta
            categoría. Sin embargo, desarrollamos soluciones personalizadas para cualquier sector.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => {
                setSelectedCategory('todas');
                setSearchQuery('');
              }}
              className="px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 text-sm font-semibold hover:bg-slate-100 transition-colors w-full sm:w-auto"
            >
              Restablecer filtros
            </button>
            <a
              href={getWhatsAppUrl(
                `Hola QRMOON, tengo un negocio del sector "${searchQuery}" y me gustaría saber qué solución digital pueden crear para mí.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold transition-colors w-full sm:w-auto shadow-xs"
            >
              Consultar por mi sector en WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export const DemoCatalogInteractive: React.FC<DemoCatalogInteractiveProps> = (props) => {
  return (
    <Suspense
      fallback={
        <div className="py-12 text-center text-slate-400 font-medium">
          Cargando catálogo interactivo...
        </div>
      }
    >
      <DemoCatalogInteractiveInner {...props} />
    </Suspense>
  );
};

export default DemoCatalogInteractive;
