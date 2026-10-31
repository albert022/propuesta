import React from 'react';
import { workflowSteps } from '@/data/steps';
import { Search, Layout, Rocket, Headphones, Check } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-6 h-6 text-blue-600" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-sky-600" />;
      case 'Rocket':
        return <Rocket className="w-6 h-6 text-indigo-600" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-teal-600" />;
      default:
        return <Search className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="como-trabajamos" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80">
            Paso a Paso
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Cómo trabajamos en QRMOON.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Un proceso ágil, transparente y orientado a resultados para que tengas tu presencia digital
            lista sin dolores de cabeza.
          </p>
        </div>

        {/* 4 Steps Cards with Progressive Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {workflowSteps.map((step) => {
            return (
              <div
                key={step.number}
                className="relative bg-slate-50/80 rounded-3xl p-7 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-blue-200 tracking-tighter">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center">
                      {getStepIcon(step.iconName)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {step.summary}
                  </p>
                </div>

                {/* Micro Deliverables */}
                <div className="pt-4 border-t border-slate-200/70">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Entregables de la etapa:
                  </div>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
