import { Metadata } from 'next';
import { ContactFormInteractive } from '@/components/contact/ContactFormInteractive';
import { siteConfig, getWhatsAppUrl } from '@/data/config';
import {
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contacto y Solicitud de Cotización — QRMOON',
  description:
    'Contáctanos por WhatsApp o formulario interactivo para cotizar la digitalización de tu negocio en República Dominicana. Respuestas comerciales rápidas y asesoría transparente.',
};

export default function ContactoPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>Atención Comercial Directa</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Comencemos a digitalizar tu negocio.
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Escríbenos por WhatsApp para una respuesta inmediata o utiliza nuestro generador de cotización
            para enviarnos los detalles específicos de tu empresa.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact info & Trust cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct WhatsApp Callout Card */}
            <div className="bg-emerald-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-emerald-950/20 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>

              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                  Canal más rápido
                </div>
                <h3 className="text-2xl font-black">WhatsApp Comercial</h3>
                <p className="text-sm text-emerald-100 leading-relaxed">
                  Respondemos tus consultas, coordinamos videollamadas o te enviamos ejemplos aplicados a tu sector.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl(
                    'Hola QRMOON, me gustaría hablar directamente con un asesor sobre las opciones para mi negocio.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-emerald-800 font-extrabold text-sm hover:bg-emerald-50 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>Escribir al {siteConfig.whatsappDisplay}</span>
                </a>
              </div>
            </div>

            {/* Business Coordinates Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
              <h4 className="font-bold text-slate-900 text-base">Datos de contacto y atención</h4>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-700 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Ubicación:</span>
                    <span>{siteConfig.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-700 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Horario de atención:</span>
                    <span>{siteConfig.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-blue-50 text-blue-700 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Correo electrónico:</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-blue-700 hover:underline font-medium"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Atención confidencial y presupuestos sin compromiso de compra.</span>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="bg-slate-100/80 rounded-2xl p-5 border border-slate-200 text-xs text-slate-600 space-y-2">
              <span className="font-bold text-slate-800 block">Compromiso QRMOON:</span>
              <ul className="space-y-1.5">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Sin contratos forzosos a largo plazo</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Propuestas desglosadas por partidas</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Soporte y atención 100% en República Dominicana</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Quote Request Form */}
          <div className="lg:col-span-7">
            <ContactFormInteractive />
          </div>
        </div>
      </div>
    </div>
  );
}
