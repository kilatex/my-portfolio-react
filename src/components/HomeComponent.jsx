import React from 'react'
import { Link } from 'react-router-dom'

export const HomeComponent = () => {
  return (
    <div className='home--container'>
      <h2>Santiago De Santiago</h2>

      <div className="about-me">
        Welcome to Santiago's corner of the web! I'm a passionate web developer with a focus on creating exceptional user experiences using ReactJS. My journey in the world of coding began with a fascination for turning ideas into functional, beautiful, and interactive websites.      </div>

      <div className="why-react">
        <h3>Why React Js?</h3>
        <p>ReactJS has become my tool of choice due to its flexibility, efficiency, and the ability to build scalable applications. I thrive on the challenges of crafting responsive and dynamic user interfaces that not only meet but exceed expectations.</p>
      </div>

      <div className="approach">
        <h3>My Approach</h3>
        <p>n every project, I bring a blend of creativity and technical expertise. I believe in the power of collaboration and communication to bring ideas to life. Whether you're looking to revamp your existing website or embark on a new digital venture, I'm here to turn your vision into reality.</p>
      </div>

      <div className="learning">
        <h3>Continuous Learning</h3>
        <p>The fast-paced nature of web development keeps me on my toes, and I love it! I'm always exploring new technologies and staying up-to-date with industry trends to ensure that my skills are cutting-edge. This commitment to continuous learning allows me to provide innovative solutions to my clients.</p>
      </div>

      <div className="build-together">
        <h3>Lets Build Together</h3>
        <p>If you're in need of a dedicated and experienced ReactJS developer who is as passionate about your project as you are, let's connect! I'm excited to learn more about your ideas and explore how we can collaborate to bring them to life.

        </p>
      </div>

      <div className="home-contact">
      <h3> <Link to="/contact">Contact</Link> </h3> 
      </div>
    </div>
  )
}
