import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Import useHistory
import Heading from "../../common/heading/Heading";
import EnrollmentModal from "../../common/modal/EnrollmentModal"; // Import the modal
import "./Hero.css";

const Hero = () => {
  const history = useHistory(); // Create history object
  const [isModalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  const handleViewCourses = () => {
    history.push('/courses'); // Navigate to the courses route
  };

  const handleGetStarted = () => {
    setModalOpen(true); // Open the modal when "GET STARTED NOW" is clicked
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
            <p>your trusted partner in achieving academic and professional success through personalized and innovative online education solutions.</p>
            <div className='button'>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>

      {/* Include the modal */}
      <EnrollmentModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Hero;