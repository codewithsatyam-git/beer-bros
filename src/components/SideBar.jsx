import { motion } from "motion/react";
import { RxCross1 } from "react-icons/rx";
import React from "react";

const SideBar = ({
  xVal,
  setIsSideOpen,
  onHomeClick,
  onAboutClick,
  onServiceClick,
  onBlogClick,
  onContactClick,
}) => {
  return (
    <motion.div
      initial={{ x: 300 }}
      animate={{ x: xVal }}
      transition={{ duration: 0.7, delay: 0.05 }}
      className="w-1/2 md:w-1/3 select-none h-screen bg-slate-100 fixed top-0 right-0 lg:hidden block z-50"
    >
      <motion.div
        onClick={() => {
          setIsSideOpen((prev) => !prev);
        }}
        whileHover={{ scale: 1.1, x: 15 }}
        className="m-3 cursor-pointer"
      >
        <RxCross1 className="text-xl" />
      </motion.div>
      <ul className="text-slate-900 font-semibold gap-8 ">
        <motion.li
          onClick={onHomeClick}
          whileHover={{ scale: 1.08, y: -4 }}
          className="cursor-pointer my-2 mx-4 py-2 outline-none hover:bg-slate-200 hover:border hover:border-slate-300 px-4 rounded"
        >
          Home
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.08, y: -4 }}
          onClick={onAboutClick}
          className="cursor-pointer my-2 mx-4 py-2 outline-none hover:bg-slate-200 hover:border hover:border-slate-300 px-4 rounded"
        >
          About
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.08, y: -4 }}
          onClick={onServiceClick}
          className="cursor-pointer my-2 mx-4 py-2 outline-none hover:bg-slate-200 hover:border hover:border-slate-300 px-4 rounded"
        >
          Services
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.08, y: -4 }}
          onClick={onBlogClick}
          className="cursor-pointer my-2 mx-4 py-2 outline-none hover:bg-slate-200 hover:border hover:border-slate-300 px-4 rounded"
        >
          Blog
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.08, y: -4 }}
          onClick={onContactClick}
          className="cursor-pointer w-auto my-2 mx-4 py-2 px-4 hover:border hover:border-slate-300 hover:bg-slate-200 rounded"
        >
          Contact Us
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default SideBar;
