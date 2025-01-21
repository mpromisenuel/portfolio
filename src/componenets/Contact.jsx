// import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className="mb-4 border-b border-neutral-900 pb-2">
      <motion.div whileInView={{opacity:1,y:0}} initial={{y:-100,opacity:0}} transition={{duration:0.5}} className="my-10 text-center text-2xl">Get In Touch</motion.div>
      <div className="text-center tracking-tighter">
        {/* <motion.p whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}} transition={{duration:1}} className="my-4">{CONTACT.address}</motion.p> */}
        <motion.p whileInView={{opacity:1,x:0}} initial={{x:100,opacity:0}} transition={{duration:1}}  className="my-4">{CONTACT.phoneNo}</motion.p>
        <a href="#" className="border-b">{CONTACT.email}</a>
      </div>
    </div>
  )
}

export default Contact
