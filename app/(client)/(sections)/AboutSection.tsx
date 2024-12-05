import React from "react";
import Link from "next/link";
import { Frank_Ruhl_Libre, Roboto } from "next/font/google";
import Image from "next/image";

const font_frank = Frank_Ruhl_Libre({ subsets: ["latin"] });

const font_roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

function AboutSection() {
  return (
    <div className="flex flex-col items-center bg-[#efefef] py-10 text-black sm:py-16 lg:py-20">
      <div className="container mx-auto grid max-w-[1280px] grid-cols-1 gap-8 p-4 md:grid-cols-2 md:p-8">
        <div className="flex flex-col space-y-6">
          <div className="relative">
            <Image
              src="/3738.jpg"
              alt="Team"
              width={"100"}
              height={"300"}
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
            <p className={`${font_frank.className} mt-10 text-4xl font-normal`}>
              Descubra Nuestra Trayectoria y Compromiso en Shifra SPA
            </p>
            <p
              className={`${font_roboto.className} mt-10 text-base sm:text-lg`}
            >
              En Shifra Spa, nos especializamos en ofrecer una experiencia
              integral de bienestar que une salud, belleza y espiritualidad.
              Desde 2010, hemos sido un refugio dedicado a la relajación y el
              cuidado personal, brindando servicios de alta calidad en un
              ambiente diseñado para promover la paz interior. Nuestro equipo de
              profesionales altamente capacitados te guiará en un viaje
              personalizado hacia la revitalización, utilizando productos de
              primera calidad y métodos que armonizan cuerpo y mente.
            </p>
            <p
              className={`${font_roboto.className} mb-10 mt-6 text-base font-light sm:text-lg`}
            >
              Nuestro equipo está formado por profesionales altamente
              capacitados y apasionados por el bienestar, con una amplia
              experiencia en diversas áreas de la salud, belleza y
              espiritualidad. Nos dedicamos a ofrecer una experiencia de cuidado
              integral a nuestros clientes, ya sean individuos o grupos,
              ayudándoles a revitalizar cuerpo y mente en un entorno de total
              armonía.
            </p>

            <Link
              className="rounded-none border border-[#971e24] bg-transparent px-9 py-3 text-[#971e24] outline-0 transition-all duration-300 hover:bg-[#971e24] hover:text-white focus:border-[#971e24] focus:outline-none focus:ring focus-visible:border-[#971e24]"
              href="/about"
            >
              Leer más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
