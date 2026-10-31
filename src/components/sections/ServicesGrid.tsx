import React from 'react';
import { servicesData } from '@/data/services';
import { getWhatsAppUrl } from '@/data/config';
import {
  Globe,
  MessageSquare,
  Bot,
  Star,
  QrCode,
  Share2,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Check,
} from 'lucide-react';

interface ServicesGridProps {
  showTitle?: boolean;
  limit?: number;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ showTitle = true, limit }) => {
  const displayedServices = limit ? servicesData.slice(0, limit) : servicesData;

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'desarrollo-web':
        return <Globe className="w-6 h-6 text-blue-600" />;
      case 'whatsapp-negocios':
        return <MessageSquare className="w-6 h-6 text-emerald-600" />;
      case 'chatbots':
        return <Bot className="w-6 h-6 text-indigo-600" />;
      case 'google-reviews':
        return <Star className="w-6 h-6 text-amber-500" />;
      case 'qrmoon-tarjetas':
        return <QrCode className="w-6 h-6 text-purple-600" />;
      case 'redes-sociales':
        return <Share2 className="w-6 h-6 text-rose-500" />;
      case 'seo-analitica':
        return <BarChart3 className="w-6 h-6 text-cyan-600" />;
      case 'mantenimiento-soporte':
        return <ShieldCheck className="w-6 h-6 text-teal-600" />;
      default:
        return <Globe className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="soluciones" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80">
              Ecosistema Integral de Digitalización
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Mucho más que una página web.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              QRMOON no solo crea una vitrina digital atractiva; te equipamos con herramientas comerciales
              que capturan clientes, generan confianza y facilitan las ventas de tu día a día.
            </p>
          </div>
        )}

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {displayedServices.map((service) => {
            const infoMessage = `Hola QRMOON, me gustaría solicitar más información sobre el servicio de "${service.title}" para mi negocio.`;

            return (
              <div
                key={service.id}
                id={service.id}
                className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-blue-300 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Icon Header */}
                  <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.id)}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Benefits */}
                  <ul className="space-y-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with Plan tier indicator & WhatsApp link */}
                <div className="pt-4 border-t border-slate-200/70 space-y-3">
                  <div className="text-[11px] text-slate-500 font-medium">
                    Disponible en:{' '}
                    <span className="font-semibold text-slate-700">
                      {service.includedIn.basico ? 'Básico, Pequeña, Mediana' : 'Planes Empresa'}
                    </span>
                  </div>

                  <a
                    href={getWhatsAppUrl(infoMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-800 transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>Solicitar información</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
