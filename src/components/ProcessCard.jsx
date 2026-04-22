const ProcessCard = ({ number, title, description, isActive, onClick }) => {
  return (
    <div 
      className={`w-full shadow-[0px_5px_0px_#191a23] rounded-[45px] border-dark border-solid border-[1px] box-border overflow-hidden flex flex-col py-[39px] px-[60px] max-w-full text-left text-black font-['Space_Grotesk'] transition-colors duration-300 cursor-pointer mq1350:px-[30px] mq450:py-[30px] mq450:px-5 ${isActive ? 'bg-green' : 'bg-grey'}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between gap-5 max-w-full">
        <div className="flex items-center gap-[25px] max-w-full mq1125:flex-wrap">
          <h1 className="m-0 text-6xl font-medium mq450:text-4xl mq800:text-5xl">
            {number}
          </h1>
          <h2 className="m-0 text-3xl font-medium mq450:text-lg mq800:text-2xl">
            {title}
          </h2>
        </div>
        
        {/* Plus/Minus Icon */}
        <div className="w-[58px] h-[58px] shrink-0 rounded-full border border-dark flex items-center justify-center bg-grey transition-transform duration-300">
          {isActive ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </div>
      </div>
      
      {/* Animated Description Content */}
      <div className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-[30px]' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
        <div className="overflow-hidden">
          <div className="border-t border-black pt-[30px] text-lg">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
