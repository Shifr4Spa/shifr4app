import React from "react";
import Link from "next/link";
import HeaderPage from "@/app/components/HeaderPage";
import FooterSection from "../(sections)/FooterSection";
import { Frank_Ruhl_Libre } from "next/font/google";
import Image from "next/image";
import SpaCheckoutWizard from "./components/spa-checkout-wizard";

const font_frank = Frank_Ruhl_Libre({ subsets: ["latin"] });

function page() {
  return (
    <>
      <HeaderPage title="Checkout" className="h-[400px] text-white" />
      <div className="flex flex-col items-center bg-[#efefef] pb-[5rem] pt-[5rem] text-black">
        <SpaCheckoutWizard />
      </div>
      <FooterSection />
    </>
  );
}

export default page;
