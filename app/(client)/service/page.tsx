import React from "react";
import Header from "../../components/Header";
import FooterSection from "../(sections)/FooterSection";
import HeaderPage from "@/app/components/HeaderPage";
import { whyChooseServices, services, testimonials } from "@/app/utils/globals";
import Image from "next/image";
import ServiceSection from "../(sections)/ServiceSection";

function Service() {
  return (
    <div className="min-h-screen !bg-[#121212]">
      <HeaderPage title="Servicios" />
      <ServiceSection />
      <FooterSection />
    </div>
  );
}

export default Service;
