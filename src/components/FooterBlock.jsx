import PropTypes from "prop-types";

const FooterBlock = ({ className = "" }) => {
  return (
    <section
      className={`w-full flex justify-center font-['Space_Grotesk'] ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <footer className="w-full rounded-t-3xl md:rounded-t-[45px] bg-dark flex items-center justify-center py-8 md:py-12 px-5">
          <p className="text-base md:text-lg text-white text-center">
            © 2023 Positivus. All Rights Reserved.
          </p>
        </footer>
      </div>
    </section>
  );
};

FooterBlock.propTypes = {
  className: PropTypes.string,
};

export default FooterBlock;
