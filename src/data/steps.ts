export interface WorkflowStep {
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  iconName: string;
}

export const workflowSteps: WorkflowStep[] = [
  {
    number: '01',
    title: 'Conocemos tu negocio',
    summary: 'Identificamos tus servicios clave, tu cliente ideal, objetivos comerciales y necesidades específicas del sector.',
    deliverables: [
      'Reunión breve de levantamiento de información',
      'Definición de servicios prioritarios a destacar',
      'Recepción de logotipo, fotos y datos de contacto',
    ],
    iconName: 'Search',
  },
  {
    number: '02',
    title: 'Diseñamos tu solución',
    summary: 'Definimos la arquitectura del sitio, la estructura de páginas, textos comerciales y flujos de contacto por WhatsApp.',
    deliverables: [
      'Mapa de navegación del sitio web',
      'Propuesta de paleta visual y tipografía',
      'Redacción comercial orientada a la venta',
    ],
    iconName: 'Layout',
  },
  {
    number: '03',
    title: 'Desarrollamos y publicamos',
    summary: 'Construimos el sitio con código moderno, adaptado a celulares, configuramos analítica, WhatsApp y lanzamos oficialmente.',
    deliverables: [
      'Desarrollo responsivo en Next.js y Tailwind CSS',
      'Configuración de Google Analytics y Google Reviews',
      'Pruebas exhaustivas en celulares y publicación',
    ],
    iconName: 'Rocket',
  },
  {
    number: '04',
    title: 'Te acompañamos continuamente',
    summary: 'Ofrecemos alojamiento seguro, monitoreo preventivo, soporte continuo y creación de contenidos según tu plan.',
    deliverables: [
      'Hosting de alta velocidad y certificado SSL',
      'Soporte técnico para dudas o ajustes de información',
      'Contenidos para Instagram y TikTok según paquete',
    ],
    iconName: 'Headphones',
  },
];
