import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../components/style.css";
import { motion } from "motion/react";

// serviceID- service_pxszarf

const Contact = ({refProp}) => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_pxszarf", "template_sb0ou0r", form.current, "bzA7yC-hjqN_Vphs-")
      .then(
        (res) => {
          alert("message sent successfully!");
        },
        (err) => {
          alert("Oops! something went Wrong.");
        }
      );
    e.target.reset();
  };

  return (
    <div ref={refProp} className="w-screen select-none h-auto bg-transparent flex justify-center flex-wrap lg:p-10 pt-20 p-4 ">
      <h4 className="w-full text-center text-4xl">Contact Us</h4>
      <h2 className="w-full text-center mb-5">Let's talk drinks,dates and details</h2>
      <div className="w-full lg:w-[calc(50%-40px)] px-3 py-5 rounded bg-slate-200 h-auto max-h-3/4 relative ">
        <h2 className="w-full text-center text-xl font-semibold text-black">Get in Touch</h2>
        <p className="text-center p-2 lg:text-start">Whether you're planning a wedding, corporate event, private party, or just need a professional touch behind the bar—we're here to help. Reach out to book our bartending services or ask any questions. We’ll get back to you within 24 hours.</p>
        <div className="m-2">
            <h3 className="w-full select-text my-3"> <span className="font-semibold">Phone </span>: +91 89287 57663</h3>
            <h3 className="w-full select-text my-3"><span className="font-semibold">Email </span>: beerbros10@gmail.com</h3>
            <h3 className="w-full select-text my-3"><span className="font-semibold ">Address </span>: Mumbai, India.</h3>
            <h3 className="w-full select-text my-3"><span className="font-semibold">Serving </span>: All Over India</h3>
            
        </div>
      </div>
      <div className="w-full lg:w-[calc(55%-40px)] py-10 lg:py-0 lg:pl-9 h-full lg:h-[calc(100% - 40px)] bg-transparent ">
        <h2 className="w-full text-xl text-center font-semibold">Booking Inquiries</h2>
        <p className="text-sm text-center w-full text-slate-800">fill out the form with your event details, and we'll tailor the perfect bar experience for you.</p>

        <form ref={form} onSubmit={handleSubmit}>
          <div className="w-full p-2 lg:w-4/5  flex flex-wrap justify-between">
            <label htmlFor="" className="px-2 py-1">
              Full Name
            </label>
            <input
              name="user-name"
              type="text"
              placeholder="Enter Your Full name"
              className="px-3 py-2 border border-slate-900 rounded-lg outline-none focus:border-blue-700 w-full"
              required
            />
          </div>
          <div className="w-full p-2 lg:w-4/5  flex flex-wrap justify-between">
            <label htmlFor="" className="px-2 py-1">
              Email
            </label>
            <input
              name="user-email"
              type="email"
              placeholder="Enter Your Email"
              className="px-3 py-2 border border-slate-900 rounded-lg outline-none focus:border-blue-700 w-full"
              required
            />
          </div>
          <div className="w-full p-2 lg:w-4/5  flex flex-wrap justify-between">
            <label htmlFor="" className="px-2 py-1">
              Mobile no.
            </label>
            <input
              name="user-number"
              type="tel"
              placeholder="Enter Your Mobile no."
              className="px-3 py-2 border border-slate-900 rounded-lg outline-none focus:border-blue-700 w-full"
              required
            />
          </div>
          <div className="w-full p-2 lg:w-4/5  flex flex-wrap justify-between">
            <label htmlFor="" className="px-2 py-1">
              Message
            </label>
            <textarea
              name="user-message"
              rows={7}
              placeholder="Tell us About Your Event..."
              className="px-3 py-2 border border-slate-900 rounded-lg outline-none focus:border-blue-700 w-full"
              required
            />
          </div>
          <div className="w-full p-2 flex justify-center">
            <motion.button
            whileHover={{
                scale: 1.1,
                y: 1
            }}
              type="submit"
              className="bg-slate-900 cursor-pointer text-white font-bold rounded-lg py-2 px-3 "
            >
              Message
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
