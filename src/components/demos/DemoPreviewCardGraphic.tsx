import React from 'react';
import { DemoItem, SectorPlanVariant } from '@/types';
import {
  Wrench,
  Sparkles,
  Scissors,
  Car,
  ShoppingBag,
  Building2,
  Utensils,
  Zap,
  PhoneCall,
  Star,
  CheckCircle2,
  Compass,
} from 'lucide-react';

interface DemoPreviewCardGraphicProps {
  demo: DemoItem;
  variant?: SectorPlanVariant;
  className?: string;
}

export const DemoPreviewCardGraphic: React.FC<DemoPreviewCardGraphicProps> = ({
  demo,
  variant,
  className = '',
}) => {
  const currentVariant = variant || demo.variants[demo.defaultPlanId];

  const getSectorIcon = (id: string) => {
    switch (id) {
      case 'demo-aire-inversores':
        return <Wrench className="w-5 h-5 text-sky-400" />;
      case 'demo-barberias':
        return <Scissors className="w-5 h-5 text-amber-400" />;
      case 'demo-salones-belleza':
        return <Sparkles className="w-5 h-5 text-rose-300" />;
      case 'demo-centros-unas':
        return <Sparkles className="w-5 h-5 text-fuchsia-300" />;
      case 'demo-talleres-mecanicos':
        return <Car className="w-5 h-5 text-blue-300" />;
      case 'demo-ferreterias':
        return <ShoppingBag className="w-5 h-5 text-amber-300" />;
      case 'demo-repuestos-vehiculos':
        return <Car className="w-5 h-5 text-cyan-300" />;
      case 'demo-electricistas-hogar':
        return <Zap className="w-5 h-5 text-yellow-300" />;
      case 'demo-agencias-inmobiliarias':
        return <Building2 className="w-5 h-5 text-emerald-300" />;
      case 'demo-alojamientos-turisticos':
        return <Building2 className="w-5 h-5 text-cyan-300" />;
      case 'demo-restaurantes-cafeterias':
        return <Utensils className="w-5 h-5 text-amber-300" />;
      case 'demo-transporte-turismo':
        return <Compass className="w-5 h-5 text-sky-300" />;
      default:
        return <Wrench className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <div
      className={`relative w-full aspect-[16/10] overflow-hidden rounded-t-2xl bg-gradient-to-br ${
        currentVariant.previewGradient || 'from-slate-800 to-slate-950'
      } p-3 sm:p-4 text-white flex flex-col justify-between select-none ${className}`}
    >
      {/* Subdued ambient background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Realistic Mini Browser Top Bar */}
      <div className="relative z-10 flex items-center justify-between pb-2 border-b border-white/10">
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
        <div className="text-[10px] font-mono tracking-wider bg-black/30 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-slate-300 border border-white/5 truncate max-w-[210px]">
          {currentVariant.demoUrl
            ? currentVariant.demoUrl.replace(/^https?:\/\//, '')
            : `demo.qrmoon.do/${demo.slug.slice(0, 14)}.../${currentVariant.planId}`}
        </div>
        <div className="w-4" />
      </div>

      {/* Sector Preview Wireframe / Visual Simulation */}
      <div className="relative z-10 flex-1 flex flex-col justify-center py-2">
        <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl p-3 shadow-lg transition-transform duration-300 group-hover:scale-[1.02]">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-white/15 backdrop-blur-sm">
                {getSectorIcon(demo.id)}
              </div>
              <span className="text-xs font-semibold tracking-wide text-white truncate max-w-[160px]">
                {demo.name}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-medium text-amber-300 bg-black/40 px-2 py-0.5 rounded-full">
              <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
              <span>4.9</span>
            </div>
          </div>

          {/* Micro layout preview */}
          <div className="space-y-1.5">
            <div className="h-2 w-3/4 bg-white/40 rounded-full" />
            <div className="h-1.5 w-1/2 bg-white/20 rounded-full" />
          </div>

          {/* Mini Action pills */}
          <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between gap-2 text-[10px]">
            <div className="flex items-center gap-1 text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-md">
              <CheckCircle2 className="w-3 h-3" />
              <span>{currentVariant.pagesScope.split('(')[0].trim()}</span>
            </div>
            <div className="flex items-center gap-1 text-slate-200 bg-white/10 px-2 py-0.5 rounded-md">
              <PhoneCall className="w-3 h-3" />
              <span>WhatsApp Directo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar of preview */}
      <div className="relative z-10 flex items-center justify-between text-[11px] text-white/70">
        <span className="font-medium truncate">{demo.category}</span>
        <span className="uppercase text-[9px] tracking-wider font-mono px-2 py-0.5 bg-black/40 rounded-md">
          {currentVariant.status === 'disponible' ? 'En Vivo' : 'En Preparación'}
        </span>
      </div>
    </div>
  );
};

export default DemoPreviewCardGraphic;
