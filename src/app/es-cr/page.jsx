import AboutmeEs from "@/src/components/home/es-cr/AboutmeEs";
import Blog from "@/src/components/home/Blog";
import ContactMe from "@/src/components/home/ContactMe";
import HeroEs from "@/src/components/home/es-cr/HeroEs";
import Portfolio from "@/src/components/home/Portfolio";
import Resume from "@/src/components/home/Resume";
import Service from "@/src/components/home/Service";
import Skills from "@/src/components/home/Skills";
import Testimonial from "@/src/components/home/Testimonial";
import Footer from "@/src/components/shared/Footer";
import Layout from "@/layout/Layout";

export default async function Home() {
  return (
    <Layout>
      <HeroEs />
      <AboutmeEs />
      <Service />
      <Skills />
      <Resume />
      <Testimonial />
      <ContactMe />
      <Footer />
    </Layout>
  );
}
