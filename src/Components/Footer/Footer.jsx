import React from 'react'
import './Footer.css'
import logo from '../../assets/logo2.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={logo} alt="" id='logof' />
            <p>Passionate about clean code, seamless UI, and real-world impact. Let’s build something amazing together — connect anytime!</p>
        </div>

      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'> © 2025 M.Hassan Khan. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>Term of services</p>
            <p>Privacy Policy</p>
            <p>Connect with Me !</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
