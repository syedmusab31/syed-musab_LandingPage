import { useState } from "react";
import Heading from "./Heading";
import ProcessCard from "./ProcessCard";
import PropTypes from "prop-types";

const processes = [
  { number: "01", title: "Consultation", description: "We start by understanding your business goals, target audience, and current challenges to define the right solution." },
  { number: "02", title: "Research & Strategy", description: "I analyze your requirements and plan a structure focused on performance, usability, and scalability." },
  { number: "03", title: "Design & Development", description: "Your website or application is built with clean design, strong UX, and reliable functionality." },
  { number: "04", title: "Testing & Optimization", description: "Everything is tested for performance, responsiveness, and smooth user experience." },
  { number: "05", title: "Launch & Support", description: "Your project goes live with full support to ensure everything runs perfectly." },
  { number: "06", title: "Continuous Improvement", description: "Ongoing improvements and updates to help you scale and get better results over time." },
];

const WorkProcess = ({ className = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleProcess = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section
      id="working-process"
      className={`w-full flex justify-center font-['Space_Grotesk'] ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-12 px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-10">
          <Heading
            property1="Green"
            label="My Working Process"
            showLabel={false}
            labelVisible={false}
          />
          <p className="text-base md:text-lg text-black max-w-xl leading-relaxed">
            A clear, step-by-step approach focused on delivering results,
            efficiency, and long-term value.
          </p>
        </div>

        {/* Process Cards */}
        <div className="w-full flex flex-col gap-4 md:gap-6 lg:gap-[30px]">
          {processes.map((process, index) => (
            <ProcessCard
              key={index}
              number={process.number}
              title={process.title}
              description={process.description}
              isActive={activeIndex === index}
              onClick={() => toggleProcess(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

WorkProcess.propTypes = {
  className: PropTypes.string,
};

export default WorkProcess;
