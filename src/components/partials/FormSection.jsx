import { faChevronDown, faGripVertical, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../../styles/partials/FormSection.css'
import { useState } from "react"

function FormSection(props){
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    return (
    <div className='section'>
        <div className='section__header' onClick={toggleVisibility}>
            <h2>{props.title}</h2>

            <div>
                {props.isRemovable && <FontAwesomeIcon icon={faTrash} className='' />}
                {props.isDraggable && <FontAwesomeIcon icon={faGripVertical} className='' />}
                <FontAwesomeIcon icon={faChevronDown} className='' />
            </div>
        </div>

        <div className={`content ${!isVisible ? 'hidden' : ''}`}>
            <div className='content__wrapper'>
                <label className='content__label'>Full Name</label>
                <input className='content__input' />
            </div>
            <div className='content__wrapper'>
                <label className='content__label'>Email</label>
                <input className='content__input' />
            </div>
            <div className='content__wrapper'>
                <label className='content__label'>Phone Number</label>
                <input className='content__input' />
            </div>
            <div className='content__wrapper'>
                <label className='content__label'>GitHub Username</label>
                <input className='content__input' />
            </div>
        </div>
    </div>)
}

export default FormSection