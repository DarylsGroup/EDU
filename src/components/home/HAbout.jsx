import React, { useState } from "react";
import OnlineCourses from "../allcourses/OnlineCourses";
import Heading from "../common/heading/Heading";
import EnrollmentForm from "./EnrollmentForm"; // Import the EnrollmentForm
import "../allcourses/courses.css";
import { coursesCard } from "../../dummydata";

const HAbout = () => {
  const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  const handleEnrollClick = () => {
    setModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='our courses' title='explore our popular online courses' />

          <div className='coursesCard'>
            <div className='grid2'>
              {coursesCard.slice(0, 3).map((val) => (
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
                        <label htmlFor=''>(5.0)</label>
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
                  <button className='outline-btn' onClick={handleEnrollClick}>ENROLL NOW !</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
      {isModalOpen && <EnrollmentForm onClose={handleCloseModal} />} {/* Render the modal */}
    </>
  );
};

export default HAbout;