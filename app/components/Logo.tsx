import React from "react";
import { Frank_Ruhl_Libre, Roboto } from "next/font/google";

const font_frank = Frank_Ruhl_Libre({ subsets: ["latin"] });
const font_roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const Logo: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <h5
        style={{
          fontWeight: "700",
        }}
      >
        <img src="./logoblanco.png" alt="logo" width="170" />
      </h5>
    </div>
  );
};

export default Logo;
