import React from 'react'
import aboutMe from './images/aboutMe.jpg'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import Navbar from './Navbar';

interface AboutTypes {
    toggleNav: React.MouseEventHandler
  }

const About = ({ toggleNav }: AboutTypes) => {
  return (
    <div id='about' className='about'>
        <Navbar toggleNav={toggleNav} />
        <div className="aboutItems container">
            <div className="aboutImg">
                <div className="imgBg">
                    <img src={aboutMe} alt="" />
                    <div className="dotOne"></div>
                    <div className="dotTwo"></div>
                    <div className="dotThree"></div>
                </div>
            </div>
            <div className="aboutText">
                <h1>About Me</h1>
                <p>Hi, my name is Darion and I'm a 21 year old self taught Front end Developer from Stillwater Oklahoma! I love to code! In my free time when I'm not coding, I like to watch UFC, play basketball, play with my dog named bellah and hangout with my family! I work hard and love to learn!</p>
                <div className="socialLinks">
                    <a target={'_blank'} href="https://github.com/darionjoness"><AiFillGithub /></a>
                    <a target={'_blank'} href="https://www.linkedin.com/in/darion-jones-52a001227/"><AiFillLinkedin /></a>
                    <a href="mailto: darionjones2555@gmail.com"><GrMail /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About