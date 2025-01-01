import React from 'react'
import Logo from "../assets/Logo.png"
import {FaLinkedin} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
       <div className="flex flex-shrink-0 items-center">
       <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">PM</span>

       </div>
       <div className="mb-4 flex items-center text-2xl gap-7 mx-10">
        <a href="">
        <FaLinkedin/>
        </a>
        <a href="https://github.com/mpromisenuel" target='_blank'>
        <FaGithub/>
        </a>
        <a href="">
        <FaSquareXTwitter/>
        </a>
        <a href="">
        <FaInstagram/>
        </a>
       </div>
    </nav>
  )
}

export default Navbar
