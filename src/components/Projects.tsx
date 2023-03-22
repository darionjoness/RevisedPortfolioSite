import React from 'react'
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import cryptoprice from './images/cryptoprice.png'
import timsStore from './images/tims-store.png'
import disneyPlusRebuild from './images/disneyPlusRebuild.png'
import huluRebuild from './images/hulu.png'
import jungleJump from './images/jungleJump.png'
import Skills from './Skills';

const Projects = () => {
  return (
    <div id='projects' className='projects'>
        <div className="projectsItems container">
        <h1 className='projectsHeader'>Projects</h1>
            <div className="project">
                <div className="projectImg">
                    <img src={cryptoprice} alt="" />
                </div>
                <div className="projectText">
                    <h1>CryptoPrice.io</h1>
                    <p>CryptoPrice.io is a crypto app that shows the prices and charts of the selected coin. I used an api that updates every 24 hours to accurately show the current price. Browse through and find the coin you would like to view or search it up in the search bar. You can also view your own assets using the hamburger button in the top right.</p>
                    <p>Tech Used: React, Typescript</p>
                    <a target={'_blank'} href="https://cryptopriceio.netlify.app/"><AiFillEye /></a>
                    <a target={'_blank'} href="https://github.com/darionjoness/CryptoPriceApp"><AiFillGithub /></a>
                </div>
            </div>
            <div className="project">
                <div className="projectText">
                    <h1>Tim's Store</h1>
                    <p>Tim's Store is a store that sells clothing, jewelry, beauty products & more! Use the filters to find the items you want, click on the item you want then when the modal pops up you can go ahead and add it to your cart. You can view your cart at anytime by clicking on the cart icon. When your done shopping, click checkout and you will be asked to fill out your information. After your done place the order and you will get confirmation!</p>
                    <p>Tech Used: React, Typescript, Redux</p>
                    <a target={'_blank'} href="https://timsstore.netlify.app/"><AiFillEye /></a>
                    <a target={'_blank'} href="https://github.com/darionjoness/TimsStore"><AiFillGithub /></a>
                </div>
                <div className="projectImg">
                    <img src={timsStore} alt="" />
                </div>
            </div>
            <div className="project">
                <div className="projectImg">
                    <img src={disneyPlusRebuild} alt="" />
                </div>
                <div className="projectText">
                    <h1>Disney Plus Rebuild</h1>
                    <p>This is a exact rebuild of the Disney Plus home page in April of 2022. Disney Plus changes there site often so it may not be the exact same to this day. </p>
                    <p>Tech Used: HTML, CSS, Javascript</p>
                    <a target={'_blank'} href="https://disneyplusrebuild.netlify.app/"><AiFillEye /></a>
                    <a target={'_blank'} href="https://github.com/darionjoness/DisneyPlus-Rebuild"><AiFillGithub /></a>
                </div>
            </div>
            <div className="project">
                <div className="projectText">
                    <h1>Hulu Rebuild</h1>
                    <p>This is a exact rebuild of the Hulu home page in February of 2023. Hulu changes there site often so it may not be the exact same to this day. </p>
                    <p>Tech Used: React, Javascript</p>
                    <a target={'_blank'} href="https://darionhulurebuild.netlify.app/"><AiFillEye /></a>
                    <a target={'_blank'} href="https://github.com/darionjoness/HuluRebuild"><AiFillGithub /></a>
                </div>
                <div className="projectImg">
                    <img src={huluRebuild} alt="" />
                </div>
            </div>
            <div className="project">
            <div className="projectImg">
                    <img src={jungleJump} alt="" />
                </div>
                <div className="projectText">
                    <h1>Jungle Jump</h1>
                    <p>Jungle jump is a flappy bird style game where you have to use the space bar to jump through the jungle and make it as far as you can without touching the wooden beams. My highscore is 106. Try and see if you can beat it! </p>
                    <p>Tech Used: HTML, CSS, Javascript</p>
                    <a target={'_blank'} href="https://junglejumpp.netlify.app/"><AiFillEye /></a>
                    <a target={'_blank'} href="https://github.com/darionjoness/JungleJump"><AiFillGithub /></a>
                </div>
            </div>
        </div>
        <Skills />
    </div>
  )
}

export default Projects