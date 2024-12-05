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
                src="/3738.jpg"
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
                Descubra Nuestra Trayectoria y Compromiso en Shifra SPA
              </p>
              <p className="fontRoboto mt-10 text-base sm:text-lg">
              En Shifra Spa, nos especializamos en ofrecer una experiencia
              integral de bienestar que une salud, belleza y espiritualidad.
              Desde 2010, hemos sido un refugio dedicado a la relajación y el
              cuidado personal, brindando servicios de alta calidad en un
              ambiente diseñado para promover la paz interior. Nuestro equipo de
              profesionales altamente capacitados te guiará en un viaje
              personalizado hacia la revitalización, utilizando productos de
              primera calidad y métodos que armonizan cuerpo y mente.
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
