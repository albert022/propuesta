import { PlanItem } from '@/types';

export const plansData: PlanItem[] = [
  {
    id: 'basico',
    name: 'Plan Básico — Independientes',
    target: 'Profesionales independientes, técnicos y negocios que inician su presencia online',
    initialPrice: 25000,
    monthlyPrice: 6500,
    initialPricePrefix: 'RD$',
    monthlyPricePrefix: 'RD$',
    badge: 'Inicio Profesional',
    isPopular: false,
    description:
      'Ideal para validar tu presencia en internet con una estructura ágil, limpia y enfocada en generar contactos directos vía WhatsApp.',
    includedFeatures: [
      'Sitio sencillo y rápido de 1 a 3 secciones o páginas',
      'Diseño 100% adaptable a teléfonos móviles (responsive)',
      'Formulario de contacto e integración directa con WhatsApp',
      'Chatbot básico para atención de preguntas frecuentes esenciales',
      'Configuración inicial de Google Analytics',
      '1 Enlace o código QR optimizado para Google Reviews',
      '1 Tarjeta digital V-Card interactiva de QRMOON',
      'Enlaces e integración técnica de redes sociales',
      'Configuración de SEO técnico inicial básico',
      'Alojamiento web (hosting) seguro en la nube y certificado SSL',
      'Mantenimiento preventivo y soporte técnico básico',
    ],
    notIncludedNotice: 'No incluye publicación recurrente de contenidos en redes sociales.',
    idealFor: 'Técnicos de climatización, electricistas, consultores independientes, estilistas y profesionales autónomos.',
    whatsappMessage:
      'Hola, estoy interesado en el Plan Básico de QRMOON (RD$25,000 inicial / RD$6,500 mensual). Me gustaría conocer los siguientes pasos para mi negocio.',
  },
  {
    id: 'pequena',
    name: 'Plan Empresa Pequeña',
    target: 'Pequeñas empresas, talleres, salones, ferreterías y negocios consolidados',
    initialPrice: 50000,
    monthlyPrice: 15000,
    initialPricePrefix: 'RD$',
    monthlyPricePrefix: 'RD$',
    badge: 'Más Popular',
    isPopular: true,
    description:
      'Solución completa con catálogo amplio, presencia activa en redes sociales y herramientas de reputación para crecer en el mercado local.',
    includedFeatures: [
      'Web personalizada de 5 a 8 páginas con estructura comercial amplia',
      'Base de datos según alcance del proyecto',
      'Chatbot personalizado con árbol de navegación de servicios',
      'Integración con Google Reviews para captar opiniones de clientes',
      'Varios códigos QR y tarjetas digitales V-Cards según alcance',
      'Configuración e integración avanzada de redes sociales',
      'Google Analytics con medición de eventos de contacto',
      'Reporte mensual básico de rendimiento de visitas',
      'Entre 4 y 8 contenidos mensuales en total para Instagram y TikTok',
      'Mantenimiento continuo y soporte técnico regular',
    ],
    idealFor: 'Talleres mecánicos, ferreterías, salones de belleza, repuestos, restaurantes y tiendas comerciales.',
    whatsappMessage:
      'Hola, estoy interesado en el Plan Empresa Pequeña de QRMOON (RD$50,000 inicial / RD$15,000 mensual). Quisiera recibir una cotización detallada.',
  },
  {
    id: 'mediana',
    name: 'Plan Empresa Mediana',
    target: 'Empresas medianas, agencias inmobiliarias, cadenas locales y operadoras turísticas',
    initialPrice: 100000,
    monthlyPrice: 30000,
    initialPricePrefix: 'Desde RD$',
    monthlyPricePrefix: 'Desde RD$',
    badge: 'Escala y Máxima Personalización',
    isPopular: false,
    description:
      'Arquitectura digital a la medida con flujos avanzados, mayor volumen de contenidos audiovisuales y soporte prioritario preferencial.',
    includedFeatures: [
      'Sitio avanzado de 10 o más páginas y secciones a medida',
      'Estructura de base de datos según necesidades comerciales',
      'Chatbot avanzado con flujos de precalificación y enrutamiento',
      'Integraciones a medida según alcance acordado',
      'Múltiples códigos QR y tarjetas V-Cards para gerencia y ventas',
      'Análisis profundo y reportes analíticos completos periódicos',
      'Entre 8 y 16 contenidos mensuales en total para Instagram y TikTok',
      'Mantenimiento continuo y soporte técnico prioritario',
      'Mayor nivel de personalización de marca e interactividad',
    ],
    idealFor: 'Inmobiliarias, operadoras de transporte y tours, distribuidores comerciales y medianas empresas en expansión.',
    whatsappMessage:
      'Hola, estoy interesado en el Plan Empresa Mediana de QRMOON (Desde RD$100,000 inicial / Desde RD$30,000 mensual). Me gustaría coordinar una reunión de evaluación.',
  },
];

export const pricingClarifications = {
  paymentDistinction:
    'El pago inicial cubre el diseño de la solución, arquitectura, desarrollo técnico, configuración de integraciones, pruebas de calidad y publicación en producción. La mensualidad cubre la infraestructura en la nube, hosting seguro, monitoreo técnico, mantenimiento continuo, soporte y los servicios recurrentes estipulados en cada paquete.',
  referenceDisclaimer:
    'Precios de referencia sujetos al alcance y necesidades específicas de cada negocio. Los servicios, consumos y entregables definitivos se establecen formalmente en la cotización.',
  honestScopeLimits:
    'No se prometen cambios ilimitados. El costo de pauta publicitaria en anuncios (Meta Ads, Google Ads) y la producción audiovisual presencial se cotizan por separado. No se prometen reseñas positivas artificiales ni resultados comerciales o ventas garantizadas.',
};
