import { motion, useScroll, useTransform } from "motion/react";
import React, { useRef } from "react";
import "../components/style.css";
import about from '../assets/about.jpg'

const About = ({refProp}) => {
  return (
    <div ref={refProp} className=" select-none lg:mt-0 mt-80 relative w-screen h-auto bg-transparent flex px-5 py-10 lg:pt-24">
      <div className=" lg:w-[calc(60%-20px)] w-[calc(100%-40px)] lg:mx-3 h-auto">
        <h4 className="w-full text-center text-3xl font-bold">About</h4>
        <p className="w-full text-[18px] text-center lg:text-[20px] text-slate-900 px-5 lg:px-14 py-8">
          At Beer Bro's, we specialize in providing professional bartenders
          for all types of events from intimate gatherings to large
          celebrations. Our experienced team combines expert cocktail crafting
          with exceptional customer service to ensure your event runs smoothly
          and your guests are well taken care of. We offer tailored services to
          meet your specific needs, whether it is creating signature drinks or
          managing a lively bar. With a focus on quality and attention to
          detail, we make it our mission to deliver a seamless and memorable
          experience for every occasion.
        </p>
      </div>
      <div className="w-0 lg:w-[calc(40%-20px)] lg:h-auto h-0 pt-16">
        <img src={about} className="rounded"/>
      </div>
    </div>
  );
};

export default About;
