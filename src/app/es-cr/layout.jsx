// app/es-cr/layout.jsx

import "../globals.css";
import "react-modern-drawer/dist/index.css";
import "swiper/css";

import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import Script from "next/script";

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
      <head>
        {/* GTM script */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-K2HNLR7W');
            `,
          }}
        />
      </head>
      <body className={`${poppins.className} relative`}>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2HNLR7W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <main>
          {children}
          <CustomCursor />
          <BackToTop />
        </main>
      </body>
    </html>
  );
}
