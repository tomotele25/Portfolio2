import React from "react";
import Hero_Image from "../assets/Hero_Image.svg";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="relative text-white text-left sm:pl-12  grid  gap-12 ">
      <motion.div initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{duration:1}} >
        <h1 className="text-4xl">Tomotele</h1>
        <span className="text-2xl">Christopher</span>
      </motion.div>
      <div className="grid gap-6 max-w-2xl">
        <motion.p  initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{duration:1}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          corrupti accusantium consequuntur quasi laudantium maiores nam
          obcaecati blanditiis impedit dolores, praesentium voluptatem! Aliquam
          rem, accusamus atque eveniet laborum maiores magni.
        </motion.p>
        <motion.span className="flex gap-4"  initial={{opacity:0,x:-100}} animate={{opacity:1,x:0}} transition={{duration:1}}>
          <button  className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 bg-midnight-hover hover:bg-btn-hover hover:text-midnight font-medium px-6 py-2 rounded-md">
            Contact
          </button>
          <button   className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  bg-midnight-hover  hover:bg-btn-hover font-medium hover:text-midnight px-6 py-2 rounded-md">
            Resume
          </button>
        </motion.span>
      </div>
      <motion.div  initial={{opacity:0,x:40}} animate={{opacity:1,x:0}} transition={{duration:1}} className="absolute  sm:right-12  sm:-top-20 border-green ">
        <img
          src={Hero_Image}
          className=" hidden sm:h-[70vh] sm:block  sm:object-contain mix-blend-overlay  sm:w-[40vw] bg-blend-darken"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default Hero;
