import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";
import "./CertificatePopup.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); 

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      courseName: formData.get('courseName'),
      completionDate: formData.get('completionDate'),
      comments: formData.get('comments'),
    };
    console.log('Certificate Request Data:', data);
    // Here you can add your form submission logic, like sending data to an API
    // After submission, you can close the popup
    togglePopup();
  };

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button' onClick={togglePopup}>GET CERTIFICATE</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>

      {/* Popup Certificate Request Form */}
      {isPopupOpen && (
        <div className={`popup ${isPopupOpen ? 'show' : ''}`}>
          <div className='popup-content'>
            <span className='close' onClick={togglePopup}>&times;</span>
            <h2>Get Certificate</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Course Name:
                <input type="text" name="courseName" required />
              </label>
              <label>
                Completion Date:
                <input type="date" name="completionDate" required />
              </label>
              <label>
                Additional Comments:
                <textarea name="comments" rows="4"></textarea>
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;