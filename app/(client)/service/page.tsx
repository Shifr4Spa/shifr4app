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
      <HeaderPage title="Servicios" />
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
        "Masaje relajante que alivia tensiones y promueve la circulación.",
      cost: "$50",
      duration: "60 min",
    },
    {
      title: "Holístico",
      description:
        "Masaje que busca el equilibrio cuerpo-mente a través de técnicas variadas.",
      cost: "$60",
      duration: "75 min",
    },
    {
      title: "Tejido Profundo",
      description: "Masaje enfocado en aliviar tensiones musculares profundas.",
      cost: "$70",
      duration: "90 min",
    },
    {
      title: "Piedras Calientes",
      description:
        "Masaje con piedras calientes para relajar el cuerpo y aliviar el estrés.",
      cost: "$65",
      duration: "75 min",
    },
    {
      title: "Aroma Terapeutico",
      description:
        "Masaje con aceites esenciales para reducir el estrés y mejorar el bienestar.",
      cost: "$55",
      duration: "60 min",
    },
    {
      title: "Lomi Lomi",
      description:
        "Masaje tradicional hawaiano que utiliza movimientos fluidos y largos.",
      cost: "$80",
      duration: "90 min",
    },
  ];

  const additionalServices = [
    {
      title: "Reflexología",
      description:
        "Masaje terapéutico que utiliza la presión en los pies para mejorar la salud general.",
      cost: "$45",
      duration: "50 min",
    },
    {
      title: "Masaje Deportivo",
      description:
        "Masaje enfocado en la prevención y tratamiento de lesiones deportivas.",
      cost: "$75",
      duration: "70 min",
    },
    {
      title: "Masaje Facial",
      description:
        "Masaje relajante para aliviar tensiones faciales y mejorar la circulación.",
      cost: "$40",
      duration: "30 min",
    },
    {
      title: "Masaje Anticelulítico",
      description:
        "Masaje enfocado en reducir la apariencia de la celulitis y mejorar la tonicidad de la piel.",
      cost: "$65",
      duration: "60 min",
    },
    {
      title: "Masaje de Espalda",
      description:
        "Masaje especializado en la zona de la espalda para aliviar dolores y tensiones.",
      cost: "$50",
      duration: "45 min",
    },
    {
      title: "Masaje de Piedras Volcánicas",
      description:
        "Masaje con piedras volcánicas calientes que mejora la circulación y relaja el cuerpo.",
      cost: "$85",
      duration: "90 min",
    },
    {
      title: "Masaje Shiatsu",
      description:
        "Masaje japonés que utiliza la presión de los dedos para restablecer el equilibrio energético del cuerpo.",
      cost: "$70",
      duration: "60 min",
    },
    {
      title: "Masaje de Aromaterapia",
      description:
        "Masaje con aceites esenciales para equilibrar cuerpo y mente, reduciendo el estrés.",
      cost: "$55",
      duration: "60 min",
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

  const [open, setOpen] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Servicios originales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <img
              src="./masajes.jpg"
              alt="Masajes"
              className="w-[300px] h-[300px] object-cover rounded-full transition-transform transform hover:scale-105"
            />
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 font-frank">
              Masajes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="w-full">
                  <div className="bg-transparent shadow-none rounded-lg mb-4">
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full text-left px-6 py-2 text-xl font-medium text-gray-800 border-b-2 border-gray-200 focus:outline-none flex items-center justify-between"
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

        {/* Servicios adicionales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mt-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 font-frank">
              Servicios Adicionales
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {additionalServices.map((service, index) => (
                <div key={index} className="w-full">
                  <div className="bg-transparent shadow-none rounded-lg mb-4">
                    <button
                      onClick={() => toggleAccordion(index + services.length)} // Adjust index for the new services
                      className="w-full text-left px-6 py-2 text-xl font-medium text-gray-800 border-b-2 border-gray-200 focus:outline-none flex items-center justify-between"
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

        {/* Sección de Faciales */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Información de los servicios faciales (más ancha) */}
              <div className="lg:col-span-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6 font-frank">
                  Faciales
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {facialServices.map((service, index) => (
                    <div key={index} className="w-full">
                      <div className="bg-transparent shadow-none rounded-lg mb-4">
                        <button
                          onClick={() =>
                            toggleAccordion(
                              index +
                                services.length +
                                additionalServices.length +
                                spaServices.length
                            )
                          } // Ajusta el índice para los nuevos servicios
                          className="w-full text-left px-6 py-2 text-xl font-medium text-gray-800 border-b-2 border-gray-200 focus:outline-none flex items-center justify-between"
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
              <div className="lg:col-span-4">
                <img
                  src="./faciales.jpg" // Personaliza la ruta de la imagen
                  alt="Faciales"
                  className="w-full h-[300px] object-cover rounded-full transition-transform transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

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
