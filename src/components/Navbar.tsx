import React from 'react'
import { useState } from 'react';
import { FaBars } from "react-icons/fa";

interface NavbarTypes {
  toggleNav: React.MouseEventHandler
}

const Navbar = ({ toggleNav }: NavbarTypes) => {
  
  return (
    <div className='navbar'>
        <div className="navbarItems container">
            <div className="navLeft">
                <h2><a href="">Darion Jones</a></h2>
            </div>
            <div className="navLinks">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
            </div>
            <div className="hamburgerBtn">
              <button onClick={toggleNav}><FaBars /></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar