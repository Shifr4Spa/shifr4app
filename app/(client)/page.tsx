import Header from "../components/Header";
import { Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";
import { Suspense } from "react";
import HeroSection from "./(sections)/HeroSection";
import AboutSection from "./(sections)/AboutSection";
import ServiceSection from "./(sections)/ServiceSection";
import FooterSection from "./(sections)/FooterSection";
import ContactSection from "./(sections)/ContactSection";

export const revalidate = 60;

export default async function Home() {
  return (
    <Suspense fallback={<h1>Loading feed...</h1>}>
      <div className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <ServiceSection />
        <ContactSection />
        <FooterSection />
      </div>
    </Suspense>
  );
}
