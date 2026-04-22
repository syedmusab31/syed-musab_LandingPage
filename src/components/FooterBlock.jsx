import PropTypes from "prop-types";

const FooterBlock = ({ className = "" }) => {
  return (
    <section className={`w-full flex justify-center pt-0 px-[100px] pb-0 box-border max-w-full text-left text-lg text-[#fff] font-['Space_Grotesk'] mq800:pl-[25px] mq800:pr-[25px] mq800:box-border mq1350:pl-[50px] mq1350:pr-[50px] mq1350:box-border ${className}`}>
      <div className="w-full max-w-[1240px]">
        <footer className="w-full rounded-t-[45px] bg-dark flex items-center justify-center py-[50px] px-5 box-border">
          <div className="relative leading-7 text-center">
            © 2023 Positivus. All Rights Reserved.
          </div>
        </footer>
      </div>
    </section>
  );
};

FooterBlock.propTypes = {
  className: PropTypes.string,
};

export default FooterBlock;
