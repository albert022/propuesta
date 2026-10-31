import Link from 'next/link';
import { Home, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-slate-50 min-h-[70vh] flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 text-center shadow-lg space-y-6">
        <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mx-auto font-black text-2xl shadow-sm">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-black text-slate-900">Página no encontrada</h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            La demostración o sección que buscas no existe o ha sido reubicada dentro del catálogo de QRMOON.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/demos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ver catálogo de demos</span>
          </Link>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Volver al inicio</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
