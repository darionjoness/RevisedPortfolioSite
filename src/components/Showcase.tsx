import React from 'react'
import About from './About'
import Navbar from './Navbar'

interface ShowcaseTypes {
  toggleNav: React.MouseEventHandler
}

const Showcase = ({ toggleNav }: ShowcaseTypes) => {
  return (
    <div id='showcase' className='showcase'>
      <Navbar toggleNav={toggleNav} />
        <div className="showcaseItems">

            <div className="showcaseText">
                <h1>Darion Jones</h1>
                <h2>Front end Developer</h2>
            </div>
        </div>
    </div>
  )
}

export default Showcase