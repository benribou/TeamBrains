import React, { useState, useEffect } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

const SignUp = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        userType: '',
    });

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleChange = (input) => (value) => {
        const newValue = value.target ? value.target.value : value;
        setFormData({ ...formData, [input]: newValue });
      };
      

      const submitForm = () => {
        fetch('http://localhost:5001/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
    };
    

    switch (step) {
        case 1:
            return <StepOne nextStep={nextStep} handleChange={handleChange} values={formData} />;
        case 2:
            return <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} submitForm={submitForm}/>;
        case 3:
            return <StepThree prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formData} />;
        case 4:
            return <StepFour prevStep={prevStep} nextStep={nextStep} handleChange={handleChange} values={formData} submitForm={submitForm}/>;
        default:
            return <div>Erreur: Étape inconnue</div>;
    }
};

export default SignUp;
