import React from 'react'

export const ContactComponent = () => {
  return (
    <div className="contact">
    <h2>Contact Me</h2>

    <form id="contactForm" action="#" method="post">
      <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" required />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" required />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
      </div>

      <div className="form-group">
        <label htmlFor="message">Contact Me:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>
  </div>

  )
}
