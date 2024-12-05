import React from "react";
import { Frank_Ruhl_Libre, Roboto } from "next/font/google";

const font_frank = Frank_Ruhl_Libre({ subsets: ["latin"] });
const font_roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

function HeroSection() {
  return (
    <div className="mx-auto items-center justify-between bg-[#0a0a0a] bg-opacity-50 text-white">
      <div
        className="relative bg-[#606060] bg-cover bg-center bg-no-repeat bg-blend-overlay min-h-screen"
        style={{ backgroundImage: "url('./header.jpeg')" }}
      >
        <div className="absolute mx-auto flex min-h-full w-full items-center justify-between px-4 py-2 text-center">
          <div className="container m-auto space-y-7">
            <h2
              className={`${font_frank.className} mt-20 leading-tight text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}
            >
              Relajación, belleza y espiritualidad <br />
              reunidos en un solo lugar.
            </h2>
            <p
              className={`${font_roboto.className} mx-auto max-w-md text-gray-300 !w-full text-lg`}
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
