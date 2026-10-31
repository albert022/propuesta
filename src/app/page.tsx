import { HeroSection } from '@/components/sections/HeroSection';
import { HomeDemoCatalogSection } from '@/components/sections/HomeDemoCatalogSection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { PricingTable } from '@/components/sections/PricingTable';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { FinalCta } from '@/components/sections/FinalCta';

export default function HomePage() {
  return (
    <>
      {/* Sección B: Hero principal */}
      <HeroSection />

      {/* Sección C & D: Catálogo de demostraciones con filtros interactivos */}
      <HomeDemoCatalogSection />

      {/* Sección F: Servicios de QRMOON (Mucho más que una página web) */}
      <ServicesGrid />

      {/* Sección G: Paquetes y precios */}
      <PricingTable />

      {/* Sección H: Cómo trabajamos */}
      <HowItWorks />

      {/* Sección I: Preguntas frecuentes */}
      <FaqAccordion />

      {/* Sección J: CTA final */}
      <FinalCta />
    </>
  );
}
