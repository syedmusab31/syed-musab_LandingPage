import PropTypes from "prop-types";

const Card1 = ({ className = "", quote, name, title }) => {
  return (
    <section
      className={`flex flex-col items-end gap-5 shrink-0 text-left text-lg text-[#fff] font-['Space_Grotesk'] ${className}`}
    >
      <div className="w-[606px] h-[266px] flex items-start">
        <div className="h-[266px] w-[606px] relative bg-dark shrink-0">
          <img
            className="absolute top-[0px] left-[0px] rounded-[45px] w-[606px] h-[238px]"
            alt=""
          />
          <img
            className="absolute top-[227.1px] left-[51px] w-16 h-[38.9px] object-contain z-[1]"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="flex flex-col items-start pt-12 px-0 pb-0 ml-[-554px] relative">
          <div className="w-[502px] h-[138px] relative inline-block shrink-0 z-[2]">
            {quote}
          </div>
        </div>
      </div>
      <div className="w-[526px] relative inline-block text-xl text-green">
        <span className="font-medium">
          {name}
          <br />
        </span>
        <span className="text-lg text-[#fff]">
          {title}
        </span>
      </div>
    </section>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  quote: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};

export default Card1;
