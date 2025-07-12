import AboutmeEs from "@/src/components/home/es-cr/AboutmeEs";
import ContactmeEs from "@/src/components/home/es-cr/ContactmeEs";
import HeroEs from "@/src/components/home/es-cr/HeroEs";
import Portfolio from "@/src/components/home/Portfolio";
import ResumeEs from "@/src/components/home/es-cr/ResumeEs";
import ServiceEs from "@/src/components/home/es-cr/ServiceEs";
import SkillsES from "@/src/components/home/es-cr/SkillsEs";
import TestimonialEs from "@/src/components/home/es-cr/TestimonialEs";
import Footer from "@/src/components/shared/Footer";
import Layout from "/layout/LayoutEs";
import BlogCR from "@/src/components/home/es-cr/CRBlog";


// ✅ Metadata para SEO versión en español
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

export default async function Home() {
  return (
    <Layout>
      <HeroEs />
      <BlogCR />
      <AboutmeEs />
      <ServiceEs />
      <SkillsES />
      <ResumeEs />
      <TestimonialEs />
      <ContactmeEs />
      <Footer />
    </Layout>
  );
}
