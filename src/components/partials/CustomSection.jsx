import { faChevronDown, faGripVertical, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function CustomSection({title, custom}){

    // Toggle Visibility

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    // Custom Section Functionality

    const [isEditingTitle, setIsEditingTitle] = useState(false);
    const [sectionTitle, setSectionTitle] = useState('Custom Section');

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

    // Return

    return (
        <div className='section'>
            <div className='section__header'>

                <div className='section__subheader'>
                    {isEditingTitle ? (
                        <input 
                        type="text"
                        value={sectionTitle}
                        onChange={handleTitleChange}
                        onKeyDown={handleTitleKeyPress}
                        onBlur={handleBlur}
                        autoFocus
                        className='section__title-input'
                        />
                    ) : (
                        <h2 className='hover' onClick={handleTitleClick}>{sectionTitle}</h2>
                    )}
                    <FontAwesomeIcon icon={faPenToSquare} className='hover'/>
                </div>

                <div className='section__config'>
                    <FontAwesomeIcon icon={faTrash} className='section__config__delete' />
                    <FontAwesomeIcon icon={faGripVertical} className='section__config__drag' />
                    <FontAwesomeIcon icon={faChevronDown} onClick={toggleVisibility} className='' />
                </div>
            </div>
    
            <div className={`content ${!isVisible ? 'hidden' : ''}`}>
                <div className="content__container column">
                    <label className='content__label'>Custom Heading</label>
                    <input className='content__input' />
                    <label className='content__label'>Custom Section</label>
                    <textarea
                        className='content__textArea'
                        rows='8'
                        name='customInformation'
                    ></textarea>
                </div>
            </div>
        </div>)
}

export default CustomSection