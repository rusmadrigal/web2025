import "../globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Consultor SEO en Costa Rica con +15 años de experiencia | Rus Madrigal",
  description:
    "Profesional senior en SEO con más de 14 años de experiencia. Aquí puedes ver mi CV y ejemplos de mi trabajo previo.",
  alternates: {
    canonical: "https://rusmadrigal.com/es-cr",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-CR" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${poppins.className} relative`}>
        {children}
      </body>
    </html>
  );
}
