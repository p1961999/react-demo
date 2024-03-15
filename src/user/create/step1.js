// Step1.js
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Step1 = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useFormContext();

  return (
    <div className='user_box'>
      <h2>Step 1: User Info</h2>
        <div className='user_form'>
          <div className='form_group p_relative'>
            <label>
              <span className='label_name'>First Name*</span>
              <input {...register('userInfo.firstName', { required: 'First Name is required' })} />
              {errors.userInfo?.firstName && <p className="error-message">{errors.userInfo.firstName.message}</p>}
            </label>
          </div>
          <div className='form_group p_relative'>
            <label>
            <span className='label_name'>Last Name*</span>
              <input {...register('userInfo.lastName', { required: 'Last Name is required' })} />
              {errors.userInfo?.lastName && <p className="error-message">{errors.userInfo.lastName.message}</p>}
            </label>
          </div>
          <div className='form_group p_relative'>
            <label>
            <span className='label_name'>Parent Name*</span>
              <input {...register('userInfo.parentsName', { required: 'Parent Name is required' })} />
              {errors.userInfo?.parentsName && <p className="error-message">{errors.userInfo.parentsName.message}</p>}
            </label>
          </div>
          <div className='form_group p_relative'>
            <label>
            <span className='label_name'>Phone Number*</span>
              <input {...register('userInfo.phoneNumber',
                {
                  required: 'Phone Number is required',
                  minLength: { value: 10, message: 'Phone number must be at least 10 digits' },
                  maxLength: { value: 10, message: 'Phone number cannot exceed 10 digits' },
                  pattern: { value: /^[0-9]+$/, message: 'Phone number must contain only numbers' }
                })} />
              {errors.userInfo?.phoneNumber && <p className="error-message">{errors.userInfo.phoneNumber.message}</p>}
            </label>
          </div>
          <div className='form_group p_relative'>
            <label>
            <span className='label_name'>Email*</span>
              <input {...register('userInfo.email', {
                required: 'Email is required', pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address',
                },
              })} />
              {errors.userInfo?.email && <p className="error-message">{errors.userInfo.email.message}</p>}
            </label>
          </div>
          <div className='form_group p_relative'>
            <label>
            <span className='label_name'>Address*</span>
              <input {...register('userInfo.address', { required: 'Address is required' })} />
              {errors.userInfo?.address && <p className="error-message">{errors.userInfo.address.message}</p>}
            </label>
          </div>
          <div className='btn_wrp'>
            <button className='btn-success' type="submit">Next Step</button>
             <button className='btn-danger' onClick={() => navigate('/')}>Cancel</button>
          </div>
      </div>
    </div>
  );
};

export default Step1;
