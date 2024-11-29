"use client";

import "./../app/app.css";
import "@aws-amplify/ui-react/styles.css";
import Image from "next/image";

import imglogo from "@/public/images/logo-white.png";

export default function App() {
  const stage = process.env.NEXT_PUBLIC_STAGE || "Dev";

  return (
    <main>
      <center>
        <Image
          src={imglogo.src}
          alt=""
          width={350} // Required for layout="intrinsic" or "responsive"
          height={200}
        />
        <h1>SHIFRA-SPA AMPLIFY ENVIRONMENT</h1>

        <h2>🚀 App successfully hosted 🚀.</h2>
        <h2>Current Environment: {stage}</h2>
      </center>
    </main>
  );
}
