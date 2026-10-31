import { DemoItem, PlanId, SectorPlanVariant } from '@/types';

/**
 * Función auxiliar para estructurar las variantes de los 3 paquetes de forma reutilizable y consistente
 */
function createSectorVariants(data: {
  basico: {
    tagline: string;
    features: string[];
    recommendedPages: string[];
    status?: 'disponible' | 'proximamente';
    demoUrl?: string;
    previewGradient?: string;
    coverImage?: string;
  };
  pequena: {
    tagline: string;
    features: string[];
    recommendedPages: string[];
    status?: 'disponible' | 'proximamente';
    demoUrl?: string;
    previewGradient?: string;
    coverImage?: string;
  };
  mediana: {
    tagline: string;
    features: string[];
    recommendedPages: string[];
    status?: 'disponible' | 'proximamente';
    demoUrl?: string;
    previewGradient?: string;
    coverImage?: string;
  };
}): Record<PlanId, SectorPlanVariant> {
  return {
    basico: {
      planId: 'basico',
      planName: 'Plan Básico — Independientes',
      tagline: data.basico.tagline,
      pagesScope: '1 a 3 secciones (One-Page ágil)',
      initialPrice: 25000,
      monthlyPrice: 6500,
      initialPricePrefix: 'RD$',
      monthlyPricePrefix: 'RD$',
      features: data.basico.features,
      recommendedPages: data.basico.recommendedPages,
      status: data.basico.status || 'disponible',
      demoUrl: data.basico.demoUrl,
      previewGradient: data.basico.previewGradient || 'from-blue-600 to-cyan-600',
      coverImage: data.basico.coverImage,
      badge: 'Inicio Ágil',
    },
    pequena: {
      planId: 'pequena',
      planName: 'Plan Empresa Pequeña',
      tagline: data.pequena.tagline,
      pagesScope: '5 a 8 páginas personalizadas',
      initialPrice: 50000,
      monthlyPrice: 15000,
      initialPricePrefix: 'RD$',
      monthlyPricePrefix: 'RD$',
      features: data.pequena.features,
      recommendedPages: data.pequena.recommendedPages,
      status: data.pequena.status || 'disponible',
      demoUrl: data.pequena.demoUrl,
      previewGradient: data.pequena.previewGradient || 'from-blue-700 to-indigo-800',
      coverImage: data.pequena.coverImage,
      badge: 'Más Popular',
    },
    mediana: {
      planId: 'mediana',
      planName: 'Plan Empresa Mediana',
      tagline: data.mediana.tagline,
      pagesScope: '10+ páginas y portal avanzado',
      initialPrice: 100000,
      monthlyPrice: 30000,
      initialPricePrefix: 'Desde RD$',
      monthlyPricePrefix: 'Desde RD$',
      features: data.mediana.features,
      recommendedPages: data.mediana.recommendedPages,
      status: data.mediana.status || 'proximamente',
      demoUrl: data.mediana.demoUrl,
      previewGradient: data.mediana.previewGradient || 'from-slate-900 to-blue-950',
      coverImage: data.mediana.coverImage,
      badge: 'Escala y Máxima Personalización',
    },
  };
}

