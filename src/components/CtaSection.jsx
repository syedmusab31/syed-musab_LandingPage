import Button from "./Button";
import PropTypes from "prop-types";

const CtaSection = ({ className = "" }) => {
  return (
    <section
      className={`w-full flex justify-center font-['Space_Grotesk'] ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="relative w-full rounded-3xl md:rounded-[45px] bg-grey overflow-hidden flex flex-col lg:flex-row items-start lg:items-center py-10 px-6 md:py-14 md:px-12 lg:px-[60px] gap-8 lg:gap-0">
          {/* Text + CTA */}
          <div className="flex flex-col items-start gap-5 md:gap-6 w-full lg:max-w-[520px]">
            <h2
              className="m-0 text-2xl sm:text-3xl md:text-[2rem] lg:text-3xl font-medium text-black leading-tight"
              style={{ textWrap: "balance" }}
            >
              Let's Build Something That Drives Real Results
            </h2>
            <p className="text-base md:text-lg text-black leading-relaxed">
              Get in touch today to discover how a high-performing website or
              custom application can help your business grow, convert more users,
              and operate more efficiently.
            </p>
            <Button
              property1="Button primary"
              buttonAlignItems="flex-start"
              buttonWidth="unset"
              buttonJustifyContent="unset"
              label="Get Your Free Proposal"
            />
          </div>

          {/* Illustration — desktop only */}
          <div className="hidden lg:block absolute right-[60px] top-1/2 -translate-y-1/2 w-[300px] xl:w-[359px] h-auto z-[2] pointer-events-none">
            <img
              className="w-full h-full object-contain"
              alt=""
              src="/Illustration4.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

CtaSection.propTypes = {
  className: PropTypes.string,
};

export default CtaSection;
