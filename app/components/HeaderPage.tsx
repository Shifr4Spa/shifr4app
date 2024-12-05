import React from "react";
import { Frank_Ruhl_Libre, Roboto } from "next/font/google";

const font_frank = Frank_Ruhl_Libre({ subsets: ["latin"] });
const font_roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

function HeaderPage({ title }: any) {
  // <div className="text-white bg-[#121212] mx-auto items-center h-[350px] p-8 grid grid-cols-2 w-full">
  return (
    <div className="mx-auto bg-[#121212] text-white max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
      <h2
        className={`${font_frank.className} text-4xl font-bold relative md:text-5xl lg:text-6xl xl:text-7xl`}
        style={{ marginTop: "15%" }}
      >
        {title}
      </h2>
    </div>
  );
}

export default HeaderPage;
