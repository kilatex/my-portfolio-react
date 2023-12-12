import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderComponent = () => {
  return (
    
    <header>
      <div className="logo">
        <span>S</span>
      <h3>santiagodsan</h3>
      </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/portfolio">Portfolio</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/cv">My CV</NavLink>
              <NavLink to="/contact ">Contact</NavLink>

            </li>
          </ul>
        </nav>
    </header>
  )
}
