import Header from "@/components/Header";
import HeroSplit from "@/components/HeroSplit";
import WhatIsSection from "@/components/WhatIsSection";
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
      <Header />
      <HeroSplit />
      <div id="features">
        <WhatIsSection />
        <Features />
      </div>
      <div id="use-cases">
        <WhyChoose />
        <UseCases />
      </div>
      <div id="roadmap">
        <HowItWorks />
        <Roadmap />
      </div>
      <div id="about">
        <AboutCreator />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
