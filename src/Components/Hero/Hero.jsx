import React from 'react'
import './Hero.css'


// Components
import Logo from './Logo'
import Menu from './Menu'
import Social from './Social'

const Hero = () => {
   return (
      <div className="hero-container">
         <div className="hero-leftside-container">
            <div className="hero-logo">
               <Logo />
            </div>
            <div className="hero-menu">
               <Menu />
            </div>
            <div className="hero-social">
               <Social />
            </div>
         </div>
         <div className="hero-rightside-container">

         </div>
      </div>
   )
}

export default Hero