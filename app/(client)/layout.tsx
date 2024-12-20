import PageTransition from "./PageTransition";
import NavbarAgrod from "../components/NavbarAgrod";
import { Provider } from "../utils/Provider";
import "./globals.css";

const menuOptions = [
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
      <body>
        <Provider>
          <NavbarAgrod menuOptions={menuOptions} />
          {/* Wrap only the dynamic content with the PageTransition */}
          <PageTransition>
            <main className="h-full w-full absolute bg-[#121212]">
              {children}
            </main>
          </PageTransition>
        </Provider>
      </body>
    </html>
  );
}
