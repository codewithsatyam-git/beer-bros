import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import SideBar from "./components/SideBar";
import logo from "./assets/logo.png";

function App() {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const [xVal, setXVal] = useState(300);
  useEffect(() => {
    if (isSideOpen) {
      setXVal(0);
    } else {
      setXVal(300);
    }
  }, [isSideOpen]);

  const homeRef = useRef();
  const aboutRef = useRef();
  const serviceRef = useRef();
  const blogRef = useRef();
  const contactRef = useRef();

  const scrollTOSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" h-auto flex flex-wrap justify-center overflow-hidden bg-gradient-to-t from-emerald-900 via-emerald-600  to-white text-black ">
      <motion.div
        initial={{
          y: -650,
        }}
        animate={{
          y: 0,
          opacity: 0.4,
        }}
        transition={{
          duration: 1,
          delay: 1,
          ease: "easeInOut",
        }}
        className="w-full h-full p-10 flex justify-center fixed z-0 bg-gradient-to-b from-emerald-900 via-emerald-600  to-white bg-clip-text text-transparent"
      >
        <img
          src={logo}
          className=" md:h-full sm:h-0 sm:w-full md:w-auto mt-10 mix-blend-screen"
          alt=""
          srcset=""
        />
      </motion.div>
      <NavBar
        setIsSideOpen={setIsSideOpen}
        onHomeClick={() => {
          scrollTOSection(homeRef);
        }}
        onAboutClick={() => {
          scrollTOSection(aboutRef);
        }}
        onServiceClick={() => {
          scrollTOSection(serviceRef);
        }}
        onBlogClick={() => {
          scrollTOSection(blogRef);
        }}
        onContactClick={() => {
          scrollTOSection(contactRef);
        }}
      />
      <HeroSection
        refProp={homeRef}
        onContactClick={() => {
          scrollTOSection(contactRef);
        }}
      />
      <About refProp={aboutRef} />
      <Services refProp={serviceRef} />
      <Blog refProp={blogRef} />
      <Contact refProp={contactRef} />
      <Footer />
      <SideBar
        xVal={xVal}
        setIsSideOpen={setIsSideOpen}
        isSideOpen={isSideOpen}
        onHomeClick={() => {
          scrollTOSection(homeRef);
        }}
        onAboutClick={() => {
          scrollTOSection(aboutRef);
        }}
        onServiceClick={() => {
          scrollTOSection(serviceRef);
        }}
        onBlogClick={() => {
          scrollTOSection(blogRef);
        }}
        onContactClick={() => {
          scrollTOSection(contactRef);
        }}
      />
    </div>
  );
}

export default App;