export const demosData: DemoItem[] = [
  // 1. TÉCNICOS DE AIRE ACONDICIONADO E INVERSORES
  {
    id: 'demo-aire-inversores',
    slug: 'tecnicos-aire-acondicionado-inversores',
    name: 'Técnicos de Aire Acondicionado e Inversores',
    category: 'Servicios Técnicos Residenciales y Comerciales',
    categoryGroup: 'servicios-tecnicos',
    shortDescription:
      'Presenta tus servicios de instalación y mantenimiento, exhibe trabajos realizados y recibe solicitudes directas de cotización por WhatsApp.',
    fullDescription:
      'Una solución digital pensada para técnicos y empresas de climatización y energía alternativa en República Dominicana. Permite a tus clientes conocer tus áreas de servicio, tarifas de diagnóstico, tipos de equipos con los que trabajas y solicitar asistencia de emergencia con solo un toque en su celular.',
    defaultPlanId: 'basico',
    order: 1,
    accentColor: '#0284c7',
    coverImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    tags: ['aire acondicionado', 'inversores', 'climatización', 'técnicos', 'mantenimiento', 'emergencias'],
    practicalBenefits: [
      'Reduce hasta un 70% las llamadas repetitivas sobre qué servicios realizas y en qué zonas trabajas.',
      'Transmite confianza institucional frente a técnicos independientes que no poseen presencia verificable.',
      'Captura clientes que buscan técnicos calificados desde su teléfono móvil durante emergencias por calor o apagones.',
    ],
    suggestedServices: [
      'WhatsApp para Negocios con respuestas rápidas',
      'Tarjetas digitales QRMOON para los técnicos de campo',
      'Configuración de Google Reviews para acumular opiniones de clientes',
    ],
    variants: createSectorVariants({
      basico: {
        tagline: 'Presencia ágil de 1 a 3 secciones para técnicos independientes y emergencias rápidas (ClimaVolt RD).',
        features: [
          'Línea de emergencia visible para fallas de climatización',
          'Catálogo resumen de mantenimiento preventivo y correctivo',
          'Botón directo a WhatsApp con mensaje automático',
        ],
        recommendedPages: ['Inicio con Hero de Urgencias', 'Resumen de Servicios y Tarifas', 'Contacto y Cobertura'],
        status: 'disponible',
        demoUrl: 'https://climavolt-servicios-rd.asay2297.workers.dev',
        coverImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
      },
      pequena: {
        tagline: 'Web completa de 5 a 8 páginas para empresas de servicio técnico consolidado.',
        features: [
          'Páginas dedicadas para Climatización Residencial e Inversores Comerciales',
          'Galería antes/después de instalaciones limpias',
          'Cotizador express con selector de tipo de equipo (BTU/kW)',
          'Integración de Google Reviews para acumular 5 estrellas',
          '4 a 8 contenidos mensuales en total para Instagram y TikTok',
        ],
        recommendedPages: [
          'Inicio',
          'Aire Acondicionado (Inverter & Comercial)',
          'Inversores y Baterías',
          'Mantenimiento Preventivo',
          'Galería de Proyectos',
          'Zona de Cobertura y Horarios',
          'Cotizador por WhatsApp',
        ],
        status: 'disponible',
      },
      mediana: {
        tagline: 'Portal corporativo para contratistas de refrigeración y empresas de energía.',
        features: [
          'Portal para contratos de mantenimiento preventivo a torres y empresas',
          'Chatbot avanzado con diagnóstico preliminar y flujos de solicitud',
          'Área de cotización para proyectos de climatización central (VRF)',
          'Múltiples tarjetas digitales para supervisores y técnicos',
          '8 a 16 contenidos mensuales en total para Instagram y TikTok',
        ],
        recommendedPages: [
          'Portal Corporativo',
          'Servicios Residenciales',
          'Soluciones Comerciales & VRF',
          'Contratos de Mantenimiento',
          'Energía Solar & Inversores Industriales',
          'Catálogo de Equipos y Marcas',
          'Casos de Éxito y Certificaciones',
          'Portal de Clientes Corporativos',
          'Cotizador de Proyectos de Ingeniería',
          'Contacto Multisede',
        ],
        status: 'proximamente',
      },
    }),
  },

  // 2. BARBERÍAS
  {
    id: 'demo-barberias',
    slug: 'barberias-estilo-masculino',
    name: 'Barberías y Cuidado Masculino',
    category: 'Belleza y Cuidado Personal',
    categoryGroup: 'belleza',
    shortDescription:
      'Muestra los estilos de cortes, perfilado de barba, perfil de tus barberos y facilita la reserva directa de turnos mediante WhatsApp.',
    fullDescription:
      'Diseñada para barberías modernas y tradicionales que desean proyectar un ambiente exclusivo. Los clientes pueden ver el menú de servicios con precios claros, conocer al equipo, revisar horarios de apertura y agendar su cita directamente sin esperas telefónicas.',
    defaultPlanId: 'basico',
    order: 2,
    accentColor: '#d97706',
    coverImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&h=630&q=85',
    tags: ['barbería', 'cortes de cabello', 'barba', 'cuidado masculino', 'fade', 'turnos'],
    practicalBenefits: [
      'Elimina el caos de turnos y llamadas continuas durante las horas más concurridas.',
      'Incentiva la compra de servicios complementarios como cuidado de barba y mascarillas.',
      'Aumenta la retención de clientes leales gracias al fácil agendamiento en su móvil.',
    ],
    suggestedServices: [
      'Código QR en espejos y recepción para Google Reviews',
      'Integración con Instagram para exhibir los últimos cortes',
      'Chatbot básico para responder precios y ubicación fuera de horario',
    ],
    variants: createSectorVariants({
      basico: {
        tagline: 'Página ágil con menú visual de cortes y reserva directa a WhatsApp (Navaja 809).',
        features: [
          'Tarifario básico de cortes, perfilado y toalla caliente',
          'Horarios de atención y mapa de ubicación',
          'Botón de reserva directa por WhatsApp',
        ],
        recommendedPages: ['Menú de Cortes', 'Horarios y Ubicación', 'Reserva'],
        status: 'disponible',
        demoUrl: 'https://barberia.asay2297.workers.dev',
        coverImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&h=630&q=85',
      },
      pequena: {
        tagline: 'Web moderna de 5 a 8 páginas con perfiles de barberos y galería de estilos.',
        features: [
          'Perfiles de barberos del equipo con su portafolio de cortes',
          'Menú categorizado: VIP, tratamientos capilares, spa facial y barba',
          'Código QR en tienda para captar reseñas de Google Reviews',
          '4 a 8 publicaciones mensuales para Instagram y TikTok',
        ],
        recommendedPages: [
          'Inicio con Vibra Urbana',
          'Menú de Servicios y Precios',
          'Nuestro Equipo de Barberos',
          'Galería de Estilos y Fades',
          'Tienda de Pomadas y Cuidado de Barba',
          'Ubicación y Parqueo',
          'Agendamiento WhatsApp',
        ],
        status: 'disponible',
      },
      mediana: {
        tagline: 'Plataforma para cadenas de barberías o marcas con membresías VIP.',
        features: [
          'Sistema multi-sucursal con selector de local',
          'Módulo de membresías mensuales ilimitadas',
          'Chatbot avanzado de reservas y recordatorios de turnos',
          '8 a 16 contenidos audiovisuales mensuales para redes sociales',
        ],
        recommendedPages: [
          'Portal de Marca',
          'Selector de Sucursales',
          'Membresías VIP y Beneficios',
          'Menú Completo Barbershop & Lounge',
          'Equipo Máster y Certificaciones',
          'Cursos y Capacitaciones de Barbería',
          'E-commerce de Productos Pro',
          'Alianzas y Eventos',
          'Blog de Tendencias Masculinas',
          'Contacto Corporativo',
        ],
        status: 'proximamente',
      },
    }),
  },

  // 3. SALONES DE BELLEZA
  {
    id: 'demo-salones-belleza',
    slug: 'salones-de-belleza-y-estilistas',
    name: 'Salones de Belleza y Estilistas',
    category: 'Belleza y Cuidado Personal',
    categoryGroup: 'belleza',
    shortDescription:
      'Exhibe transformaciones de color, peinados para eventos, paquetes para novias y permite a tus clientas consultar disponibilidad al instante.',
    fullDescription:
      'Una vitrina elegante para salones de belleza y centros de estilismo capilar. Ideal para mostrar trabajos de balayage, keratina, peinados sociales y tratamientos de hidratación profunda, complementado con información sobre productos profesionales utilizados.',
    defaultPlanId: 'basico',
    order: 3,
    accentColor: '#e11d48',
    coverImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
    tags: ['salón de belleza', 'estilismo', 'balayage', 'keratina', 'peinados', 'colorimetría'],
    practicalBenefits: [
      'Genera credibilidad inmediata mostrando la calidad de tus trabajos antes de que la clienta agende.',
      'Permite responder rápidamente solicitudes de cotizaciones de color que suelen requerir evaluación previa.',
      'Atrae nuevas clientas que buscan referencias en internet antes de arriesgar su cabello.',
    ],
    suggestedServices: [
      'QRMOON V-Card para que cada estilista comparta su contacto con clientas',
      'Estrategia de Google Reviews para destacar en búsquedas locales',
      'Redes sociales para sincronizar con novedades y promociones de temporada',
    ],
    variants: createSectorVariants({
      basico: {
        tagline: 'Vitrina ágil de 1 a 3 secciones para peinados, tintes y citas (Aura Beauty Studio).',
        features: [
          'Menú esencial de peinados, secado y alisados',
          'Galería compacta de fotos antes y después',
          'Botón de consulta rápida por WhatsApp',
        ],
        recommendedPages: ['Inicio', 'Servicios Principales', 'Contacto y Citas'],
        status: 'disponible',
        demoUrl: 'https://salondebelleza.asay2297.workers.dev',
        coverImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80',
      },
      pequena: {
        tagline: 'Web completa de 5 a 8 páginas con lookbook de novias y tratamientos capilares.',
        features: [
          'Catálogo de colorimetría: Balayage, Babylights y Corrección de color',
          'Módulo especial de paquetes de Novias, Quinceañeras y Graduaciones',
          'Marcas profesionales y productos certificados',
          'Integración con Google Reviews y 4-8 contenidos para IG/TikTok',
        ],
        recommendedPages: [
          'Inicio',
          'Colorimetría & Balayage',
          'Tratamientos Capilares & Alisados',
          'Paquetes de Novias y Eventos',
          'Galería de Transformaciones Reales',
          'Marcas y Productos Profesionales',
          'Solicitud de Cita Guiada',
        ],
        status: 'disponible',
      },
      mediana: {
        tagline: 'Portal de alta gama para salones premium o academias de belleza.',
        features: [
          'Portal Beauty Studio integral con agenda por estilista',
          'Chatbot avanzado con preevaluación fotográfica de tono y largo',
          'Módulo de cursos y masterclasses de colorimetría',
          '8 a 16 contenidos audiovisuales mensuales de alta producción',
        ],
        recommendedPages: [
          'Portal Beauty Studio',
          'Menú de Especialidades Capilares',
          'Spa Capilar & Tratamientos Médicos',
          'Atelier de Novias VIP',
          'Equipo de Estilistas Máster',
          'Academia & Certificaciones',
          'Boutique de Productos Exclusivos',
          'Prensa y Colaboraciones',
          'Cotizador de Eventos Privados',
          'Reservas Centralizadas',
        ],
        status: 'proximamente',
      },
    }),
  },

  // 4. CENTROS DE UÑAS Y ESTÉTICA
  {
    id: 'demo-centros-unas',
    slug: 'centros-de-unas-y-estetica',
    name: 'Centros de Uñas y Estética Integral',
    category: 'Belleza y Cuidado Personal',
    categoryGroup: 'belleza',
    shortDescription:
      'Muestra diseños de nail art, manicura rusa, pedicura spa y tratamientos faciales con sistema de reserva guiada.',
    fullDescription:
      'Plataforma visual pensada para nail bars, spas y cabinas de estética facial y corporal. Permite exhibir las últimas tendencias en polygel, acrílico, dipping y limpiezas faciales, facilitando que las usuarias seleccionen su servicio preferido.',
    defaultPlanId: 'pequena',
    order: 4,
    accentColor: '#9333ea',
    tags: ['uñas', 'nail bar', 'manicura', 'pedicura', 'estética', 'polygel', 'pestañas'],
    practicalBenefits: [
      'Disminuye el tiempo que tu personal dedica a enviar fotos de diseños por mensaje privado.',
      'Filtra a las clientas con información clara sobre tarifas y condiciones de reserva.',
      'Fortalece la imagen moderna y limpia de tu centro de uñas.',
    ],
    suggestedServices: [
      'Google Reviews para acumular 5 estrellas de clientas satisfechas',
      'Chatbot básico para resolver preguntas frecuentes sobre precios y duración de servicios',
      'Tarjetas digitales para fidelización de clientas recurrentes',
    ],
    variants: createSectorVariants({
      basico: {
        tagline: 'Página ágil con muestrario de acrílico, pedicura spa y reserva directa.',
        features: [
          'Menú visual de uñas acrílicas, gelish y pedicura',
          'Tiempos estimados y precios base',
          'Botón de cita rápida por WhatsApp',
        ],
        recommendedPages: ['Menú de Uñas', 'Galería Compacta', 'Citas WhatsApp'],
        status: 'disponible',
      },
      pequena: {
        tagline: 'Web completa de 5 a 8 páginas con lookbook de nail art y cabina estética.',
        features: [
          'Lookbook interactivo clasificado por técnica (Polygel, Acrílico, Soft Gel)',
          'Sección de pestañas pelo a pelo, cejas y limpiezas faciales',
          'Políticas de higiene y esterilización de instrumental',
          '4 a 8 contenidos mensuales en total para Instagram y TikTok',
        ],
        recommendedPages: [
          'Inicio',
          'Lookbook de Uñas y Técnicas',
          'Pedicura Spa & Cuidado de Pies',
          'Cejas, Pestañas & Micropigmentación',
          'Cabina Facial y Corporal',
          'Protocolos de Higiene y Cuidado',
          'Reservas por WhatsApp',
        ],
        status: 'disponible',
      },
      mediana: {
        tagline: 'Portal para centros estéticos con aparatología y venta de insumos.',
        features: [
          'Catálogo de tratamientos estéticos avanzados con aparatología',
          'Sistema de reserva con selección de técnica y duración de servicio',
          'Módulo de venta de esmaltes y kits de mantenimiento',
          '8 a 16 contenidos mensuales y soporte prioritario',
        ],
        recommendedPages: [
          'Portal Estético',
          'Carta Completa de Manicura & Pedicura',
          'Aparatología & Reductores',
          'Tratamientos Antiedad & Láser',
          'Especialistas Certificadas',
          'Membresías Spa Mensual',
          'Tienda de Cuidado en Casa',
          'Talleres de Capacitación',
          'Preguntas Frecuentes y Políticas',
          'Contacto Multicanal',
        ],
        status: 'proximamente',
      },
    }),
  },

  // 5. TALLERES MECÁNICOS
  {
    id: 'demo-talleres-mecanicos',
    slug: 'talleres-mecanicos-y-mantenimiento',
    name: 'Talleres Mecánicos y Centros de Servicio',
    category: 'Automotriz y Mantenimiento',
    categoryGroup: 'automotriz',
    shortDescription:
      'Transmite seguridad con diagnósticos por escáner, mecánica general, cambio de aceite y cotización rápida de reparaciones.',
    fullDescription:
      'Específica para talleres de mecánica preventiva y correctiva en República Dominicana. Permite desmitificar la experiencia del taller mostrando transparencia en los procesos, equipos de diagnóstico computarizado y garantía en repuestos y mano de obra.',
    defaultPlanId: 'pequena',
    order: 5,
    accentColor: '#1e40af',
    tags: ['taller mecánico', 'diagnóstico automotriz', 'cambio de aceite', 'frenos', 'suspensión', 'vehículos'],
    practicalBenefits: [
      'Vence la desconfianza natural del conductor mostrando instalaciones ordenadas y personal identificado.',
      'Aumenta el ticket promedio promoviendo mantenimientos preventivos antes de fallas costosas.',
      'Agiliza la cotización de repuestos al recibir datos del vehículo (año, marca, modelo) por WhatsApp.',
    ],
    suggestedServices: [
      'WhatsApp para Negocios con ficha rápida de recepción de vehículos',
      'Google Reviews con QR físico en el área de caja para motivar opiniones tras el retiro del carro',
      'Mantenimiento web continuo para actualizar promociones de afinamiento y cambio de aceite',
    ],
    variants: createSectorVariants({
      basico: {
        tagline: 'Página ágil con servicios mecánicos principales y botón de auxilio vial.',
        features: [
          'Detalle de cambio de aceite, frenos y mantenimiento rápido',
          'Teléfono de urgencias para asistencia con grúa',
          'Botón de cotización directa por WhatsApp con datos del carro',
        ],
        recommendedPages: ['Servicios Esenciales', 'Ubicación del Taller', 'Cotizar Reparación'],
        status: 'disponible',
      },
      pequena: {
        tagline: 'Web completa de 5 a 8 páginas con diagnóstico computarizado y ficha de cotización.',
        features: [
          'Explicación del diagnóstico computarizado por escáner multimarca',
          'Servicios de suspensión, transmisión, motor y aire acondicionado automotriz',
          'Ficha de cotización con campos para Año, Marca, Modelo y Síntoma',
          'Integración con Google Reviews y 4-8 contenidos para IG/TikTok',
        ],
        recommendedPages: [
          'Inicio',
          'Mecánica Preventiva y Mantenimiento',
          'Diagnóstico Computarizado',
          'Frenos, Suspensión y Dirección',
          'Aire Acondicionado Automotriz',
          'Garantías y Sala de Espera',
          'Cotizador por WhatsApp',
        ],
        status: 'disponible',
      },
      mediana: {
        tagline: 'Portal para centros automotrices integrales, colisión y flotas corporativas.',
        features: [
          'Módulo de convenios de mantenimiento para flotillas comerciales',
          'Área de chapa, pintura al horno y acuerdos con aseguradoras',
          'Chatbot avanzado de recepción vehicular y seguimiento de estado',
          '8 a 16 contenidos audiovisuales mensuales de transformaciones',
        ],
        recommendedPages: [
          'Portal Automotriz Integral',
          'Mantenimiento de Flotas Empresariales',
          'Centro de Diagnóstico Electrónico',
          'Mecánica Mayor & Transmisiones',
          'Desabolladura y Pintura al Horno',
          'Alineación y Tramado 3D',
          'Convenios con Aseguradoras',
          'Garantías Escritas y Trazabilidad',
          'Cotizador de Flotillas',
          'Ubicaciones y Recepción',
        ],
        status: 'proximamente',
      },
    }),
  },

  // 6. FERRETERÍAS Y MATERIALES DE CONSTRUCCIÓN
  {
    id: 'demo-ferreterias',
    slug: 'ferreterias-y-materiales-construccion',
    name: 'Ferreterías y Materiales de Construcción',
    category: 'Comercio y Construcción',
    categoryGroup: 'comercio',
    shortDescription:
      'Muestra tus líneas de plomería, electricidad, pinturas y herramientas, con solicitud ágil de cotización al por mayor y detalle.',
    fullDescription:
      'Diseñada para ferreterías de barrio, centros ferreteros y distribuidoras de materiales de construcción. Permite a maestros constructores, ingenieros y propietarios residenciales solicitar listas de materiales por WhatsApp sin tener que trasladarse hasta el local.',
    defaultPlanId: 'pequena',
    order: 6,
    accentColor: '#ea580c',
    tags: ['ferretería', 'materiales de construcción', 'herramientas', 'pintura', 'plomería', 'cemento', 'flete'],
    practicalBenefits: [
      'Capta pedidos de obra grandes que se deciden por rapidez de cotización y despacho.',
      'Facilita que clientes particulares identifiquen si tienes el repuesto o pieza que buscan.',
      'Mejora la presencia institucional frente a competidores que solo tienen letrero físico.',
    ],
    suggestedServices: [
      'WhatsApp para Negocios optimizado para recibir fotos de piezas rotas o listas en papel',
      'SEO local para aparecer cuando buscan "ferretería cerca de mí" en su sector',
      'Google Reviews para consolidar reputación en entrega puntual de pedidos',
    ],
    variants: createSectorVariants({
      basico: {
        tagline: 'Página ágil con familias de productos principales y cotización por foto de lista.',
        features: [
          'Presentación de departamentos: plomería, electricidad, pinturas y tornillería',
          'Horarios y número de WhatsApp para enviar listas de materiales',
          'Ubicación exacta y facilidades de retiro en tienda',
        ],
        recommendedPages: ['Departamentos Principales', 'Marcas', 'Enviar Lista por WhatsApp'],
        status: 'disponible',
      },
      pequena: {
        tagline: 'Web completa de 5 a 8 páginas con catálogo categorizado y servicio de flete a obra.',
        features: [
          'Catálogo estructurado por familias de construcción y remodelación',
          'Información clara sobre fletes, camiones de volteo y entrega en obra',
          'Formulario para ingenieros con carga de cotizaciones por WhatsApp',
          '4 a 8 contenidos mensuales de promociones en herramientas para redes',
        ],
        recommendedPages: [
          'Inicio',
          'Materiales Pesados (Varilla, Cemento, Agregados)',
          'Plomería y Tuberías',
          'Electricidad e Iluminación LED',
          'Pinturas y Acabados',
          'Flota de Flete y Cobertura de Entrega',
          'Cotizador para Maestros e Ingenieros',
        ],
        status: 'disponible',
      },
      mediana: {
        tagline: 'Portal de gran centro ferretero o distribuidora mayorista de materiales.',
        features: [
          'Portal B2B con solicitud de líneas de crédito comercial para obras',
          'Buscador avanzado de miles de referencias y fichas técnicas',
          'Chatbot de enrutamiento comercial por departamento de ventas',
          '8 a 16 contenidos audiovisuales mensuales de demostración de productos',
        ],
        recommendedPages: [
          'Portal Mayorista & Detallista',
          'Centro de Aceros y Estructuras',
          'Materiales de Obra Gris',
          'Ferretería Industrial & Seguridad',
          'Pinturas Industriales & Revestimientos',
          'Equipos de Maquinaria y Alquiler',
          'Líneas de Crédito Corporativo',
          'Calculadora de Materiales para Obra',
          'Marcas Distribuidas Oficialmente',
          'Atención a Contratistas y Licitaciones',
        ],
        status: 'proximamente',
      },
    }),
  },

  // 7. REPUESTOS DE VEHÍCULOS
  {
    id: 'demo-repuestos-vehiculos',
    slug: 'repuestos-de-vehiculos-y-autopartes',
    name: 'Repuestos de Vehículos y Autopartes',
    category: 'Automotriz y Repuestos',
    categoryGroup: 'automotriz',
    shortDescription:
      'Organiza repuestos nuevos y usados por marcas, facilita la consulta de piezas por foto y despachos a todo el país.',
    fullDescription:
      'Una solución enfocada en tiendas de repuestos para autos japoneses, coreanos y americanos. El cliente puede consultar rápidamente disponibilidad de piezas mecánicas, partes de carrocería y accesorios enviando el número de chasis (VIN) o una foto de la pieza por WhatsApp.',
    defaultPlanId: 'pequena',
    order: 7,
    accentColor: '#3b82f6',
    tags: ['repuestos', 'autopartes', 'chasis', 'talleres', 'vehículos', 'piezas', 'envíos nacionales'],
    practicalBenefits: [
      'Ahorra tiempo a tus vendedores al recibir solicitudes con marca, año y foto ya listos.',
      'Amplía tus ventas más allá de tu zona física vendiendo con envíos a todas las provincias.',
      'Posiciona a tu repuesto como una empresa formal y confiable para mecánicos y particulares.',
    ],
    suggestedServices: [
      'Chatbot para capturar marca, modelo y año antes de transferir la consulta al vendedor',
      'Catálogo digital actualizado periódicamente con piezas de alta rotación',
      'Google Reviews para respaldar la seriedad de envíos a provincias',
    ],
    variants: createSectorVariants({
      basico: {
        tagline: 'Página ágil con marcas atendidas y botón para consultar piezas por foto.',
        features: [
          'Marcas de vehículos atendidas (Toyota, Honda, Hyundai, Kia, Nissan)',
          'Botón de consulta rápida con número de chasis o foto de la muestra',
          'Información de envíos a paradas de guaguas y agencias de paquetería',
        ],
        recommendedPages: ['Marcas Principales', 'Políticas de Garantía', 'Consultar Pieza por WhatsApp'],
        status: 'disponible',
      },
      pequena: {
        tagline: 'Web completa de 5 a 8 páginas con catálogo de sistemas mecánicos y carrocería.',
        features: [
          'Catálogo categorizado: Tren delantero, motor, transmisión, carrocería y eléctrico',
          'Formulario guiado con selección de marca, año y número de chasis (VIN)',
          'Políticas de garantía de prueba de piezas eléctricas y mecánicas',
          '4 a 8 contenidos mensuales para Instagram y TikTok con piezas de alta demanda',
        ],
        recommendedPages: [
          'Inicio',
          'Repuestos Japoneses & Coreanos',
          'Tren Delantero & Suspensión',
          'Piezas de Carrocería & Iluminación',
          'Partes Eléctricas y Sensores',
          'Envíos a Nivel Nacional & Garantías',
          'Cotizador Rápido por Chasis',
        ],
        status: 'disponible',
      },
      mediana: {
        tagline: 'Portal mayorista de importación directa con buscador de códigos OEM.',
        features: [
          'Portal B2B con precios para talleres mecánicos afiliados',
          'Consulta de repuestos por código original OEM o de reemplazo',
          'Chatbot inteligente de precalificación vehicular multilínea',
          '8 a 16 contenidos mensuales y soporte prioritario',
        ],
        recommendedPages: [
          'Portal de Importación de Autopartes',
          'Buscador por Código OEM',
          'Línea de Motores y Transmisiones Importadas',
          'Accesorios & Tuning',
          'Red de Envíos Express a Provincias',
          'Plan para Talleres Mecánicos Afiliados',
          'Políticas de Devolución y Sellos de Garantía',
          'Marcas Originales y Aftermarket',
          'Solicitud de Cuenta Mayorista',
          'Contacto Multisede',
        ],
        status: 'proximamente',
      },
    }),
  },

  // 8. TÉCNICOS ELÉCTRICOS Y SERVICIOS DEL HOGAR
  {
    id: 'demo-electricistas-hogar',
    slug: 'tecnicos-electricos-y-servicios-hogar',
    name: 'Técnicos Eléctricos y Servicios del Hogar',
    category: 'Servicios Técnicos y Residenciales',
    categoryGroup: 'servicios-tecnicos',
    shortDescription:
      'Presenta soluciones para cortos circuitos, cableado, paneles solares, iluminación y bombas de agua con botón de emergencia.',
    fullDescription:
      'Sitio enfocado en electricistas residenciales y comerciales, instaladores de bombas de agua y sistemas solares. Proporciona tranquilidad a familias y administradores de condominios al mostrar experiencia comprobada, certificaciones y respuesta ágil ante fallas eléctricas.',
    defaultPlanId: 'basico',
    order: 8,
    accentColor: '#d97706',
    tags: ['electricista', 'cortocircuitos', 'energía solar', 'bombas de agua', 'cableado', 'emergencias eléctricas'],
    practicalBenefits: [
      'Da seguridad a familias de contratar a un profesional verificado para entrar a su hogar.',
      'Consigue contratos recurrentes de mantenimiento para torres residenciales y plazas comerciales.',
      'Destaca frente a técnicos informales gracias a un perfil web transparente y profesional.',
    ],
    suggestedServices: [
      'Tarjetas de contacto digital QRMOON para entregar a administradores de condominios',
      'WhatsApp para Negocios con respuestas automáticas fuera de horario',
      'Google Reviews para validar la honestidad y seguridad del técnico en el hogar',
    ],
    variants: createSectorVariants({
      basico: {
        tagline: 'Página ágil con línea de emergencia para cortocircuitos y fallas eléctricas.',
        features: [
          'Línea directa para atención de cortocircuitos y bajones de voltaje',
          'Servicios de instalación de breakers, cableado y lámparas',
          'Contacto inmediato por WhatsApp con envío de fotos de la avería',
        ],
        recommendedPages: ['Emergencias Eléctricas', 'Servicios Residenciales', 'Contacto'],
        status: 'disponible',
      },
      pequena: {
        tagline: 'Web completa de 5 a 8 páginas con paneles solares, bombas de agua y balanceo de cargas.',
        features: [
          'Páginas dedicadas para Residencial, Comercial y Bombeo de Agua',
          'Sección de energía solar fotovoltaica y ahorro en factura eléctrica',
          'Tarjetas digitales QRMOON para administradores de residenciales',
          '4 a 8 contenidos mensuales para Instagram y TikTok',
        ],
        recommendedPages: [
          'Inicio',
          'Electricidad Residencial & Urgencias',
          'Instalación de Paneles Solares',
          'Bombas de Agua y Automatización',
          'Balanceo de Cargas & Breakers',
          'Certificaciones y Normas de Seguridad',
          'Cotizador de Proyectos Eléctricos',
        ],
        status: 'disponible',
      },
      mediana: {
        tagline: 'Portal de ingeniería eléctrica, mantenimiento de subestaciones y plantas pesadas.',
        features: [
          'Contratos de mantenimiento preventivo para torres residenciales y plazas',
          'Instalación de transformadores, transferencias automáticas y plantas',
          'Chatbot avanzado de atención a administradores de condominios',
          '8 a 16 contenidos mensuales de proyectos de ingeniería',
        ],
        recommendedPages: [
          'Portal de Ingeniería Eléctrica',
          'Mantenimiento para Torres y Condominios',
          'Subestaciones y Transformadores',
          'Plantas Eléctricas y Transferencias ATS',
          'Sistemas Solares a Gran Escala',
          'Domótica e Iluminación Inteligente',
          'Auditorías Energéticas y Ahorro',
          'Equipo de Ingenieros Certificados',
          'Licitaciones y Proyectos Corporativos',
          'Central de Urgencias 24/7',
        ],
        status: 'proximamente',
      },
    }),
  },

  // 9. AGENCIAS INMOBILIARIAS
  {
    id: 'demo-agencias-inmobiliarias',
    slug: 'agencias-inmobiliarias-y-bienes-raices',
    name: 'Agencias Inmobiliarias y Bienes Raíces',
    category: 'Inmobiliaria y Turismo',
    categoryGroup: 'inmobiliaria-turismo',
    shortDescription:
      'Destaca propiedades en venta y alquiler, proyectos en planos y facilita el contacto directo con cada asesor inmobiliario.',
    fullDescription:
      'Diseñada para agencias inmobiliarias y agentes independientes en República Dominicana. Muestra apartamentos en el Distrito Nacional, villas en Punta Cana, casas familiares y proyectos en preventa con fichas claras de características, fotos y botón para coordinar visitas.',
    defaultPlanId: 'mediana',
    order: 9,
    accentColor: '#059669',
    tags: ['bienes raíces', 'inmobiliaria', 'apartamentos', 'villas', 'punta cana', 'airbnb', 'inversión'],
    practicalBenefits: [
      'Genera confianza en compradores extranjeros y locales con una presentación de alta gama.',
      'Permite a tus agentes compartir enlaces directos de propiedades específicas por WhatsApp.',
      'Organiza el inventario para que el cliente no se pierda entre cientos de fotos de chat.',
    ],
    suggestedServices: [
      'Tarjetas digitales QRMOON individuales para cada agente inmobiliario de la firma',
      'Integración con campañas de pauta digital para captación de leads inversores',
      'Chatbot avanzado para precalificar presupuesto y zona deseada del comprador',
    ],
    variants: createSectorVariants({
      basico: {
        tagline: 'Landing ágil para agentes inmobiliarios independientes con inventario selecto.',
        features: [
          'Fichas de propiedades destacadas con fotos y precios en USD / RD$',
          'Perfil profesional del agente con certificaciones',
          'Botón directo para agendar visitas por WhatsApp',
        ],
        recommendedPages: ['Propiedades Destacadas', 'Sobre el Agente', 'Contacto WhatsApp'],
        status: 'proximamente',
      },
      pequena: {
        tagline: 'Web completa de 5 a 8 páginas con filtro por zonas y proyectos en preventa.',
        features: [
          'Catálogo clasificado: Apartamentos, Villas turísticas y Locales comerciales',
          'Sección dedicada a Proyectos en planos con planes de pago',
          'V-Cards de QRMOON para los asesores del equipo',
          '4 a 8 contenidos mensuales de recorridos en video para IG y TikTok',
        ],
        recommendedPages: [
          'Inicio',
          'Apartamentos en Santo Domingo',
          'Villas y Proyectos en Punta Cana',
          'Proyectos en Preventa (Planos)',
          'Propiedades en Alquiler',
          'Guía de Compra para Inversores',
          'Contacto con Asesores',
        ],
        status: 'proximamente',
      },
      mediana: {
        tagline: 'Portal inmobiliario corporativo con buscador avanzado, multi-asesor y ley Confotur.',
        features: [
          'Buscador avanzado con filtros por precio, habitaciones, zona y retorno de inversión',
          'Directorio de agentes con botón de WhatsApp asignado a cada propiedad',
          'Calculadora hipotecaria estimada en pesos y dólares',
          'Chatbot con precalificación de compradores internacionales',
          '8 a 16 contenidos audiovisuales mensuales de propiedades exclusivas',
        ],
        recommendedPages: [
          'Portal Inmobiliario Integral',
          'Buscador Avanzado de Propiedades',
          'Inversiones Turísticas & Confotur',
          'Proyectos de Lujo en Planos',
          'Villas de Alto Standing',
          'Propiedades Comerciales & Terrenos',
          'Directorio de Asesores Inmobiliarios',
          'Calculadora de Rentabilidad Airbnb',
          'Blog de Inversión y Leyes Inmobiliarias',
          'Mesa de Negocios y Contacto',
        ],
        status: 'proximamente',
      },
    }),
  },

  // 10. ALOJAMIENTOS TURÍSTICOS Y AIRBNB
  {
    id: 'demo-alojamientos-turisticos',
    slug: 'alojamientos-turisticos-y-airbnb',
    name: 'Alojamientos Turísticos, Villas y Airbnb',
    category: 'Inmobiliaria y Turismo',
    categoryGroup: 'inmobiliaria-turismo',
    shortDescription:
      'Promociona tus villas, apartamentos turísticos y cabañas para reservas directas sin comisiones elevadas de plataformas.',
    fullDescription:
      'Ideal para propietarios y administradores de propiedades vacacionales en Jarabacoa, Las Terrenas, Bayahíbe y Punta Cana. Permite mostrar amenidades (piscina, jacuzzi, vista, capacidad de huéspedes), normas de la casa y recibir solicitudes de fechas por WhatsApp para ahorrar comisiones.',
    defaultPlanId: 'pequena',
    order: 10,
    accentColor: '#0891b2',
    tags: ['airbnb', 'villas turísticas', 'alojamiento', 'jarabacoa', 'las terrenas', 'vacaciones', 'reservas'],
    practicalBenefits: [
      'Ahorra entre un 15% y 20% en comisiones de plataformas atrayendo reservas directas.',
      'Facilita responder a huéspedes interesados con un único enlace elegante que lo contiene todo.',
      'Fideliza a clientes dominicanos que acostumbran vacacionar en familia periódicamente.',
    ],
    suggestedServices: [
      'Códigos QR en las habitaciones con manual de uso del inmueble y recomendaciones turísticas',
      'Google Reviews para posicionar la villa como destino favorito de hospedaje',
      'Configuración de redes sociales para impulsar reservas de fines de semana y puentes festivos',
    ],
    variants: createSectorVariants({
      basico: {
        tagline: 'Página ágil para una villa o apartamento turístico para reservas directas.',
        features: [
          'Galería fotográfica de piscina, habitaciones y áreas sociales',
          'Tarifas por noche y capacidad máxima de personas',
          'Formulario directo de fechas por WhatsApp sin intermediarios',
        ],
        recommendedPages: ['Fotos de la Propiedad', 'Amenidades y Tarifas', 'Consultar Fechas'],
        status: 'disponible',
      },
      pequena: {
        tagline: 'Web completa de 5 a 8 páginas con guía turística local, amenidades y normas.',
        features: [
          'Recorrido virtual por espacios con fotos de alta resolución',
          'Guía turística de los alrededores: ríos, playas, restaurantes y actividades',
          'Normas de la casa, políticas de depósito y horarios de check-in / check-out',
          '4 a 8 contenidos mensuales para Instagram y TikTok de escapadas de fin de semana',
        ],
        recommendedPages: [
          'Inicio',
          'La Villa & Habitaciones Climatizadas',
          'Amenidades (Piscina, Jacuzzi, BBQ, Wi-Fi)',
          'Qué Hacer en los Alrededores',
          'Reglamento y Condiciones de Hospedaje',
          'Opiniones de Huéspedes Anteriores',
          'Cotizador de Fechas por WhatsApp',
        ],
        status: 'disponible',
      },
      mediana: {
        tagline: 'Portal para administradoras de múltiples villas o complejo boutique vacacional.',
        features: [
          'Catálogo multi-propiedad con selector de destino (Jarabacoa, Las Terrenas, Punta Cana)',
          'Servicios complementarios: Chef privado, chofer, excursiones y decoración de eventos',
          'Chatbot de reservas con verificación de disponibilidad previa',
          '8 a 16 contenidos audiovisuales mensuales de experiencias vacacionales',
        ],
        recommendedPages: [
          'Portal Boutique de Hospedaje',
          'Colección de Villas Exclusivas',
          'Experiencias & Chef Privado',
          'Bodas de Destino y Retiros Corporativos',
          'Servicios de Conserjería VIP',
          'Guía de Destinos Turísticos RD',
          'Membresías de Huésped Frecuente',
          'Políticas de Reserva y Garantía',
          'Gestión de Propiedades para Dueños',
          'Central de Reservas',
        ],
        status: 'proximamente',
      },
    }),
  },

  // 11. RESTAURANTES Y CAFETERÍAS
  {
    id: 'demo-restaurantes-cafeterias',
    slug: 'restaurantes-cafeterias-y-gastronomia',
    name: 'Restaurantes, Cafeterías y Gastronomía',
    category: 'Gastronomía y Bebidas',
    categoryGroup: 'gastronomia',
    shortDescription:
      'Menú digital interactivo con fotos apetitosas, pedidos de delivery por WhatsApp y reserva de mesas para ocasiones especiales.',
    fullDescription:
      'Diseñada para restaurantes, cafeterías de especialidad, bistrós, pizzerías y pastelerías en República Dominicana. Convierte a comensales visuales en clientes con un menú digital rápido, legible en celulares, sin necesidad de descargar PDFs pesados, con botón para pedir a domicilio o reservar mesa.',
    defaultPlanId: 'pequena',
    order: 11,
    accentColor: '#dc2626',
    tags: ['restaurante', 'cafetería', 'menú digital', 'delivery', 'comida', 'gastronomía', 'reserva de mesas'],
    practicalBenefits: [
      'Evita que los clientes tengan que descargar molestos archivos PDF lentos en sus celulares.',
      'Aumenta el ticket promedio gracias a fotografías atractivas y sugerencias de acompañamientos.',
      'Permite actualizar precios y platos del día al instante sin tener que reimprimir cartas.',
    ],
    suggestedServices: [
      'Códigos QR para mesas que abren el menú sin tener que descargar apps o PDFs',
      'Google Reviews para impulsar la puntuación del restaurante en Google Maps',
      'Gestión de contenidos visuales para Instagram y TikTok según el plan',
    ],
    variants: createSectorVariants({
      basico: {
        tagline: 'Menú digital ágil para celulares sin descargar PDFs, ideal para delivery directo.',
        features: [
          'Menú categorizado legible en celulares (Entradas, Platos Fuertes, Bebidas)',
          'Horarios de apertura, ubicación y mapa',
          'Botón de delivery rápido a WhatsApp con plato seleccionado',
        ],
        recommendedPages: ['Menú Digital', 'Horarios y Ubicación', 'Pedir Delivery'],
        status: 'disponible',
      },
      pequena: {
        tagline: 'Web completa de 5 a 8 páginas con fotos HD, armador de delivery y reserva de mesas.',
        features: [
          'Menú digital interactivo con fotos profesionales de cada plato',
          'Módulo de pedidos de delivery estructurado con observaciones y extras',
          'Formulario de reserva de mesas para aniversarios y cumpleaños',
          'Código QR en mesas para Google Reviews y 4-8 contenidos mensuales para redes',
        ],
        recommendedPages: [
          'Inicio con Ambiente del Local',
          'Menú Digital Completo con Fotos',
          'Especialidades del Chef & Coctelería',
          'Armador de Pedido para Delivery',
          'Reserva de Mesas y Eventos Privados',
          'Ubicación, Valet Parking y Horarios',
          'Pedir por WhatsApp',
        ],
        status: 'disponible',
      },
      mediana: {
        tagline: 'Portal gastronómico para cadenas con múltiples sucursales o catering corporativo.',
        features: [
          'Menú interactivo con selector de sucursal y horarios específicos',
          'Módulo de cotización de eventos corporativos y catering de gran escala',
          'Chatbot avanzado de reservas y confirmación automática',
          '8 a 16 contenidos audiovisuales mensuales de alta gastronomía',
        ],
        recommendedPages: [
          'Portal Gastronómico',
          'Selector de Sucursales & Cartas',
          'Menú Degustación & Maridaje',
          'Catering Corporativo & Eventos Sociales',
          'Espacios Privados & Reservas VIP',
          'Historia y Filosofía Culinaria',
          'Nuestros Chefs y Productores Locales',
          'Membresía Gastro Club',
          'Gift Cards & Certificados',
          'Contacto Corporativo',
        ],
        status: 'proximamente',
      },
    }),
  },

  // 12. EMPRESAS DE TRANSPORTE Y TURISMO
  {
    id: 'demo-transporte-turismo',
    slug: 'empresas-de-transporte-y-turismo',
    name: 'Transporte Turístico, Transfers y Excursiones',
    category: 'Transporte y Logística Turística',
    categoryGroup: 'inmobiliaria-turismo',
    shortDescription:
      'Ofrece traslados aeropuerto-hotel, alquiler de vehículos con chofer y paquetes de excursiones con cotización inmediata.',
    fullDescription:
      'Solución pensada para empresas de transporte privado, transfers desde aeropuertos (AILA, Punta Cana, Cibao) y agencias de tours. Permite a turistas extranjeros y viajeros corporativos solicitar traslados y tours guiados con tarifas claras y choferes certificados.',
    defaultPlanId: 'pequena',
    order: 12,
    accentColor: '#0284c7',
    tags: ['transporte turístico', 'transfers', 'aeropuerto', 'excursiones', 'saona', 'punta cana', 'chofer privado'],
    practicalBenefits: [
      'Capta turistas antes de que aterricen en el país ofreciendo reservas previas confiables.',
      'Permite cotizar tours para grupos familiares o corporativos con requisitos específicos.',
      'Diferencia a tu empresa de servicios informales de transporte que no ofrecen garantía.',
    ],
    suggestedServices: [
      'WhatsApp para Negocios con confirmación de vuelo y datos del conductor',
      'Google Reviews para generar confianza con turistas internacionales',
      'Tarjetas digitales QRMOON para los choferes y guías de la empresa',
    ],
    variants: createSectorVariants({
      basico: {
        tagline: 'Página ágil con traslados más comunes de aeropuertos a hoteles y reserva.',
        features: [
          'Tarifario de rutas frecuentes de aeropuertos dominicanos',
          'Fotos de la flotilla de camionetas y vans',
          'Botón de reserva directa por WhatsApp con número de vuelo',
        ],
        recommendedPages: ['Rutas Principales', 'Flotilla', 'Reservar Transfer'],
        status: 'proximamente',
      },
      pequena: {
        tagline: 'Web completa de 5 a 8 páginas con catálogo de excursiones y cotizador de rutas.',
        features: [
          'Tarifario a todos los polos turísticos (Punta Cana, Bayahíbe, Samaná, Las Terrenas)',
          'Catálogo de excursiones populares (Isla Saona, Safari, Santo Domingo Colonial)',
          'Formulario guiado con origen, destino, pasajeros y equipaje',
          '4 a 8 contenidos mensuales para Instagram y TikTok de experiencias turísticas',
        ],
        recommendedPages: [
          'Inicio',
          'Transfers desde Aeropuertos (AILA, PUJ, STI)',
          'Flotilla Moderna (Minivans, Buses, SUVs)',
          'Excursiones y Tours Populares',
          'Transporte Corporativo y Chofer Privado',
          'Seguridad, Choferes Certificados y Seguros',
          'Cotizador de Traslados por WhatsApp',
        ],
        status: 'proximamente',
      },
      mediana: {
        tagline: 'Portal de gran operadora receptiva (DMC) y logística para congresos internacionales.',
        features: [
          'Cotizador para grupos corporativos, convenciones y congresos',
          'Flota ejecutiva blindada y autobuses de gran capacidad',
          'Chatbot bilingüe con confirmación de reservas de vuelos',
          '8 a 16 contenidos audiovisuales de cobertura logística y tours',
        ],
        recommendedPages: [
          'Portal Operador Receptivo (DMC)',
          'Logística para Grupos y Convenciones (MICE)',
          'Flotilla VIP & Transporte Ejecutivo',
          'Transfers de Aeropuertos a Nivel Nacional',
          'Excursiones Privadas Personalizadas',
          'Alianzas con Agencias Mayoristas',
          'Protocolos de Seguridad y Pólizas Internacionales',
          'Equipo de Guías Bilingües Certificados',
          'Portal de Agencias Aliadas',
          'Contacto Comercial Corporativo',
        ],
        status: 'proximamente',
      },
    }),
  },
];

