import React, { useState } from "react";
import Heading from "./Heading";
import Card1 from "./Card1";
import PropTypes from "prop-types";

const testimonials = [
  {
    quote: "“The system Musab developed replaced our spreadsheet-based workflow completely. It made our operations faster, more accurate, and much easier to manage on a daily basis.”",
    name: "Aaron Bloyer",
    title: "Founder, Audatime LLC (USA)"
  },
  {
    quote: "“He created a clean and professional landing page that clearly communicates our mission and services. It helped us present our business with much more confidence.”",
    name: "Ramsey Paye Willie",
    title: "Founder, Happy AgriCompany (Liberia)"
  },
  {
    quote: "“The application improved our workflow speed and reliability significantly. Tasks that used to take longer are now handled much more efficiently.”",
    name: "Bill",
    title: "Government Sector (South Africa)"
  },
  {
    quote: "“The website gave our product a strong and professional presence. The structure and clarity made it much easier for users to understand what we offer.”",
    name: "Mohsin Bajja",
    title: "Product Owner (Morocco)"
  },
  {
    quote: "“Musab built a system that allowed us to launch and operate smoothly from the start. It matched our business needs perfectly.”",
    name: "Aldo",
    title: "Founder, TalentMesh (UK)"
  },
  {
    quote: "“Combining our application with a proper website improved how we present our business. It made a big difference in how clients and partners perceive us.”",
    name: "Martin",
    title: "Founder, Shipday (Switzerland)"
  }
];

const StarIcon = ({ filled, onClick }) => (
  <svg 
    onClick={onClick}
    className="cursor-pointer transition-colors duration-300"
    width="14" 
    height="14" 
    viewBox="0 0 14 14" 
    fill={filled ? "#b9ff66" : "none"} 
    stroke={filled ? "none" : "white"} 
    strokeWidth="1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M7 0L9.16315 4.38197L14 5.08418L10.5 8.49757L11.3263 13.3158L7 11.0396L2.6737 13.3158L3.5 8.49757L0 5.08418L4.83685 4.38197L7 0Z" />
  </svg>
);

const Testimonials = ({ className = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => setActiveIndex(Math.max(0, activeIndex - 1));
  const handleNext = () => setActiveIndex(Math.min(testimonials.length - 1, activeIndex + 1));

  // Base layout from original FrameComponent111111:
  // Using explicit w-[1440px] layout trick with ml-[-346px] for centering
  // But adjusted so we slide the items smoothly using transform.
  
  return (
    <section
      className={`self-stretch flex flex-col items-start pt-0 px-0 pb-10 box-border gap-20 max-w-full text-left text-lg text-black font-['Space_Grotesk'] mq450:gap-5 mq800:gap-10 ${className}`}
    >
      <div className="self-stretch flex items-start py-0 px-[100px] box-border gap-10 max-w-full mq1125:flex-wrap mq1125:pl-[50px] mq1125:pr-[50px] mq1125:box-border mq800:gap-5 mq800:pl-[25px] mq800:pr-[25px] mq800:box-border">
        <Heading
          property1="Green"
          label="Testimonials"
          labelWidth="unset"
          labelHeight="unset"
          label1="Label"
          showLabel
          labelWidth1="unset"
          labelHeight1="unset"
          label2="Label"
          labelVisible
        />
        <div className="w-[473px] relative inline-block shrink-0 max-w-full">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </div>
      </div>
      
      <div className="flex items-start py-0 px-[100px] box-border max-w-full w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-[50px] mq800:pr-[50px] mq800:box-border">
        <div className="w-[1240px] rounded-[45px] bg-dark overflow-hidden shrink-0 flex items-start pt-[84px] px-0 pb-[68px] box-border max-w-full mq800:pt-[55px] mq800:pb-11 mq800:box-border relative">
          
          <div className="w-[1240px] flex flex-col items-center gap-[124px] shrink-0 mq450:gap-[31px] mq800:gap-[62px]">
            
            {/* Carousel Slider Track */}
            <div className="w-[1240px] h-[350px] overflow-visible relative">
              <div 
                className="absolute top-0 flex items-start gap-5 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${317 - activeIndex * 626}px)` }}
              >
                {testimonials.map((testimonial, index) => {
                  if (index === activeIndex) {
                    return (
                      <section key={index} className="flex flex-col items-end gap-5 shrink-0 text-left text-lg text-[#fff] font-['Space_Grotesk']">
                        <div className="w-[606px] h-[266px] flex items-start">
                          <div className="h-[266px] w-[606px] relative">
                            <div className="absolute top-[0px] left-[0px] bg-dark w-full h-full">
                              <img
                                className="absolute top-[0px] left-[0px] rounded-[45px] w-[606px] h-[238px]"
                                alt=""
                              />
                              <img
                                className="absolute top-[227.1px] left-[51px] w-16 h-[38.9px] object-contain z-[1]"
                                alt=""
                              />
                            </div>
                            <div className="absolute top-[48px] left-[52px] inline-block w-[502px] z-[2]">
                              {testimonial.quote}
                            </div>
                          </div>
                        </div>
                        <div className="w-[526px] relative inline-block text-xl text-green">
                          <span className="font-medium">
                            {testimonial.name}
                            <br />
                          </span>
                          <span className="text-lg text-[#fff]">
                            {testimonial.title}
                          </span>
                        </div>
                      </section>
                    );
                  } else {
                    return (
                      <Card1 
                        key={index}
                        quote={testimonial.quote}
                        name={testimonial.name}
                        title={testimonial.title}
                      />
                    );
                  }
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="w-[564px] flex items-center justify-between gap-5 relative z-10 px-5 box-border max-w-full">
              <img 
                className={`h-5 w-5 relative cursor-pointer ${activeIndex === 0 ? "opacity-50" : "opacity-100"}`} 
                alt="Prev" 
                src="/Arrow-left.svg" 
                onClick={handlePrev}
              />
              
              {/* Stars Navigation */}
              <div className="flex items-center gap-[19px]">
                {testimonials.map((_, idx) => (
                  <StarIcon 
                    key={idx} 
                    filled={idx === activeIndex} 
                    onClick={() => setActiveIndex(idx)} 
                  />
                ))}
              </div>

              <img 
                className={`h-5 w-5 relative object-contain cursor-pointer ${activeIndex === testimonials.length - 1 ? "opacity-50" : "opacity-100"}`} 
                alt="Next" 
                src="/Arrow-right@2x.png" 
                onClick={handleNext}
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
