import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'QRMOON',
  tagline: 'Soluciones Digitales y Páginas Web para Negocios',
  description:
    'Digitalización profesional para profesionales independientes, pequeños negocios y empresas medianas en República Dominicana. Demos interactivas, integración de WhatsApp, chatbots y presencia digital efectiva.',
  country: 'República Dominicana',
  currency: 'RD$',
  // Número centralizado de WhatsApp para República Dominicana (sin caracteres especiales para wa.me)
  whatsappNumber: '18095551234',
  whatsappDisplay: '+1 (809) 555-1234',
  email: 'contacto@qrmoon.do',
  hours: 'Lunes a Viernes: 8:30 AM – 6:00 PM (Hora de Santo Domingo)',
  location: 'Santo Domingo, República Dominicana',
  socials: {
    instagram: 'https://instagram.com/qrmoon.do',
    tiktok: 'https://tiktok.com/@qrmoon.do',
    facebook: 'https://facebook.com/qrmoon.do',
    linkedin: 'https://linkedin.com/company/qrmoon',
  },
};

/**
 * Genera un enlace limpio y codificado hacia WhatsApp
 */
export function getWhatsAppUrl(message?: string): string {
  const cleanNumber = siteConfig.whatsappNumber.replace(/[^0-9]/g, '');
  if (!message) {
    return `https://wa.me/${cleanNumber}`;
  }
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message.trim())}`;
}

/**
 * Formato de moneda dominicana RD$
 */
export function formatCurrencyRD(amount: number, prefix: string = 'RD$'): string {
  return `${prefix} ${amount.toLocaleString('es-DO')}`;
}
