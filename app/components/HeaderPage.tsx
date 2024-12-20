import React from "react";
import { Frank_Ruhl_Libre, Roboto } from "next/font/google";

const font_frank = Frank_Ruhl_Libre({ subsets: ["latin"] });
const font_roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

function HeaderPage({ title, imageSrc }: { title: string; imageSrc?: string }) {
  return (
    <div className="relative w-full bg-[#121212] text-white">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="absolute top-0 left-0 w-screen h-[400px] object-cover z-0 opacity-96"
        />
      )}
      <div className="relative z-10 mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
        <h2
          className={`${font_frank.className} text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl`}
          style={{ marginTop: "15%" }}
        >
          {title}
        </h2>
      </div>
    </div>
  );
}

export default HeaderPage;
