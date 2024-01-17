import React, { useState, useEffect } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
// import StepThree from './StepThree';

const SignUp = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        userType: '', // entrepreneur ou étudiant
        // Autres champs...
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

    const handleChange = (input) => (e) => {
        setFormData({ ...formData, [input]: e.target.value });
    };

    switch (step) {
        case 1:
            return <StepOne nextStep={nextStep} handleChange={handleChange} values={formData} />;
        case 2:
            return <StepTwo nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
        // case 3:
        //     return <StepThree prevStep={prevStep} handleChange={handleChange} values={formData} />;
        default:
            return <div>Erreur: Étape inconnue</div>;
    }
};

export default SignUp;
