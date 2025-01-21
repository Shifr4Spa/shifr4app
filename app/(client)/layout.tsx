"use client";

import PageTransition from "./PageTransition";
import { Provider } from "../utils/Provider";
import "../../styles/globals.css";
import NavbarAgrod from "../components/NavbarAgrod";
import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menuOptions = [
    { id: "/", label: "Inicio" },
    { id: "about", label: "Acerca de" },
    { id: "service", label: "Servicios" },
    { id: "team", label: "Especialistas" },
    { id: "contact", label: "Contacto" },
  ];

  // Get the current path
  const pathname = usePathname();

  return (
    <html lang="en">
      <body>
        <Provider>
          {/* Wrap only the dynamic content with the PageTransition */}
          <PageTransition>
            {pathname !== "/login" && <NavbarAgrod menuOptions={menuOptions} />}
            <main className="h-full w-full absolute bg-[#121212]">
              {children}
            </main>
            <Toaster /> {/* Agrega el Toaster al final */}
          </PageTransition>
        </Provider>
      </body>
    </html>
  );
}
