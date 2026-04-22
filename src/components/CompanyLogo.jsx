import { useMemo } from "react";
import PropTypes from "prop-types";

const getVectorStyle = (styleKey) => {
  switch (styleKey) {
    case "Hubspot":
      return "[&]:h-[56.04%] [&]:w-[99.69%] [&]:top-[27.29%] [&]:right-[0.31%] [&]:bottom-[16.67%] [&]:left-[0%]";
  }
};
const getVector1Style = (styleKey) => {
  switch (styleKey) {
    case "Hubspot":
      return "[&]:h-[65.42%] [&]:w-[26.36%] [&]:top-[16.67%] [&]:right-[9.41%] [&]:bottom-[17.92%] [&]:left-[64.23%] [&]:z-[1]";
  }
};

const CompanyLogo = ({
  className = "",
  company = "Adobe",
  companyLogoWidth,
  vector,
  vector1,
}) => {
  const variantKey = `${company}`;

  const companyLogoStyle = useMemo(() => {
    return {
      width: companyLogoWidth,
    };
  }, [companyLogoWidth]);

  return (
    <div
      className={`h-12 w-[124.1px] relative overflow-hidden shrink-0 mix-blend-luminosity ${className}`}
      style={companyLogoStyle}
    >
      <img
        className={`absolute h-[27.29%] w-[52.86%] top-[66.46%] right-[33.12%] bottom-[6.25%] left-[14.02%] max-w-full overflow-hidden max-h-full ${getVectorStyle(variantKey)}`}
        alt=""
        src={vector}
      />
      <img
        className={`absolute h-[40.63%] w-[99.6%] top-[25%] right-[0.4%] bottom-[34.38%] left-[0%] max-w-full overflow-hidden max-h-full ${getVector1Style(variantKey)}`}
        alt=""
        src={vector1}
      />
    </div>
  );
};

CompanyLogo.propTypes = {
  className: PropTypes.string,
  vector: PropTypes.string,
  vector1: PropTypes.string,

  /** Variant props */
  company: PropTypes.string,

  /** Style props */
  companyLogoWidth: PropTypes.string,
};

export default CompanyLogo;
