import React from 'react'
import './About.css'
import profile_img from '../../assets/Profile_img.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
   
    <div className="about-title">
        <h1>About Me</h1>
    </div>

    <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" id='img' />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I’m a React.js Frontend Developer from Pakistan, crafting responsive and user-friendly web apps.</p>
                <p> Experienced in client interaction, sales, and customer support, ensuring seamless project execution and satisfaction.</p>
                <p>Eager to apply my knowledge and skills in a dynamic environment, contributing to the growth of the organization.
</p>
            </div>
            <div className="about-skills">
                    <div className="about-skill"><p>Html & CSS</p><hr style={{width:'50%'}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:'60%'}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:'70%'}} /></div>
                    <div className="about-skill"><p>Angular</p><hr style={{width:'50%'}} /></div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default About
