"use client";

import React, { useEffect, useState } from "react";
import { Frank_Ruhl_Libre, Roboto } from "next/font/google";
import image1 from "@/public/header.jpeg";
import image2 from "@/public/facial.jpg";
import image3 from "@/public/masaje.jpg";
import image4 from "@/public/silla.jpg";

const font_frank = Frank_Ruhl_Libre({ subsets: ["latin"] });
const font_roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

function HeroSection() {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isClient, setIsClient] = useState(false); // To track if it's client-side render

  useEffect(() => {
    setIsClient(true); // Ensures the code runs only on the client-side
    const changeImage = () => {
      setIsTransitioning(true);

      // Después de 5 segundos, cambia la imagen actual
      const transitionTimeout = setTimeout(() => {
        setCurrentImageIndex(nextImageIndex);
        setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 5000);

      return () => clearTimeout(transitionTimeout);
    };

    const intervalId = setInterval(changeImage, 10000);
    return () => clearInterval(intervalId);
  }, [images.length, nextImageIndex]);

  if (!isClient) {
    return null; // Prevent rendering on the server-side until hydration is done
  }

  return (
    <div className="inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[5000ms] ease-in-out pointer-events-none">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-[5000ms] ease-in-out`}
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity:
              index === currentImageIndex
                ? 1
                : index === nextImageIndex && isTransitioning
                ? 0.5
                : 0,
            zIndex:
              index === currentImageIndex
                ? 2
                : index === nextImageIndex && isTransitioning
                ? 1
                : 0,
            pointerEvents: index === currentImageIndex ? "auto" : "none",
            filter: "brightness(0.65)",
            transition: "opacity 5s ease-in-out, z-index 5s ease-in-out",
          }}
        />
      ))}
      <div className="relative z-10 min-h-screen">
        <div className="absolute mx-auto flex min-h-full w-full items-center justify-between px-4 py-2 text-center">
          <div className="container m-auto space-y-7">
            <h2
              className={`${
                isClient ? font_frank.className : ""
              } mt-20 leading-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white`}
            >
              Relajación, belleza y espiritualidad <br />
              reunidos en un solo lugar.
            </h2>
            <p
              className={`${
                isClient ? font_roboto.className : ""
              } mx-auto max-w-md text-gray-300 !w-full text-lg`}
            >
              Consiéntete y disfruta de un día dedicado a ti.
            </p>
            <button className="ring-offset-background focus-visible:ring-ring hover:bg-primary/90 inline-flex h-10 items-center justify-center bg-[#971e24] px-5 py-7 text-sm font-medium uppercase text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-r-0">
              Conocer más
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
