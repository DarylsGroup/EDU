import React from 'react';
import './EnrollmentModal.css'; // Create a CSS file for styles

const EnrollmentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // If modal is not open, return null

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <h2>Enrollment Form</h2>
        <form>
          <label>
            Name:
            <input type='text' required />
          </label>
          <label>
            Email:
            <input type='email' required />
          </label>
          <label>
            Course:
            <select required>
              <option value=''>Select a course</option>
              <option value='course1'>Course 1</option>
              <option value='course2'>Course 2</option>
            </select>
          </label>
          <button type='submit'>Enroll</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EnrollmentModal;