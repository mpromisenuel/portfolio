import React from 'react'
import { PROJECTS } from '../constants'
import { motion } from 'framer-motion'

const Project = () => {
  return (
    <div className="mb-4 border-b border-neutral-900 pb-2">
  <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1}} className="my-20 text-center text-4xl">Project</motion.h1>
      <div className="my-20 text-center text-4xl">
        {PROJECTS.map((project,index)=>(
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                <motion.div whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}} transition={{duration:1}} className="w-full lg:w-1/4">
                  <a href={project.link} target='_blank'>
                <img src={project.image} title={project.title} width={150} height={150} className="mb-6 rounded"/>
                </a>
                </motion.div>
                <motion.div whileInView={{opacity:1,x:0}} initial={{x:100,opacity:0}} transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold text-xl">{project.title}</h6>
                    <p className="mb-4 text-neutral-400 text-sm ">{project.description}</p>
                    {project.technologies.map((tech,index)=>(
                    <span key={index} className="mr-2 rounded px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                ))}
                </motion.div>
                
            </div>
        ))}
      </div>
    </div>
  )
}

export default Project
