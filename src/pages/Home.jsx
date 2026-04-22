import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import CtaSection from "../components/CtaSection";
import CaseStudies from "../components/CaseStudies";
import WorkProcess from "../components/WorkProcess";
import Testimonials from "../components/Testimonials";
import ContactSection from "../components/ContactSection";
import FooterBlock from "../components/FooterBlock";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden font-['Space_Grotesk']">
      <Navbar />

      {/* Page content — pushed down to clear fixed navbar */}
      <main className="flex flex-col gap-16 md:gap-24 lg:gap-[100px] pt-[72px] md:pt-[100px] pb-0">
        <Hero />
        <Services />
        <CtaSection />
        <CaseStudies />
        <WorkProcess />
        <Testimonials />
        <ContactSection />
        <FooterBlock />
      </main>
    </div>
  );
};

export default Home;
