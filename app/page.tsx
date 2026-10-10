import { AboutSection } from "@/components/about-section";
import { CareerSection } from "@/components/career-section";
import { ContactSection } from "@/components/contact-section";
import { DemosSection } from "@/components/demos-section";
import { HeroSection } from "@/components/hero-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkSection } from "@/components/work-section";
import { LanguageProvider } from "@/components/language-provider";

export default function Home() {
  const builtAt = new Date().toISOString();

  return (
    <LanguageProvider>
      <main>
        <SiteHeader />
        <HeroSection />
        <AboutSection />
        <CareerSection />
        <WorkSection />
        <DemosSection />
        <ContactSection />
        <SiteFooter builtAt={builtAt} />
      </main>
    </LanguageProvider>
  );
}
