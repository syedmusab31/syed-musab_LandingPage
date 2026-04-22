import Button from "./Button";
import PropTypes from "prop-types";

const Hero = ({ className = "" }) => {
  return (
    <section
      className={`w-full flex flex-col gap-10 md:gap-16 ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-5 px-4 md:px-8 lg:px-12">
        {/* Text Content */}
        <div className="flex flex-col items-start gap-6 md:gap-8 text-left w-full lg:max-w-[560px]">
          <h1
            className="m-0 text-4xl sm:text-5xl md:text-6xl lg:text-[clamp(3rem,5vw,4rem)] xl:text-6xl font-medium font-['Space_Grotesk'] text-black leading-tight"
            style={{ textWrap: "balance" }}
          >
            Get High-Converting Websites &amp; Custom Applications
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            I help founders and business owners build high-converting websites
            and scalable full-stack applications that streamline
            operations—reducing technical stress so you can focus on growth and
            revenue.
          </p>
          <Button property1="Button primary" label="Book a consultation" />
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end flex-shrink-0">
          <img
            className="w-full max-w-[480px] lg:max-w-[560px] h-auto"
            loading="lazy"
            alt="Hero illustration"
            src="/Illustration6.svg"
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
