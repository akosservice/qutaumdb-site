import Hero from "@/components/Hero";
import WhatIsSection from "@/components/WhatIsSection";
import CodeShowcase from "@/components/CodeShowcase";
import Features from "@/components/Features";
import WhyChoose from "@/components/WhyChoose";
import UseCases from "@/components/UseCases";
import HowItWorks from "@/components/HowItWorks";
import Roadmap from "@/components/Roadmap";
import AboutCreator from "@/components/AboutCreator";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatIsSection />
      <CodeShowcase />
      <Features />
      <WhyChoose />
      <UseCases />
      <HowItWorks />
      <Roadmap />
      <AboutCreator />
      <Newsletter />
      <Footer />
    </div>
  );
}
