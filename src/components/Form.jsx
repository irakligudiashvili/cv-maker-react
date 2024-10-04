import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/Form.css'
import FormSection from './partials/FormSection'
import { faCirclePlus, faPlus } from '@fortawesome/free-solid-svg-icons'

function Form(){
    return (
    <form className='form'>
        <div className='form__button__wrapper'>
            <button className='form__button form__button--load'>Load Example</button>
            <button className='form__button form__button--clear'>Clear Resume</button>
            <button className='form__button form__button--undo'>Undo</button>
        </div>

        <div className='form__section'>
            <FormSection title="Work Experience" isRemovable={false} isDraggable={false} />
            <FormSection title="Work Experience" isRemovable={false} isDraggable={false} />
            <FormSection title="Work Experience" isRemovable={false} isDraggable={false} />
        </div>

        <button className='form__add'>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    </form>
    )
}

export default Form