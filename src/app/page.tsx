import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Experiences } from "@/components/experiences";
import { TrustBar } from "@/components/trust-bar";
import { OmisDestination } from "@/components/omis-destination";
import { ExperienceDetails } from "@/components/experience-details";
import { Gallery } from "@/components/gallery";
import { VideoInterlude } from "@/components/video-interlude";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Testimonials } from "@/components/testimonials";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { MobileBookBar } from "@/components/mobile-book-bar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <Experiences />
        <TrustBar />
        <OmisDestination />
        <ExperienceDetails />
        <Gallery />
        <VideoInterlude />
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <MobileBookBar />
    </>
  );
}
