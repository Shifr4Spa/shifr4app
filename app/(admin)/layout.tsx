import CmsNavbar from "../components/CmsNavbar";
import { Provider } from "../utils/Provider";
import "./globals.css";

export const metadata = {
  title: "Agrod & Asociados - Expertos Legales",
  description:
    "Brindamos soluciones legales efectivas y defendemos sus derechos con dedicación y experiencia. Descubra cómo nuestro equipo legal puede ayudarle.",
  keywords:
    "abogados, servicios legales, asesoría legal, derecho empresarial, litigios, contratos",
  url: "https://www.agrodyasociados.com/",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <CmsNavbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
