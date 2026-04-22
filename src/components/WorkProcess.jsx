import { useState } from "react";
import Heading from "./Heading";
import ProcessCard from "./ProcessCard";
import PropTypes from "prop-types";

const processes = [
  {
    number: "01",
    title: "Consultation",
    description: "We start by understanding your business goals, target audience, and current challenges to define the right solution."
  },
  {
    number: "02",
    title: "Research & Strategy",
    description: "I analyze your requirements and plan a structure focused on performance, usability, and scalability."
  },
  {
    number: "03",
    title: "Design & Development",
    description: "Your website or application is built with clean design, strong UX, and reliable functionality."
  },
  {
    number: "04",
    title: "Testing & Optimization",
    description: "Everything is tested for performance, responsiveness, and smooth user experience."
  },
  {
    number: "05",
    title: "Launch & Support",
    description: "Your project goes live with full support to ensure everything runs perfectly."
  },
  {
    number: "06",
    title: "Continuous Improvement",
    description: "Ongoing improvements and updates to help you scale and get better results over time."
  }
];

const WorkProcess = ({ className = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleProcess = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section id="working-process" className={`w-full flex justify-center pt-0 px-[100px] pb-10 box-border max-w-full text-left text-lg text-black font-['Space_Grotesk'] mq800:pl-[25px] mq800:pr-[25px] mq800:box-border mq1350:pl-[50px] mq1350:pr-[50px] mq1350:box-border ${className}`}>
      <div className="w-full max-w-[1240px] flex flex-col gap-[30px] mq800:gap-[15px]">
        
        {/* Header */}
        <div className="flex items-center gap-10 max-w-full mq1125:flex-wrap mb-[50px] mq800:mb-[25px]">
          <Heading
            property1="Green"
            label="My Working Process"
            showLabel={false}
            labelVisible={false}
          />
          <div className="w-[580px] relative inline-block shrink-0 max-w-full">
            A clear, step-by-step approach focused on delivering results, efficiency, and long-term value.
          </div>
        </div>

        {/* Process Cards */}
        <div className="w-full flex flex-col gap-[30px] mq800:gap-[15px]">
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
