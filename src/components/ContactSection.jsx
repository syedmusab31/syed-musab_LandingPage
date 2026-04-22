import { useState } from "react";
import Heading from "./Heading";
import PropTypes from "prop-types";

const ContactSection = ({ className = "" }) => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

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
      const serviceId = "YOUR_SERVICE_ID";
      const templateId = "YOUR_TEMPLATE_ID";
      const publicKey = "YOUR_PUBLIC_KEY";

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.error("EmailJS Error:", await response.text());
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className={`w-full flex justify-center font-['Space_Grotesk'] ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-14 px-4 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-10">
          <Heading
            property1="Green"
            label="Contact Us"
            showLabel={false}
            labelVisible={false}
          />
          <p className="text-base md:text-lg text-black max-w-sm leading-relaxed">
            Connect with Us: Let&#39;s Discuss Your Needs
          </p>
        </div>

        {/* Box */}
        <div className="relative w-full rounded-3xl md:rounded-[45px] bg-grey overflow-hidden flex flex-col lg:flex-row items-start py-10 px-6 md:py-14 md:px-12 lg:py-[60px] lg:px-[100px]">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full lg:max-w-[556px] flex flex-col items-start gap-5 md:gap-6 relative z-10"
          >
            {status === "success" && (
              <div className="w-full p-4 rounded-[14px] bg-green border border-dark text-dark font-medium text-sm md:text-base">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            {status === "error" && (
              <div className="w-full p-4 rounded-[14px] bg-red-100 border border-red-400 text-red-700 font-medium text-sm md:text-base">
                Oops! Something went wrong. Please check your EmailJS credentials.
              </div>
            )}

            {/* Name */}
            <div className="w-full flex flex-col gap-1">
              <label className="font-medium text-sm md:text-base leading-7">Name</label>
              <div className="w-full rounded-[14px] bg-white border border-black overflow-hidden flex items-center py-3 md:py-4 px-5 md:px-[30px]">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-none outline-none bg-transparent text-base md:text-lg text-black placeholder:text-[#898989] font-['Space_Grotesk'] p-0"
                  placeholder="Name"
                  type="text"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="w-full flex flex-col gap-1">
              <label className="font-medium text-sm md:text-base leading-7">Email *</label>
              <div className="w-full rounded-[14px] bg-white border border-black overflow-hidden flex items-center py-3 md:py-4 px-5 md:px-[30px]">
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-none outline-none bg-transparent text-base md:text-lg text-black placeholder:text-[#898989] font-['Space_Grotesk'] p-0"
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="w-full flex flex-col gap-1">
              <label className="font-medium text-sm md:text-base leading-7">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-black bg-white h-[160px] md:h-[190px] outline-none rounded-[14px] py-4 px-5 md:px-[30px] font-['Space_Grotesk'] text-base md:text-lg text-black placeholder:text-[#898989] resize-none"
                placeholder="Message"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className={`w-full rounded-[14px] bg-dark flex items-center justify-center py-4 md:py-5 px-8 md:px-9 border-none cursor-pointer transition-opacity duration-300 ${status === "loading" ? "opacity-50" : "hover:opacity-90"}`}
            >
              <span className="text-base md:text-xl font-['Space_Grotesk'] text-white">
                {status === "loading" ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>

          {/* Illustration — desktop only, won't cause overflow */}
          <div className="hidden lg:flex flex-1 justify-end items-center pointer-events-none absolute right-0 top-0 bottom-0 w-[45%] overflow-hidden">
            <img
              className="scale-x-[-1] w-full h-full object-contain"
              alt="Contact Illustration"
              src="/Illustration5@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

ContactSection.propTypes = {
  className: PropTypes.string,
};

export default ContactSection;
