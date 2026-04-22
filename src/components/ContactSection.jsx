import { useState } from "react";
import Heading from "./Heading";
import PropTypes from "prop-types";

const ContactSection = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle"); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setStatus("loading");

    try {
      // NOTE: Replace these placeholders with your actual EmailJS credentials
      const serviceId = "YOUR_SERVICE_ID";
      const templateId = "YOUR_TEMPLATE_ID";
      const publicKey = "YOUR_PUBLIC_KEY";

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
          }
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const errorText = await response.text();
        console.error("EmailJS Error:", errorText);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={`w-full flex justify-center pt-0 px-[100px] pb-20 box-border max-w-full text-left text-lg text-black font-['Space_Grotesk'] mq800:pl-[25px] mq800:pr-[25px] mq800:box-border mq1350:pl-[50px] mq1350:pr-[50px] mq1350:box-border ${className}`}>
      <div className="w-full max-w-[1240px] flex flex-col gap-20 mq450:gap-5 mq800:gap-10">
        
        {/* Header */}
        <div className="flex items-start gap-10 max-w-full mq1125:flex-wrap">
          <Heading
            property1="Green"
            label="Contact Us"
            showLabel={false}
            labelVisible={false}
          />
          <div className="w-[323px] relative inline-block shrink-0 max-w-full">
            Connect with Us: Let's Discuss Your Needs
          </div>
        </div>

        {/* Content Box */}
        <div className="w-full relative rounded-[45px] bg-grey flex flex-col items-start pt-[60px] px-[100px] pb-[60px] box-border max-w-full overflow-visible mq450:pt-[25px] mq450:px-5 mq450:pb-[34px] mq800:pt-[39px] mq800:px-[50px] mq800:pb-[52px]">
          
          <form onSubmit={handleSubmit} className="w-full max-w-[556px] flex flex-col items-start gap-[25px] relative z-10">
            {status === "success" && (
              <div className="w-full p-4 mb-4 rounded-[14px] bg-green border border-solid border-dark text-dark font-medium">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {status === "error" && (
              <div className="w-full p-4 mb-4 rounded-[14px] bg-red-100 border border-solid border-red-400 text-red-700 font-medium">
                Oops! Something went wrong. Make sure you've added your EmailJS credentials in the code.
              </div>
            )}

            <div className="w-full flex flex-col items-start gap-[5px]">
              <div className="relative leading-7 font-medium">Name</div>
              <div className="w-full rounded-[14px] bg-[#fff] border-black border-solid border-[1px] box-border overflow-hidden flex items-start py-4 px-[30px]">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full [border:none] [outline:none] font-['Space_Grotesk'] text-lg bg-[transparent] h-[23px] relative text-black placeholder:text-[#898989] text-left p-0"
                  placeholder="Name"
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="w-full flex flex-col items-start gap-[5px]">
              <div className="relative leading-7 font-medium">Email*</div>
              <div className="w-full rounded-[14px] bg-[#fff] border-black border-solid border-[1px] box-border overflow-hidden flex items-start py-4 px-[30px]">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full [border:none] [outline:none] font-['Space_Grotesk'] text-lg bg-[transparent] h-[23px] relative text-black placeholder:text-[#898989] text-left p-0"
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="w-full flex flex-col items-start gap-[5px]">
              <div className="relative leading-7 font-medium">Message*</div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-black border-solid border-[1px] bg-[#fff] h-[190px] [outline:none] rounded-[14px] box-border overflow-hidden py-[18px] px-[30px] font-['Space_Grotesk'] text-lg text-black placeholder:text-[#898989] resize-none"
                placeholder="Message"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className={`w-full rounded-[14px] bg-dark flex flex-row items-center justify-center py-5 px-9 box-border whitespace-nowrap border-none cursor-pointer transition-opacity duration-300 ${status === "loading" ? "opacity-50" : "hover:opacity-90"}`}
            >
              <div className="relative text-xl leading-[28px] font-['Space_Grotesk'] text-[#fff] text-center inline-block">
                {status === "loading" ? "Sending..." : "Send Message"}
              </div>
            </button>
          </form>

          {/* Illustration - Hidden on mobile/tablets, positioned absolutely on desktop */}
          <img
            className="hidden scale-x-[-1] lg:block absolute right-[-0px] top-1/2 -translate-y-1/2 h-[648px] w-[691.6px] object-contain z-[2] pointer-events-none"
            alt="Contact Illustration"
            src="/Illustration5@2x.png"
          />
        </div>

      </div>
    </section>
  );
};

ContactSection.propTypes = {
  className: PropTypes.string,
};

export default ContactSection;
