import { easeInOut, motion } from "motion/react";
import React from "react";
import "../components/style.css";
import image1 from "../assets/Image1.jpg";
import image2 from "../assets/Image2.jpg";
import image3 from "../assets/Image3.jpg";
import image4 from "../assets/Image4.jpg";
import image5 from "../assets/Image5.jpg";
import image6 from "../assets/Image6.jpg";
import { div } from "motion/react-client";

const HeroSection = ({ refProp, onContactClick }) => {
  return (
    // <div
    //   ref={refProp}
    //   className="w-screen m-auto h-screen md:h-[60vh] lg:h-screen px-3 overflow-hidden flex justify-center"
    // >
    //   <motion.div
    //     // animate={{
    //     //   y: -500,
    //     // }}
    //     // transition={{
    //     //   duration: 1,
    //     //   delay: 4,
    //     //   ease: "easeInOut",
    //     // }}
    //     className=" w-screen h-[90%] overflow-hidden z-10 flex flex-wrap justify-center items-center capitalize"
    //   >
    //     <motion.h1
    //       initial={{
    //         y: 500,
    //       }}
    //       animate={{
    //         y: 0,
    //       }}
    //       transition={{ duration: 1, delay: 1 }}
    //       className="w-full lg:mt-0 md:text-3xl lg:text-5xl text-xl text-center flex justify-center"
    //     >
    //       Raise the Bar at Your Next Event
    //     </motion.h1>
    //     <motion.h2
    //       initial={{
    //         y: 500,
    //         opacity: 1,
    //       }}
    //       animate={{
    //         y: -250,
    //         opacity: 1,
    //       }}
    //       transition={{ duration: 1, delay: 1 }}
    //       className="text-center -mt-40 md:-mt-9 lg:mt-0"
    //     >
    //       Professional bartenders, flawless service, unforgettable experiences.
    //     </motion.h2>
    //   </motion.div>
    //   <motion.div
    //     initial={{
    //       y: 1000,
    //       opacity: 0,
    //     }}
    //     animate={{
    //       y: 150,
    //       opacity: 1,
    //     }}
    //     transition={{
    //       duration: 2,
    //       delay: 2,
    //       ease: "easeInOut",
    //     }}
    //     className="absolute overflow-hidden w-screen h-auto lg:block hidden md:flex md:justify-center py-10 px-20"
    //   >
    //     <motion.div
    //       initial={{
    //         x: 10,
    //         y: 100,
    //         rotate: -20,
    //       }}
    //       whileHover={{ scale: 1.6, rotate: 0, x: 50 }}
    //       className="size-48 rounded-2xl overflow-hidden relative z-0 hover:z-20 bg-sky-400"
    //     >
    //       <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
    //         margarita
    //       </h1>
    //       <img src={image1} className="w-full z-0 h-full" />
    //     </motion.div>
    //     <motion.div
    //       initial={{
    //         x: 150,
    //         y: -100,
    //         rotate: -10,
    //       }}
    //       whileHover={{ scale: 1.6, rotate: 0 }}
    //       className="size-48 rounded-2xl overflow-hidden relative z-0 hover:z-20 bg-red-400"
    //     >
    //       {" "}
    //       <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
    //         bloody mary
    //       </h1>
    //       <img src={image5} className="w-full h-full" />{" "}
    //     </motion.div>
    //     <motion.div
    //       initial={{
    //         x: 300,
    //         y: -320,
    //         rotate: 5,
    //       }}
    //       whileHover={{ scale: 1.6, rotate: 0 }}
    //       className="size-48 rounded-2xl overflow-hidden relative z-0 hover:z-20 bg-sky-400"
    //     >
    //       <h1 className="px-2 m-1.5 text-sm rounded-full absolute bg-slate-50 font-semibold capitalize">
    //         martini
    //       </h1>
    //       <img src={image3} className="w-full h-full" />{" "}
    //     </motion.div>
    //     <motion.div
    //       initial={{
    //         x: 450,
    //         y: -480,
    //         rotate: -2,
    //       }}
    //       whileHover={{ scale: 1.6, rotate: 0 }}
    //       className="size-48 rounded-2xl overflow-hidden relative z-0 hover:z-20 bg-violet-400"
    //     >
    //       <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
    //         cosmopolitan
    //       </h1>
    //       <img src={image4} className="w-full h-full" />{" "}
    //     </motion.div>
    //     <motion.div
    //       initial={{
    //         x: 590,
    //         y: -690,
    //         rotate: 5,
    //       }}
    //       whileHover={{ scale: 1.6, rotate: 0 }}
    //       className="size-48 rounded-2xl overflow-hidden relative z-0 hover:z-20 bg-emerald-400"
    //     >
    //       <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
    //         mojito
    //       </h1>
    //       <img src={image2} className="w-full h-full" />{" "}
    //     </motion.div>
    //     <motion.div
    //       initial={{
    //         x: 700,
    //         y: -830,
    //         rotate: 10,
    //       }}
    //       whileHover={{ scale: 1.6, rotate: 0, x: 650 }}
    //       className="size-48 rounded-2xl overflow-hidden relative z-0 hover:z-20 bg-yellow-400"
    //     >
    //       <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
    //         negroni
    //       </h1>
    //       <img src={image6} className="w-full h-full" />{" "}
    //     </motion.div>
    //   </motion.div>
    //   <motion.div
    //     initial={{
    //       x: 0,
    //       y: 1050,
    //       opacity: 0,
    //     }}
    //     animate={{
    //       y: 550,
    //       opacity: 1,
    //     }}
    //     transition={{
    //       duration: 1,
    //       delay: 4.5,
    //       ease: "easeInOut",
    //     }}
    //     className="absolute  hidden lg:block"
    //   >
    //     <motion.button
    //       onClick={onContactClick}
    //       whileHover={{ scale: 1.1, y: -2 }}
    //       className="px-5 text-white py-1.5 overflow-hidden rounded z-30 bg-slate-900"
    //     >
    //       Contact Us
    //     </motion.button>
    //   </motion.div>
    //   <motion.div
    //     initial={{
    //       y: 1000,
    //       opacity: 0,
    //     }}
    //     animate={{
    //       y: 300,
    //       opacity: 1,
    //     }}
    //     transition={{ duration: 1, delay: 4.5 }}
    //     className="w-screen h-auto absolute mx-auto flex flex-wrap justify-around lg:hidden overflow-hidden md:grid md:grid-cols-3 md:place-items-center md:mt-10"
    //   >
    //     <div className="h-48 w-44 select-none rounded-2xl my-2 overflow-hidden bg-sky-400">
    //       <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
    //         margarita
    //       </h1>
    //       <img src={image1} className="w-full z-0 h-full" />
    //     </div>
    //     <div className="h-48 w-44 rounded-2xl my-2 overflow-hidden bg-red-400">
    //       <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
    //         bloody mary
    //       </h1>
    //       <img src={image5} className="w-full h-full" />{" "}
    //     </div>
    //     <div className="h-48 w-44 rounded-2xl my-2 overflow-hidden bg-sky-400">
    //       <h1 className="px-2 m-1.5 text-sm rounded-full absolute bg-slate-50 font-semibold capitalize">
    //         martini
    //       </h1>
    //       <img src={image3} className="w-full h-full" />{" "}
    //     </div>
    //     <div className="h-48 w-44 rounded-2xl my-2 overflow-hidden bg-violet-400">
    //       <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
    //         cosmopolitan
    //       </h1>
    //       <img src={image4} className="w-full h-full" />{" "}
    //     </div>
    //     <div className="h-48 w-44 rounded-2xl my-2 overflow-hidden bg-emerald-400">
    //       <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
    //         mojito
    //       </h1>
    //       <img src={image2} className="w-full h-full" />{" "}
    //     </div>
    //     <div className="h-48 w-44 rounded-2xl my-2 overflow-hidden bg-yellow-400">
    //       <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
    //         negroni
    //       </h1>
    //       <img src={image6} className="w-full h-full" />{" "}
    //     </div>
    //   </motion.div>
    // </div>
    <div ref={refProp} className="w-screen h-screen pt-20 z-40 select-none relative ">
      <div className="fixed m-6 right-0 bottom-0 float-right z-50">
        <motion.button
          animate={{
            scale: [0.95, 0.8, 1],
            y: [0, 0, 0, 0],
          }}
          transition={{
            duration: 1.2,
            ease: [0.2, 0.9, 0.3, 1],
            repeat: Infinity,
            repeatType: "loop",
          }}
          onClick={onContactClick}
          className="rounded-lg text-2xl font-bold capitalize shadow-md shadow-white bg-slate-900 text-white px-5 py-2"
        >
          book now
        </motion.button>
        
      </div>
      <div class="w-screen h-screen  hidden md:block">
        <motion.div
          initial={{
            y: 600,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}
          class="grid grid-cols-3 place-items-center gap-20"
        >
          <div className="grid grid-cols-2">
            <div className="size-40 rounded-xl shadow-lg shadow-black bg-cyan-500 overflow-hidden">
              <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
                negroni
              </h1>
              <img src={image6} className="w-full h-full" />{" "}
            </div>

            <div className="size-40 overflow-hidden rounded-xl bg-transparent"></div>

            <div className="size-40 overflow-hidden  rounded-xl bg-transparent"></div>
            <div className="size-40 overflow-hidden shadow-lg shadow-black rounded-xl bg-cyan-500">
              <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
                mojito
              </h1>
              <img src={image2} className="w-full h-full" />{" "}
            </div>

            <div className="size-40 overflow-hidden shadow-lg shadow-black rounded-xl bg-cyan-500">
              <h1 className="px-2 m-1.5 text-xs rounded-full absolute  font-semibold capitalize">
                bloody mary
              </h1>
              <img src={image5} className="w-full h-full" />{" "}
            </div>
          </div>
          <div>
            <h1 className="font-black text-6xl text-left font-sans w-44 capitalize ">
              <span className="text-4xl text-left font-black"> Raise</span> the{" "}
              <span className="font-black text-8xl text-right bg-gradient-to-b from-slate-900 via-indigo-900 to-white bg-clip-text text-transparent ">Bar</span>{" "}
              <span className="text-4xl font-black flex text-left">
                at Your Next
              </span>{" "}
              <span className="font-black text-8xl bg-[linear-gradient(90deg,#ff0000_30%,#0000ff_70%)] bg-clip-text text-transparent">Event</span>
            </h1>
          </div>
          <div className="grid grid-cols-2">
            <div className="size-40 overflow-hidden shadow-lg shadow-black rounded-xl bg-cyan-500">
              <h1 className="px-2 m-1.5 text-sm rounded-full absolute bg-slate-50 font-semibold capitalize">
                martini
              </h1>
              <img src={image3} className="w-full h-full" />{" "}
            </div>

            <div className="size-40 overflow-hidden rounded-xl bg-transparent">
              <img src="" alt="" />
            </div>

            <div className="size-40 overflow-hidden rounded-xl bg-transparent">
              <img src="" alt="" />
            </div>
            <div className="size-40 overflow-hidden shadow-lg shadow-black rounded-xl bg-cyan-500">
              <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
                cosmopolitan
              </h1>
              <img src={image4} className="w-full h-full" />{" "}
            </div>

            <div className="size-40 overflow-hidden shadow-lg shadow-black rounded-xl bg-cyan-500">
              <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
                margarita
              </h1>
              <img src={image1} className="w-full z-0 h-full" />
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{
          y: 1000,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{ duration: 1, delay: 4.5 }}
        className="w-screen h-screen mx-auto flex relative flex-wrap justify-around lg:hidden overflow-hidden md:grid md:grid-cols-3 md:place-items-center md:mt-10"
      >
        <div className="w-auto ">
            <h1 className="font-black text-4xl text-right font-sans w-screen capitalize px-7 ">
              <span className="text-2xl  font-black"> Raise</span> <br /> the{" "}
              <span className="font-black text-6xl text-right bg-gradient-to-b from-emerald-700  to-white bg-clip-text text-transparent ">Bar</span> <br />
              <span className="text-2xl font-black ">
                at Your Next
              </span><br />
              <span className="font-black text-8xl  bg-gradient-to-b from-emerald-700  to-white bg-clip-text text-transparent">Event</span>
            </h1>
          </div>
        <div className="h-48 w-44 select-none rounded-2xl my-2 overflow-hidden bg-sky-400">
          <h1 className="px-2 m-1.5 text-xs rounded-full absolute  bg-slate-50 font-semibold capitalize">
            margarita
          </h1>
          <img src={image1} className="w-full z-0 h-full  " />
        </div>
        <div className="h-48 w-44 rounded-2xl my-2 overflow-hidden bg-red-400">
          <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-white font-semibold capitalize">
            bloody mary
          </h1>
          <img src={image5} className="w-full h-full" />{" "}
        </div>
        <div className="h-48 w-44 rounded-2xl my-2 overflow-hidden bg-sky-400">
          <h1 className="px-2 m-1.5 text-sm rounded-full absolute bg-slate-50 font-semibold capitalize">
            martini
          </h1>
          <img src={image3} className="w-full h-full" />{" "}
        </div>
        <div className="h-48 w-44 rounded-2xl my-2 overflow-hidden bg-violet-400">
          <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
            cosmopolitan
          </h1>
          <img src={image4} className="w-full h-full" />{" "}
        </div>
        <div className="h-48 w-44 rounded-2xl my-2 overflow-hidden bg-emerald-400">
          <h1 className="px-2 m-1.5 text-xs rounded-full absolute bg-slate-50 font-semibold capitalize">
            mojito
          </h1>
          <img src={image2} className="w-full h-full" />{" "}
        </div>
        <div className="h-48 w-44 rounded-2xl my-2 overflow-hidden bg-yellow-400">
          <h1 className="px-2 m-1.5 text-xs rounded-full absolute  bg-slate-50 font-semibold capitalize">
            negroni
          </h1>
          <img src={image6} className="w-full h-full" />{" "}
        </div>
        <div class="h-24 w-screen"></div>
      </motion.div>
      
    </div>
  );
};

export default HeroSection;
