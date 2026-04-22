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
  return (
    <section
      id="case-studies"
      className={`w-full flex justify-center font-['Space_Grotesk'] ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 md:gap-16 px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-10">
          <Heading
            property1="Green"
            label="Case Studies"
            showLabel={false}
            labelVisible={false}
          />
          <p className="text-base md:text-lg text-black max-w-xl leading-relaxed">
            Explore real examples of how strategic design and development
            improved performance, usability, and business outcomes.
          </p>
        </div>

        {/* Grid */}
        <div className="w-full rounded-3xl md:rounded-[45px] bg-dark overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {studies.map((desc, i) => {
              // Borders: bottom for all except last row; right for non-last column
              const isLastRow_1col = i === studies.length - 1;
              const isLastRow_2col = i >= studies.length - (studies.length % 2 === 0 ? 2 : 1);
              const isLastRow_3col = i >= studies.length - (studies.length % 3 === 0 ? 3 : studies.length % 3);

              return (
                <div
                  key={i}
                  className={`
                    flex p-6 md:p-8 lg:p-10
                    ${!isLastRow_1col ? "border-b border-white md:border-b-0" : ""}
                    ${!isLastRow_2col ? "md:border-b md:border-white" : ""}
                    ${!isLastRow_3col ? "lg:border-b lg:border-white" : ""}
                    ${i % 2 !== 0 ? "md:border-l md:border-white" : ""}
                    ${i % 3 !== 0 ? "lg:border-l lg:border-white" : ""}
                  `}
                >
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
