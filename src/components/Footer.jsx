import React from "react";

const Footer = () => {
  return (
    <footer className="w-screen h-auto m-0 flex flex-wrap px-2 select-none z-10 bg-slate-900 py-5 ">
      {/* <div className="text-white px-5 w-full lg:w-1/2">
        <h1 className="font-semibold m-2 w-full text-center text-xl">
          Follow Us{" "}
        </h1>
        <div className="w-full flex justify-center"></div>
      </div> */}
      <div className="w-full text-white">
        <h1 className="font-semibold m-2 w-full text-center text-xl">
          About Us
        </h1>
        <p className="text-center">We are a premium bartender staffing agency, delivering skilled and charismatic bartenders for private events, weddings, corporate parties, and more. Elevate your event with top-tier bar service.</p>
      </div>
      <div className="w-full text-white font-semibold my-5">
        <h1 className="text-center">©2025 Beer bro's Agency. All Rights Reserved</h1>
      </div>
    </footer>
  );
};

export default Footer;
