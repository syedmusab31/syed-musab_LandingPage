import { useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import PropTypes from "prop-types";

const Navbar = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 bg-white w-full border-b border-gray-100 font-['Space_Grotesk'] ${className}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 lg:px-12 py-3 md:py-4">
        {/* Logo */}
        <div
          className="cursor-pointer flex-shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Logo property1="Default" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-xl text-black">
          <span
            onClick={() => scrollToSection("services")}
            className="cursor-pointer hover:text-green transition-colors duration-200"
          >
            Services
          </span>
          <span
            onClick={() => scrollToSection("case-studies")}
            className="cursor-pointer hover:text-green transition-colors duration-200"
          >
            Case Studies
          </span>
          <span
            onClick={() => scrollToSection("working-process")}
            className="cursor-pointer hover:text-green transition-colors duration-200"
          >
            Working Process
          </span>
          <div onClick={() => scrollToSection("contact")}>
            <Button
              property1="Button secondary"
              buttonAlignItems="flex-start"
              buttonWidth="unset"
              buttonJustifyContent="unset"
              label="Request a quote"
            />
          </div>
        </nav>

        {/* Hamburger Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer bg-transparent border-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-start gap-4 px-4 pb-6 pt-2 bg-white border-t border-gray-100 text-xl text-black">
          <span
            onClick={() => scrollToSection("services")}
            className="cursor-pointer hover:text-green transition-colors duration-200 w-full py-2"
          >
            Services
          </span>
          <span
            onClick={() => scrollToSection("case-studies")}
            className="cursor-pointer hover:text-green transition-colors duration-200 w-full py-2"
          >
            Case Studies
          </span>
          <span
            onClick={() => scrollToSection("working-process")}
            className="cursor-pointer hover:text-green transition-colors duration-200 w-full py-2"
          >
            Working Process
          </span>
          <div onClick={() => scrollToSection("contact")} className="pt-2">
            <Button
              property1="Button secondary"
              buttonAlignItems="flex-start"
              buttonWidth="unset"
              buttonJustifyContent="unset"
              label="Request a quote"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
