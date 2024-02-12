// FormComponent.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserData } from '../Redux_Store/userSlice';
import { Link } from 'react-router-dom';
import './ShippingInfo.css';
const ShippingInfo = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Dispatch an action to update the Redux store with the form data
    dispatch(setUserData(formData));


    // Optionally, you can reset the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      contactNumber: '',
      address: '',
    });
  };

    
    console.log(formData)

  return (
    <div className='shop'>
      <label className='label'>
        First Name:
        <input className='name' type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        </label>
        <br />  
        <label className='label'>
        Last Name:
        <input className='name' type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          </label>
        <br />   
        <label className='label'>             
        Contact Number:
        <input className='name' type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
          </label>
        <br />  
      <label className='label'>
        Address:
        <input className='name' type="text" name="address" value={formData.address} onChange={handleChange} />
          </label>
        <br />  
          <Link to='/cart'>
              <button className='btn' onClick={handleSubmit}>Submit</button>
           </Link>    
    </div>
  );
};

export default ShippingInfo;
