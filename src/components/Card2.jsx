import { useMemo } from "react";
import PlusIcon from "./PlusIcon";
import PropTypes from "prop-types";

const Card2 = ({
  className = "",
  placeholder,
  researchAndStrategyDevelopment,
  researchAndStrategyColor,
  property1 = "Plus",
}) => {
  const researchAndStrategyStyle = useMemo(() => {
    return {
      color: researchAndStrategyColor,
    };
  }, [researchAndStrategyColor]);

  return (
    <section
      className={`w-[1234px] shadow-[0px_5px_0px_#191a23] rounded-[45px] bg-grey border-dark border-solid border-[1px] box-border overflow-hidden flex flex-col items-start py-[39px] pl-[60px] pr-[55px] max-w-full text-left text-6xl text-black font-['Space_Grotesk'] mq1350:pl-[30px] mq1350:pr-[27px] mq1350:box-border ${className}`}
    >
      <div className="w-[1117px] overflow-hidden flex items-center justify-between gap-5 max-w-full">
        <div className="flex items-center gap-[25px] max-w-full mq1125:flex-wrap">
          <h2 className="m-0 relative text-[length:inherit] font-medium font-[inherit] mq450:text-4xl mq800:text-5xl">
            {placeholder}
          </h2>
          <h2
            className="m-0 w-[612px] relative text-3xl font-medium font-[inherit] inline-block shrink-0 max-w-full mq450:text-lg mq800:text-2xl"
            style={researchAndStrategyStyle}
          >
            {researchAndStrategyDevelopment}
          </h2>
        </div>
        <PlusIcon property1={property1} placeholders="/Placeholders.svg" />
      </div>
    </section>
  );
};

Card2.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  researchAndStrategyDevelopment: PropTypes.string,
  property1: PropTypes.any,

  /** Style props */
  researchAndStrategyColor: PropTypes.string,
};

export default Card2;
