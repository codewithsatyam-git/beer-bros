import { easeInOut, motion } from "motion/react";
import React from "react";
import "../components/style.css";
import image1 from "../assets/Image1.jpg";
import image2 from "../assets/Image2.jpg";
import image3 from "../assets/Image3.jpg";
import image4 from "../assets/Image4.jpg";
import image5 from "../assets/Image5.jpg";
import image6 from "../assets/Image6.jpg";

const HeroSection = ({refProp, onContactClick}) => {
  return (
    <div ref={refProp} className="w-screen m-auto h-screen md:h-[60vh] lg:h-screen px-3 overflow-hidden flex justify-center">
      <motion.div
        animate={{
          y: -500,
        }}
        transition={{
          duration: 1,
          delay: 4,
          ease: "easeInOut",
        }}
        className=" w-screen h-[90%] overflow-hidden flex flex-wrap justify-center items-center capitalize"
      >
        <motion.h1
          initial={{
            y: 500,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 1, delay: 1 }}
          className="w-full lg:mt-0 md:text-3xl lg:text-5xl text-xl text-center font-black flex justify-center"
        >
          Raise the Bar at Your Next Event
        </motion.h1>
        <motion.h2
          initial={{
            y: 500,
            opacity: 0,
          }}
          animate={{
            y: -250,
            opacity: 1,
          }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center -mt-40 md:-mt-9 lg:mt-0"
        >
          Professional bartenders, flawless service, unforgettable experiences.
        </motion.h2>
      </motion.div>
      <motion.div className=" w-screen lg:w-[80%] absolute overflow-hidden h-screen flex flex-wrap justify-center items-center capitalize">
        <motion.h1
          initial={{
            y: 500,
            opacity: 0,
          }}
          animate={{
            y: -50,
            opacity: 1,
          }}
          transition={{ duration: 1, delay: 4 }}
          className="w-full lg:mt-0 md:text-3xl  overflow-hidden lg:text-3xl text-xl font-black flex justify-center text-center"
        >
          Weddings, Corporate Events, Private Parties - We Serve Them All
        </motion.h1>
        <motion.h2
          initial={{
            y: 500,
            opacity: 0,
          }}
          animate={{
            y: -350,
            opacity: 1,
          }}
          transition={{ duration: 1, delay: 4 }}
          className="w-full md:-mt-96 text-center overflow-hidden -mt-28 lg:mt-0 lg:text-xl text-xs font-light flex justify-center"
        >
          Professional bartenders, flawless service, unforgettable experiences.
        </motion.h2>
      </motion.div>
      <motion.div
        initial={{
          y: 1000,
          opacity: 0,
        }}
        animate={{
          y: 150,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 4.5,
          ease: "easeInOut",
        }}
        className="absolute overflow-hidden w-screen h-auto lg:block hidden grid-cols-1 lg:grid-cols-4 py-10 px-20"
      >
        <motion.div
          initial={{
            x: 10,
            y: 100,
            rotate: -20,
          }}
          whileHover={{ scale: 1.6, rotate: 0, x: 50 }}
          className="size-48 rounded-2xl overflow-hidden relative z-0 hover:z-20 bg-sky-400"
        >
          <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
            margarita
          </h1>
          <img src={image1} className="w-full z-0 h-full" />
        </motion.div>
        <motion.div
          initial={{
            x: 150,
            y: -100,
            rotate: -10,
          }}
          whileHover={{ scale: 1.6, rotate: 0 }}
          className="size-48 rounded-2xl overflow-hidden relative z-0 hover:z-20 bg-red-400"
        >
          {" "}
          <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
            bloody mary
          </h1>
          <img src={image5} className="w-full h-full" />{" "}
        </motion.div>
        <motion.div
          initial={{
            x: 300,
            y: -320,
            rotate: 5,
          }}
          whileHover={{ scale: 1.6, rotate: 0 }}
          className="size-48 rounded-2xl overflow-hidden relative z-0 hover:z-20 bg-sky-400"
        >
          <h1 className="px-2 m-1.5 text-sm rounded-full absolute bg-slate-50 font-semibold capitalize">
            martini
          </h1>
          <img src={image3} className="w-full h-full" />{" "}
        </motion.div>
        <motion.div
          initial={{
            x: 450,
            y: -480,
            rotate: -2,
          }}
          whileHover={{ scale: 1.6, rotate: 0 }}
          className="size-48 rounded-2xl overflow-hidden relative z-0 hover:z-20 bg-violet-400"
        >
          <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
            cosmopolitan
          </h1>
          <img src={image4} className="w-full h-full" />{" "}
        </motion.div>
        <motion.div
          initial={{
            x: 590,
            y: -690,
            rotate: 5,
          }}
          whileHover={{ scale: 1.6, rotate: 0 }}
          className="size-48 rounded-2xl overflow-hidden relative z-0 hover:z-20 bg-emerald-400"
        >
          <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
            mojito
          </h1>
          <img src={image2} className="w-full h-full" />{" "}
        </motion.div>
        <motion.div
          initial={{
            x: 700,
            y: -830,
            rotate: 10,
          }}
          whileHover={{ scale: 1.6, rotate: 0, x: 650 }}
          className="size-48 rounded-2xl overflow-hidden relative z-0 hover:z-20 bg-yellow-400"
        >
          <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
            negroni
          </h1>
          <img src={image6} className="w-full h-full" />{" "}
        </motion.div>
      </motion.div>
      <motion.div
        initial={{
          x: 0,
          y: 1050,
          opacity: 0,
        }}
        animate={{
          y: 550,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 4.5,
          ease: "easeInOut",
        }}

        className="absolute  hidden lg:block"
      >
        <motion.button onClick={onContactClick} whileHover={{scale: 1.1, y: -2}} className="px-5 text-white py-1.5 overflow-hidden rounded z-30 bg-slate-900">
          Contact Us
        </motion.button>
      </motion.div>
      <motion.div
        initial={{
          y: 1000,
          opacity: 0,
        }}
        animate={{
          y: 300,
          opacity: 1,
        }}
        transition={{ duration: 1, delay: 4.5 }}
        className="w-screen absolute mx-auto h-auto flex flex-wrap justify-around lg:hidden overflow-hidden md:grid md:grid-cols-3 md:place-items-center md:mt-10"
      >
        <div drag whileDrag={{scale: 1.05}} className="h-48 w-44 select-none rounded-2xl my-2 overflow-hidden bg-sky-400">
          <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
            margarita
          </h1>
          <img src={image1} className="w-full z-0 h-full" />
        </div>
        <div drag whileDrag={{scale: 1.05}} className="h-48 w-44 rounded-2xl my-2 overflow-hidden bg-red-400">
          <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
            bloody mary
          </h1>
          <img src={image5} className="w-full h-full" />{" "}
        </div>
        <div drag whileDrag={{scale: 1.05}} className="h-48 w-44 rounded-2xl my-2 overflow-hidden bg-sky-400">
          <h1 className="px-2 m-1.5 text-sm rounded-full absolute bg-slate-50 font-semibold capitalize">
            martini
          </h1>
          <img src={image3} className="w-full h-full" />{" "}
        </div>
        <div drag whileDrag={{scale: 1.05}}  className="h-48 w-44 rounded-2xl my-2 overflow-hidden bg-violet-400">
          <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
            cosmopolitan
          </h1>
          <img src={image4} className="w-full h-full" />{" "}
        </div>
        <div drag whileDrag={{scale: 1.05}} className="h-48 w-44 rounded-2xl my-2 overflow-hidden bg-emerald-400">
          <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
            mojito
          </h1>
          <img src={image2} className="w-full h-full" />{" "}
        </div>
        <div drag whileDrag={{scale: 1.05}} className="h-48 w-44 rounded-2xl my-2 overflow-hidden bg-yellow-400">
          <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
            negroni
          </h1>
          <img src={image6} className="w-full h-full" />{" "}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
