import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profile_img from '../../assets/Profile_img.jpeg'
const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" id='profile-img'/>
        <h1><span>I'm Hassan Javed,</span> A Front-End Developer Based in Pakistan</h1>
      <p>A dedicated React JS Developer focused on building dynamic, high-performance, and user-friendly web applications using modern JavaScript and component-driven architecture.</p>
      <div className="hero-action">
        <div className="hero-connect">  
          <AnchorLink className='anchor-link'  href='#contact'>
          Connect with me !
          </AnchorLink>
          
          </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero
