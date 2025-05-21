import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo2.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/hamburger.png'
import menu_close from '../../assets/close.png'
const Navbar = () => {
      const menuRef = useRef();

      const openMenu = () => {
        menuRef.current.style.right = "0";
      };

      const closeMenu = () => {
        menuRef.current.style.right = "-350px";
      };
  return (
    <div className='navbar'>
      <img src={logo} alt="" id='logo' />
      <img src={menu_open} alt="" onClick={openMenu} className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" onClick={closeMenu} className="nav-mob-close" />
        <li><AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link'  href='#about'><p>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link'  href='#work'><p>Portfolio</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link'  href='#contact'><p>Contact</p></AnchorLink></li>
      </ul>
        <div className="nav-connect">
          <AnchorLink className='anchor-link'  href='#contact'>
            Connect With Me!
            </AnchorLink>
            </div>
    </div>
  )
}

export default Navbar
