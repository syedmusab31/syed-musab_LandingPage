import PropTypes from "prop-types";

const getPlaceholdersIconStyle = (styleKey) => {
  switch (styleKey) {
    case "Minus":
      return "[&]:[filter:brightness(0)_saturate(100%)_invert(0%)_sepia(98%)_saturate(9%)_hue-rotate(166deg)_brightness(92%)_contrast(100%)] [&]:h-[9.66%] [&]:w-[30.69%] [&]:top-[44.83%] [&]:right-[34.83%] [&]:bottom-[45.52%] [&]:left-[34.48%]";
  }
};

const PlusIcon = ({ className = "", property1 = "Plus", placeholders }) => {
  const variantKey = `${property1}`;

  return (
    <div className={`h-[58px] w-[58px] relative ${className}`}>
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[50%] bg-grey border-dark border-solid border-[0px] box-border" />
      <img
        className={`absolute h-[43.28%] w-[43.28%] top-[27.59%] right-[29.14%] bottom-[29.14%] left-[27.59%] max-w-full overflow-hidden max-h-full z-[1] ${getPlaceholdersIconStyle(variantKey)}`}
        alt=""
        src={placeholders}
      />
    </div>
  );
};

PlusIcon.propTypes = {
  className: PropTypes.string,
  placeholders: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default PlusIcon;
