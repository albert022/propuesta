'use client';

import React, { useState } from 'react';
import { faqsData } from '@/data/faqs';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '@/data/config';

export const FaqAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqsData[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
            Dudas Comunes
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Preguntas frecuentes.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Todo lo que necesitas saber antes de dar el paso hacia la digitalización de tu negocio.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  type="button"
                  aria-expanded={isOpen}
                  className="w-full text-left px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-blue-50 text-blue-700 rotate-180'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more answers */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <p className="text-sm text-slate-700 font-medium mb-3">
            ¿Tienes otra pregunta sobre cómo aplicar esto a tu caso específico?
          </p>
          <a
            href={getWhatsAppUrl('Hola QRMOON, tengo una consulta sobre sus servicios para mi negocio.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Consultar directamente por WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;
