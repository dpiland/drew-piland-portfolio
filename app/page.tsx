import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { LogoBar } from "@/components/sections/LogoBar";
import { AIStack } from "@/components/sections/AIStack";
import { About } from "@/components/sections/About";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { Talks } from "@/components/sections/Talks";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <LogoBar />
        {/* Differentiator sits high: this is the section that wins AI-native rooms */}
        <AIStack />
        <About />
        <CaseStudies />
        <Testimonials />
        <Talks />
        <WhatIDo />
        <Contact />
      </main>
    </>
  );
}
