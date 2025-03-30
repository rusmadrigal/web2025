import AboutmeEs from "@/src/components/home/es-cr/AboutmeEs";
import Blog from "@/src/components/home/Blog";
import ContactmeEs from "@/src/components/home/es-cr/ContactmeEs";
import HeroEs from "@/src/components/home/es-cr/HeroEs";
import Portfolio from "@/src/components/home/Portfolio";
import ResumeEs from "@/src/components/home/es-cr/ResumeEs";
import ServiceEs from "@/src/components/home/es-cr/ServiceEs";
import SkillsES from "@/src/components/home/es-cr/SkillsEs";
import TestimonialEs from "@/src/components/home/es-cr/TestimonialEs";
import Footer from "@/src/components/shared/Footer";
import Layout from "/layout/LayoutEs";

export default async function Home() {
  return (
    <Layout>
      <HeroEs />
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
