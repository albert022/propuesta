import React from 'react';
import Link from 'next/link';
import { DemoItem } from '@/types';
import { DemoPreviewCardGraphic } from './DemoPreviewCardGraphic';
import { getWhatsAppUrl } from '@/data/config';
import { Check, ArrowRight, MessageSquare, ExternalLink, Clock } from 'lucide-react';

interface DemoCardProps {
  demo: DemoItem;
}

export const DemoCard: React.FC<DemoCardProps> = ({ demo }) => {
  const isAvailable = demo.status === 'disponible';
  const hasExternalUrl = Boolean(demo.demoUrl && demo.demoUrl.trim().length > 0);

  const whatsappMessage = `Hola, vi la demostración de ${demo.name} en QRMOON y me interesa una página web similar. ¿Podrían brindarme información?`;

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      {/* Top Preview Image / Mockup Graphic */}
      <div className="relative">
        <DemoPreviewCardGraphic demo={demo} />

        {/* Status Badge */}
        <div className="absolute top-3 right-3 z-20">
          {isAvailable ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500 text-white shadow-md shadow-emerald-500/20 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              Demo disponible
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-200 shadow-md backdrop-blur-md">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Próximamente
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Sector Category Tag */}
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-1.5">
            {demo.category}
          </div>

          {/* Sector Name */}
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2.5">
            <Link href={`/demos/${demo.slug}`} className="focus:outline-none">
              {demo.name}
            </Link>
          </h3>

          {/* Short commercial description */}
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            {demo.shortDescription}
          </p>

          {/* 3 Highlighted Features */}
          <div className="space-y-2 mb-6">
            <div className="text-xs font-bold text-slate-900 uppercase tracking-wide">
              Funcionalidades destacadas:
            </div>
            <ul className="space-y-1.5">
              {demo.features.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                  <div className="p-0.5 rounded-full bg-blue-100 text-blue-700 mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-4 border-t border-slate-100 space-y-2.5">
          {/* Primary Action Button: Explorar demo */}
          {isAvailable ? (
            hasExternalUrl ? (
              <a
                href={demo.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-md"
              >
                <span>Ver demostración en vivo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <Link
                href={`/demos/${demo.slug}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-semibold transition-all shadow-xs hover:shadow-md"
              >
                <span>Explorar propuesta y estructura</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )
          ) : (
            <button
              disabled
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 text-slate-400 text-xs sm:text-sm font-semibold cursor-not-allowed border border-slate-200"
            >
              <span>Demo en preparación (Próximamente)</span>
            </button>
          )}

          {/* Secondary Action: Quiero una web así (WhatsApp) */}
          <div className="flex items-center gap-2">
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/80 text-xs font-semibold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Quiero una web así</span>
            </a>

            <Link
              href={`/demos/${demo.slug}`}
              className="px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold transition-colors text-center"
              title="Ver detalle del sector"
            >
              Detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
