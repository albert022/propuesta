import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllDemos, getDemoBySlug } from '@/data/demos';
import { DemoDetailPreview } from '@/components/demos/DemoDetailPreview';
import { getWhatsAppUrl } from '@/data/config';
import {
  ArrowLeft,
  MessageSquare,
  CheckCircle2,
  Layers,
  Sparkles,
  Shield,
  Clock,
  ExternalLink,
  Star,
  ChevronRight,
} from 'lucide-react';

interface DemoDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const demos = getAllDemos();
  return demos.map((demo) => ({
    slug: demo.slug,
  }));
}

export async function generateMetadata({ params }: DemoDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);

  if (!demo) {
    return {
      title: 'Demostración no encontrada',
    };
  }

  return {
    title: `${demo.name} — Demostración y Solución Digital`,
    description: demo.shortDescription,
    openGraph: {
      title: `${demo.name} | Solución Digital QRMOON`,
      description: demo.shortDescription,
    },
  };
}

export default async function DemoDetailPage({ params }: DemoDetailPageProps) {
  const { slug } = await params;
  const demo = getDemoBySlug(slug);

  if (!demo) {
    notFound();
  }

  const isAvailable = demo.status === 'disponible';
  const hasExternalUrl = Boolean(demo.demoUrl && demo.demoUrl.trim().length > 0);

  const whatsappMessage = `Hola, vi la demostración de ${demo.name} en QRMOON y me interesa una página web similar. ¿Podrían brindarme información?`;

  // Get related demos from other sectors
  const relatedDemos = getAllDemos()
    .filter((d) => d.slug !== demo.slug)
    .slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-slate-500">
          <Link href="/" className="hover:text-blue-700 transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/demos" className="hover:text-blue-700 transition-colors">
            Demos
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-none">
            {demo.name}
          </span>
        </nav>

        {/* Demo Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                {demo.category}
              </span>
              {isAvailable ? (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Demo disponible
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  <Clock className="w-3.5 h-3.5 text-amber-600" />
                  Próximamente en vivo
                </span>
              )}
            </div>

            <Link
              href="/demos"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al catálogo</span>
            </Link>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              {demo.name}
            </h1>
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-4xl">
              {demo.fullDescription}
            </p>
          </div>

          {/* Quick Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-700/20 transition-all hover:scale-[1.02]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Quiero una página similar para mi negocio</span>
            </a>

            {isAvailable && hasExternalUrl && (
              <a
                href={demo.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-sm transition-all"
              >
                <span>Visitar sitio demo externo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Interactive Responsive Preview */}
        <section aria-label="Vista previa interactiva">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Vista previa interactiva del sector
            </h2>
            <span className="text-xs text-slate-500">
              Simula la experiencia en diferentes dispositivos
            </span>
          </div>
          <DemoDetailPreview demo={demo} />
        </section>

        {/* Secciones principales que podría incluir esa web */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Secciones recomendadas para esta web
                </h3>
                <p className="text-xs text-slate-500">
                  Estructura comercial probada para convertir visitas en clientes
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {demo.recommendedSections.map((sec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm">{sec.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 pl-7 leading-relaxed">{sec.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Funcionalidades & Beneficios prácticos */}
          <div className="space-y-8">
            {/* Funcionalidades que se pueden implementar */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Funcionalidades que podemos implementar
                  </h3>
                  <p className="text-xs text-slate-500">Herramientas adaptadas a este modelo comercial</p>
                </div>
              </div>

              <ul className="space-y-3 pt-2">
                {demo.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 mt-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Beneficios prácticos para el negocio */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Beneficios prácticos para tu negocio
                  </h3>
                  <p className="text-xs text-slate-500">Impacto medible en tu operación diaria</p>
                </div>
              </div>

              <ul className="space-y-3 pt-2">
                {demo.practicalBenefits.map((ben, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mt-2 shrink-0" />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Servicios adicionales disponibles sugeridos */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Servicios digitales recomendados para este sector
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Herramientas complementarias para maximizar tu captación de clientes
              </p>
            </div>
            <Link
              href="/soluciones"
              className="text-xs font-bold text-blue-700 hover:underline hidden sm:inline"
            >
              Ver todas las soluciones
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {demo.suggestedServices.map((srv, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/60 flex items-start gap-3"
              >
                <div className="p-1 rounded-lg bg-blue-700 text-white shrink-0 mt-0.5">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-blue-950">{srv}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Ethical Transparency Disclaimer */}
        <div className="p-5 rounded-2xl bg-slate-100/80 border border-slate-200 text-xs text-slate-500 flex items-start gap-3">
          <Shield className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <p>
            <strong>Aclaración de demostración:</strong> Esta página y su vista previa corresponden a un
            prototipo de demostración visual y funcional elaborado por QRMOON para ilustrar las soluciones
            digitales aplicables a este sector. No representa un proyecto realizado para una marca de cliente
            real específica, garantizando absoluta transparencia profesional.
          </p>
        </div>

        {/* Sector CTA Banner */}
        <div className="bg-gradient-to-r from-blue-800 to-indigo-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-black">
              ¿Quieres una solución similar para tu negocio?
            </h3>
            <p className="text-sm text-blue-100">
              Personalizamos este modelo con tu logotipo, tus colores, tus servicios reales y tu número de WhatsApp.
            </p>
          </div>

          <a
            href={getWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-white font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-emerald-950/20 whitespace-nowrap shrink-0 hover:scale-105"
          >
            Solicitar cotización por WhatsApp
          </a>
        </div>

        {/* Explore other demos */}
        <section className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">
              Explorar otros sectores comerciales
            </h3>
            <Link href="/demos" className="text-xs font-bold text-blue-700 hover:underline">
              Ver todo el catálogo
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedDemos.map((rel) => (
              <Link
                key={rel.id}
                href={`/demos/${rel.slug}`}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="text-[11px] font-semibold text-blue-700 uppercase tracking-wide mb-1">
                  {rel.category}
                </div>
                <h4 className="font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1.5 text-sm">
                  {rel.name}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">{rel.shortDescription}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
