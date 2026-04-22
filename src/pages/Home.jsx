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
    <div className="w-full min-h-screen relative bg-[#fff] flex flex-col items-center pt-[10px] pb-0 px-0 box-border leading-[normal] tracking-[normal]">
      <main className="w-full max-w-[1440px] flex flex-col items-center gap-[100px] mq1125:h-auto mq450:gap-[25px] mq800:gap-[50px] overflow-hidden">
        <div className="w-full flex flex-col gap-[70px] mq450:gap-[17px] mq800:gap-[35px] pb-10">
          <Navbar />
          <Hero />
        </div>
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
