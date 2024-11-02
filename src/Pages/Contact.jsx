
import React from "react";
import { SiLinkedin, SiGithub, SiX, SiXamarin } from "react-icons/si";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="pt-5 sm:px-32 sm:pt-5 ">
        <span   className="text-3xl pl-8 text-white">
            Contact Us
        </span>
      <motion.form  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} action="" className="grid gap-2 p-10 sm:pt-6">
        <div className="grid gap-3">
          <label htmlFor="">Name</label>
          <input type="text" className="w-72 sm:w-[37vw]   h-12 rounded-md"/>
        </div>{" "}
        <div className="grid gap-3">
          <label htmlFor="">Email</label>
          <input type="text" className="w-72 sm:w-[37vw]  h-12 rounded-md"/>
        </div>{" "}
        <div className="grid gap-3">
          <label htmlFor="">Message</label>
         <textarea name="" id="" className="w-72 sm:w-[37vw]   h-36 rounded-md " ></textarea>
        </div>{" "}
        <div className="pt-3">
          <button className="px-28 sm:px-56 h-12  rounded-md bg-midnight-hover hover:bg-btn-hover">Submit</button>
        </div>
      </motion.form>
      <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.7}} className="flex pl-10 gap-3 ">
        <span>
          <SiLinkedin size={25} />
        </span>
        <span>
          <SiGithub size={25}/>
        </span>
        <span>
          <SiX size={25}/>
        </span>
      </motion.div>
    </div>
  );
};

export default Contact;
