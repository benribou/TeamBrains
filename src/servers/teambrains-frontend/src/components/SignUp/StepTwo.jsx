const StepTwo = ({ nextStep, handleChange, values }) => {
    return (
        <div>
            <h2>Étape 2: Type d'utilisateur</h2>
            <label>
                Entrepreneur
                <input type="radio" name="userType" value="entrepreneur" onChange={handleChange('userType')} checked={values.userType === 'entrepreneur'} />
            </label>
            <label>
                Étudiant
                <input type="radio" name="userType" value="étudiant" onChange={handleChange('userType')} checked={values.userType === 'étudiant'} />
            </label>
            <button onClick={nextStep}>Suivant</button>
        </div>
    );
};

export default StepTwo;