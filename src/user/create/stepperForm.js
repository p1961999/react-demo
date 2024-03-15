import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Step1 from './step1';
import Step2 from './step2';

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState(null);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const step2formVal = { name: '', occupation: '', gender: 'male', phoneNumber: '' }
  const methods = useForm({
    defaultValues: {
      userInfo: {
        firstName: '',
        lastName: '',
        parentsName: '',
        phoneNumber: '',
        email: '',
        address: '',
      },
      familyInfo: [step2formVal],
    },
  });

  const { handleSubmit, setError, getValues } = methods;

  const navigate = useNavigate();

  const onSubmitStep1 = (data) => {
    if (data.userInfo.email === 'example@example.com') {
      setError('userInfo.email', {
        type: 'manual',
        message: 'Email is already in use.',
      });
      return;
    }
    setCurrentStep((prevStep) => Math.min(prevStep + 1, 2));
  };

  const onSubmitStep2 = (data) => {
    setUserData(data);
    setShowSuccessPopup(true);
    setTimeout(() => {
      setShowSuccessPopup(false);
      navigate('/view', { state: data });
    }, 1000);
  };

  const handlePrevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <FormProvider {...methods}>
      <div className='user_box'>
      <div className=''>
        {currentStep === 1 ? (<form onSubmit={handleSubmit(onSubmitStep1)}> <Step1 /></form>) :
          currentStep === 2 && <Step2 step2formVal={step2formVal} />}
      </div>
      <div className='btn_wrp'>
        {currentStep > 1 && (
          <button className='btn-success' type="button" onClick={handlePrevStep}>
            Previous Step
          </button>
        )}
        {currentStep > 1 &&
          (
            <button className='btn-danger' type="submit" onClick={handleSubmit(onSubmitStep2)}>
              Submit
            </button>
          )}

        {showSuccessPopup && (
          <div className="success-popup">
            <p>Data submitted Successfully!!!</p>
          </div>
        )}
      </div>
      </div>
    </FormProvider>
  );
};

export default StepperForm;
