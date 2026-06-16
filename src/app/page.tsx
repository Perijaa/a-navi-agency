import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Experiences } from "@/components/experiences";
import { OmisDestination } from "@/components/omis-destination";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { MobileBookBar } from "@/components/mobile-book-bar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experiences />
        <OmisDestination />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBookBar />
    </>
  );
}
