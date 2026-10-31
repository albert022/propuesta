'use client';

import React from 'react';
import { CategoryGroupId } from '@/types';
import { categoryGroups } from '@/data/categories';
import { Search, X, Sparkles, Wrench, Car, ShoppingBag, Building2, Utensils, LayoutGrid } from 'lucide-react';

interface DemoFilterBarProps {
  activeCategory: CategoryGroupId;
  onSelectCategory: (id: CategoryGroupId) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultsCount: number;
}

export const DemoFilterBar: React.FC<DemoFilterBarProps> = ({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  resultsCount,
}) => {
  const getCategoryIcon = (id: CategoryGroupId) => {
    switch (id) {
      case 'todas':
        return <LayoutGrid className="w-4 h-4" />;
      case 'belleza':
        return <Sparkles className="w-4 h-4" />;
      case 'servicios-tecnicos':
        return <Wrench className="w-4 h-4" />;
      case 'automotriz':
        return <Car className="w-4 h-4" />;
      case 'comercio':
        return <ShoppingBag className="w-4 h-4" />;
      case 'inmobiliaria-turismo':
        return <Building2 className="w-4 h-4" />;
      case 'gastronomia':
        return <Utensils className="w-4 h-4" />;
      default:
        return <LayoutGrid className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Search Input Box */}
      <div className="relative max-w-2xl mx-auto">
        <div className="relative flex items-center">
          <div className="absolute left-4 text-slate-400 pointer-events-none">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar por sector o negocio (ej. aire acondicionado, barbería, repuestos, Airbnb...)"
            className="w-full pl-12 pr-10 py-3.5 bg-white rounded-2xl border border-slate-300 shadow-xs focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none text-slate-900 placeholder:text-slate-400 text-sm sm:text-base transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none px-2 -mx-2">
        {categoryGroups.map((group) => {
          const isSelected = activeCategory === group.id;

          return (
            <button
              key={group.id}
              onClick={() => onSelectCategory(group.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all select-none ${
                isSelected
                  ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20 scale-[1.02]'
                  : 'bg-white text-slate-700 hover:bg-slate-100/90 border border-slate-200/90'
              }`}
            >
              <span className={isSelected ? 'text-white' : 'text-slate-500'}>
                {getCategoryIcon(group.id)}
              </span>
              <span>{group.label}</span>
            </button>
          );
        })}
      </div>

      {/* Status / Results summary */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 pt-2 border-t border-slate-200/60">
        <div>
          Mostrando <span className="font-bold text-slate-900">{resultsCount}</span>{' '}
          {resultsCount === 1 ? 'solución disponible' : 'soluciones disponibles'}
        </div>
        {(activeCategory !== 'todas' || searchQuery) && (
          <button
            onClick={() => {
              onSelectCategory('todas');
              onSearchChange('');
            }}
            className="text-blue-700 hover:text-blue-800 font-medium hover:underline"
          >
            Restablecer filtros
          </button>
        )}
      </div>
    </div>
  );
};

export default DemoFilterBar;
