import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { ServicesPageHero } from "@/components/marketing/services-page-hero";
import { ServicesGrid } from "@/components/marketing/services-grid";
import { CapabilityBreakdown } from "@/components/marketing/capability-breakdown";
import { FeaturedServiceBlocks } from "@/components/marketing/featured-service-blocks";
import { WhySalesLord } from "@/components/marketing/why-saleslord";
import { ServicesPageCTA } from "@/components/marketing/services-page-cta";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(900px_520px_at_18%_20%,rgba(212,175,55,0.10),transparent_60%),radial-gradient(800px_520px_at_86%_10%,rgba(245,247,250,0.06),transparent_58%)]" />

      <div className="relative">
        <Navbar />
        <main>
          <ServicesPageHero />
          <ServicesGrid />
          <CapabilityBreakdown />
          <FeaturedServiceBlocks />
          <WhySalesLord />
          <ServicesPageCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
