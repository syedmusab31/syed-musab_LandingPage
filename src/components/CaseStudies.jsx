import Heading from "./Heading";
import CaseStudy from "./CaseStudy";
import PropTypes from "prop-types";

const studies = [
  "For <span class=\"text-green\">Audatime LLC</span>, we replaced spreadsheet-based operations with a custom web system that automated workflows, <span class=\"text-green\">reduced manual work by over 60%</span>, and significantly <span class=\"text-green\">improved speed, accuracy, and day-to-day operational efficiency</span>.",
  "For <span class=\"text-green\">Happy AgriCompany</span>, we designed and developed a focused landing page that clarified messaging and structure, resulting in <span class=\"text-green\">stronger user engagement</span> and a <span class=\"text-green\">noticeable increase in trust and inbound inquiries</span>.",
  "For a <span class=\"text-green\">government sector project in South Africa</span>, we built a performance-focused web application that <span class=\"text-green\">reduced processing delays by over 40%</span> and <span class=\"text-green\">improved workflow speed</span>, making daily operations faster and more reliable.",
  "For a <span class=\"text-green\">product owner in Morocco</span>, we created a clean and structured business website that <span class=\"text-green\">improved product clarity</span>, <span class=\"text-green\">strengthened brand credibility</span>, and <span class=\"text-green\">increased user understanding and engagement</span>.",
  "For <span class=\"text-green\">TalentMesh in the UK</span>, we developed a custom web application that enabled a <span class=\"text-green\">smooth business launch</span>, <span class=\"text-green\">reduced operational setup time</span>, and provided a scalable system ready to handle real users and workflows.",
  "For <span class=\"text-green\">Shipday in Switzerland</span>, we transformed an existing application into a combined website and platform, improving presentation and structure, leading to <span class=\"text-green\">better client perception</span> and <span class=\"text-green\">stronger business positioning</span>."
];

const CaseStudies = ({ className = "" }) => {
    <section id="case-studies" className={`w-full flex justify-center pt-0 px-[100px] pb-10 box-border max-w-full text-left text-lg text-black font-['Space_Grotesk'] mq800:pl-[25px] mq800:pr-[25px] mq800:box-border mq1350:pl-[50px] mq1350:pr-[50px] mq1350:box-border ${className}`}>
      <div className="w-full max-w-[1240px] flex flex-col gap-20 mq450:gap-5 mq800:gap-10">
        <div className="flex items-start gap-10 max-w-full mq1125:flex-wrap">
          <Heading
            property1="Green"
            label="Case Studies"
            showLabel={false}
            labelVisible={false}
          />
          <div className="w-[580px] relative inline-block shrink-0 max-w-full">
            Explore real examples of how strategic design and development improved performance, usability, and business outcomes.
          </div>
        </div>
        
        <div className="w-full rounded-[45px] bg-dark py-[30px] px-[20px] box-border mq1350:px-[10px] mq450:py-[10px] mq450:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {studies.map((desc, i) => {
              let classes = "flex p-8 lg:p-[40px] ";
              
              if (i !== 5) {
                if (i < 3) {
                  classes += "border-b border-white ";
                } else {
                  classes += "border-b border-white lg:border-b-0 ";
                }
              }

              if (i % 3 !== 0) {
                classes += "lg:border-l lg:border-white ";
              }
              
              return (
                <div key={i} className={classes}>
                  <CaseStudy description={desc} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

CaseStudies.propTypes = {
  className: PropTypes.string,
};

export default CaseStudies;
