import { DemoItem } from '@/types';

export const demosData: DemoItem[] = [
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
    status: 'disponible',
    order: 1,
    previewGradient: 'from-blue-600 to-cyan-500',
    accentColor: '#0284c7',
    features: [
      'Catálogo de servicios de instalación y mantenimiento',
      'Galería fotográfica de trabajos realizados',
      'Botón directo para cotizaciones urgentes por WhatsApp',
    ],
    // Dejar undefined si aún no tiene dominio externo activo para cumplir con la regla de no enlaces ficticios
    demoUrl: undefined,
    suggestedServices: [
      'WhatsApp para Negocios con respuestas rápidas',
      'Tarjetas digitales QRMOON para los técnicos de campo',
      'Configuración de Google Reviews para acumular opiniones de clientes',
    ],
    recommendedSections: [
      {
        title: 'Cabecera de urgencia y llamada directa',
        description: 'Número de asistencia inmediata y cobertura geográfica visible desde el primer segundo.',
      },
      {
        title: 'Catálogo de servicios clasificado',
        description: 'Mantenimiento preventivo, recarga de refrigerante, instalación de inversores y bancos de baterías.',
      },
      {
        title: 'Galería de instalaciones y testimonios',
        description: 'Evidencia gráfica antes/después de trabajos en residencias y locales comerciales.',
      },
      {
        title: 'Formulario de cotización con WhatsApp',
        description: 'Selector de tipo de avería o servicio para que el cliente envíe su consulta con datos claros.',
      },
      {
        title: 'Zona de cobertura y horarios de atención',
        description: 'Mapa de sectores atendidos en el Gran Santo Domingo o provincias.',
      },
    ],
    practicalBenefits: [
      'Reduce hasta un 70% las llamadas repetitivas sobre qué servicios realizas y en qué zonas trabajas.',
      'Transmite confianza institucional frente a técnicos independientes que no poseen presencia verificable.',
      'Captura clientes que buscan técnicos calificados desde su teléfono móvil durante emergencias por calor o apagones.',
    ],
    tags: ['aire acondicionado', 'inversores', 'climatización', 'técnicos', 'mantenimiento', 'emergencias', 'refrigeración'],
  },
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
    status: 'disponible',
    order: 2,
    previewGradient: 'from-zinc-900 to-amber-700',
    accentColor: '#d97706',
    features: [
      'Menú visual de cortes, barbas y tratamientos capilares',
      'Perfil de barberos con su portafolio de estilos',
      'Agendamiento rápido de citas mediante WhatsApp',
    ],
    demoUrl: undefined,
    suggestedServices: [
      'Código QR en espejos y recepción para Google Reviews',
      'Integración con Instagram para exhibir los últimos cortes',
      'Chatbot básico para responder precios y ubicación fuera de horario',
    ],
    recommendedSections: [
      {
        title: 'Hero con vibra urbana y llamada a reservar',
        description: 'Imágenes de alta calidad del local y botón principal para elegir fecha y barbero.',
      },
      {
        title: 'Tarifario de servicios claro',
        description: 'Corte regular, desvanecido (fade), afeitado con toalla caliente, mascarillas y paquetes VIP.',
      },
      {
        title: 'Equipo de barberos profesionales',
        description: 'Foto, especialidad y enlace directo para agendar con tu barbero favorito.',
      },
      {
        title: 'Ubicación interactiva con Google Maps',
        description: 'Indicaciones exactas para llegar en Waze o Google Maps y disponibilidad de parqueo.',
      },
    ],
    practicalBenefits: [
      'Elimina el caos de turnos y llamadas continuas durante las horas más concurridas.',
      'Incentiva la compra de servicios complementarios como cuidado de barba y mascarillas.',
      'Aumenta la retención de clientes leales gracias al fácil agendamiento en su móvil.',
    ],
    tags: ['barbería', 'cortes de cabello', 'barba', 'cuidado masculino', 'fade', 'turnos'],
  },
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
    status: 'disponible',
    order: 3,
    previewGradient: 'from-pink-600 to-rose-400',
    accentColor: '#e11d48',
    features: [
      'Galería antes y después de transformaciones capilares',
      'Catálogo de paquetes para bodas, graduaciones y eventos',
      'Consulta directa de citas y disponibilidad de estilistas',
    ],
    demoUrl: undefined,
    suggestedServices: [
      'QRMOON V-Card para que cada estilista comparta su contacto con clientas',
      'Estrategia de Google Reviews para destacar en búsquedas locales',
      'Redes sociales para sincronizar con novedades y promociones de temporada',
    ],
    recommendedSections: [
      {
        title: 'Presentación de bienvenida y propuesta de valor',
        description: 'Especialidades del salón y enfoque en el cuidado de la salud capilar.',
      },
      {
        title: 'Catálogo de servicios y tratamientos',
        description: 'Colorimetría, alisados, cortes de tendencia, secado y tratamientos capilares intensivos.',
      },
      {
        title: 'Galería de transformaciones reales',
        description: 'Fotos de resultados que inspiran confianza y deseo de compra.',
      },
      {
        title: 'Marcas y productos profesionales utilizados',
        description: 'Logos de marcas reconocidas que garantizan calidad y cuidado.',
      },
    ],
    practicalBenefits: [
      'Genera credibilidad inmediata mostrando la calidad de tus trabajos antes de que la clienta agende.',
      'Permite responder rápidamente solicitudes de cotizaciones de color que suelen requerir evaluación previa.',
      'Atrae nuevas clientas que buscan referencias en internet antes de arriesgar su cabello.',
    ],
    tags: ['salón de belleza', 'estilismo', 'balayage', 'keratina', 'peinados', 'colorimetría'],
  },
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
    status: 'disponible',
    order: 4,
    previewGradient: 'from-fuchsia-600 to-violet-500',
    accentColor: '#9333ea',
    features: [
      'Lookbook fotográfico de tendencias y diseños en uñas',
      'Menú de cuidado facial, depilación y pestañas',
      'Botón interactivo de solicitud de cita por WhatsApp',
    ],
    demoUrl: undefined,
    suggestedServices: [
      'Google Reviews para acumular 5 estrellas de clientas satisfechas',
      'Chatbot básico para resolver preguntas frecuentes sobre precios y duración de servicios',
      'Tarjetas digitales para fidelización de clientas recurrentes',
    ],
    recommendedSections: [
      {
        title: 'Lookbook visual interactivo',
        description: 'Filtro por técnica: acrílico, gelish, pedicura spa y arte personalizado.',
      },
      {
        title: 'Menú de servicios con tiempos estimados',
        description: 'Duración de cada sesión para que las clientas organicen su agenda.',
      },
      {
        title: 'Políticas de reserva e higiene',
        description: 'Compromiso con esterilización de herramientas y puntualidad.',
      },
    ],
    practicalBenefits: [
      'Disminuye el tiempo que tu personal dedica a enviar fotos de diseños por mensaje privado.',
      'Filtra a las clientas con información clara sobre tarifas y condiciones de reserva.',
      'Fortalece la imagen moderna y limpia de tu centro de uñas.',
    ],
    tags: ['uñas', 'nail bar', 'manicura', 'pedicura', 'estética', 'polygel', 'pestañas'],
  },
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
    status: 'disponible',
    order: 5,
    previewGradient: 'from-blue-700 to-slate-800',
    accentColor: '#1e40af',
    features: [
      'Detalle de servicios de mecánica preventiva y correctiva',
      'Explicación clara de proceso de diagnóstico computarizado',
      'Botón para coordinar recepción de vehículo o grúa',
    ],
    demoUrl: undefined,
    suggestedServices: [
      'WhatsApp para Negocios con ficha rápida de recepción de vehículos',
      'Google Reviews con QR físico en el área de caja para motivar opiniones tras el retiro del carro',
      'Mantenimiento web continuo para actualizar promociones de afinamiento y cambio de aceite',
    ],
    recommendedSections: [
      {
        title: 'Sección de diagnóstico y garantías',
        description: 'Cómo trabajamos con escáner, presupuesto previo y garantía escrita en reparaciones.',
      },
      {
        title: 'Especialidades por marca y sistema',
        description: 'Frenos, suspensión, transmisión, motor y aire acondicionado automotriz.',
      },
      {
        title: 'Ubicación, área de espera y comodidades',
        description: 'Sala de espera con Wi-Fi, café y cámaras para comodidad del cliente.',
      },
      {
        title: 'Formulario de consulta de síntomas vehiculares',
        description: 'Permite al conductor describir el ruido o falla antes de llevar el auto.',
      },
    ],
    practicalBenefits: [
      'Vence la desconfianza natural del conductor mostrando instalaciones ordenadas y personal identificado.',
      'Aumenta el ticket promedio promoviendo mantenimientos preventivos antes de fallas costosas.',
      'Agiliza la cotización de repuestos al recibir datos del vehículo (año, marca, modelo) por WhatsApp.',
    ],
    tags: ['taller mecánico', 'diagnóstico automotriz', 'cambio de aceite', 'frenos', 'suspensión', 'vehículos'],
  },
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
    status: 'disponible',
    order: 6,
    previewGradient: 'from-amber-600 to-orange-700',
    accentColor: '#ea580c',
    features: [
      'Catálogo categorizado por familias de productos',
      'Módulo para cotización de listas de materiales de construcción',
      'Información visible sobre servicio de transporte y flete a obra',
    ],
    demoUrl: undefined,
    suggestedServices: [
      'WhatsApp para Negocios optimizado para recibir fotos de piezas rotas o listas en papel',
      'SEO local para aparecer cuando buscan "ferretería cerca de mí" en su sector',
      'Google Reviews para consolidar reputación en entrega puntual de pedidos',
    ],
    recommendedSections: [
      {
        title: 'Buscador y familias de productos destacados',
        description: 'Pinturas, plomería, herramientas eléctricas, cemento, varillas y seguridad industrial.',
      },
      {
        title: 'Cotizador rápido para maestros e ingenieros',
        description: 'Envío de lista de insumos por WhatsApp o subida de fotografía de la lista.',
      },
      {
        title: 'Flotilla de transporte y cobertura de entrega',
        description: 'Capacidad de entrega de agregados y materiales pesados directo a la obra.',
      },
      {
        title: 'Marcas líderes comercializadas',
        description: 'Distribuidores autorizados de marcas de pintura, herramientas y tuberías.',
      },
    ],
    practicalBenefits: [
      'Capta pedidos de obra grandes que se deciden por rapidez de cotización y despacho.',
      'Facilita que clientes particulares identifiquen si tienes el repuesto o pieza que buscan.',
      'Mejora la presencia institucional frente a competidores que solo tienen letrero físico.',
    ],
    tags: ['ferretería', 'materiales de construcción', 'herramientas', 'pintura', 'plomería', 'cemento', 'flete'],
  },
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
    status: 'disponible',
    order: 7,
    previewGradient: 'from-slate-800 to-indigo-950',
    accentColor: '#3b82f6',
    features: [
      'Búsqueda y consulta de repuestos por marca y modelo vehicular',
      'Envío guiado de solicitud de pieza con número de chasis (VIN)',
      'Información sobre envíos a nivel nacional y garantías de prueba',
    ],
    demoUrl: undefined,
    suggestedServices: [
      'Chatbot para capturar marca, modelo y año antes de transferir la consulta al vendedor',
      'Catálogo digital actualizado periódicamente con piezas de alta rotación',
      'Google Reviews para respaldar la seriedad de envíos a provincias',
    ],
    recommendedSections: [
      {
        title: 'Selector de marcas de autos atendidas',
        description: 'Toyota, Honda, Hyundai, Kia, Nissan, Ford, Chevrolet, etc.',
      },
      {
        title: 'Cómo solicitar tu repuesto en 3 pasos',
        description: '1. Envía foto o código de la pieza. 2. Confirmamos stock y precio. 3. Recibe en tu taller o retira en tienda.',
      },
      {
        title: 'Políticas de garantía y cambio de piezas',
        description: 'Días de prueba y condiciones para piezas eléctricas y mecánicas.',
      },
    ],
    practicalBenefits: [
      'Ahorra tiempo a tus vendedores al recibir solicitudes con marca, año y foto ya listos.',
      'Amplía tus ventas más allá de tu zona física vendiendo con envíos a todas las provincias.',
      'Posiciona a tu repuesto como una empresa formal y confiable para mecánicos y particulares.',
    ],
    tags: ['repuestos', 'autopartes', 'chasis', 'talleres', 'vehículos', 'piezas', 'envíos nacionales'],
  },
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
    status: 'disponible',
    order: 8,
    previewGradient: 'from-yellow-600 to-amber-500',
    accentColor: '#d97706',
    features: [
      'Línea de emergencia directa para cortocircuitos y fallas de luz',
      'Catálogo de instalaciones: paneles solares, bombas y automatización',
      'Solicitud guiada de presupuesto con fotos de la avería',
    ],
    demoUrl: undefined,
    suggestedServices: [
      'Tarjetas de contacto digital QRMOON para entregar a administradores de condominios',
      'WhatsApp para Negocios con respuestas automáticas fuera de horario',
      'Google Reviews para validar la honestidad y seguridad del técnico en el hogar',
    ],
    recommendedSections: [
      {
        title: 'Atención de emergencias 24/7',
        description: 'Botón de contacto urgente para problemas eléctricos críticos en residencias y negocios.',
      },
      {
        title: 'Servicios residenciales y comerciales',
        description: 'Balanceo de cargas, reemplazo de breakers, cableado estructurado e iluminación LED.',
      },
      {
        title: 'Soluciones de energía solar y bombas',
        description: 'Instalación de paneles solares, inversores solares y automatización de bombas de agua.',
      },
    ],
    practicalBenefits: [
      'Da seguridad a familias de contratar a un profesional verificado para entrar a su hogar.',
      'Consigue contratos recurrentes de mantenimiento para torres residenciales y plazas comerciales.',
      'Destaca frente a técnicos informales gracias a un perfil web transparente y profesional.',
    ],
    tags: ['electricista', 'cortocircuitos', 'energía solar', 'bombas de agua', 'cableado', 'emergencias eléctricas'],
  },
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
    status: 'proximamente',
    order: 9,
    previewGradient: 'from-emerald-700 to-teal-900',
    accentColor: '#059669',
    features: [
      'Fichas de propiedades con detalles de habitaciones, baños y parqueos',
      'Sección especial para proyectos en planos e inversión turística',
      'Contacto directo con el agente asignado a cada propiedad vía WhatsApp',
    ],
    demoUrl: undefined,
    suggestedServices: [
      'Tarjetas digitales QRMOON individuales para cada agente inmobiliario de la firma',
      'Integración con campañas de pauta digital para captación de leads inversores',
      'Chatbot avanzado para precalificar presupuesto y zona deseada del comprador',
    ],
    recommendedSections: [
      {
        title: 'Buscador de propiedades por zona y tipo',
        description: 'Filtro por Santo Domingo, Santiago, Punta Cana, Las Terrenas y rango de precio.',
      },
      {
        title: 'Proyectos destacados de inversión',
        description: 'Rentas cortas Airbnb, beneficios de Confotur y planes de pago flexibles.',
      },
      {
        title: 'Directorio de asesores del equipo',
        description: 'Foto del asesor, especialidad por zona y WhatsApp directo.',
      },
      {
        title: 'Guía para compradores e inversores extranjeros',
        description: 'Información sobre el proceso legal de compra de inmuebles en República Dominicana.',
      },
    ],
    practicalBenefits: [
      'Genera confianza en compradores extranjeros y locales con una presentación de alta gama.',
      'Permite a tus agentes compartir enlaces directos de propiedades específicas por WhatsApp.',
      'Organiza el inventario para que el cliente no se pierda entre cientos de fotos de chat.',
    ],
    tags: ['bienes raíces', 'inmobiliaria', 'apartamentos', 'villas', 'punta cana', 'airbnb', 'inversión'],
  },
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
    status: 'disponible',
    order: 10,
    previewGradient: 'from-cyan-700 to-blue-900',
    accentColor: '#0891b2',
    features: [
      'Recorrido fotográfico de amenidades, habitaciones y áreas sociales',
      'Calendario de tarifas de temporada alta/baja y capacidad máxima',
      'Formulario de reserva directa por WhatsApp sin intermediarios',
    ],
    demoUrl: undefined,
    suggestedServices: [
      'Códigos QR en las habitaciones con manual de uso del inmueble y recomendaciones turísticas',
      'Google Reviews para posicionar la villa como destino favorito de hospedaje',
      'Configuración de redes sociales para impulsar reservas de fines de semana y puentes festivos',
    ],
    recommendedSections: [
      {
        title: 'Galería inmersiva de la propiedad',
        description: 'Vistas panorámicas, piscina, habitaciones climatizadas y cocina equipada.',
      },
      {
        title: 'Lista de amenidades y servicios incluidos',
        description: 'Planta eléctrica full, Wi-Fi Starlink, servicio de limpieza opcional y BBQ.',
      },
      {
        title: 'Reglas del alojamiento y políticas de cancelación',
        description: 'Horarios de check-in / check-out, normas de sonido y depósitos de garantía.',
      },
      {
        title: 'Qué hacer en los alrededores',
        description: 'Recomendaciones de playas, ríos, restaurantes y atractivos locales.',
      },
    ],
    practicalBenefits: [
      'Ahorra entre un 15% y 20% en comisiones de plataformas atrayendo reservas directas.',
      'Facilita responder a huéspedes interesados con un único enlace elegante que lo contiene todo.',
      'Fideliza a clientes dominicanos que acostumbran vacacionar en familia periódicamente.',
    ],
    tags: ['airbnb', 'villas turísticas', 'alojamiento', 'jarabacoa', 'las terrenas', 'vacaciones', 'reservas'],
  },
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
    status: 'disponible',
    order: 11,
    previewGradient: 'from-red-600 to-amber-600',
    accentColor: '#dc2626',
    features: [
      'Menú digital interactivo categorizado con fotos y descripciones',
      'Toma de pedidos de delivery y take-out directo a WhatsApp',
      'Módulo de reserva de mesas y cotización de eventos privados',
    ],
    demoUrl: undefined,
    suggestedServices: [
      'Códigos QR para mesas que abren el menú sin tener que descargar apps o PDFs',
      'Google Reviews para impulsar la puntuación del restaurante en Google Maps',
      'Gestión de contenidos visuales para Instagram y TikTok según el plan',
    ],
    recommendedSections: [
      {
        title: 'Menú digital por categorías',
        description: 'Entradas, platos fuertes, bebidas de autor, postres y menú del día.',
      },
      {
        title: 'Armador de pedido para delivery',
        description: 'El comensal selecciona platos, observaciones y envía su orden lista por WhatsApp.',
      },
      {
        title: 'Ambiente del local y reserva de mesas',
        description: 'Fotos de la terraza, salón principal y formulario para cumpleaños y aniversarios.',
      },
      {
        title: 'Horarios, ubicación exacta y facilidades',
        description: 'Valet parking, terraza pet friendly, Wi-Fi y métodos de pago aceptados.',
      },
    ],
    practicalBenefits: [
      'Evita que los clientes tengan que descargar molestos archivos PDF lentos en sus celulares.',
      'Aumenta el ticket promedio gracias a fotografías atractivas y sugerencias de acompañamientos.',
      'Permite actualizar precios y platos del día al instante sin tener que reimprimir cartas.',
    ],
    tags: ['restaurante', 'cafetería', 'menú digital', 'delivery', 'comida', 'gastronomía', 'reserva de mesas'],
  },
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
    status: 'proximamente',
    order: 12,
    previewGradient: 'from-sky-700 to-blue-950',
    accentColor: '#0284c7',
    features: [
      'Tarifario de rutas frecuentes de aeropuertos a polos turísticos',
      'Catálogo de flotilla: minivans, autobuses y vehículos ejecutivos',
      'Reserva rápida de traslados con confirmación por WhatsApp',
    ],
    demoUrl: undefined,
    suggestedServices: [
      'WhatsApp para Negocios con confirmación de vuelo y datos del conductor',
      'Google Reviews para generar confianza con turistas internacionales',
      'Tarjetas digitales QRMOON para los choferes y guías de la empresa',
    ],
    recommendedSections: [
      {
        title: 'Cotizador de traslados aeropuerto-destino',
        description: 'Aeropuerto de Las Américas, Punta Cana, Santiago hacia hoteles o villas.',
      },
      {
        title: 'Flota de vehículos moderna',
        description: 'Fotografías del interior, aire acondicionado, capacidad de maletas y pasajeros.',
      },
      {
        title: 'Paquetes de excursiones más populares',
        description: 'Isla Saona, Samaná, Cayo Arena, Santo Domingo Histórico y Safari de aventura.',
      },
      {
        title: 'Seguridad y choferes bilingües certificados',
        description: 'Protocolos de seguridad, seguro de pasajeros y asistencia en viaje.',
      },
    ],
    practicalBenefits: [
      'Capta turistas antes de que aterricen en el país ofreciendo reservas previas confiables.',
      'Permite cotizar tours para grupos familiares o corporativos con requisitos específicos.',
      'Diferencia a tu empresa de servicios informales de transporte que no ofrecen garantía.',
    ],
    tags: ['transporte turístico', 'transfers', 'aeropuerto', 'excursiones', 'saona', 'punta cana', 'chofer privado'],
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
 * Buscar demos por texto libre
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
      demo.features.some((f) => f.toLowerCase().includes(clean)) ||
      demo.tags.some((t) => t.toLowerCase().includes(clean))
    );
  });
}
