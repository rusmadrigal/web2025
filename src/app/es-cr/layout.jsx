// app/es-cr/layout.jsx

import "../../globals.css";
import "react-modern-drawer/dist/index.css";
import "swiper/css";

import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(
  () => import("@/src/components/shared/CustomCursor"),
  { ssr: false }
);

const BackToTop = dynamic(
  () => import("@/src/components/shared/BackToTop"),
  { ssr: false }
);

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hola, soy Rus Madrigal | SEO Técnico & Estratega de Datos",
  description:
    "Profesional en SEO con más de 14 años de experiencia. Aquí podés ver mi CV y proyectos anteriores.",
  alternates: {
    canonical: "https://rusmadrigal.com/es-cr",
  },
};

export default function SpanishLayout({ children }) {
  return (
    <html lang="es-CR" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.className} relative`}>
        <main>
          {children}
          <CustomCursor />
          <BackToTop />
        </main>
      </body>
    </html>
  );
}
