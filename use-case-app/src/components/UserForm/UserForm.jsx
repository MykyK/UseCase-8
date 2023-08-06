import React, { useState } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';
import { addUser } from '../../store/actions';
import './UserForm.css';

const UserForm = ({ users, addUser }) => {
  console.log(users)
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

const mapDispatchToProps = {
  addUser,
};

export default connect(null, mapDispatchToProps)(UserForm);
