import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className=" flex  pl-6 pt-8   sm:hidden">
        <motion.span  initial={{opacity:0 , x:-100}} animate={{opacity:1, rotateZ: 360,x:0 }} transition={{ease:"linear",duration:1}}   className="text-3xl bg-white p-2 rounded-full text-green  font-medium ">
          CT
        </motion.span>
      </div>
      <div className="pt-28 px-6">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
