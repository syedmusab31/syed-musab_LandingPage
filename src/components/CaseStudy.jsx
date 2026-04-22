import PropTypes from "prop-types";

const CaseStudy = ({ className = "", description }) => {
  return (
    <div
      className={`flex flex-col items-start gap-5 text-left text-lg text-[#fff] font-['Space_Grotesk'] w-full ${className}`}
    >
      <div 
        className="w-full relative inline-block"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

CaseStudy.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
};

export default CaseStudy;
