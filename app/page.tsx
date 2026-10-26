import { DownloadSection } from "@/components/landing/download";
import { FeaturesSection } from "@/components/landing/features";
import { SiteFooter } from "@/components/landing/footer";
import { SiteHeader } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero";
import { HowItWorksSection } from "@/components/landing/how-it-works";
import { ShowcaseSection } from "@/components/landing/showcase";
import { WhyLeekSection } from "@/components/landing/why-leek";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ShowcaseSection />
        <WhyLeekSection />
        <DownloadSection />
      </main>
      <SiteFooter />
    </>
  );
}
