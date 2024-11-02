import React from "react";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className=" hidden h-[20vh] sm:w-full sm:flex  sm:items-center sm:justify-center ">
      <div className="bg-white w-1/2 flex justify-between p-2 items-baseline rounded-full ">
        <motion.span initial={{opacity:0 ,x:-100}} animate={{opacity:1,x:0,rotateZ:360}} transition={{duration:0.9}} className="text-3xl bg-green p-2 rounded-full  font-medium ">CT</motion.span>
        <span className="">
          <ul className="flex px-10 font-medium leading-relaxed text-green gap-5 ">
            <motion.li whileHover={{y:-10,}} transition={{duration:0.2}}>
              <a href="">Home</a>
            </motion.li>
            <motion.li whileHover={{y:-10,}} transition={{duration:0.2}}>
              <a href="">Skills</a>
            </motion.li>
            <motion.li whileHover={{y:-10,}} transition={{duration:0.2}}>
              <a href="">Portfolio</a>
            </motion.li>
            <motion.li whileHover={{y:-10,}} transition={{duration:0.2}}>
              <a href="">Contact</a>
            </motion.li>
          </ul>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
