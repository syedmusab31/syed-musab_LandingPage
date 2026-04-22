import Button from "./Button";
import PropTypes from "prop-types";

const CtaSection = ({ className = "" }) => {
  return (
    <section className={`w-full flex justify-center pt-0 px-[100px] pb-10 box-border max-w-full mq800:pl-[25px] mq800:pr-[25px] mq800:box-border mq1350:pl-[50px] mq1350:pr-[50px] mq1350:box-border ${className}`}>
      <div className="w-full max-w-[1240px] relative flex items-center">
        <section className="min-h-[347px] w-full rounded-[45px] bg-grey flex items-center py-10 px-[60px] box-border z-[1] text-left text-3xl text-black font-['Space_Grotesk'] mq800:pl-[30px] mq800:pr-[30px] mq800:box-border">
          <div className="flex flex-col items-start py-5 px-0 gap-[26px] max-w-[500px]">
            <h2 className="m-0 relative text-[length:inherit] font-medium font-[inherit] inline-block mq450:text-lg mq800:text-2xl">
              Let’s Build Something That Drives Real Results
            </h2>
            <div className="relative text-lg inline-block">
              Get in touch today to discover how a high-performing website or custom application can help your business grow, convert more users, and operate more efficiently.
            </div>
            <Button
              property1="Button primary"
              buttonAlignItems="flex-start"
              buttonWidth="unset"
              buttonJustifyContent="unset"
              label="Get Your Free Proposal"
            />
          </div>
        </section>
        <div className="hidden lg:block absolute right-[60px] top-1/2 -translate-y-1/2 w-[359px] h-[394px] z-[2]">
          <img
            className="w-full h-full object-contain"
            alt=""
            src="/Illustration4.svg"
          />
        </div>
      </div>
    </section>
  );
};

CtaSection.propTypes = {
  className: PropTypes.string,
};

export default CtaSection;
