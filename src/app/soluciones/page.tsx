import { Metadata } from 'next';
import Link from 'next/link';
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
  Check,
  X,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Soluciones Digitales y Servicios — QRMOON',
  description:
    'Descubre el catálogo completo de herramientas digitales para negocios en República Dominicana: desarrollo web, WhatsApp inteligente, chatbots, Google Reviews con QR, V-Cards y analítica.',
};

export default function SolucionesPage() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'desarrollo-web':
        return <Globe className="w-7 h-7 text-blue-600" />;
      case 'whatsapp-negocios':
        return <MessageSquare className="w-7 h-7 text-emerald-600" />;
      case 'chatbots':
        return <Bot className="w-7 h-7 text-indigo-600" />;
      case 'google-reviews':
        return <Star className="w-7 h-7 text-amber-500" />;
      case 'qrmoon-tarjetas':
        return <QrCode className="w-7 h-7 text-purple-600" />;
      case 'redes-sociales':
        return <Share2 className="w-7 h-7 text-rose-500" />;
      case 'seo-analitica':
        return <BarChart3 className="w-7 h-7 text-cyan-600" />;
      case 'mantenimiento-soporte':
        return <ShieldCheck className="w-7 h-7 text-teal-600" />;
      default:
        return <Globe className="w-7 h-7 text-blue-600" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>Herramientas de Crecimiento Comercial</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Mucho más que una página web.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Una presencia digital moderna no se limita a un diseño atractivo. En QRMOON integramos
            herramientas que automatizan tu atención, aumentan tus reseñas de Google y multiplican tus
            cotizaciones por WhatsApp.
          </p>
        </div>

        {/* Detailed 8 Services List */}
        <div className="space-y-8">
          {servicesData.map((service, index) => {
            const whatsappMsg = `Hola QRMOON, me interesa conocer más sobre el servicio de "${service.title}" para mi negocio.`;

            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  {/* Service info */}
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0">
                      {getIcon(service.id)}
                    </div>
                    <div className="space-y-1.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-blue-700">
                        Servicio {index + 1} de 8
                      </div>
                      <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                        {service.title}
                      </h2>
                      <p className="text-sm font-medium text-slate-500">{service.shortDesc}</p>
                    </div>
                  </div>

                  {/* Single CTA */}
                  <a
                    href={getWhatsAppUrl(whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs sm:text-sm border border-blue-200/80 transition-colors whitespace-nowrap self-start"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Cotizar este servicio</span>
                  </a>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
                  {service.fullDesc}
                </p>

                {/* Benefits & Plan Breakdown */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                  {/* Practical Benefits */}
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Beneficios clave:
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((ben, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <Check className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{ben}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Inclusion according to plan */}
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                      Disponibilidad por paquete:
                    </h3>
                    <ul className="space-y-2">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                          <span className="w-2 h-2 rounded-full bg-blue-600 mt-2 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Matrix by Plan */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl font-black text-slate-900">
              Disponibilidad de servicios por paquete
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Cada plan está dimensionado honestamente para diferentes etapas de negocio.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[11px]">
                  <th className="py-3 px-4 font-bold">Servicio Digital</th>
                  <th className="py-3 px-4 font-bold text-center">Plan Básico</th>
                  <th className="py-3 px-4 font-bold text-center bg-blue-50 text-blue-900 rounded-t-xl">
                    Empresa Pequeña
                  </th>
                  <th className="py-3 px-4 font-bold text-center">Empresa Mediana</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {servicesData.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/50">
                    <td className="py-3.5 px-4 font-semibold text-slate-900">{s.title}</td>
                    <td className="py-3.5 px-4 text-center">
                      {s.includedIn.basico ? (
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-xs">
                          <Check className="w-4 h-4 text-emerald-600" />
                          Básico
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-slate-400 text-xs">
                          <X className="w-4 h-4" />
                          No incluido
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center bg-blue-50/40">
                      {s.includedIn.pequena ? (
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-xs">
                          <Check className="w-4 h-4 text-emerald-600" />
                          Incluido
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-slate-400 text-xs">
                          <X className="w-4 h-4" />
                          No incluido
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      {s.includedIn.mediana ? (
                        <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold text-xs">
                          <Check className="w-4 h-4 text-emerald-600" />
                          Avanzado
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-slate-400 text-xs">
                          <X className="w-4 h-4" />
                          No incluido
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/planes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-xs transition-colors"
            >
              <span>Ver tarifas completas en pesos dominicanos (RD$)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
