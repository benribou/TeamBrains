import React, { useState } from 'react';
import student from "../../assets/character-student.svg";
import entrepreneur from "../../assets/character-entrepreneur.svg";

const StepOne = ({ nextStep, handleChange, values }) => {

    const [error, setError] = useState('');

    const handleNextStep = () => {
        if (!values.userType) {
            setError('Veuillez sélectionner un type avant de continuer.');
        } else {
            setError('');
            nextStep();
        }
    };

    return (
        <div className="flex justify-center py-14">
            <div className="text-center">
                <h3 className="text-xl mb-8">Quel type de personne êtes-vous ?</h3>

                <div className="flex justify-center gap-4">
                    <div className="w-72 card">
                    <label className={`block p-6 bg-white border shadow rounded cursor-pointer ${values.userType === 'étudiant' ? 'ring-4 ring-green-tb' : ''}`}>
                            <img src={student} alt="Étudiant" className="h-56 w-56"/>
                            <h4 className="text-lg font-bold mt-2">Étudiant</h4>
                            <p className="text-sm">Challengez vous et acquérez de l'expérience en travaillant en équipe sur des projets concrets et réels.</p>
                            <input type="radio" name="userType" value="étudiant" onChange={handleChange('userType')} checked={values.userType === 'étudiant'} className="hidden" />
                        </label>
                    </div>
                    
                    <div className="w-72 card">
                    <label className={`block p-6 bg-white border shadow rounded cursor-pointer ${values.userType === 'entrepreneur' ? 'ring-4 ring-green-tb' : ''}`}>
                            <img src={entrepreneur} alt="Entrepreneur" className="h-56 w-56"/>
                            <h4 className="text-lg font-bold mt-2">Entrepreneur</h4>
                            <p className="text-sm">Donnez vie à vos idées sans vous ruiner. Nos développeurs juniors vous aident à démarrer votre projet.</p>
                            <input type="radio" name="userType" value="entrepreneur" onChange={handleChange('userType')} checked={values.userType === 'entrepreneur'} className="hidden" />
                        </label>
                    </div>
                </div>

                {error && <p className="pt-4 text-red-500">{error}</p>}

                <button onClick={handleNextStep} className="mt-4 bg-green-tb text-white py-2 px-4 rounded hover:bg-green-600">Suivant</button>
            </div>
        </div>
    );
};

export default StepOne;
