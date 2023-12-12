import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderComponent = () => {
  return (
    
    <header className='header'>
      <div className="logo">
        <span>S</span>
      <h3>santiagodsan</h3>
      </div>
        <nav>
          <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/cv">My CV</NavLink></li>
            <li><NavLink to="/contact ">Contact</NavLink></li>
          </ul>
        </nav>
    </header>
  )
}
