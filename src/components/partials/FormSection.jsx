import { faChevronDown, faCloudArrowUp, faGripVertical, faPenToSquare, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../../styles/partials/FormSection.css'
import { useState } from "react"

function FormSection({ title, custom }) {
    const [isVisible, setIsVisible] = useState(true);
    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [sectionTitle, setSectionTitle] = useState(title);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleTitleClick = () => {
        console.log('Title clicked');
        setIsEditingTitle(true);
    };

    const handleTitleChange = (e) => {
        setSectionTitle(e.target.value);
    }

    const handleTitleKeyPress = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            setIsEditingTitle(false);
        }
    };

    const handleBlur = () => {
        setIsEditingTitle(false);
    }

    return (
    <div className='section'>
        <div className='section__header'>
            

            {custom ? (
                <div className='section__subheader'>
                    {isEditingTitle ? (
                        <input 
                        type="text"
                        value={sectionTitle}
                        onChange={handleTitleChange}
                        onKeyPress={handleTitleKeyPress}
                        onBlur={handleBlur} // Exit edit mode when losing focus
                        autoFocus
                        className='section__title-input'
                        />
                    ) : (
                        <h2 onClick={handleTitleClick}>{sectionTitle}</h2>
                    )}
                    {custom && <FontAwesomeIcon icon={faPenToSquare} />}
                </div>
            ) : (
                <div className='section__subheader'>
                    <h2 className='hover'>{title}</h2>
                    {custom && <FontAwesomeIcon icon={faPenToSquare} className='hover'/>}
                </div>
            )}

            <div className='section__config'>
                {custom && <FontAwesomeIcon icon={faTrash} className='section__config__delete' />}
                {custom && <FontAwesomeIcon icon={faGripVertical} className='section__config__drag' />}
                <FontAwesomeIcon icon={faChevronDown} onClick={toggleVisibility} className='' />
            </div>
        </div>

        <div className={`content ${!isVisible ? 'hidden' : ''}`}>

            {custom && (
                <div className="content__container column">
                    <label className='content__label'>Custom Heading</label>
                    <input className='content__input' value={sectionTitle} onChange={(e) => onTitleChange(e.target.value)} />
                    <label className='content__label'>Custom Section</label>
                    <textarea
                        className='content__textArea'
                        rows='8'
                        name='customInformation'
                        // value={company.workObligations.join('\n')}
                        onChange={(e) => onContentChange(e.target.value)}
                    ></textarea>
                </div>
            )}
        </div>
    </div>)
}

export default FormSection