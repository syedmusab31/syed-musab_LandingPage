import PropTypes from "prop-types";

const Card1 = ({ className = "", quote, name, title, mobile = false }) => {
  if (mobile) {
    // Fluid version for mobile/tablet – same visual design, no fixed pixel widths
    return (
      <section
        className={`flex flex-col items-end gap-5 w-full text-left text-lg text-[#fff] font-['Space_Grotesk'] ${className}`}
      >
        {/* Quote bubble */}
        <div className="relative w-full border border-[#b9ff66] rounded-[20px] sm:rounded-[30px] px-5 sm:px-8 py-6 sm:py-8">
          <p className="text-sm sm:text-base leading-relaxed text-white m-0">
            {quote}
          </p>
          {/* Speech-bubble tail */}
          <div className="absolute -bottom-[18px] left-[40px] w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[18px] border-t-[#b9ff66] z-[1]" />
          <div className="absolute -bottom-[14px] left-[42px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[14px] border-t-dark z-[2]" />
        </div>

        {/* Name & Title */}
        <div className="pt-4 pl-1 w-full">
          <p className="text-[#b9ff66] font-medium text-base sm:text-lg m-0">{name}</p>
          <p className="text-white text-sm sm:text-base m-0">{title}</p>
        </div>
      </section>
    );
  }

  // Original desktop version – pixel-perfect, unchanged
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
        <span className="text-lg text-[#fff]">{title}</span>
      </div>
    </section>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  quote: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  mobile: PropTypes.bool,
};

export default Card1;
