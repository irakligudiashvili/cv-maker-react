import { faChevronDown, faGripVertical, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function CustomSection({ customContent, onDelete, onTitleChange, onSubheaderChange, onContentChange }){

    // Toggle Visibility

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    // Custom Section Title Editting 

    const [isEditingTitle, setIsEditingTitle] = useState(false);

    const handleTitleClick = () => {
        console.log('Title clicked');
        setIsEditingTitle(true);
    };

    const handleTitleKeyPress = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            setIsEditingTitle(false);
        }
    };

    const handleBlur = () => {
        setIsEditingTitle(false);
    }

    // Line break

    const handleContetnChange = (e) => {
        const value = e.targt.value.split('\n');
        onContentChange(value.join('\n'));
    }

    // Return

    return (
        <div className='section'>
            <div className='section__header'>

                <div className='section__subheader'>
                    {isEditingTitle ? (
                        <input 
                        type="text"
                        value={customContent.title}
                        name='title'
                        onChange={(e) => onTitleChange(e.target.value)}
                        onKeyDown={handleTitleKeyPress}
                        onBlur={handleBlur}
                        autoFocus
                        className='section__title-input'
                        />
                    ) : (
                        <div className='row' onClick={handleTitleClick}>
                            <h2 className='hover'>{customContent.title}</h2>
                            <FontAwesomeIcon icon={faPenToSquare} className='hover'/>
                        </div>
                    )}
                </div>

                <div className='section__config'>
                    <FontAwesomeIcon icon={faTrash} className='section__config__delete' onClick={onDelete} />
                    {/* <FontAwesomeIcon icon={faGripVertical} className='section__config__drag' /> */}
                    <FontAwesomeIcon icon={faChevronDown} onClick={toggleVisibility} className='hover' />
                </div>
            </div>
    
            <div className={`content ${!isVisible ? 'hidden' : ''}`}>
                <div className="content__container column">
                    <label className='content__label'>Custom Heading</label>
                    <input className='content__input'
                    name='subheader'
                    value={customContent.subheader}
                    onChange={(e) => onSubheaderChange(e.target.value)}
                    />
                    <label className='content__label'>Custom Section</label>
                    <textarea
                        className='content__textArea'
                        rows='8'
                        name='content'
                        value={customContent.content}
                        onChange={handleContetnChange}
                    ></textarea>
                </div>
            </div>
        </div>)
}

export default CustomSection