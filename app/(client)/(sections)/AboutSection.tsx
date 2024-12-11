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
          <div
            className="relative"
            style={{
              backgroundImage: `url("./aboutimg.jpg")`,
              width: "auto",
              height: "-webkit-fill-available",
              backgroundSize: "cover",
              borderRadius: "70% 30% 30% 70% / 60% 40% 60% 40%",
            }}
          ></div>
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
              En Shifra Spa, desde 2010, ofrecemos un refugio único donde la
              salud, la belleza y la espiritualidad se encuentran. Nuestro spa
              está diseñado para brindarte una experiencia de bienestar
              integral, promoviendo la relajación y la paz interior. Con un
              equipo de profesionales altamente capacitados, nos dedicamos a
              proporcionarte servicios de calidad en un ambiente pensado para
              nutrir tanto tu cuerpo como tu mente. Ven a reconectar contigo
              mismo y disfrutar de un santuario para el alma.
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
