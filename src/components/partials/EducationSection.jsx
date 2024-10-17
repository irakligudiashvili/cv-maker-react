import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function EducationSection({ onFormDataChange }){

    // Toggle Visibility

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    // Education Functionality

    const [education, setEducation] = useState([
        {universityName: '', major: '', degree: ''}
    ]);

    const handleEducationInputChange = (index, field, value) => {
        const updatedEducation = [...education];
        updatedEducation[index][field] = value;
        setEducation(updatedEducation);
        onFormDataChange('education', updatedEducation);
    }

    const addNewEducation = (e) => {
        e.preventDefault();

        setEducation([
            ...education,
            {universityName: '', major: '', degree: ''}
        ]);
    }

    const removeEducation = (index) => {
        const updatedEducation = education.filter((_, i) => i !== index);
        setEducation(updatedEducation);
        onFormDataChange('education', updatedEducation);
    }

    // Return

    return (
        <div className="section">
            <div className="section__header">
                <h2>Education</h2>
                <FontAwesomeIcon icon={faChevronDown} onClick={toggleVisibility} className='hover' />
            </div>

            <div className={`content ${!isVisible ? 'hidden' : ''}`}>
                {education.map((education, index) => (
                    <div key={index} className='content__container content__container--triple'>
                        <div className='content__wrapper'>
                            <label className='content__label'>University</label>
                            <input 
                            className='content__input'
                            name='educationName'
                            value={education.universityName}
                            onChange={(e) => handleEducationInputChange(index, 'universityName', e.target.value)}
                            />
                        </div>
                        <div className='content__wrapper'>
                            <label className='content__label'>Major</label>
                            <input
                            className='content__input'
                            name='major'
                            value={education.major}
                            onChange={(e) => handleEducationInputChange(index, 'major', e.target.value)}
                            />
                        </div>
                        <div className='content__wrapper'>
                            <label className='content__label'>Degree</label>
                            <select className='content__select' name='degree' value={education.degree} onChange={(e) => handleEducationInputChange(index, 'degree', e.target.value)}>
                                <option className='content__option' value='' selected disabled>Select Degree...</option>
                                <option className='content__option'>Bachelor</option>
                                <option className='content__option'>Masters</option>
                                <option className='content__option'>PhD</option>
                            </select>
                        </div>

                        <button type='button' className='form__remove form__remove--dark' onClick={() => removeEducation(index)}>
                            Remove
                        </button>
                    </div>
                ))}
                <button className='form__add form__add--dark' onClick={addNewEducation}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>
    )

}

export default EducationSection