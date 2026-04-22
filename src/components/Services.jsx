import Heading from "./Heading";
import Card from "./Card";
import PropTypes from "prop-types";

const Services = ({ className = "" }) => {
  return (
    <section
      id="services"
      className={`self-stretch flex flex-col items-start gap-20 max-w-full text-left text-lg text-black font-['Space_Grotesk'] mq450:gap-5 mq800:gap-10 ${className}`}
    >
      <div className="self-stretch flex items-start py-0 px-[100px] box-border gap-10 max-w-full mq1125:flex-wrap mq1125:pl-[50px] mq1125:pr-[50px] mq1125:box-border mq800:gap-5 mq800:pl-[25px] mq800:pr-[25px] mq800:box-border">
        <Heading
          property1="Green"
          label="Services"
          showLabel={false}
          labelVisible={false}
        />
        <div className="w-[580px] relative inline-block shrink-0 max-w-full">
          I offer a focused set of services designed to help businesses grow, convert, and operate efficiently online:
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start gap-10 max-w-full mq800:gap-5">
        <section className="w-full flex justify-center items-stretch py-0 px-[100px] box-border gap-10 max-w-full text-left text-xl text-black font-['Space_Grotesk'] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-5 mq800:pl-[50px] mq800:pr-[50px] mq800:box-border mq1350:flex-wrap">
          <Card
            illustration="/Illustration7@2x.png"
            property1="Green"
            label="Web Design"
            label1="& Development"
            showLabel
            labelVisible={false}
            description="Modern, fast, and conversion-focused websites built to turn visitors into paying customers."
          />
          <Card
            cardBackgroundColor="#b9ff66"
            headingAndLinkJustifyContent="unset"
            illustration="/Illustration3@2x.png"
            illustrationIconHeight="147.6px"
            property1="White"
            label="Custom Web"
            label1="Applications"
            showLabel
            labelVisible={false}
            description="Scalable full-stack applications that automate workflows, manage data, and improve efficiency."
          />
        </section>
        <section className="w-full flex justify-center items-stretch py-0 px-[100px] box-border gap-10 max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq800:gap-5 mq800:pl-[50px] mq800:pr-[50px] mq800:box-border mq1350:flex-wrap">
          <Card
            cardBackgroundColor="#191a23"
            headingAndLinkJustifyContent="unset"
            illustration="/Illustration@2x.png"
            illustrationIconHeight="210px"
            property1="White"
            label="Website"
            label1="Optimization"
            showLabel
            labelVisible={false}
            textColor="text-white"
            description="Performance, UX, and conversion improvements to maximize results from your existing traffic."
          />
          <Card
            cardBackgroundColor="#f3f3f3"
            headingAndLinkJustifyContent="center"
            illustration="/tokyo-sending-messages-from-one-place-to-another-1@2x.png"
            illustrationIconHeight="192.7px"
            property1="Green"
            label="Business Website"
            label1="Optimization"
            showLabel
            labelVisible={false}
            description="Develop your presence online to build trust and authority so it's easier for customers to choose you over others."
          />
        </section>
      </div>
    </section>
  );
};

Services.propTypes = {
  className: PropTypes.string,
};

export default Services;
