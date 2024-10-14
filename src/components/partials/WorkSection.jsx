import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function WorkSection({ onFormDataChange }){
    
    // Toggle Visibility

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    const [workExperience, setWorkExperience] = useState ([
        {companyName: '', startDate: '', endDate: '', workObligations: ['']}
    ]);

    // Handle Work Functionality

    const handleWorkInputChange = (index, field, value) => {
        const updatedWork = [...workExperience];
        updatedWork[index][field] = value;
        setWorkExperience(updatedWork);
        onFormDataChange('workExperience', updatedWork);
    }

    const handleWorkObligationsChange = (index, value) => {
        const updatedWork = [...workExperience];
        updatedWork[index].workObligations = value.split('\n');
        setWorkExperience(updatedWork);
        onFormDataChange('workExperience', updatedWork);
    }

    const addNewCompany = (e) => {
        e.preventDefault();

        setWorkExperience([
            ...workExperience,
            {companyName: '', startDate: '', endDate: '', workObligations: ['']}
        ]);
    }

    const removeCompany = (index) => {
        const updatedWork = workExperience.filter((_, i) => i !== index);
        setWorkExperience(updatedWork)
        onFormDataChange('workExperience', updatedWork);
    }

    // Return

    return (
        <div className="section">
            <div className="section__header">
                <h2>Work Experience</h2>
                <FontAwesomeIcon icon={faChevronDown} onClick={toggleVisibility} className='' />
            </div>

            <div className={`content ${!isVisible ? 'hidden' : ''}`}>
                {workExperience.map((company, index) => (
                    <div key={index} className='content__container content__container--column'>
                        <div className="content__container--triple">
                            <div className="content__wrapper">
                                <label className="content__label"> Company Name</label>
                                <input
                                    className='content__input'
                                    name='companyName'
                                    value={company.companyName}
                                    onChange={(e) => handleWorkInputChange(index, 'companyName', e.target.value)}
                                />
                            </div>
                            <div className='content__wrapper'>
                                <label className='content__label'>Start Date</label>
                                <input
                                    className='content__input'
                                    name='startDate'
                                    value={company.startDate}
                                    onChange={(e) => handleWorkInputChange(index, 'startDate', e.target.value)}
                                />
                            </div>
                            <div className='content__wrapper'>
                                <label className='content__label'>End Date</label>
                                <input
                                    className='content__input'
                                    name='endDate'
                                    value={company.endDate}
                                    onChange={(e) => handleWorkInputChange(index, 'endDate', e.target.value)}
                                />
                            </div>
                        </div>
                        <textarea
                            className='content__textArea'
                            rows='8'
                            name='workObligations'
                            value={company.workObligations.join('\n')}
                            onChange={(e) => handleWorkObligationsChange(index, e.target.value)}
                        ></textarea>
                        <button type='button' className='form__remove form__remove--dark' onClick={() => removeCompany(index)}>
                            Remove Company
                        </button>
                    </div>
                ))}
                <button className='form__add form__add--dark' onClick={addNewCompany}>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
        </div>

    )
}

export default WorkSection