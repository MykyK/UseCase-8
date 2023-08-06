import React, { useState } from 'react';
import validator from 'validator';
import './UserForm.css';

const UserForm = ({ addUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = findFormErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      addUser({
        firstName,
        lastName,
        email,
        message,
      });


      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');


      setErrors({});
    }
  };

  const findFormErrors = () => {
    const newErrors = {};

    
    if (!firstName || firstName === '') newErrors.firstName = 'Cannot be blank!';
    if (!lastName || lastName === '') newErrors.lastName = 'Cannot be blank!';
    
    
    if (!email || email === '') newErrors.email = 'Cannot be blank!';
    else if (!validator.isEmail(email)) newErrors.email = 'Please enter a valid email!';
    
    if (message.length < 10) newErrors.message = 'Message should not be empty. message should be minimum 10 characters';
    if (!message || message === '') newErrors.message = 'Cannot be blank!';

    return newErrors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        {errors.firstName && <p>{errors.firstName}</p>}
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        {errors.lastName && <p>{errors.lastName}</p>}
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errors.email && <p>{errors.email}</p>}
      </label>
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        {errors.message && <p>{errors.message}</p>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};


export default UserForm;
