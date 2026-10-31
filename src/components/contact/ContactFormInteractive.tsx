'use client';

import React, { useState } from 'react';
import { getWhatsAppUrl, siteConfig } from '@/data/config';
import { categoryGroups } from '@/data/categories';
import { MessageSquare, CheckCircle2 } from 'lucide-react';

export const ContactFormInteractive: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [sector, setSector] = useState(categoryGroups[1].label);
  const [selectedPlan, setSelectedPlan] = useState('Plan Empresa Pequeña (RD$50,000 inicial)');
  const [clientName, setClientName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Diseño y desarrollo web adaptable a celulares',
    'Integración directa con WhatsApp',
  ]);

  const availableServices = [
    'Diseño y desarrollo web adaptable a celulares',
    'Integración directa con WhatsApp',
    'Chatbot de atención automática',
    'Google Reviews con código QR',
    'Tarjetas de contacto digital QRMOON (V-Card)',
    'Contenidos para Instagram y TikTok',
    'SEO inicial y Google Analytics',
  ];

  const handleToggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const constructWhatsAppMessage = () => {
    let msg = `*SOLICITUD DE COTIZACIÓN - QRMOON*\n\n`;
    msg += `👤 *Nombre:* ${clientName || 'No especificado'}\n`;
    msg += `🏢 *Negocio:* ${businessName || 'Nuevo proyecto'}\n`;
    msg += `📍 *Sector:* ${sector}\n`;
    msg += `💼 *Plan de interés:* ${selectedPlan}\n`;
    if (phone) msg += `📱 *Teléfono de contacto:* ${phone}\n`;

    if (selectedServices.length > 0) {
      msg += `\n🛠 *Servicios de interés:*\n- ${selectedServices.join('\n- ')}\n`;
    }

    if (notes) {
      msg += `\n📝 *Detalles adicionales:*\n${notes}\n`;
    }

    msg += `\nHola QRMOON, me gustaría recibir una cotización formal basada en estos datos.`;

    return msg;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = constructWhatsAppMessage();
    const url = getWhatsAppUrl(finalMsg);
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10">
      {isSubmitted ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-black text-slate-900">¡Solicitud Generada!</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Se ha abierto la conversación en WhatsApp con el resumen de tu negocio. Si no se abrió
            automáticamente, puedes pulsar el botón a continuación:
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl(constructWhatsAppMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Abrir WhatsApp ahora</span>
            </a>
          </div>
          <div className="pt-4">
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-xs text-blue-700 hover:underline font-semibold"
            >
              Modificar datos o enviar otra solicitud
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
          <div className="border-b border-slate-100 pb-4 mb-2">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Solicitud de Cotización Personalizada
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Completa los datos de tu negocio para preparar una propuesta adaptada a tu presupuesto.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Nombre del contacto */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">
                Tu Nombre y Apellido *
              </label>
              <input
                type="text"
                required
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Ej. Juan Pérez"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>

            {/* Nombre del negocio */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">
                Nombre de tu Negocio o Proyecto *
              </label>
              <input
                type="text"
                required
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Ej. Barbería Clásica RD / AutoTaller"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Sector comercial */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">
                Sector o Categoría Comercial
              </label>
              <select
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
              >
                {categoryGroups
                  .filter((c) => c.id !== 'todas')
                  .map((c) => (
                    <option key={c.id} value={c.label}>
                      {c.label}
                    </option>
                  ))}
                <option value="Otro sector comercial">Otro sector (especificar en notas)</option>
              </select>
            </div>

            {/* Plan de interés */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">
                Plan de Referencia
              </label>
              <select
                value={selectedPlan}
                onChange={(e) => setSelectedPlan(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
              >
                <option value="Plan Básico (RD$25,000 inicial / RD$6,500 mensual)">
                  Plan Básico (RD$25,000 inicial / RD$6,500 mensual)
                </option>
                <option value="Plan Empresa Pequeña (RD$50,000 inicial / RD$15,000 mensual)">
                  Plan Empresa Pequeña (RD$50,000 inicial / RD$15,000 mensual)
                </option>
                <option value="Plan Empresa Mediana (Desde RD$100,000 inicial / Desde RD$30,000 mensual)">
                  Plan Empresa Mediana (Desde RD$100,000 inicial / Desde RD$30,000 mensual)
                </option>
                <option value="Necesito orientación previa para elegir el plan">
                  No estoy seguro / Necesito asesoría
                </option>
              </select>
            </div>
          </div>

          {/* Teléfono WhatsApp */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">
              Tu Teléfono Celular (WhatsApp)
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ej. 809-555-0123"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          {/* Servicios que necesitas */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-2">
              Herramientas que te gustaría incluir:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {availableServices.map((srv) => {
                const isChecked = selectedServices.includes(srv);

                return (
                  <button
                    key={srv}
                    type="button"
                    onClick={() => handleToggleService(srv)}
                    className={`flex items-center gap-2.5 p-3 rounded-xl text-xs font-medium text-left transition-all border ${
                      isChecked
                        ? 'bg-blue-50/80 border-blue-400 text-blue-900 font-semibold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border ${
                        isChecked
                          ? 'bg-blue-700 border-blue-700 text-white'
                          : 'border-slate-400 bg-white'
                      }`}
                    >
                      {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                    </div>
                    <span>{srv}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Notas adicionales */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wide text-slate-700 mb-1.5">
              ¿Alguna necesidad o detalle específico que debamos conocer?
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Cuéntanos sobre tu negocio, qué te gustaría lograr o si ya tienes una página antigua..."
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2 space-y-3">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-lg shadow-emerald-600/20 hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Enviar solicitud por WhatsApp con resumen</span>
            </button>

            <p className="text-[11px] text-center text-slate-500">
              Al hacer clic, se generará un mensaje claro y estructurado listo para enviar a nuestro WhatsApp comercial ({siteConfig.whatsappDisplay}).
            </p>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactFormInteractive;
