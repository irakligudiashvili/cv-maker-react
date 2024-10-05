import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Form.css'
import FormSection from './partials/FormSection'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Form({onImageUpload, onFormDataChange}){
    return (
    <form className='form'>
        <div className='form__button__wrapper'>
            <button className='form__button form__button--load'>Load Example</button>
            <button className='form__button form__button--clear'>Clear Resume</button>
            <button className='form__button form__button--undo'>Undo</button>
        </div>

        <div className='form__section'>
            <FormSection onFormDataChange={onFormDataChange} title="Personal Details" personal={true} isRemovable={false} isDraggable={false} upload={true} onImageUpload={onImageUpload} />
            <FormSection onFormDataChange={onFormDataChange} title="Work Experience" work={true} isRemovable={false} isDraggable={false} />
            <FormSection onFormDataChange={onFormDataChange} title="Education" education={true} isRemovable={false} isDraggable={false} />
        </div>

        <button className='form__add'>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    </form>
    )
}

export default Form