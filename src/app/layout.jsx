// app/layout.jsx

import "./globals.css";
import "react-modern-drawer/dist/index.css";
import "swiper/css";

import { Poppins } from "next/font/google";
import CustomCursor from "@/src/components/shared/CustomCursor";
import BackToTop from "@/src/components/shared/BackToTop";
import Script from "next/script"; // ✅ Importación para GA4

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hello, I'm Rus Madrigal | Senior Technical SEO & Data Enthusiast",
  description:
    "Senior SEO professional with over 14 years of experience. Here, you can find my CV and examples of my previous work.",
  alternates: {
    canonical: "https://rusmadrigal.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.className} relative`}>
        <main>
          {children}
          <CustomCursor />
          <BackToTop />
        </main>

        {/* ✅ Google Analytics GA4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KS2VNWG3Z3');
            `,
          }}
        />
      </body>
    </html>
  );
}