import React, { useState } from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";

const CoursesCard = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage pop-up visibility
  const [enrollmentDetails, setEnrollmentDetails] = useState({
    name: '',
    email: '',
    course: '',
    paymentMethod: '',
  });

  const handleEnrollClick = (courseName) => {
    setEnrollmentDetails({ ...enrollmentDetails, course: courseName }); // Set the course name in the enrollment details
    setIsOpen(true); // Show the pop-up form
  };

  const closeForm = () => {
    setIsOpen(false); // Close the pop-up form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEnrollmentDetails({ ...enrollmentDetails, [name]: value }); // Update enrollment details state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Enrollment Details:", enrollmentDetails);
    closeForm(); // Close the form after submission
  };

  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items' key={val.id}>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''> (5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <div className='box' key={details.id}>
                        <div className='dimg'>
                          <img src={details.dcover} alt='' />
                        </div>
                        <div className='para'>
                          <h4>{details.name}</h4>
                        </div>
                        <span>{details.totalTime}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className='outline-btn' onClick={() => handleEnrollClick(val.coursesName)}>
                ENROLL NOW !
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Pop-up Form */}
      {isOpen && (
        <div className='popup'>
          <div className='popup-content'>
            <span className='close' onClick={closeForm}>&times;</span>
            <h2>Enroll Now</h2>
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input 
                type='text' 
                name='name' 
                value={enrollmentDetails.name} 
                onChange={handleChange} 
                required 
              />
              <label>Email:</label>
              <input 
                type='email' 
                name='email' 
                value={enrollmentDetails.email} 
                onChange={handleChange} 
                required 
              />
              <label>Course:</label>
              <input 
                type='text' 
                name='course' 
                value={enrollmentDetails.course} 
                readOnly 
              />
              <label>Payment Method:</label>
              <input 
                type='text' 
                name='paymentMethod' 
                value={enrollmentDetails.paymentMethod} 
                onChange={handleChange} 
                required 
              />
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CoursesCard;