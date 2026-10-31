'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl } from '@/data/config';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/demos', label: 'Explorar demos' },
    { href: '/soluciones', label: 'Soluciones' },
    { href: '/planes', label: 'Planes' },
    { href: '/#como-trabajamos', label: 'Cómo trabajamos' },
    { href: '/contacto', label: 'Contacto' },
  ];

  const defaultQuoteMessage =
    'Hola QRMOON, me gustaría solicitar una cotización personalizada para digitalizar mi negocio.';

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-lg tracking-tighter">QM</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                  QRMOON
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60 hidden sm:inline-block">
                  RD
                </span>
              </div>
              <span className="text-[10px] text-slate-500 font-medium -mt-1 hidden sm:block">
                Soluciones Digitales
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : link.href.startsWith('/#')
                  ? false
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-blue-700 bg-blue-50/80 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={getWhatsAppUrl(defaultQuoteMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 text-sky-200" />
              <span>Solicitar cotización</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl(defaultQuoteMessage)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="p-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 sm:hidden"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Abrir menú de navegación"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200/90 pt-4 pb-6 mt-3 space-y-2 animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : link.href.startsWith('/#')
                  ? false
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'text-blue-700 bg-blue-50 font-semibold'
                      : 'text-slate-700 hover:text-blue-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-3 px-2">
              <a
                href={getWhatsAppUrl(defaultQuoteMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-base shadow-sm"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Solicitar cotización por WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
