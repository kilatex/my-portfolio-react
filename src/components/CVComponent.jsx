import React from 'react'

export const CVComponent = () => {
  return (
    <div className="curriculum">
      <h2>Curriculum Vitae</h2>

      <div className="personal-info">
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> Santiago Dario Maldonado De Santiago</p>
        <p><strong>Age:</strong> 37</p>
        <p><strong>From:</strong> Kentucky, United States of America</p>
      </div>


      <div className="experience">
        <h3>Professional Experience</h3>

        <div className="job">
          <h4>Web Developer - ABC Company</h4>
          <p className="date">June 2020 - Present</p>
          <p>Collaborated in the development of client-facing web applications using ReactJS. Implemented responsive design principles to ensure optimal user experience across various devices.</p>
        </div>


      </div>

      <div className="education">
        <h3>Education</h3>

        <div className="school">
          <h4>Bachelor of Science in Computer Science - XYZ University</h4>
          <p className="date">Graduated May 2020</p>
        </div>


      </div>


    </div>

  )
}
