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
              className={`${font_roboto.className} mt-10 text-base sm:text-lg mb-8`}
            >
              En Shifra Spa, creemos en la profunda conexión entre la salud, la
              belleza y la espiritualidad. Fundado en 2010, nuestro spa nació de
              una pasión por proporcionar un refugio donde el bienestar integral
              sea el protagonista. Desde nuestros inicios, hemos trabajado con
              dedicación para ofrecer servicios de la más alta calidad, en un
              ambiente diseñado para promover la relajación y la paz interior.
              Nuestro objetivo es ser un santuario para el alma, un lugar donde
              puedas desconectar del bullicio diario y reencontrarte contigo
              mismo. En Shifra Spa, cada detalle ha sido cuidadosamente pensado
              para crear una experiencia que nutra tanto el cuerpo como la
              mente. Nos enorgullece contar con un equipo de profesionales
              altamente capacitados que comparten nuestra visión y compromiso
              con tu salud y belleza espiritual.
            </p>
            <br />
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
