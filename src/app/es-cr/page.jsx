import HeroEs from "@/src/components/home/es-cr/HeroEs";
import BlogCR from "@/src/components/home/es-cr/CRBlog";
import AboutmeEs from "@/src/components/home/es-cr/AboutmeEs";
import ServiceEs from "@/src/components/home/es-cr/ServiceEs";
import SkillsES from "@/src/components/home/es-cr/SkillsEs";
import ResumeEs from "@/src/components/home/es-cr/ResumeEs";
import TestimonialEs from "@/src/components/home/es-cr/TestimonialEs";
import ContactmeEs from "@/src/components/home/es-cr/ContactmeEs";
import Footer from "@/src/components/shared/Footer";
import dynamic from "next/dynamic";

const VisualLayoutEsCR = dynamic(() => import("./VisualLayoutEsCR"), {
  ssr: false,
});

export async function generateMetadata() {
  return {
    title: "Consultor SEO Costa Rica +14 años de experiencia | Rus Madrigal",
    description:
      "Consultor SEO en Costa Rica especializado en posicionamiento web, auditorías técnicas y estrategias personalizadas para aumentar tu visibilidad en Google.",
    alternates: {
      canonical: "https://rusmadrigal.com/es-cr",
    },
  };
}

export default function HomeEsCR() {
  return (
    <VisualLayoutEsCR>
      <HeroEs />
      <BlogCR />
      <AboutmeEs />
      <ServiceEs />
      <SkillsES />
      <ResumeEs />
      <TestimonialEs />
      <ContactmeEs />
      <Footer />
    </VisualLayoutEsCR>
  );
}
