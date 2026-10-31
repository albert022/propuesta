export type DemoStatus = 'disponible' | 'proximamente';

export type PlanId = 'basico' | 'pequena' | 'mediana';

export type CategoryGroupId =
  | 'todas'
  | 'belleza'
  | 'servicios-tecnicos'
  | 'automotriz'
  | 'comercio'
  | 'inmobiliaria-turismo'
  | 'gastronomia';

export interface CategoryGroup {
  id: CategoryGroupId;
  label: string;
  iconName: string;
  description?: string;
}

export type CatalogExplorationMode = 'por-negocio' | 'por-plan';

export interface SectorPlanVariant {
  planId: PlanId;
  planName: string;
  tagline: string;
  pagesScope: string; // e.g. "1 a 3 secciones o páginas"
  initialPrice: number;
  monthlyPrice: number;
  initialPricePrefix?: string;
  monthlyPricePrefix?: string;
  features: string[];
  recommendedPages: string[];
  status: DemoStatus;
  demoUrl?: string; // independent demo URL for this variant if exists
  previewGradient?: string;
  coverImage?: string;
  badge?: string;
}

export interface DemoItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryGroup: CategoryGroupId;
  shortDescription: string;
  fullDescription: string;
  coverImage?: string;
  accentColor?: string;
  defaultPlanId: PlanId;
  variants: Record<PlanId, SectorPlanVariant>;
  order: number;
  tags: string[];
  practicalBenefits: string[];
  suggestedServices: string[];
}

export interface PlanItem {
  id: PlanId;
  name: string;
  target: string;
  initialPrice: number;
  monthlyPrice: number;
  initialPricePrefix?: string;
  monthlyPricePrefix?: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  includedFeatures: string[];
  notIncludedNotice?: string;
  idealFor: string;
  whatsappMessage: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  includedIn: {
    basico: boolean;
    pequena: boolean;
    mediana: boolean;
  };
  details: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  country: string;
  currency: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  hours: string;
  location: string;
  socials: {
    instagram?: string;
    tiktok?: string;
    facebook?: string;
    linkedin?: string;
  };
}
