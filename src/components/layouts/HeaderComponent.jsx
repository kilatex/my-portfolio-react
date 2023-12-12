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
          <li><NavLink className={({isActive}) => (isActive ? "active" : '')} to="/home">Home</NavLink></li>
          <li><NavLink className={({isActive}) => (isActive ? "active" : '')}to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink className={({isActive}) => (isActive ? "active" : '')} to="/services">Services</NavLink></li>
          <li><NavLink className={({isActive}) => (isActive ? "active" : '')} to="/cv">My CV</NavLink></li>
          <li><NavLink className={({isActive}) => (isActive ? "active" : '')} to="/contact ">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
