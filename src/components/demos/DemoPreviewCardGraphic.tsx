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
  const coverImage = currentVariant.coverImage || demo.coverImage;
  const isAvailable = currentVariant.status === 'disponible';
  const hasLiveUrl = Boolean(currentVariant.demoUrl && currentVariant.demoUrl.trim().length > 0);

  const getSectorIcon = (id: string) => {
    switch (id) {
      case 'demo-aire-inversores':
        return <Wrench className="w-4 h-4 text-sky-400" />;
      case 'demo-barberias':
        return <Scissors className="w-4 h-4 text-amber-400" />;
      case 'demo-salones-belleza':
        return <Sparkles className="w-4 h-4 text-rose-300" />;
      case 'demo-centros-unas':
        return <Sparkles className="w-4 h-4 text-fuchsia-300" />;
      case 'demo-talleres-mecanicos':
        return <Car className="w-4 h-4 text-blue-300" />;
      case 'demo-ferreterias':
        return <ShoppingBag className="w-4 h-4 text-amber-300" />;
      case 'demo-repuestos-vehiculos':
        return <Car className="w-4 h-4 text-cyan-300" />;
      case 'demo-electricistas-hogar':
        return <Zap className="w-4 h-4 text-yellow-300" />;
      case 'demo-agencias-inmobiliarias':
        return <Building2 className="w-4 h-4 text-emerald-300" />;
      case 'demo-alojamientos-turisticos':
        return <Building2 className="w-4 h-4 text-cyan-300" />;
      case 'demo-restaurantes-cafeterias':
        return <Utensils className="w-4 h-4 text-amber-300" />;
      case 'demo-transporte-turismo':
        return <Compass className="w-4 h-4 text-sky-300" />;
      default:
        return <Wrench className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <div
      className={`relative w-full aspect-[16/10] overflow-hidden rounded-t-3xl bg-slate-900 text-white flex flex-col justify-between select-none ${className}`}
    >
      {/* Background Photograph or Gradient */}
      {coverImage ? (
        <>
          <img
            src={coverImage}
            alt={`Captura del sitio web ${demo.name}`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
          />
          {/* Multi-layered dark gradient overlay for optimal readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40 pointer-events-none" />
        </>
      ) : (
        <>
          <div
            className={`absolute inset-0 bg-gradient-to-br ${
              currentVariant.previewGradient || 'from-slate-800 to-slate-950'
            }`}
          />
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        </>
      )}

      {/* Realistic Mini Browser Top Bar */}
      <div className="relative z-10 flex items-center justify-between p-3 border-b border-white/15 bg-black/40 backdrop-blur-md">
        <div className="flex items-center space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/90" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/90" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/90" />
        </div>

        <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-wider bg-black/50 px-2.5 py-0.5 rounded-full text-slate-200 border border-white/10 truncate max-w-[210px] shadow-xs">
          {hasLiveUrl && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />}
          <span className="truncate">
            {currentVariant.demoUrl
              ? currentVariant.demoUrl.replace(/^https?:\/\//, '')
              : `demo.qrmoon.do/${demo.slug.slice(0, 14)}...`}
          </span>
        </div>

        {hasLiveUrl ? (
          <span className="flex items-center gap-1 text-[9px] uppercase font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/40">
            <span>En vivo</span>
          </span>
        ) : (
          <div className="w-4" />
        )}
      </div>

      {/* Center Floating Card Preview */}
      <div className="relative z-10 flex-1 flex flex-col justify-end p-3 sm:p-4">
        <div className="bg-slate-950/80 backdrop-blur-md border border-white/15 rounded-2xl p-3 shadow-xl transition-transform duration-300 group-hover:translate-y-[-2px]">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-lg bg-white/20 backdrop-blur-sm">
                {getSectorIcon(demo.id)}
              </div>
              <span className="text-xs font-black tracking-wide text-white truncate max-w-[170px]">
                {demo.name}
              </span>
            </div>

            <div className="flex items-center gap-1 text-[10px] font-bold text-amber-300 bg-black/50 px-2 py-0.5 rounded-full border border-amber-400/20">
              <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
              <span>4.9</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-300 pt-1 border-t border-white/10">
            <div className="flex items-center gap-1.5 text-emerald-400 font-semibold text-[10px]">
              <CheckCircle2 className="w-3 h-3" />
              <span>{currentVariant.pagesScope.split('(')[0].trim()}</span>
            </div>
            <div className="text-[10px] font-bold text-blue-300">
              {currentVariant.initialPricePrefix || 'RD$'}{' '}
              {currentVariant.initialPrice.toLocaleString('es-DO')}
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="relative z-10 flex items-center justify-between px-4 pb-2.5 text-[11px] text-white/80">
        <span className="font-medium truncate text-[11px] drop-shadow-sm">{demo.category}</span>
        <span className="uppercase text-[9px] tracking-wider font-mono px-2 py-0.5 bg-black/60 rounded-md border border-white/10">
          {isAvailable ? 'Demo Lista' : 'En Diseño'}
        </span>
      </div>
    </div>
  );
};

export default DemoPreviewCardGraphic;
