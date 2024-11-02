import React from 'react'
import { SiReact,SiJavascript,SiTypescript,SiNextdotjs } from 'react-icons/si'
import Experience from '../components/Experience'
import { motion } from 'framer-motion'
const Skills = () => {
  return (
    <div className=' p-8  sm:h-[100vh] grid sm:flex sm:p-10 sm:gap-40 sm:justify-center'>
      
      <motion.div  whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:0.7}} className='grid '>
        <h1 className='text-3xl text-white'>
Technologies
        </h1>
        <div className='  grid grid-cols-2 gap-2   py-8 sm:flex sm:gap-1'>
        <span className='border-[1px] h-fit p-2 flex rounded-sm justify-center border-white'>
          <SiReact size={75} color='#61DAFB'/>
        </span>
        <span  className='border-[1px] h-fit   rounded-sm flex  justify-center  p-2 border-white'>
          <SiJavascript size={75} color='#F7DF1E' />
        </span>
        <span className='border-[1px] h-fit p-2 flex rounded-sm justify-center border-white' >
          <SiTypescript size={75} color='#3178C6'/>
        </span>
       <span  className='border-[1px] h-fit rounded-sm p-2 flex  justify-center border-white'>
        <SiNextdotjs size={75} color='#000000'/>
       </span>
      </div>
      </motion.div>
      <motion.div   whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.7}}>
      <Experience/>
      </motion.div>
    </div>
  )
}

export default Skills