import Button from "./Button";
import CompanyLogo from "./CompanyLogo";
import PropTypes from "prop-types";

const Hero = ({ className = "" }) => {
  return (
    <section className={`flex flex-col items-start gap-[70px] w-full mq450:gap-[17px] mq800:gap-[35px] ${className}`}>
      <div className="w-full overflow-hidden flex items-start justify-between py-0 px-[100px] box-border gap-5 mq800:gap-5 mq800:pl-[25px] mq800:pr-[25px] mq800:box-border mq1350:gap-5 mq1350:pl-[50px] mq1350:pr-[50px] mq1350:box-border">
        <section className="flex flex-col items-start gap-[35px] text-left text-6xl text-black font-['Space_Grotesk'] mq800:gap-[17px]">
          <h1 className="m-0 w-[531px] relative text-[length:inherit] font-medium font-[inherit] inline-block mq450:text-4xl mq800:text-5xl">
            Get High-Converting Websites & Custom Applications
          </h1>
          <div className="w-[498px] relative text-sm  inline-block mq450:text-base">
            I help founders and business owners build high-converting websites and scalable full-stack applications that streamline operations—reducing technical stress so you can focus on growth and revenue.
          </div>
          <Button property1="Button primary" label="Book a consultation" />
        </section>
        <img
          className="h-[515px] w-[600.5px] relative"
          loading="lazy"
          alt=""
          src="/Illustration6.svg"
        />
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
