import { useMemo } from "react";
import PropTypes from "prop-types";

const getLogoContainerStyle = (styleKey) => {
  switch (styleKey) {
    case "Variant2":
      return "[&]:gap-[10.6px]";
  }
};
const getIconStyle = (styleKey) => {
  switch (styleKey) {
    case "Variant2":
      return "[&]:[filter:brightness(0)_saturate(100%)_invert(100%)_sepia(100%)_saturate(0%)_hue-rotate(342deg)_brightness(106%)_contrast(101%)] [&]:h-[29px] [&]:w-[29.5px]";
  }
};
const getFrameContainerStyle = (styleKey) => {
  switch (styleKey) {
    case "Variant2":
      return "[&]:h-[25.4px] [&]:w-[139.9px] [&]:pt-[2.4px] [&]:px-0 [&]:pb-0";
  }
};
const getPositivusStyle = (styleKey) => {
  switch (styleKey) {
    case "Variant2":
      return "[&]:w-[139.9px] [&]:h-[23px]";
  }
};

const Logo = ({
  className = "",
  property1 = "Default",
  logoHeight,
  logoWidth,
}) => {
  const variantKey = `${property1}`;

  const logoStyle = useMemo(() => {
    return {
      height: logoHeight,
      width: logoWidth,
    };
  }, [logoHeight, logoWidth]);

  return (
    <div
      className={`h-9 w-[219.5px] flex items-start gap-[12.9px] ${getLogoContainerStyle(variantKey)} ${className}`}
      style={logoStyle}
    >
      {/* <img
        className={`h-9 w-9 relative ${getIconStyle(variantKey)}`}
        alt=""
        src="/Icon.svg"
      /> */}
      <div
        className={`h-[31.6px] w-[170.6px] flex flex-col items-start pt-[3px] px-0 pb-0 box-border ${getFrameContainerStyle(variantKey)}`}
      >
        {/* <img
          className={`w-[170.6px] h-[28.6px] relative ${getPositivusStyle(variantKey)}`}
          loading="lazy"
          alt=""
          src="/Positivus.svg"
        /> */}

        <span className="text-xl lg:text-2xl text-black bg-[#b9ff66] lg:px-3 lg:py-1 lg:rounded-md">Syed Musab</span>
      </div>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.string,

  /** Style props */
  logoHeight: PropTypes.string,
  logoWidth: PropTypes.string,
};

export default Logo;
