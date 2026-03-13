import { CTA } from "@/components/marketing/cta";
import { Footer } from "@/components/marketing/footer";
import { Hero } from "@/components/marketing/hero";
import { Navbar } from "@/components/marketing/navbar";
import { Process } from "@/components/marketing/process";
import { Results } from "@/components/marketing/results";
import { Services } from "@/components/marketing/services";
import { SocialProof } from "@/components/marketing/social-proof";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(900px_520px_at_18%_20%,rgba(212,175,55,0.10),transparent_60%),radial-gradient(800px_520px_at_86%_10%,rgba(245,247,250,0.06),transparent_58%)]" />

      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <SocialProof />
          <Services />
          <Process />
          <Results />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}
