import React, {useEffect} from 'react'
import { AiFillCloseSquare } from "react-icons/ai";

interface MobileNavTypes {
    toggleMobileNav: boolean
    toggleNav: React.MouseEventHandler
    hideMobileNav: React.MouseEventHandler
}

const MobileNav = ({ toggleMobileNav, toggleNav, hideMobileNav }: MobileNavTypes) => {

  return (
    <div className={`mobileNav ${toggleMobileNav && 'show'}`}>
        <div className="mobileNavItems">
            <div className="hideMobileNav">
                <button onClick={toggleNav}><AiFillCloseSquare /></button>
            </div>
            <div className="mobileNavLinks">
                <a onClick={hideMobileNav} href="#showcase">Home</a>
                <a onClick={hideMobileNav} href="#about">About</a>
                <a onClick={hideMobileNav} href="#projects">Projects</a>
                <a onClick={hideMobileNav} href="#skills">Skills</a>
            </div>
        </div>
    </div>
  )
}

export default MobileNav