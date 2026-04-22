import { useMemo } from "react";
import PropTypes from "prop-types";

const getButtonStyle = (styleKey) => {
  switch (styleKey) {
    case "Button secondary":
      return "[&]:border-dark [&]:border-solid [&]:border-[1px] [&]:bg-[transparent] hover:bg-[#b9ff66] transition-colors duration-300";
    case "Button tertiary":
      return "[&]:bg-green";
  }
};
const getLabelText49Style = (styleKey) => {
  switch (styleKey) {
    case "Button secondary":
    case "Button tertiary":
      return "[&]:text-black";
  }
};

const Button = ({
  className = "",
  property1 = "Button primary",
  buttonAlignItems,
  buttonWidth,
  buttonJustifyContent,
  label,
}) => {
  const variantKey = `${property1}`;

  const buttonStyle = useMemo(() => {
    return {
      alignItems: buttonAlignItems,
      width: buttonWidth,
      justifyContent: buttonJustifyContent,
    };
  }, [buttonAlignItems, buttonWidth, buttonJustifyContent]);

  return (
    <button
      className={`cursor-pointer [border:none] py-5 px-[35px] bg-dark rounded-[14px] flex items-start ${getButtonStyle(variantKey)} ${className}`}
      style={buttonStyle}
    >
      <div
        className={`relative text-xl leading-7 font-['Space_Grotesk'] text-[#fff] text-center ${getLabelText49Style(variantKey)}`}
      >
        {label}
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,

  /** Style props */
  buttonAlignItems: PropTypes.string,
  buttonWidth: PropTypes.string,
  buttonJustifyContent: PropTypes.string,
};

export default Button;
