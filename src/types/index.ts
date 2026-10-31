export type DemoStatus = 'disponible' | 'proximamente';

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

export interface DemoItem {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryGroup: CategoryGroupId;
  shortDescription: string;
  fullDescription: string;
  coverImage?: string;
  previewGradient?: string;
  accentColor?: string;
  features: string[];
  demoUrl?: string; // Real external link if exists, or undefined
  status: DemoStatus;
  suggestedServices: string[];
  recommendedSections: {
    title: string;
    description: string;
  }[];
  practicalBenefits: string[];
  order: number;
  tags: string[];
}

export type PlanId = 'basico' | 'pequena' | 'mediana';

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
  whatsappNumber: string; // E.g. "18295550199" (normalized for wa.me)
  whatsappDisplay: string; // E.g. "+1 (829) 555-0199"
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
