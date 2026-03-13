import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { ContactHero } from "@/components/marketing/contact-hero";
import { StrategyCallForm } from "@/components/marketing/strategy-call-form";
import { WhoThisIsFor } from "@/components/marketing/who-this-is-for";
import { ContactProcess } from "@/components/marketing/contact-process";
import { WhyBook } from "@/components/marketing/why-book";
import { DirectContact } from "@/components/marketing/direct-contact";
import { Reassurance } from "@/components/marketing/reassurance";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(900px_520px_at_18%_20%,rgba(212,175,55,0.10),transparent_60%),radial-gradient(800px_520px_at_86%_10%,rgba(245,247,250,0.06),transparent_58%)]" />

      <div className="relative">
        <Navbar />
        <main>
          <ContactHero />
          <StrategyCallForm />
          <WhoThisIsFor />
          <ContactProcess />
          <WhyBook />
          <DirectContact />
          <Reassurance />
        </main>
        <Footer />
      </div>
    </div>
  );
}