/**
 * Obtener todas las demos ordenadas
 */
export function getAllDemos(): DemoItem[] {
  return [...demosData].sort((a, b) => a.order - b.order);
}

/**
 * Obtener una demo por su slug
 */
export function getDemoBySlug(slug: string): DemoItem | undefined {
  return demosData.find((demo) => demo.slug === slug);
}

/**
 * Obtener demos por categoría o filtro
 */
export function getDemosByCategory(categoryId: string): DemoItem[] {
  if (categoryId === 'todas') {
    return getAllDemos();
  }
  return demosData
    .filter((demo) => demo.categoryGroup === categoryId)
    .sort((a, b) => a.order - b.order);
}

/**
 * Buscar demos por texto libre y categoría
 */
export function searchDemos(query: string, categoryId: string = 'todas'): DemoItem[] {
  const clean = query.trim().toLowerCase();
  const baseList = getDemosByCategory(categoryId);

  if (!clean) return baseList;

  return baseList.filter((demo) => {
    return (
      demo.name.toLowerCase().includes(clean) ||
      demo.shortDescription.toLowerCase().includes(clean) ||
      demo.category.toLowerCase().includes(clean) ||
      demo.tags.some((t) => t.toLowerCase().includes(clean)) ||
      Object.values(demo.variants).some((v) =>
        v.features.some((f) => f.toLowerCase().includes(clean))
      )
    );
  });
}
