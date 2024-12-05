import Header from "../components/Header";
import { Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";
import HeroSection from "./(sections)/HeroSection";
import AboutSection from "./(sections)/AboutSection";
import ServiceSection from "./(sections)/ServiceSection";
import FooterSection from "./(sections)/FooterSection";
import ContactSection from "./(sections)/ContactSection";

export const revalidate = 60;

export default async function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
