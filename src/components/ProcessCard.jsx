const ProcessCard = ({ number, title, description, isActive, onClick }) => {
  return (
    <div
      className={`w-full shadow-[0px_5px_0px_#191a23] rounded-3xl md:rounded-[45px] border-dark border-solid border-[1px] box-border overflow-hidden flex flex-col py-6 px-4 sm:py-8 sm:px-6 md:py-10 md:px-10 lg:py-[39px] lg:px-[60px] text-left text-black font-['Space_Grotesk'] transition-colors duration-300 cursor-pointer ${isActive ? "bg-green" : "bg-grey"}`}
      onClick={onClick}
    >
      {/* Header row */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 md:gap-[25px] flex-wrap min-w-0">
          <h2 className="m-0 text-4xl sm:text-5xl md:text-6xl font-medium leading-none flex-shrink-0">
            {number}
          </h2>
          <h3 className="m-0 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-tight">
            {title}
          </h3>
        </div>

        {/* Plus/Minus Icon */}
        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-[58px] md:h-[58px] flex-shrink-0 rounded-full border border-dark flex items-center justify-center bg-grey transition-transform duration-300">
          {isActive ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          )}
        </div>
      </div>

      {/* Animated Description */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isActive ? "grid-rows-[1fr] opacity-100 mt-5 md:mt-[30px]" : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-black pt-4 md:pt-[30px] text-base md:text-lg leading-relaxed">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
