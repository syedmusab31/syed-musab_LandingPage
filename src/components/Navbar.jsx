import Logo from "./Logo";
import Button from "./Button";
import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Adding a slight offset for visual comfort if needed, but smooth scrolling to element is generally fine.
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className={`w-full overflow-hidden flex items-center justify-between py-0 px-[100px] box-border gap-5 text-left text-xl text-black font-['Space_Grotesk'] mq1125:gap-5 mq800:gap-5 mq800:pl-[25px] mq800:pr-[25px] mq800:box-border mq1350:gap-5 mq1350:pl-[50px] mq1350:pr-[50px] mq1350:box-border ${className}`}>
      <div className="overflow-hidden flex items-start py-1.5 px-0">
        <Logo property1="Default" />
      </div>
      <div className="flex items-center justify-center gap-10 mq1125:hidden mq450:gap-5">
        <h3 onClick={() => scrollToSection('services')} className="cursor-pointer hover:text-green transition-colors m-0 relative text-[length:inherit] leading-7 font-normal font-[inherit]">
          Services
        </h3>
        <h3 onClick={() => scrollToSection('case-studies')} className="cursor-pointer hover:text-green transition-colors m-0 relative text-[length:inherit] leading-7 font-normal font-[inherit]">
          Case Studies
        </h3>
        <h3 onClick={() => scrollToSection('working-process')} className="cursor-pointer hover:text-green transition-colors m-0 relative text-[length:inherit] leading-7 font-normal font-[inherit]">
          Working Process
        </h3>
        <div onClick={() => scrollToSection('contact')}>
          <Button
            property1="Button secondary"
            buttonAlignItems="flex-start"
            buttonWidth="unset"
            buttonJustifyContent="unset"
            label="Request a quote"
          />
        </div>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
