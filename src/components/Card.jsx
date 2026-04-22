import { useMemo } from "react";
import Heading from "./Heading";
import PropTypes from "prop-types";

const Card = ({
  className = "",
  cardBackgroundColor,
  headingAndLinkJustifyContent,
  illustration,
  illustrationIconHeight,
  property1 = "Green",
  label,
  label1,
  label2,
  description,
  textColor = "text-black",
  showLabel,
  labelVisible,
  labelWidth,
  labelHeight,
}) => {
  const cardStyle = useMemo(() => {
    return {
      backgroundColor: cardBackgroundColor,
    };
  }, [cardBackgroundColor]);

  const headingAndLinkStyle = useMemo(() => {
    return {
      justifyContent: headingAndLinkJustifyContent,
    };
  }, [headingAndLinkJustifyContent]);

  const illustrationIconStyle = useMemo(() => {
    return {
      height: illustrationIconHeight,
    };
  }, [illustrationIconHeight]);

  return (
    <div
      className={`flex-1 min-w-[350px] max-w-[600px] shadow-[0px_5px_0px_#191a23] rounded-[45px] bg-grey border-dark border-solid border-[1px] box-border overflow-hidden flex items-center justify-between py-12 px-[50px] gap-5 text-left text-xl text-black font-['Space_Grotesk'] mq800:gap-5 mq800:pl-[25px] mq800:pr-[25px] mq800:box-border ${className}`}
      style={cardStyle}
    >
      <div
        className="flex flex-col items-start justify-center gap-5"
        style={headingAndLinkStyle}
      >
        <Heading
          property1={property1}
          label={label}
          labelWidth={labelWidth}
          labelHeight={labelHeight}
          label1={label1}
          showLabel={showLabel}
          labelWidth1="unset"
          labelHeight1="unset"
          label2={label2}
          labelVisible={labelVisible}
        />
        <div className={`w-[287px] text-lg leading-7 ${textColor} font-['Space_Grotesk'] mq450:text-base`}>
          {description}
        </div>
      </div>
      <img
        className="h-[170px] w-[210px] relative object-cover"
        alt=""
        src={illustration}
        style={illustrationIconStyle}
      />
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  illustration: PropTypes.string,
  property1: PropTypes.any,
  label: PropTypes.string,
  label1: PropTypes.string,
  label2: PropTypes.string,
  description: PropTypes.string,
  textColor: PropTypes.string,
  showLabel: PropTypes.bool,
  labelVisible: PropTypes.bool,
  labelWidth: PropTypes.any,
  labelHeight: PropTypes.any,

  /** Style props */
  cardBackgroundColor: PropTypes.string,
  headingAndLinkJustifyContent: PropTypes.string,
  illustrationIconHeight: PropTypes.string,
};

export default Card;
