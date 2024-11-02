import React from "react";
import About_image from "../assets/About_image.svg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div>
      <div className=" text-5xl pl-8 pt-8  sm:text-6xl  flex sm:justify-center  sm:pt-8 text-white sm:pb-24">
        <motion.h1 whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} >About Me</motion.h1>
      </div>
      <div  className="grid p-6 sm:gap-6  sm:flex   sm:px-20">
        <motion.span  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} className=" w-[80vw] pt-14 pb-10  sm:h-[50vh] sm:w-[40vw]">
          <img src={About_image} alt="" />
        </motion.span>
        <motion.article  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}}  className=" sm:pt-16 text-white max-w-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          assumenda cumque, veritatis doloribus nostrum reprehenderit. Aliquid
          neque, enim maxime eaque velit impedit sunt repudiandae expedita
          perferendis cumque accusantium consequuntur aspernatur? Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Atque iure magni sed
        </motion.article>
      </div>
    </div>
  );
};

export default About;
