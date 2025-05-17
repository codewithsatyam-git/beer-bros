import { motion } from "motion/react";
import React from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const NavBar = ({
  setIsSideOpen,
  onHomeClick,
  onAboutClick,
  onServiceClick,
  onBlogClick,
  onContactClick,
}) => {
  return (
    <div className="w-screen px-5 overflow-hidden h-auto bg-transparent backdrop-blur-lg py-3 flex justify-between select-none items-center fixed z-40">
      <div className="flex gap-2">
        <span className="text-slate-900 font-bold text-lg lg:text-xl uppercase  drop-shadow-slate-500 drop-shadow-xs">
          beer bro's
        </span>
      </div>
      <ul className="text-slate-900 font-semibold lg:flex gap-8 hidden  ">
        <motion.li
          whileHover={{ scale: 1.08, y: -4 }}
          className="cursor-pointer"
          onClick={onHomeClick}
        >
          Home
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.08, y: -4 }}
          className="cursor-pointer"
          onClick={onAboutClick}
        >
          About
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.08, y: -4 }}
          className="cursor-pointer"
          onClick={onServiceClick}
        >
          Services
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.08, y: -4 }}
          className="cursor-pointer"
          onClick={onBlogClick}
        >
          Blog
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.08, y: -4 }}
          className="cursor-pointer"
          onClick={onContactClick}
        >
          Contact Us
        </motion.li>
      </ul>
      <motion.div
        whileHover={{
          scale: 1.2,
          y: -3,
        }}
        className="cursor-pointer"
        onClick={() => {
          setIsSideOpen((prev) => !prev);
        }}
      >
        <HiOutlineMenuAlt3 className="text-xl block lg:hidden" />
      </motion.div>
    </div>
  );
};

export default NavBar;
