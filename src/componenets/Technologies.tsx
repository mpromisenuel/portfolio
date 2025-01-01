import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import { BiLogoVuejs } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { SiNuxtdotjs } from "react-icons/si";
import { animate, motion } from 'framer-motion';
const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24"> 
      <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1}} className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1.5}} className="flex flex-wrap items-center justify-center gap-4">
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-4xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoVuejs  className="text-4xl text-green-700"/>
        </motion.div>
        <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandReactNative className="text-4xl text-cyan-400"/>
        </motion.div>
        <motion.div variants={iconVariants(4)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiNuxtdotjs  className="text-4xl text-green-700"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
