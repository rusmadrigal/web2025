import AboutMe from "@/src/components/home/AboutMe";
import Blog from "@/src/components/home/Blog";
import ContactMe from "@/src/components/home/ContactMe";
import Hero from "@/src/components/home/Hero";
import Portfolio from "@/src/components/home/Portfolio";
import Resume from "@/src/components/home/Resume";
import Service from "@/src/components/home/Service";
import Skills from "@/src/components/home/Skills";
import Testimonial from "@/src/components/home/Testimonial";
import Footer from "@/src/components/shared/Footer";
import Layout from "/layout/Layout";

// ✅ Metadata para SEO versión en inglés
export async function generateMetadata() {
  return {
    title: "Costa Rica SEO Consultant | 15+ Years of Results-Driven Strategies",
    description:
      "SEO Expert with 14+ Years of Experience — Check Out My CV and Projects Samples Here!",
    alternates: {
      canonical: "https://rusmadrigal.com/",
    },
  };
}

export default async function Home() {
  return (
    <Layout>
      <Hero />
      <Blog />
      <AboutMe />
      <Service />
      <Skills />
      <Resume />
      <Testimonial />
      <ContactMe />
      <Footer />
    </Layout>
  );
}
