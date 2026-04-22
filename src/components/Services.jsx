import Heading from "./Heading";
import Card from "./Card";
import PropTypes from "prop-types";

const Services = ({ className = "" }) => {
  return (
    <section
      id="services"
      className={`w-full flex justify-center font-['Space_Grotesk'] ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 md:gap-16 px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-10">
          <Heading
            property1="Green"
            label="Services"
            showLabel={false}
            labelVisible={false}
          />
          <p className="text-base md:text-lg text-black max-w-xl leading-relaxed">
            I offer a focused set of services designed to help businesses grow,
            convert, and operate efficiently online:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
            illustration="/Illustration@2x.png"
            property1="Default"
            label="Custom Web"
            label1="Applications"
            showLabel
            labelVisible={false}
            description="Scalable, full-stack applications tailored to your business workflows—replacing spreadsheets and manual processes."
            cardBackgroundColor="#191a23"
            textColor="text-white"
          />
          <Card
            illustration="/Illustration1@2x.png"
            property1="Green"
            label="Landing Page"
            label1="Design"
            showLabel
            labelVisible={false}
            description="High-converting, focused landing pages that clearly communicate your value proposition."
          />
          <Card
            illustration="/Illustration2@2x.png"
            property1="Default"
            label="Performance"
            label1="& Optimization"
            showLabel
            labelVisible={false}
            description="Speed, SEO, and technical improvements that reduce load times, lower bounce rates, and improve rankings."
            cardBackgroundColor="#191a23"
            textColor="text-white"
          />
          <Card
            illustration="/Illustration3@2x.png"
            property1="Green"
            label="API Integration"
            label1="& Automation"
            showLabel
            labelVisible={false}
            description="Connecting your tools, automating manual tasks, and building reliable data pipelines across your stack."
          />
          <Card
            illustration="/Illustration3@2x.png"
            property1="Default"
            label="Ongoing Support"
            label1="& Maintenance"
            showLabel
            labelVisible={false}
            description="Reliable post-launch support, updates, and iterative improvements to keep your system running smoothly."
            cardBackgroundColor="#b9ff66"
          />
        </div>
      </div>
    </section>
  );
};

Services.propTypes = {
  className: PropTypes.string,
};

export default Services;
