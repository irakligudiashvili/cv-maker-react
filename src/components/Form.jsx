import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Form.css'
import '../styles/partials/FormSection.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import WorkSection from './partials/WorkSection'
import EducationSection from './partials/EducationSection'
import PersonalSection from './partials/PersonalSection'
import CustomSection from './partials/CustomSection'

function Form({onImageUpload, onFormDataChange}){
    const [customSections, setCustomSections] = useState([]);

    const handleCustomSection = ((e) => {
        e.preventDefault();

        setCustomSections([
            ...customSections,
            {id: customSections.length, title: 'Custom Section', subheader: '', content: ''}
        ])
    })

    const handleCustomSectionChange = (index, field, value) => {
        const updatedSections = [...customSections];
        updatedSections[index][field] = value;
        setCustomSections(updatedSections);
        onFormDataChange('customSections', updatedSections);
    }

    const handleCustomSectionDelete = (index) => {
        const updatedSections = customSections.filter((_, i) => i !==index);
        setCustomSections(updatedSections);
        onFormDataChange('customSections', updatedSections);
    } 

    return (
    <form className='form'>
        {/* <div className='form__button__wrapper'>
            <button className='form__button form__button--load'>Load Example</button>
            <button className='form__button form__button--clear'>Clear Resume</button>
            <button className='form__button form__button--undo'>Undo</button>
        </div> */}

        <div className='form__section'>
            <PersonalSection onImageUpload={onImageUpload} onFormDataChange={onFormDataChange} />
            <WorkSection onFormDataChange={onFormDataChange} />
            <EducationSection onFormDataChange={onFormDataChange} />

            {customSections.map((section, index) => (
                <CustomSection 
                    key={section.id}
                    customContent={section}
                    onTitleChange={(value) => handleCustomSectionChange(index, 'title', value)}
                    onSubheaderChange={(value) => handleCustomSectionChange(index, 'subheader', value)}
                    onContentChange={(value) => handleCustomSectionChange(index, 'content', value)}
                    onDelete={() => handleCustomSectionDelete(index)}
                />
            ))}
        </div>

        <button className='form__add' onClick={handleCustomSection}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    </form>
    )
}

export default Form