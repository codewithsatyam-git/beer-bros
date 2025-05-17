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
    <div className=" h-auto bg-[#f5f5f5] flex flex-wrap justify-center overflow-hidden">
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
      <HeroSection refProp={homeRef} onContactClick={() => {
          scrollTOSection(contactRef);
        }} />
      <About refProp={aboutRef}/>
      <Services refProp={serviceRef}/>
      <Blog refProp={blogRef}/>
      <Contact refProp={contactRef}/>
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
