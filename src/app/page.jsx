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
    title: "SEO Consultant Costa Rica +15 years of experience | Rus Madrigal",
    description:
      "Senior SEO professional with over 14 years of experience. Here, you can find my CV and examples of my previous work.",
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
