import React, { useState } from 'react';
import './styles.css'; // Ensure your CSS is imported

const EnrollmentForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [courses, setCourses] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [address, setAddress] = useState(''); // New state for address
  const [age, setAge] = useState(''); // New state for age
  const [gender, setGender] = useState(''); // New state for gender
  const [contacts, setContacts] = useState(''); // New state for contacts
  const [errors, setErrors] = useState({});

  // Function to validate the form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!name) {
      newErrors.name = 'Name is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!courses) {
      newErrors.courses = 'Please specify the courses you want to apply for';
    }
    if (!paymentMethod) {
      newErrors.paymentMethod = 'Please select a payment method';
    }
    if (!address) {
      newErrors.address = 'Address is required';
    }
    if (!age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(age) || age <= 0) {
      newErrors.age = 'Please enter a valid age';
    }
    if (!gender) {
      newErrors.gender = 'Please select your gender';
    }
    if (!contacts) {
      newErrors.contacts = 'Contacts are required';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Form submitted:', { name, email, courses, paymentMethod, address, age, gender, contacts });
    // Reset form fields
    setName('');
    setEmail('');
    setCourses('');
    setPaymentMethod('');
    setAddress('');
    setAge('');
    setGender('');
    setContacts('');
    setErrors({});
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Enroll Now!</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input 
              type="text" 
              name="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </label>
          <label>
            Email:
            <input 
              type="email" 
              name="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </label>
          <label>
            Address:
            <input 
              type="text" 
              name="address" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              required 
            />
            {errors.address && <div className="error">{errors.address}</div>}
          </label>
          <label>
            Gender:
            <select 
              name="gender" 
              value={gender} 
              onChange={(e) => setGender(e.target.value)} 
              required
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <div className="error">{errors.gender}</div>}
          </label>
          
          <label>
            Courses Applied For:
            <textarea 
              name="courses" 
              value={courses} 
              onChange={(e) => setCourses(e.target.value)} 
              required 
              rows="4" 
            />
            {errors.courses && <div className="error">{errors.courses}</div>}
          </label>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
             