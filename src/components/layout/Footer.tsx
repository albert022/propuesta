import React from 'react';
import Link from 'next/link';
import { siteConfig, getWhatsAppUrl } from '@/data/config';
import { CurrentYear } from '@/components/ui/CurrentYear';
import { QrmoonLogo } from '@/components/ui/QrmoonLogo';
import {
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  Shield,
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center group" aria-label="QRMOON — Inicio">
              <QrmoonLogo
                color="#ffffff"
                className="group-hover:opacity-90 transition-opacity"
                width={170}
                height={29}
              />
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Impulsamos a profesionales independientes, negocios locales y empresas en República
              Dominicana con presencia web moderna, integración de WhatsApp y herramientas de digitalización.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{siteConfig.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick links to Demos */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Sectores y Demos
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/demos"
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Ver todas las demos</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link
                  href="/demos?cat=servicios-tecnicos"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Servicios técnicos & Clima
                </Link>
              </li>
              <li>
                <Link
                  href="/demos?cat=belleza"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Belleza y Barberías
                </Link>
              </li>
              <li>
                <Link
                  href="/demos?cat=automotriz"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Talleres y Repuestos
                </Link>
              </li>
              <li>
                <Link
                  href="/demos?cat=inmobiliaria-turismo"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Inmobiliaria y Turismo
                </Link>
              </li>
              <li>
                <Link
                  href="/demos?cat=gastronomia"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Restaurantes & Cafeterías
                </Link>
              </li>
            </ul>
          </div>

          {/* Soluciones & Planes */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Servicios y Planes
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/soluciones" className="text-slate-400 hover:text-white transition-colors">
                  Todas las soluciones
                </Link>
              </li>
              <li>
                <Link href="/soluciones#desarrollo-web" className="text-slate-400 hover:text-white transition-colors">
                  Diseño & Desarrollo web
                </Link>
              </li>
              <li>
                <Link href="/soluciones#whatsapp-negocios" className="text-slate-400 hover:text-white transition-colors">
                  WhatsApp para negocios
                </Link>
              </li>
              <li>
                <Link href="/soluciones#google-reviews" className="text-slate-400 hover:text-white transition-colors">
                  Google Reviews con QR
                </Link>
              </li>
              <li>
                <Link href="/planes" className="text-slate-400 hover:text-white transition-colors">
                  Planes y Precios (RD$)
                </Link>
              </li>
              <li>
                <Link href="/#como-trabajamos" className="text-slate-400 hover:text-white transition-colors">
                  Metodología de trabajo
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto & WhatsApp */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              Atención Comercial
            </h4>
            <div className="space-y-3">
              <a
                href={getWhatsAppUrl('Hola QRMOON, me gustaría conversar sobre las opciones de digitalización para mi negocio.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors w-full justify-center shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: {siteConfig.whatsappDisplay}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-xs transition-colors w-full justify-center border border-slate-700"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>{siteConfig.email}</span>
              </a>

              <p className="text-[11px] text-slate-400 leading-tight pt-1">
                Respuestas comerciales en horario laboral dominicano.
              </p>
            </div>
          </div>
        </div>

        {/* Ethical Transparency Disclaimer */}
        <div className="py-6 border-b border-slate-800 text-xs text-slate-400 leading-relaxed">
          <p className="flex items-start gap-2">
            <Shield className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
            <span>
              <strong>Aviso de transparencia:</strong> Las demostraciones presentadas en este catálogo son
              prototipos visuales y funcionales creados por el equipo de QRMOON con fines ilustrativos de las
              capacidades tecnológicas disponibles para cada sector comercial en República Dominicana. No
              constituyen proyectos para marcas de clientes reales salvo que se especifique formalmente.
            </span>
          </p>
        </div>

        {/* Bottom copyright & notes */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>
            © <CurrentYear /> {siteConfig.name} — Todos los derechos reservados. Santo Domingo, República Dominicana.
          </p>
          <div className="flex items-center space-x-6 text-slate-400">
            <Link href="/contacto" className="hover:text-slate-300 transition-colors">
              Contacto y Cotizaciones
            </Link>
            <Link href="/planes" className="hover:text-slate-300 transition-colors">
              Términos de servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
