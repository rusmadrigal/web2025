import "../globals.css";
import "react-modern-drawer/dist/index.css";
import "swiper/css";

import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";

const CustomCursor = dynamic(
  () => import("@/src/components/shared/CustomCursor"),
  { ssr: false }
);

const BackToTop = dynamic(() => import("@/src/components/shared/BackToTop"), {
  ssr: false,
});

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Consultor SEO Costa Rica +14 años de experiencia | Rus Madrigal",
  description:
    "Profesional en SEO con más de 14 años de experiencia. Aquí podés ver mi CV y proyectos anteriores.",
  alternates: {
    canonical: "https://rusmadrigal.com/es-cr",
  },
  icons: {
    icon: "/assets/img/favicon.ico",
  },
};

export default function SpanishLayout({ children }) {
  return (
    <>
      {children}
      <CustomCursor />
      <BackToTop />
    </>
  );
}
