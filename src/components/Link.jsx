import PropTypes from "prop-types";

const getLabelText42Style = (styleKey) => {
  switch (styleKey) {
    case "White 2":
      return "[&]:text-[#fff]";
  }
};

const Link = ({ className = "", property1 = "White", icon }) => {
  const variantKey = `${property1}`;

  return (
    <div
      className={`flex items-center gap-[15px] text-left text-xl text-black font-['Space_Grotesk'] ${className}`}
    >
      <img className="h-[41px] w-[41px] relative" alt="" src={icon} />
      <h3
        className={`m-0 relative text-[length:inherit] leading-7 font-normal font-[inherit] ${getLabelText42Style(variantKey)}`}
      >
        Learn more
      </h3>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,
};

export default Link;
