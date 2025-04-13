import "./globals.css";

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
import ModeSwitcher from "@/src/components/shared/ModeSwitcher";
import { ThemeProvider } from "../context/theme-provider";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hello, I'm Rus Madrigal | Senior Technical SEO & Data Enthusiast",
  description:
    "Senior SEO professional with over 14 years of experience. Here, you can find my CV and examples of my previous work..",
  alternates: {
    canonical: "https://rusmadrigal.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="scroll-smooth, dark">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/assets/img/site-logo.svg" sizes="any" />
        {/* Canonical */}
        <link rel="canonical" href="https://rusmadrigal.com/" />
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
