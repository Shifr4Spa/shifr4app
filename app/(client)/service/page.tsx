"use client";

import React, { useState } from "react";
import Header from "../../components/Header";
import FooterSection from "../(sections)/FooterSection";
import HeaderPage from "@/app/components/HeaderPage";
import { whyChooseServices, services, testimonials } from "@/app/utils/globals";
import Image from "next/image";
import ServiceSection from "../(sections)/ServiceSection";

function Service() {
  return (
    <div className="min-h-screen !bg-[#121212]">
      <HeaderPage title="Servicios" imageSrc="./spa3.jpg" />
      <MasajesSection />
      <ProductGallerySlider />
      <FooterSection />
    </div>
  );
}

function MasajesSection() {
  const services = [
    {
      title: "Sueco",
      description:
        "Es un masaje suave en el que se utilizan diferentes maniobras como deslizamientos, amasamiento y fricción. Este masaje te ayuda a alcanzar el equilibrio y la relajación física.",
      cost: "$1,800",
      duration: "50 min",
      cost2: "$2,100",
      duration2: "80 min",
      cost3: "$2,500",
      duration3: "110 min",
    },
    {
      title: "Holístico",
      description:
        "Este masaje actúa en todo el cuerpo para restablecer su equilibrio natural. Estiramientos en brazos y piernas. Alivia la tensión y consigue un estado mental de relajación.",
      cost: "$2,200",
      duration: "50 min",
      cost2: "$2,400",
      duration2: "80 min",
      cost3: "$2,800",
      duration3: "110 min",
    },
    {
      title: "Tejido Profundo",
      description: "Es una técnica muy efectiva para tratar y eliminar tensiones musculares acumuladas, dolores musculares crónicos provocados por la realización de actividades físicas severas.",
      cost: "$2,300",
      duration: "50 min",
      cost2: "$2,500",
      duration2: "80 min",
      cost3: "$3,100",
      duration3: "110 min",
    },
    {
      title: "Piedras Calientes",
      description:
        "Es una terapia relajante de origen oriental, que trabaja no solo con el plano físico, sino también con el mental, ya que ayuda a relajar tensiones musculares y a conseguir un perfecto equilibrio energético.",
      cost: "$2,500",
      duration: "80 min",
    },
    {
      title: "Aroma Terapeutico",
      description:
        "Facilita la eliminación de toxinas, integrando sus hemisferios dando una relajación óptima con los diversos aromas. 2 aromas cítricos que mejoran ánimo, ansiedad y tristeza. 2 aromas florales para armonía en mente y cuerpo, energizante.",
      cost: "$2,400",
      duration: "80 min",
    },
    {
      title: "Lomi Lomi",
      description:
        "Es un masaje que se realiza con técnica hawaiana usando los antebrazos y los codos para aliviar el cansancio, ayuda a restaurar la circulación energética mejorando el estado físicos mental y espiritual.",
      cost: "$2,300",
      duration: "80 min",
    },
  ];

  const additionalServices = [
    {
      title: "Drenaje Linfático",
      description:
        "Es un masaje suave y ligero que se aplica sobre el sistema circulatorio y cuyo objetivo es movilizar los líquidos del organismo para favorecer la eliminación de las sustancias de desecho que se acumulan en el líquido acumulado entre las células.",
      cost: "$2,500",
      duration: "80 min",
    },
    {
      title: "Abhyanga",
      description:
        "Masaje enfocado en embarazadas para relajar los músculos, estimular la circulación y aliviar la tensión. Se realiza de costado. Se acompaña con almohada forma L para mayor confort. Embarazada de 3 a 7 meses",
      cost: "$3,100",
      duration: "80 min",
    },
    {
      title: "Personalizado",
      description:
        "Se realiza según las necesidades de la persona en cuanto a presión, ya sea en todo el cuerpo o por zonas.",
      cost: "$40",
      duration: "30 min",
    },
    {
      title: "Cráneo Facial",
      description:
        "Masaje enfocado en cara y cráneo. Activa la circulación y oxigena la zona ayuda a elimina la tensión acumulada. Con estiramientos, se trabaja cervicales trapecio y puntos zen en cara.",
      cost: "$999",
      duration: "30 min",
    },
    {
      title: "Cuello y Espalda",
      description:
        "Masaje enfocado en el tronco superior corporal en posición boca abajo. Presión de suave a alta. Se trabaja cervicales trapecio espalda baja media y alta.",
      cost: "$1,200",
      duration: "30 min",
    },
    {
      title: "Masaje de Piedras Volcánicas",
      description:
        "Masaje con piedras volcánicas calientes que mejora la circulación y relaja el cuerpo.",
      cost: "$85",
      duration: "90 min",
    },
    {
      title: "Reflexolofía Podal",
      description:
        "Masaje enfocado en los pies. Se trabaja la zona refleja de todo el cuerpo por medio de presiones. Fortalece el sistema inmunológico. Calma el estrés y la ansiedad.",
      cost: "$999",
      duration: "30 min",
    },
    {
      title: "Silla Shiatsu",
      description:
        "Masaje en silla de shiatsu, ideal para quienes sufren tensión en espalda, hombros y cabeza. Se utilizan pulgares y palmas de las manos. A base de presiones a lo largo de la espalda, brazos, piernas y cráneo.",
      cost: "$699",
      duration: "30 min",
    },
  ];

  const spaServices = [
    {
      title: "Hidroterapia",
      description:
        "Terapia que utiliza agua caliente y fría para mejorar la circulación y aliviar tensiones musculares.",
      cost: "$70",
      duration: "60 min",
    },
    {
      title: "Exfoliación Corporal",
      description:
        "Exfoliación de la piel con productos naturales para eliminar células muertas y mejorar la textura.",
      cost: "$50",
      duration: "45 min",
    },
    {
      title: "Exfoliación con Hidroterapia",
      description:
        "Combinación de exfoliación corporal y agua terapéutica para una experiencia revitalizante.",
      cost: "$80",
      duration: "75 min",
    },
    {
      title: "Envoltura con Exfoliación",
      description:
        "Tratamiento de exfoliación seguido de una envoltura corporal para nutrir y suavizar la piel.",
      cost: "$85",
      duration: "90 min",
    },
  ];

  const facialServices = [
    {
      title: "Despigmentante",
      description:
        "Facial especializado para reducir manchas y unificar el tono de la piel.",
      cost: "$70",
      duration: "60 min",
    },
    {
      title: "Facial Hidratante",
      description:
        "Tratamiento para rehidratar la piel seca y restaurar su luminosidad.",
      cost: "$75",
      duration: "60 min",
    },
    {
      title: "Facial Caballero",
      description: "Facial adaptado para las necesidades de la piel masculina.",
      cost: "$65",
      duration: "60 min",
    },
    {
      title: "Hifu Facial",
      description:
        "Tratamiento facial con tecnología HIFU para tensar la piel y mejorar la elasticidad.",
      cost: "$100",
      duration: "90 min",
    },
    {
      title: "Microdermoabrasión",
      description:
        "Tratamiento que exfolia la piel para eliminar impurezas y mejorar la textura.",
      cost: "$85",
      duration: "60 min",
    },
    {
      title: "Lifting con RF",
      description:
        "Tratamiento de lifting facial con radiofrecuencia para rejuvenecer la piel.",
      cost: "$95",
      duration: "75 min",
    },
    {
      title: "Hydradermofacial",
      description:
        "Facial que combina hidratación profunda con tecnología avanzada de dermoabrasión.",
      cost: "$120",
      duration: "75 min",
    },
    {
      title: "Natura Bissé",
      description:
        "Facial de lujo con productos de la marca Natura Bissé para una piel radiante.",
      cost: "$150",
      duration: "90 min",
    },
    {
      title: "Limpieza Profunda",
      description:
        "Limpieza facial profunda para eliminar impurezas y puntos negros.",
      cost: "$65",
      duration: "60 min",
    },
    {
      title: "Anti Edad",
      description:
        "Tratamiento para combatir los signos de envejecimiento y mejorar la textura de la piel.",
      cost: "$110",
      duration: "75 min",
    },
    {
      title: "Contorno de Ojos",
      description:
        "Tratamiento específico para reducir bolsas y ojeras en el área de los ojos.",
      cost: "$50",
      duration: "30 min",
    },
  ];

  const ritualServices = [
    {
      title: "Flor de loto",
      description:
        "Masaje relajante con pindas herbales que incluye además una exfoliación y mascarilla corporal que ayudan a eliminar impurezas y restaurar la piel.",
      cost: "$3,400",
      duration: "120 min",
    },
    {
      title: "Prehispánico",
      description:
        "Ritual desintoxicante corporal, exfoliación enzimática, mascarilla corporal de fango, masaje alternado con pindas (costalitos de semillas y aceites esenciales) y facial de musgo marino (hidratante).",
      cost: "$4,700",
      duration: "180 min",
    },
    {
      title: "Sensorial Shifra",
      description: "Ritual con exfoliación y envoltura corporal que hidrata, suaviza y revitaliza la piel dejando una sensación de frescura, facial hidratante que purifica la piel e hidroterapia como complemento para una mayor relajación.",
      cost: "$3,400",
      duration: "120 min",
    },
    {
      title: "Sensorial Chocolate",
      description:
        "Ritual con exfoliación y envoltura corporal de chocolate que brinda una máxima hidratación y suavidad además de tener una eficaz acción antioxidante, facial hidratante e hidroterapia con elixir anti-estrés.",
      cost: "$3,400",
      duration: "120 min",
    },
    {
      title: "Hawaiiano",
      description:
        "Ritual en donde se realiza un masaje con técnica hawaiana Lomi Lomi realizado con un bálsamo de piña coco que brinda una mayor hidratación a la piel, logrando equilibrar el estado físico, mental y espiritual complementando con una exfoliación para eliminar células muertas de la piel.",
      cost: "$2,800",
      duration: "80 min",
    },
    {
      title: "Almas Gemelas",
      description:
        "Ritual compartido con esa persona especial con quien se tiene un vínculo, se realiza un ritual de aromas donde se hace una sinergia en pareja con la que se ambienta la cabina, posteriormente se realiza un masaje con cera de velas especial para masajes.",
      cost: "$3,800",
      duration: "80 min",
    },
    {
      title: "1/2 Día de Spa",
      description:
        "Experiencia completa para renovar tu piel con una exfoliación, mascarilla corporal y facial hidratante, además de recibir un masaje relajante de presión media para liberar la tensión muscular y la carga por el estrés cerrando con una tina de hidromasaje con burbujas para terminar de liberar el estrés acumulado y renovarte completamente.",
      cost: "$5,500",
      duration: "240 min",
    },
    {
      title: "Velo de Novia",
      description:
        "Ritual ideal para las chicas próximas a casarse o para algún evento importante ya que es el servicio más completo para su cuerpo, incluyendo una renovación corporal (Exfoliación, envoltura corporal, facial hidratante e hidroterapia) y servicio de manicure y pedicure para el cuidado de sus manos y pies.",
      cost: "$5,500",
      duration: "350 min",
    },
  ];


  const apartServices = [
    {
      title: "Hifu",
      description:
        "Corporal Sistema de ultrasonido focalizado que ayuda a tratar grasa localizada, actuando por medio de calor logrando llegar hasta los adipocitos (células grasas), además de que promueve la tonificación y mejora el aspecto de la piel.",
      cost: "$4,000",
      duration: "50 min",
    },
    {
      title: "Indeep",
      description:
        "Tiempo depende de zona a tratar. Tratamiento con radiofrecuencia que ayuda modelar, reducir tallas, mejorar la apariencia de los diferentes tipos de celulitis, causa un efecto sedante, analgésico, antiinflamatorio y acelera la recuperación de lesiones.",
      cost: "$1,300",
      duration: "50 min",
    },
    {
      title: "Carboxiterapia",
      description: "Procedimiento que consiste en infiltración de CO2, favoreciendo la oxigenación celular. Útil en: celulitis, grasa localizada, estrías, flacidez y arrugas.",
      cost: "$1,750",
      duration: "50 min",
    },
    {
      title: "Multicavitador",
      description:
        "Tratamiento que ofrece el uso de cavitación, radiofrecuencia y vacumterapia. Ayuda a eliminar grasa localizada a través de un ultrasonido de baja frecuencia para disolver las células adiposas, promueve la firmeza al ayudar a fijan la piel.",
      cost: "$1,500",
      duration: "50 min",
    },
    {
      title: "Presoterapia",
      description:
        "Drenaje linfático a través de un traje que ejerce presión por zonas del cuerpo en orden ascendente, ideal para personas con problemas de circulación, retención de líquidos y piernas cansadas. ",
      cost: "$1,400",
      duration: "50 min",
    },
    {
      title: "Gimnasia pasiva",
      description:
        "Tratamiento de estimulación muscular a través de impulsos eléctricos que permite su activación y acondicionamiento similar al momento de hacer ejercicio. Tonifica, fortalece, ayuda en tratamientos de celulitis, flacidez, promueve la circulación y mejora los síntomas de dolor muscular.",
      cost: "$1,300",
      duration: "30 min",
    },
  ];

  const capilarServices = [
    {
      title: "Tratamiento de medula natural",
      description:
        "Para una hidratación profunda y protección contra los efectos del calor.",
      cost: "$800",
      duration: "",
    },
    {
      title: "Tratamiento de medula con pigmento",
      description:
        "Para una hidratación profunda y protección contra los efectos del calor además de revivir el color de tu cabello. ",
      cost: "$1,100",
      duration: "",
    },
    {
      title: "Tratamiento CHI Hot Oil",
      description: "Tratamiento reparador de puntas dañadas, ideal para sellar las puntas abiertas.",
      cost: "$650",
      duration: "",
    },
    {
      title: "NIOXIN Scalp Renew",
      description:
        "Tratamiento de exfoliación capilar enfocado en regenerar y revitalizar el cuero cabelludo, ayudando al crecimiento y fortalecimiento de las hebras capilare",
      cost: "$1,280",
      duration: "",
    },

  ];

  const [open, setOpen] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto ">
        {/* Servicios originales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center py-8 ">
          <div className="lg:col-span-1 flex justify-center">
            <img
              src="./masajes.jpg"
              alt="Masajes"
              className="w-full max-w-[300px] h-[250px] sm:h-[300px] object-cover rounded-full transition-transform transform hover:scale-105"
            />
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 font-frank text-center lg:text-left">
              Masajes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="w-full">
                  <div className="bg-transparent shadow-none rounded-lg mb-2 sm:mb-4">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full text-left px-4 sm:px-6 py-2 text-base sm:text-xl font-medium text-gray-800 border-b-2 border-gray-200 focus:outline-none flex items-center justify-between"
                    >
                      <span className="font-frank">{service.title}</span>
                      {open === index ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      )}
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        open === index ? "max-h-[500px] p-4" : "max-h-0 p-0"
                      }`}
                    >
                      {open === index && (
                        <div>
                          <p className="text-gray-700 mb-2">
                            {service.description}
                          </p>
                          <p className="font-semibold text-gray-800">
                            Costo: {service.cost},          {service.cost2},        {service.cost3}
                          </p>
                          <p className="text-gray-800">
                            Duración: {service.duration}, {service.duration2}, {service.duration3}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Servicios adicionales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center py-8 px-4 sm:px-6 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 font-frank text-center lg:text-left">
              Servicios Adicionales
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {additionalServices.map((service, index) => (
                <div key={index} className="w-full">
                  <div className="bg-transparent shadow-none rounded-lg mb-2 sm:mb-4">
                    <button
                      onClick={() => toggleAccordion(index + services.length)} // Adjust index for the new services
                      className="w-full text-left px-4 sm:px-6 py-2 text-base sm:text-xl font-medium text-gray-800 border-b-2 border-gray-200 focus:outline-none flex items-center justify-between"
                    >
                      <span className="font-frank">{service.title}</span>
                      {open === index + services.length ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      )}
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        open === index + services.length
                          ? "max-h-[500px] p-4"
                          : "max-h-0 p-0"
                      }`}
                    >
                      {open === index + services.length && (
                        <div>
                          <p className="text-gray-700 mb-2">
                            {service.description}
                          </p>
                          <p className="font-semibold text-gray-800">
                            Costo: {service.cost}
                          </p>
                          <p className="text-gray-800">
                            Duración: {service.duration}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <img
              src="./masajes2.jpg"
              alt="Servicios Adicionales"
              className="w-[300px] h-[300px] object-cover rounded-full transition-transform transform hover:scale-105"
            />
          </div>
        </div>

        {/* Sección de Servicios de SPA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 font-frank col-span-4">
            Servicios de SPA
          </h2>
          {spaServices.map((service, index) => (
            <div key={index} className="text-center">
              <img
                src={`./spa${index + 1}.jpg`} // Puedes personalizar las imágenes para cada servicio
                alt={service.title}
                className="w-[150px] h-[150px] object-cover rounded-full mx-auto mb-4"
              />
              <div className="bg-transparent shadow-none rounded-lg mb-4">
                <button
                  onClick={() =>
                    toggleAccordion(
                      index + additionalServices.length + services.length
                    )
                  } // Ajusta el índice para los nuevos servicios
                  className="w-full text-left px-6 py-2 text-xl font-medium text-gray-800 border-b-2 border-gray-200 focus:outline-none flex items-center justify-between"
                >
                  <span className="font-frank">{service.title}</span>
                  {open ===
                  index + additionalServices.length + services.length ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden text-left ${
                    open === index + additionalServices.length + services.length
                      ? "max-h-[500px] p-4"
                      : "max-h-0 p-0"
                  }`}
                >
                  {open ===
                    index + additionalServices.length + services.length && (
                    <div>
                      <p className="text-gray-700 mb-2">
                        {service.description}
                      </p>
                      <p className="font-semibold text-gray-800">
                        Costo: {service.cost}
                      </p>
                      <p className="text-gray-800">
                        Duración: {service.duration}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>


        {/* Servicios faciales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center py-8 px-4 sm:px-6 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 font-frank text-center lg:text-left">
              Faciales
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facialServices.map((service, index) => (
                <div key={index} className="w-full">
                  <div className="bg-transparent shadow-none rounded-lg mb-2 sm:mb-4">
                    <button
                      onClick={() => toggleAccordion(index + services.length)} // Adjust index for the new services
                      className="w-full text-left px-4 sm:px-6 py-2 text-base sm:text-xl font-medium text-gray-800 border-b-2 border-gray-200 focus:outline-none flex items-center justify-between"
                    >
                      <span className="font-frank">{service.title}</span>
                      {open === index + services.length ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      )}
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        open === index + services.length
                          ? "max-h-[500px] p-4"
                          : "max-h-0 p-0"
                      }`}
                    >
                      {open === index + services.length && (
                        <div>
                          <p className="text-gray-700 mb-2">
                            {service.description}
                          </p>
                          <p className="font-semibold text-gray-800">
                            Costo: {service.cost}
                          </p>
                          <p className="text-gray-800">
                            Duración: {service.duration}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-1">
            <img
              src="./faciales.jpg"
              alt="Servicios Adicionales"
              className="w-[300px] h-[300px] object-cover rounded-full transition-transform transform hover:scale-105"
            />
          </div>
        </div>

        {/* Sección de Rituales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center py-8 px-4 sm:px-6 lg:px-8">
          <div className="lg:col-span-1 flex justify-center">
            <img
              src="./rituales.jpg"
              alt="Masajes"
              className="w-full max-w-[300px] h-[250px] sm:h-[300px] object-cover rounded-full transition-transform transform hover:scale-105"
            />
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 font-frank text-center lg:text-left">
              Rituales
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ritualServices.map((service, index) => (
                <div key={index} className="w-full">
                  <div className="bg-transparent shadow-none rounded-lg mb-2 sm:mb-4">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full text-left px-4 sm:px-6 py-2 text-base sm:text-xl font-medium text-gray-800 border-b-2 border-gray-200 focus:outline-none flex items-center justify-between"
                    >
                      <span className="font-frank">{service.title}</span>
                      {open === index ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      )}
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        open === index ? "max-h-[500px] p-4" : "max-h-0 p-0"
                      }`}
                    >
                      {open === index && (
                        <div>
                          <p className="text-gray-700 mb-2">
                            {service.description}
                          </p>
                          <p className="font-semibold text-gray-800">
                            Costo: {service.cost}
                          </p>
                          <p className="text-gray-800">
                            Duración: {service.duration}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* Sección de Aparatologia */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center py-8 px-4 sm:px-6 lg:px-8">
              {/* Información de los servicios faciales (más ancha) */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 font-frank text-center lg:text-left">
                  Aparatología
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {apartServices.map((service, index) => (
                    <div key={index} className="w-full">
                      <div className="bg-transparent shadow-none rounded-lg mb-2 sm:mb-4">
                        <button
                          onClick={() =>
                            toggleAccordion(
                              index +
                                services.length +
                                additionalServices.length +
                                spaServices.length
                            )
                          } // Ajusta el índice para los nuevos servicios
                          className="w-full text-left px-4 sm:px-6 py-2 text-base sm:text-xl font-medium text-gray-800 border-b-2 border-gray-200 focus:outline-none flex items-center justify-between"
                        >
                          <span className="font-frank">{service.title}</span>
                          {open ===
                          index +
                            services.length +
                            additionalServices.length +
                            spaServices.length ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-gray-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6 text-gray-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 6v12m6-6H6"
                              />
                            </svg>
                          )}
                        </button>
                        <div
                          className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            open ===
                            index +
                              services.length +
                              additionalServices.length +
                              spaServices.length
                              ? "max-h-[500px] p-4"
                              : "max-h-0 p-0"
                          }`}
                        >
                          {open ===
                            index +
                              services.length +
                              additionalServices.length +
                              spaServices.length && (
                            <div>
                              <p className="text-gray-700 mb-2">
                                {service.description}
                              </p>
                              <p className="font-semibold text-gray-800">
                                Costo: {service.cost}
                              </p>
                              <p className="text-gray-800">
                                Duración: {service.duration}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Imagen de los faciales (más pequeña) */}
              <div className="lg:col-span-1">
            <img
              src="./aparatologia.jpg"
              alt="Servicios Adicionales"
              className="w-[300px] h-[300px] object-cover rounded-full transition-transform transform hover:scale-105"
            />
          </div>
            </div>
          </div>
        </section>


        {/* Sección de Tratamientos Capilares */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center py-8 px-4 sm:px-6 lg:px-8">
          <div className="lg:col-span-1 flex justify-center">
            <img
              src="./spa2.jpg"
              alt="Masajes"
              className="w-full max-w-[300px] h-[250px] sm:h-[300px] object-cover rounded-full transition-transform transform hover:scale-105"
            />
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 font-frank text-center lg:text-left">
              Tratamientos capilares
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ritualServices.map((service, index) => (
                <div key={index} className="w-full">
                  <div className="bg-transparent shadow-none rounded-lg mb-2 sm:mb-4">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full text-left px-4 sm:px-6 py-2 text-base sm:text-xl font-medium text-gray-800 border-b-2 border-gray-200 focus:outline-none flex items-center justify-between"
                    >
                      <span className="font-frank">{service.title}</span>
                      {open === index ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                      )}
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        open === index ? "max-h-[500px] p-4" : "max-h-0 p-0"
                      }`}
                    >
                      {open === index && (
                        <div>
                          <p className="text-gray-700 mb-2">
                            {service.description}
                          </p>
                          <p className="font-semibold text-gray-800">
                            Costo: {service.cost}
                          </p>
                          <p className="text-gray-800">
                            Duración: {service.duration}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/** end */}
      </div>
    </section>
  );
}

function ProductGallerySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    { id: 1, image: "./producto1.jpg", alt: "Producto 1" },
    { id: 2, image: "./producto2.jpg", alt: "Producto 2" },
    { id: 3, image: "./producto3.jpg", alt: "Producto 3" },
    { id: 4, image: "./producto4.jpg", alt: "Producto 4" },
    { id: 5, image: "./producto5.jpg", alt: "Producto 5" },
    { id: 6, image: "./producto6.jpg", alt: "Producto 6" },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center font-frank">
          Galería de Productos
        </h2>
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-all duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-full">
                <div className="w-full h-[300px] md:h-[400px] bg-gray-200 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Botones de navegación */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 p-2 rounded-full"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Service;
