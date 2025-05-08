import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import IndustriesSection from "./components/IndustriesSection";
import TeamSection from "./components/TeamSection";
import CareersSection from "./components/CareersSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <IndustriesSection />
        <TeamSection />
        <CareersSection />
        <ContactSection />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
