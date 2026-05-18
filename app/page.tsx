import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { LogoBar } from "@/components/sections/LogoBar";
import { About } from "@/components/sections/About";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CareerHighlights } from "@/components/sections/CareerHighlights";
import { Talks } from "@/components/sections/Talks";
import { HowIWork } from "@/components/sections/HowIWork";
import { AIStack } from "@/components/sections/AIStack";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <LogoBar />
        <About />
        <WhatIDo />
        <CaseStudies />
        <CareerHighlights />
        <Talks />
        <HowIWork />
        <AIStack />
        <Contact />
      </main>
    </>
  );
}
