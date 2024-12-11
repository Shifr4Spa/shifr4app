import React from "react";
import { Frank_Ruhl_Libre, Roboto } from "next/font/google";
import { whyChooseServices, services, testimonials } from "@/app/utils/globals";
import Image from "next/image";

const font_frank = Frank_Ruhl_Libre({ subsets: ["latin"] });
const font_roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

function ServiceSection() {
  return (
    <div className="flex flex-col items-center bg-[#efefef] pb-5 pt-0 text-black sm:pt-8">
      <div className="container mx-auto grid max-w-[1280px] gap-4 px-4 py-8 sm:gap-8">
        <h2
          className={`${font_frank.className} mb-6 text-center text-2xl font-normal sm:mb-10 sm:text-3xl lg:text-4xl`}
        >
          Nuestros Servicios de Spa
        </h2>
        <div
          className={`${font_roboto.className} grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8`}
        >
          {whyChooseServices.map((chooseService, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="mb-5 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-[#971e24]">
                {chooseService.icon}
              </div>
              <h3
                className={`${font_frank.className} mb-2 text-xl font-normal sm:mb-4 sm:text-2xl`}
              >
                {chooseService.title}
              </h3>
              <p
                className={`${font_roboto.className} text-sm font-light text-gray-600 sm:text-base`}
              >
                {chooseService.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl sm:text-center md:mx-auto">
            <h3
              className={`${font_frank.className} text-gray-800 text-3xl font-normal sm:text-4xl`}
            >
              Lo Que Nuestros Clientes Dicen
            </h3>
            <p className="fontRoboto mt-3 font-thin">
              Descubre las experiencias de aquellos que confiaron en nuestros
              servicios de spa. Sus testimonios reflejan nuestro compromiso con
              el bienestar, la relajación y la satisfacción total de cada
              cliente.
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((item, idx) => (
                <li key={idx} className=" p-4 rounded-xl">
                  <figure>
                    <div className="flex items-center gap-x-4">
                      <Image
                        width={100}
                        height={100}
                        alt="avatar"
                        src={item.avatar}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <span className="block text-gray-800 font-semibold">
                          {item.name}
                        </span>
                        <span className="block text-gray-600 text-sm mt-0.5">
                          {item.title}
                        </span>
                      </div>
                    </div>
                    <blockquote>
                      <p className="mt-6 text-gray-700">{item.quote}</p>
                    </blockquote>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServiceSection;
