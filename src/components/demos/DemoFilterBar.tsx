'use client';

import React from 'react';
import { CategoryGroupId, CatalogExplorationMode, PlanId } from '@/types';
import { categoryGroups } from '@/data/categories';
import {
  Search,
  X,
  Sparkles,
  Wrench,
  Car,
  ShoppingBag,
  Building2,
  Utensils,
  LayoutGrid,
  Banknote,
  Briefcase,
} from 'lucide-react';

interface DemoFilterBarProps {
  mode: CatalogExplorationMode;
  onModeChange: (mode: CatalogExplorationMode) => void;
  activeCategory: CategoryGroupId;
  onSelectCategory: (id: CategoryGroupId) => void;
  activeBudgetPlan: PlanId;
  onSelectBudgetPlan: (planId: PlanId) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  resultsCount: number;
}

export const DemoFilterBar: React.FC<DemoFilterBarProps> = ({
  mode,
  onModeChange,
  activeCategory,
  onSelectCategory,
  activeBudgetPlan,
  onSelectBudgetPlan,
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
      {/* 2 EXPLORATION MODES SWITCHER (Por tipo de negocio vs Por presupuesto/plan) */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200/90 shadow-xs max-w-full overflow-x-auto">
          <button
            type="button"
            onClick={() => onModeChange('por-negocio')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              mode === 'por-negocio'
                ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Explorar por tipo de negocio</span>
          </button>

          <button
            type="button"
            onClick={() => onModeChange('por-plan')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
              mode === 'por-plan'
                ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Banknote className="w-4 h-4" />
            <span>Explorar por presupuesto / plan</span>
          </button>
        </div>
      </div>

      {/* MODE 1: POR TIPO DE NEGOCIO (SECTORES) */}
      {mode === 'por-negocio' ? (
        <div className="space-y-5">
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
        </div>
      ) : (
        /* MODE 2: POR PRESUPUESTO / PLAN */
        <div className="space-y-5 max-w-4xl mx-auto">
          <div className="text-center space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              Selecciona tu nivel de inversión para ver cómo lucen las soluciones:
            </h3>
            <p className="text-xs text-slate-500">
              Todas las demostraciones se adaptarán al nivel y alcance de páginas seleccionado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {/* Plan Básico */}
            <button
              type="button"
              onClick={() => onSelectBudgetPlan('basico')}
              className={`p-4 rounded-2xl border text-left transition-all ${
                activeBudgetPlan === 'basico'
                  ? 'bg-blue-50/90 border-blue-600 shadow-md ring-2 ring-blue-600/20'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="text-xs font-bold uppercase text-slate-500">Nivel 1</div>
              <div className="text-base font-extrabold text-slate-900">Plan Básico</div>
              <div className="text-sm font-extrabold text-blue-700 mt-1">
                RD$ 25,000 <span className="text-[11px] font-normal text-slate-500">/ único</span>
              </div>
              <div className="text-xs text-slate-600 mt-0.5">+ RD$ 6,500/mes</div>
              <div className="text-[11px] text-slate-500 mt-2 font-medium">
                1 a 3 secciones o páginas ágiles
              </div>
            </button>

            {/* Plan Empresa Pequeña */}
            <button
              type="button"
              onClick={() => onSelectBudgetPlan('pequena')}
              className={`p-4 rounded-2xl border text-left transition-all relative ${
                activeBudgetPlan === 'pequena'
                  ? 'bg-blue-50/90 border-blue-600 shadow-md ring-2 ring-blue-600/20'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <span className="absolute -top-2.5 right-3 text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-600 text-white">
                Más Popular
              </span>
              <div className="text-xs font-bold uppercase text-slate-500">Nivel 2</div>
              <div className="text-base font-extrabold text-slate-900">Empresa Pequeña</div>
              <div className="text-sm font-extrabold text-blue-700 mt-1">
                RD$ 50,000 <span className="text-[11px] font-normal text-slate-500">/ único</span>
              </div>
              <div className="text-xs text-slate-600 mt-0.5">+ RD$ 15,000/mes</div>
              <div className="text-[11px] text-slate-500 mt-2 font-medium">
                5 a 8 páginas personalizadas
              </div>
            </button>

            {/* Plan Empresa Mediana */}
            <button
              type="button"
              onClick={() => onSelectBudgetPlan('mediana')}
              className={`p-4 rounded-2xl border text-left transition-all ${
                activeBudgetPlan === 'mediana'
                  ? 'bg-blue-50/90 border-blue-600 shadow-md ring-2 ring-blue-600/20'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="text-xs font-bold uppercase text-slate-500">Nivel 3</div>
              <div className="text-base font-extrabold text-slate-900">Empresa Mediana</div>
              <div className="text-sm font-extrabold text-blue-700 mt-1">
                Desde RD$ 100,000
              </div>
              <div className="text-xs text-slate-600 mt-0.5">Desde RD$ 30,000/mes</div>
              <div className="text-[11px] text-slate-500 mt-2 font-medium">
                10+ páginas y portal a medida
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Status / Results summary */}
      <div className="flex items-center justify-between text-xs sm:text-sm text-slate-500 pt-2 border-t border-slate-200/60">
        <div>
          Mostrando <span className="font-bold text-slate-900">{resultsCount}</span> soluciones en{' '}
          <span className="font-semibold text-blue-700">
            {mode === 'por-negocio'
              ? activeCategory === 'todas'
                ? 'todos los sectores'
                : categoryGroups.find((c) => c.id === activeCategory)?.label
              : activeBudgetPlan === 'basico'
              ? 'Nivel Básico (RD$25,000)'
              : activeBudgetPlan === 'pequena'
              ? 'Nivel Empresa Pequeña (RD$50,000)'
              : 'Nivel Empresa Mediana (Desde RD$100,000)'}
          </span>
        </div>

        {(activeCategory !== 'todas' || searchQuery) && mode === 'por-negocio' && (
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
