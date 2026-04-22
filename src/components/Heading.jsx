import { useMemo } from "react";
import PropTypes from "prop-types";

const getHeadingStyle = (styleKey) => {
  switch (styleKey) {
    case "White":
      return "[&]:[border:unset] [&]:p-[unset] [&]:bg-[unset]";
  }
};
const getLabelContainerStyle = (styleKey) => {
  switch (styleKey) {
    case "White":
      return "[&]:bg-[#fff]";
  }
};
const getLabelTextStyle = (styleKey) => {
  switch (styleKey) {
    case "White":
      return "[&]:text-3xl [&]:m-0";
  }
};
const getLabelContainer1Style = (styleKey) => {
  switch (styleKey) {
    case "White":
      return "[&]:bg-[#fff] [&]:flex";
  }
};
const getLabelText1Style = (styleKey) => {
  switch (styleKey) {
    case "White":
      return "[&]:text-3xl [&]:m-0";
  }
};
const getLabelContainer2Style = (styleKey) => {
  switch (styleKey) {
    case "White":
      return "[&]:bg-[#fff]";
  }
};

const Heading = ({
  className = "",
  property1 = "Green",
  label,
  labelWidth,
  labelHeight,
  label1,
  showLabel,
  labelWidth1,
  labelHeight1,
  label2,
  labelVisible,
}) => {
  const variantKey = `${property1}`;

  const labelStyle = useMemo(() => {
    return {
      width: labelWidth,
      height: labelHeight,
    };
  }, [labelWidth, labelHeight]);

  const label1Style = useMemo(() => {
    return {
      width: labelWidth1,
      height: labelHeight1,
    };
  }, [labelWidth1, labelHeight1]);

  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start ${getHeadingStyle(variantKey)} ${className}`}
    >
      <div
        className={`rounded-[7px] bg-green flex flex-col items-start py-0 px-[7px] shrink-0 ${getLabelContainerStyle(variantKey)}`}
      >
        <div
          className={`relative text-[40px] font-medium font-['Space_Grotesk'] text-black text-left ${getLabelTextStyle(variantKey)}`}
        >
          {label}
        </div>
      </div>
      <div
        className={`rounded-[7px] bg-green hidden flex-col items-start py-0 px-[7px] shrink-0 ${getLabelContainer1Style(variantKey)}`}
        style={labelStyle}
      >
        {!!showLabel && (
          <div
            className={`relative text-[40px] font-medium font-['Space_Grotesk'] text-black text-left ${getLabelText1Style(variantKey)}`}
          >
            {label1}
          </div>
        )}
      </div>
      <div
        className={`rounded-[7px] bg-green hidden flex-col items-start py-0 px-[7px] shrink-0 ${getLabelContainer2Style(variantKey)}`}
        style={label1Style}
      >
        {!!labelVisible && (
          <div className="relative text-[40px] font-medium font-['Space_Grotesk'] text-black text-left">
            {label2}
          </div>
        )}
      </div>
    </button>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  label1: PropTypes.string,
  showLabel: PropTypes.bool,
  label2: PropTypes.string,
  labelVisible: PropTypes.bool,

  /** Variant props */
  property1: PropTypes.string,

  /** Style props */
  labelWidth: PropTypes.string,
  labelHeight: PropTypes.string,
  labelWidth1: PropTypes.string,
  labelHeight1: PropTypes.string,
};

export default Heading;
