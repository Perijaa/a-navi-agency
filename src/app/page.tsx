import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Experiences } from "@/components/experiences";
import { ExperienceDetails } from "@/components/experience-details";
import { Gallery } from "@/components/gallery";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experiences />
        <ExperienceDetails />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
