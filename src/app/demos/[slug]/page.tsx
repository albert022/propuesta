import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllDemos, getDemoBySlug } from '@/data/demos';
import { DemoDetailInteractiveView } from '@/components/demos/DemoDetailInteractiveView';
import { ChevronRight } from 'lucide-react';

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
    title: `${demo.name} — Demostraciones en 3 Planes | QRMOON`,
    description: demo.shortDescription,
    openGraph: {
      title: `${demo.name} | Solución Digital en 3 Paquetes QRMOON`,
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

  // Get related demos from other sectors
  const relatedDemos = getAllDemos()
    .filter((d) => d.slug !== demo.slug)
    .slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
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

        {/* 2-Dimensional Interactive View (Sector + 3 Packages) */}
        <DemoDetailInteractiveView demo={demo} />

        {/* Explore other sectors */}
        <section className="space-y-4 pt-6">
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
                <div className="mt-3 flex items-center gap-1.5 text-[11px] font-semibold text-blue-600">
                  <span>Ver 3 variantes de paquetes</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
