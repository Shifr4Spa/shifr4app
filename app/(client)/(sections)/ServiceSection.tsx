"use client";

import React, { useEffect, useState } from "react";
import { Frank_Ruhl_Libre, Roboto } from "next/font/google";
import {
  whyChooseServices,
  testimonials,
  testimonialsV2,
} from "@/app/utils/globals";
import Image from "next/image";
import Link from "next/link"; // Import Link from next/link

const font_frank = Frank_Ruhl_Libre({ subsets: ["latin"] });
const font_roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

function ServiceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5000ms (5 seconds)

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col items-center bg-[#efefef] pb-5 pt-0 text-black sm:pt-8">
      <div className="container mx-auto grid max-w-[1280px] gap-4 px-4 py-8 sm:gap-8">
        <h2
          className={`font-frank mb-6 text-center text-2xl font-normal sm:mb-10 sm:text-3xl lg:text-4xl`}
        >
          CONOCE NUESTROS SERVICIOS
        </h2>
        <div
          className={`${font_roboto.className} grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8`}
        >
          {whyChooseServices.map((chooseService, idx) => (
            <div key={idx} className="flex flex-col">
              <div
                className="relative w-full h-72 mb-6" // Container for the image
                style={{
                  backgroundImage: `url(${chooseService.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center", // Ensures the image is centered
                  borderRadius: "8px",
                }}
              >
                {/* You can use Image component for optimized loading */}
                {/* <Image
                  src={chooseService.imageUrl}
                  alt={chooseService.title}
                  width={500}
                  height={500}
                  layout="responsive"
                  objectFit="cover"
                  className="rounded-md"
                /> */}
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
        {/* Add Centered Button */}
        <div className="mt-12 flex justify-center">
          <Link
            className="rounded-none border border-[#971e24] bg-transparent px-9 py-3 text-[#971e24] outline-0 transition-all duration-300 hover:bg-[#971e24] hover:text-white focus:border-[#971e24] focus:outline-none focus:ring focus-visible:border-[#971e24]"
            href="/service"
          >
            Conocer más
          </Link>
        </div>
      </div>

      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl sm:text-center md:mx-auto">
            <h3
              className={`font-frank text-gray-800 text-3xl font-normal sm:text-4xl`}
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

      <div className="mt-6">
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center">
            <h2 className="text-gray-800 text-4xl font-frank">
              Lo que nuestros clientes dicen
            </h2>
            <p className="text-sm text-gray-800 mt-6 leading-relaxed">
              Descubre las experiencias de aquellos que confiaron en nuestros
              servicios de spa. Sus testimonios reflejan nuestro compromiso con
              el bienestar, la relajación y la satisfacción total de cada
              cliente.
            </p>
          </div>

          {/* Carousel */}
          <div className="max-w-xl mt-16 mx-auto">
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonialsV2[currentIndex].avatar}
                alt={testimonialsV2[currentIndex].name}
                className="w-28 h-28 rounded-full shadow-[0_2px_22px_-4px_rgba(93,96,127,0.6)] border-2 border-white"
              />
              <div className="mt-4">
                <h4 className="text-gray-800 text-base font-extrabold">
                  {testimonialsV2[currentIndex].name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">
                  {testimonialsV2[currentIndex].title}
                </p>
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm leading-relaxed">
                {testimonialsV2[currentIndex].quote}
              </p>
            </div>

            {/* Rating */}
            <div className="flex justify-center space-x-1.5 mt-4">
              {[...Array(5)].map((_, idx) => (
                <svg
                  key={idx}
                  className={`w-[18px] ${
                    idx < testimonialsV2[currentIndex].rating
                      ? "fill-[#facc15]"
                      : "fill-[#CED5D8]"
                  }`}
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div
            className="bg-gray-300 w-10 h-10 grid items-center justify-center rounded-full rotate-90 shrink-0 cursor-pointer absolute left-0 top-0 bottom-0 my-auto"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-gray-800 inline"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div
            className="bg-gray-800 w-10 h-10 grid items-center justify-center rounded-full -rotate-90 shrink-0 cursor-pointer absolute right-0 top-0 bottom-0 my-auto"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-[#fff] inline"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceSection;
