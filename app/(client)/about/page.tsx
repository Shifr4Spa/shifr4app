import React from "react";
import Link from "next/link";
import HeaderPage from "@/app/components/HeaderPage";
import FooterSection from "../(sections)/FooterSection";
import { Frank_Ruhl_Libre } from "next/font/google";
import Image from "next/image";

const font_frank = Frank_Ruhl_Libre({ subsets: ["latin"] });

function page() {
  return (
    <>
      <HeaderPage title="Acerca de" />
      <div className="flex flex-col items-center bg-[#efefef] pb-[5rem] pt-[5rem] text-black">
        <div className="container mx-auto grid max-w-[1280px] grid-cols-1 gap-8 p-4 md:grid-cols-2 md:p-8">
          <div className="flex flex-col space-y-6">
            <div className="relative">
              <Image
                src="/imgabout.jpeg"
                alt="Team"
                width={100}
                height={300}
                className="h-auto w-full shadow-md"
              />
            </div>
          </div>
          <div className="flex flex-col space-y-8">
            <div>
              <div className="flex items-center space-x-4">
                <h1
                  className={`${font_frank.className} text-2xl font-normal text-[#971e24]`}
                >
                  Quienes somos
                </h1>
              </div>
              <p
                className={`${font_frank.className} mt-10 text-4xl font-normal`}
              >
                Descubra Nuestra Trayectoria y Compromiso en Agrod & Asociados
              </p>
              <p className="fontRoboto mt-10 text-base sm:text-lg">
                En Agrod & Asociados, nos enorgullece ser una firma legal de
                abogados comprometida con la excelencia, la integridad y el
                servicio excepcional. Fundada con la visión de proporcionar
                soluciones legales efectivas y estratégicas, nuestra firma ha
                crecido y evolucionado para convertirse en un referente en el
                ámbito legal.
              </p>
              <p className="fontRoboto mb-10 mt-6 text-base font-light sm:text-lg">
                Nuestro equipo está compuesto por profesionales altamente
                capacitados y apasionados por el derecho, con una amplia
                experiencia en diversas áreas legales. Nos dedicamos a ofrecer
                asesoramiento jurídico integral a nuestros clientes, ya sean
                empresas, emprendedores o individuos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </>
  );
}

export default page;
