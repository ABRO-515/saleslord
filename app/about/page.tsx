import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { AboutHero } from "@/components/marketing/about-hero";
import { OurMission } from "@/components/marketing/our-mission";
import { OurApproach } from "@/components/marketing/our-approach";
import { SmallTeam } from "@/components/marketing/small-team";
import { Values } from "@/components/marketing/values";
import { AboutResults } from "@/components/marketing/about-results";
import { AboutFinalCTA } from "@/components/marketing/about-final-cta";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(900px_520px_at_18%_20%,rgba(212,175,55,0.10),transparent_60%),radial-gradient(800px_520px_at_86%_10%,rgba(245,247,250,0.06),transparent_58%)]" />

      <div className="relative">
        <Navbar />
        <main>
          <AboutHero />
          <OurMission />
          <OurApproach />
          <SmallTeam />
          <Values />
          <AboutResults />
          <AboutFinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
