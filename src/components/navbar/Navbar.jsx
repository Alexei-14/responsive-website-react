import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css'
import logo from '../../assets/logo.svg'

// BEM -> block Element Modifier

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='react__navbar'>
      <div className='react__navbar-links'>
        <div className='react__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='react__navbar-links_container'>
          <p><a href="#AllCourses">All Coureses</a></p>
          <p><a href="#About">About Courses</a></p>
          <p><a href="#pradunya">Pradunya</a></p>
        </div>
      </div>
      <div className='react__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      
      <div className='react__navbar-menu'>
      {toggleMenu
          ? <RiCloseLine color="#fff" onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" onClick={() => setToggleMenu(true)} />
      }
        {toggleMenu && (
          <div className='react__navbar-menu_container slide-in-top'>
            <div className='react__navbar-menu_container-links'>
               <p><a href="#AllCourses">All Coureses</a></p>
               <p><a href="#About">About Courses</a></p>
               <p><a href="#pradunya">Pradunya</a></p>
               <div className='react__navbar-menu_containers-links-sign'>
                 <p>Sign in</p>
                 <button type='button'>Sign up</button>
               </div>
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}
export default Navbar