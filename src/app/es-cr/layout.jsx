import "../globals.css";

// External styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-creative";
import "swiper/css/effect-coverflow";
import "react-modern-drawer/dist/index.css";
import "react-circular-progressbar/dist/styles.css";
// import "tw-elements-react/dist/css/tw-elements-react.min.css";

import CustomCursor from "@/src/components/shared/CustomCursor";
import { Poppins } from "next/font/google";
import BackToTop from "@/src/components/shared/BackToTop";
import { ThemeProvider } from "@/src/context/theme-provider";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title:
    "Consultor SEO Costa Rica: Experiencia optimizando para Google & Agentes AI.",
  description:
    "Aumenta tu visibilidad online con un Consultor SEO en Costa Rica experto en Google y Agentes AI. Potencia tu posicionamiento hoy.",
  alternates: {
    canonical: "https://rusmadrigal.com/es-cr",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-cr" suppressHydrationWarning={true} className="scroll-smooth, dark">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/assets/img/site-logo.svg" sizes="any" />
        {/* Canonical */}
        <link rel="canonical" href="https://rusmadrigal.com/es-cr/" />
      </head>
      <body
        className={`${poppins.className} relative`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <main>
            {children}
            <CustomCursor />
            <BackToTop />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
