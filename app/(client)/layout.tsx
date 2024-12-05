import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Provider } from "../utils/Provider";
import NavbarAgrod from "../components/NavbarAgrod";

const firaCode = Roboto_Flex({ subsets: ["latin"] });

// Extiende el tipo Metadata de Next.js
type MetadataAgrod = Metadata & {
  url?: string;
};

export const metadata: MetadataAgrod = {
  title: "ShifraSPA",
  description:
    "Relajación, belleza y espiritualidad reunidos en un solo lugar",
  keywords:
    "Servico de SPA, Salud, Bienestar, Belleza",
  url: "https://dev.d4jfwxapfw4e1.amplifyapp.com/",
};
interface MenuOption {
  id: string;
  label: string;
}

const menuOptions: MenuOption[] = [
  { id: "/", label: "Inicio" },
  { id: "about", label: "Acerca de" },
  { id: "service", label: "Servicios" },
  { id: "team", label: "Especialistas" },
  { id: "contact", label: "Contacto" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* className={`${firaCode.className} h-full bg-black text-indigo-950 dark:bg-slate-950 dark:text-amber-50 dark:selection:bg-purple-500`} */}
      <body className={`${firaCode.className}`}>
        <Provider>
          {/* <Navbar /> */}
          <NavbarAgrod menuOptions={menuOptions} />
          <main className="h-full w-full  absolute bg-[#121212]">
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
