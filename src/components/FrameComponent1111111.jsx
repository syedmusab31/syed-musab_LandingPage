import Heading from "./Heading";
import Button from "./Button";
import PropTypes from "prop-types";

const FrameComponent1111111 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start pt-0 px-0 pb-10 box-border gap-20 max-w-full text-left text-lg text-black font-['Space_Grotesk'] mq450:gap-5 mq800:gap-10 ${className}`}
    >
      <div className="self-stretch flex items-start py-0 px-[100px] box-border gap-10 max-w-full mq450:gap-5 mq450:pl-5 mq450:pr-5 mq450:box-border mq800:flex-wrap mq800:pl-[50px] mq800:pr-[50px] mq800:box-border">
        <Heading
          property1="Green"
          label="Contact Us"
          labelWidth="unset"
          labelHeight="unset"
          label1="Label"
          showLabel
          labelWidth1="unset"
          labelHeight1="unset"
          label2="Label"
          labelVisible
        />
        <div className="w-[323px] relative inline-block shrink-0 max-w-full">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </div>
      </div>
      <div className="self-stretch flex items-center py-0 px-[100px] mq450:pl-5 mq450:pr-5 mq450:box-border mq800:pl-[50px] mq800:pr-[50px] mq800:box-border">
        <div className="w-[1240px] rounded-[45px] bg-grey flex items-start pt-[60px] px-[100px] pb-20 box-border shrink-0 z-[1] mq450:pt-[25px] mq450:px-5 mq450:pb-[34px] mq450:box-border mq800:pt-[39px] mq800:px-[50px] mq800:pb-[52px] mq800:box-border">
          <div className="flex flex-col items-start gap-10 mq800:gap-5">
            <div className="flex items-start gap-[35px] mq450:gap-[17px]">
              <div className="h-7 w-24 flex items-start gap-3.5">
                <input
                  className="cursor-pointer m-0 h-7 w-7 relative rounded-[29px] bg-[#fff] border-black border-solid border-[1px] box-border"
                  type="radio"
                />
                <div className="flex flex-col items-start pt-0.5 px-0 pb-0">
                  <div className="w-[54px] h-[23px] relative inline-block">
                    Say Hi
                  </div>
                </div>
              </div>
              <div className="h-7 w-[145px] flex items-start gap-3.5">
                <input
                  className="cursor-pointer m-0 h-[30px] w-[30px] relative rounded-[29px] bg-[#fff] border-black border-solid border-[1px] box-border"
                  type="radio"
                />
                <div className="flex flex-col items-start pt-0.5 px-0 pb-0">
                  <div className="w-[103px] h-[23px] relative inline-block">
                    Get a Quote
                  </div>
                </div>
              </div>
            </div>
            <section className="flex flex-col items-start gap-[25px] text-left text-base text-black font-['Space_Grotesk']">
              <div className="flex flex-col items-start gap-[5px]">
                <div className="relative leading-7">Name</div>
                <div className="w-[556px] rounded-[14px] bg-[#fff] border-black border-solid border-[1px] box-border overflow-hidden flex items-start py-4 px-[30px]">
                  <input
                    className="w-full [border:none] [outline:none] font-['Space_Grotesk'] text-lg bg-[transparent] h-[23px] relative text-[#898989] text-left inline-block min-w-[29px] p-0"
                    placeholder="Name"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-[5px]">
                <div className="relative leading-7">Email*</div>
                <div className="w-[556px] rounded-[14px] bg-[#fff] border-black border-solid border-[1px] box-border overflow-hidden flex items-start py-4 px-[30px]">
                  <input
                    className="w-full [border:none] [outline:none] font-['Space_Grotesk'] text-lg bg-[transparent] h-[23px] relative text-[#898989] text-left inline-block min-w-[27px] p-0"
                    placeholder="Email"
                    type="text"
                  />
                </div>
              </div>
              <div className="h-[223px] flex flex-col items-start gap-[5px]">
                <div className="relative leading-7">Message*</div>
                <textarea
                  className="border-black border-solid border-[1px] bg-[#fff] h-[190px] w-[556px] [outline:none] rounded-[14px] box-border overflow-hidden shrink-0 flex items-start py-[18px] px-[30px] font-['Space_Grotesk'] text-lg text-[#898989]"
                  placeholder="Message"
                  rows={10}
                  cols={28}
                />
              </div>
            </section>
            <Button
              property1="Button primary"
              buttonAlignItems="center"
              buttonWidth="556px"
              buttonJustifyContent="center"
              label="Send Message"
            />
          </div>
        </div>
        <img
          className="h-[648px] w-[691.6px] relative object-contain z-[2] ml-[-367px] shrink-0"
          alt=""
          src="/Illustration5@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent1111111.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1111111;
