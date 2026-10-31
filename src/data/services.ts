import { ServiceItem } from '@/types';

export const servicesData: ServiceItem[] = [
  {
    id: 'desarrollo-web',
    title: 'Diseño y desarrollo web',
    shortDesc: 'Sitios modernos, ultrarrápidos y completamente adaptados a teléfonos celulares.',
    fullDesc:
      'Construimos sitios web orientados a la conversión comercial, no solo a verse bonitos. Diseñados con estándares modernos, carga instantánea, navegación fluida en dispositivos móviles y preparados para proyectar la mejor imagen de tu empresa.',
    iconName: 'Globe',
    benefits: [
      'Carga veloz para que tus clientes no abandonen la página',
      'Experiencia perfecta en teléfonos inteligentes y computadoras',
      'Estructura comercial pensada para guiar al usuario hacia el contacto',
      'Preparado para indexación correcta en Google',
    ],
    includedIn: {
      basico: true, // 1 a 3 secciones
      pequena: true, // 5 a 8 páginas personalizadas
      mediana: true, // 10 o más páginas avanzadas
    },
    details: [
      'Plan Básico: Sitio ágil de 1 a 3 secciones o páginas principales.',
      'Plan Empresa Pequeña: Web completa personalizada de 5 a 8 páginas con estructura amplia.',
      'Plan Empresa Mediana: Portal corporativo avanzado de 10 o más páginas con flujos a medida.',
    ],
  },
  {
    id: 'whatsapp-negocios',
    title: 'WhatsApp para negocios',
    shortDesc: 'Botones inteligentes de contacto, solicitud de cotizaciones y mensajes predefinidos.',
    fullDesc:
      'En República Dominicana, WhatsApp es el canal donde se cierran las ventas. Integramos botones directos, selectores de servicio y mensajes estructurados para que cuando el cliente te escriba, ya sepas exactamente qué necesita.',
    iconName: 'MessageSquare',
    benefits: [
      'Los clientes se comunican con un solo toque desde su celular',
      'Mensajes con contexto previo que ahorran tiempo de explicación',
      'Reducción de fricción en comparación con formularios largos de correo',
    ],
    includedIn: {
      basico: true,
      pequena: true,
      mediana: true,
    },
    details: [
      'Plan Básico: Enlace y botón directo de WhatsApp con mensaje inicial.',
      'Plan Empresa Pequeña: Botones contextuales por servicio o producto.',
      'Plan Empresa Mediana: Enrutamiento multidepartamento y conexión con WhatsApp API / CRM si aplica.',
    ],
  },
  {
    id: 'chatbots',
    title: 'Chatbots y asistentes digitales',
    shortDesc: 'Asistentes virtuales con capacidades automatizadas adaptadas a las necesidades de tu paquete.',
    fullDesc:
      'Automatiza la atención de preguntas frecuentes las 24 horas del día. Permite que tus prospectos conozcan precios base, horarios de apertura, ubicación y tipos de servicios aun cuando tu equipo esté descansando o atendiendo clientes presenciales.',
    iconName: 'Bot',
    benefits: [
      'Atención inmediata a prospectos fuera de horario laboral',
      'Filtrado de clientes potenciales antes de transferir la conversación',
      'Respuestas estandarizadas y precisas sobre tu negocio',
    ],
    includedIn: {
      basico: true, // Básico
      pequena: true, // Personalizado
      mediana: true, // Avanzado con flujos
    },
    details: [
      'Plan Básico: Chatbot básico para preguntas esenciales y derivación.',
      'Plan Empresa Pequeña: Chatbot personalizado con árbol de respuestas de catálogo.',
      'Plan Empresa Mediana: Chatbot avanzado con flujos de precalificación y múltiples ramas.',
    ],
  },
  {
    id: 'google-reviews',
    title: 'Google Reviews y reputación',
    shortDesc: 'Herramientas para facilitar que tus clientes satisfechos dejen opiniones con QR y enlaces directos.',
    fullDesc:
      'Las opiniones en Google son el factor número uno que convence a un cliente dominicano de elegirte sobre la competencia. Diseñamos enlaces directos y códigos QR especiales para que tus clientes abran la pantalla de 5 estrellas en 3 segundos.',
    iconName: 'Star',
    benefits: [
      'Aumenta el volumen de opiniones verificadas en tu perfil de Google Maps',
      'Elimina pasos engorrosos de búsqueda manual para el cliente',
      'Mejora tu posicionamiento orgánico en búsquedas locales de la zona',
    ],
    includedIn: {
      basico: true, // Enlace o QR
      pequena: true, // Integración completa
      mediana: true, // Estrategia de reputación
    },
    details: [
      'Plan Básico: 1 enlace directo o código QR para solicitar Google Reviews.',
      'Plan Empresa Pequeña: Integración con la web y soporte de visualización de opiniones.',
      'Plan Empresa Mediana: Múltiples puntos QR y recomendaciones de gestión de reputación.',
    ],
  },
  {
    id: 'qrmoon-tarjetas',
    title: 'QRMOON y tarjetas digitales (V-Card)',
    shortDesc: 'Tarjetas de contacto digitales y códigos QR de alta resolución para profesionales y negocios.',
    fullDesc:
      'Dile adiós a las tarjetas de papel que terminan en la basura. Con la V-Card digital de QRMOON, tus clientes escanean tu código y guardan al instante en su agenda telefónica tu nombre, WhatsApp, correo, web y redes sociales.',
    iconName: 'QrCode',
    benefits: [
      'Tus datos de contacto guardados directamente en la agenda de tu cliente',
      'Actualización de datos sin necesidad de reimprimir tarjetas de cartón',
      'Imagen innovadora y moderna en reuniones o eventos de negocios',
    ],
    includedIn: {
      basico: true, // 1 V-Card
      pequena: true, // Varios QR / V-Cards según alcance
      mediana: true, // Múltiples QR / V-Cards
    },
    details: [
      'Plan Básico: 1 QR / Tarjeta Digital V-Card corporativa.',
      'Plan Empresa Pequeña: Varios QR / V-Cards según alcance para equipo clave.',
      'Plan Empresa Mediana: Paquete de múltiples QR / V-Cards para gerencia y fuerza comercial.',
    ],
  },
  {
    id: 'redes-sociales',
    title: 'Redes sociales e integración',
    shortDesc: 'Configuración, vinculación web y creación de contenidos mensuales según el plan seleccionado.',
    fullDesc:
      'Integramos tus redes sociales con tu sitio web para crear un ecosistema digital coherente. Dependiendo del plan contratado, también gestionamos publicaciones mensuales de contenido profesional para Instagram y TikTok.',
    iconName: 'Share2',
    benefits: [
      'Presencia de marca coherente entre tu web, Instagram y TikTok',
      'Tráfico cruzado entre tus redes y tu catálogo digital',
      'Generación regular de contenidos audiovisuales en planes empresariales',
    ],
    includedIn: {
      basico: false, // Solo enlaces e integración, no creación de contenido
      pequena: true, // 4 a 8 contenidos mensuales
      mediana: true, // 8 a 16 contenidos mensuales
    },
    details: [
      'Plan Básico: Enlaces e integración técnica de redes sociales en la web. (No incluye publicación mensual de contenido).',
      'Plan Empresa Pequeña: 4 a 8 contenidos mensuales en total entre Instagram y TikTok.',
      'Plan Empresa Mediana: 8 a 16 contenidos mensuales en total entre Instagram y TikTok.',
    ],
  },
  {
    id: 'seo-analitica',
    title: 'SEO y analítica de visitas',
    shortDesc: 'Configuración de posicionamiento inicial en buscadores y medición del comportamiento de visitas.',
    fullDesc:
      'De nada sirve una página web si no sabes cuántas personas la visitan ni cómo te encontraron. Implementamos Google Analytics, configuración de etiquetas SEO para motores de búsqueda y reportes periódicos según el plan.',
    iconName: 'BarChart3',
    benefits: [
      'Conoce cuántas personas entran a tu web y qué sectores visitan',
      'Estructura optimizada para que Google indexe tus servicios correctamente',
      'Reportes claros sobre el rendimiento de tu inversión digital',
    ],
    includedIn: {
      basico: true, // Básico
      pequena: true, // Reporte mensual básico
      mediana: true, // Análisis y reportes completos
    },
    details: [
      'Plan Básico: Configuración inicial de Google Analytics y SEO técnico esencial.',
      'Plan Empresa Pequeña: Analytics configurado y reporte mensual básico de visitas.',
      'Plan Empresa Mediana: Auditoría analítica continua, eventos de conversión y reportes completos.',
    ],
  },
  {
    id: 'mantenimiento-soporte',
    title: 'Mantenimiento, hosting y soporte',
    shortDesc: 'Alojamiento seguro en la nube, actualizaciones técnicas y asistencia continua.',
    fullDesc:
      'Nos encargamos de la parte técnica para que tú te dediques a atender tu negocio. Servidores de alta disponibilidad, certificado SSL de seguridad, copias de respaldo y resolución de dudas conforme al nivel contratado.',
    iconName: 'ShieldCheck',
    benefits: [
      'Tu página siempre en línea y protegida con certificado SSL',
      'Copias de seguridad regulares para salvaguardar tu información',
      'Equipo técnico en República Dominicana para darte respuesta oportuna',
    ],
    includedIn: {
      basico: true, // Soporte básico
      pequena: true, // Soporte regular
      mediana: true, // Soporte prioritario
    },
    details: [
      'Plan Básico: Hosting en la nube, seguridad SSL y mantenimiento básico preventivo.',
      'Plan Empresa Pequeña: Soporte técnico regular con tiempos de respuesta ágiles y ajustes menores.',
      'Plan Empresa Mediana: Soporte prioritario, monitoreo continuo y atención preferencial.',
    ],
  },
];
