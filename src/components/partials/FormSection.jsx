import { faChevronDown, faCloudArrowUp, faGripVertical, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../../styles/partials/FormSection.css'
import { useState } from "react"

function FormSection({ title, isRemovable, isDraggable, upload, onImageUpload, personal, work, education, onFormDataChange }) {
    const [isVisible, setIsVisible] = useState(true);
    const [uploadedImage, setUploadedImage] = useState(null);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            console.log("Uploaded image file:", file);
            console.log("Generated image URL:", imageUrl);
            onImageUpload(imageUrl);
            setUploadedImage(imageUrl);
        }
    };

    const handleImageRemove = () => {
        setUploadedImage(null);
        onImageUpload(null);
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        onFormDataChange(name, value);
    }

    return (
    <div className='section'>
        <div className='section__header' onClick={toggleVisibility}>
            <h2>{title}</h2>

            <div>
                {isRemovable && <FontAwesomeIcon icon={faTrash} className='' />}
                {isDraggable && <FontAwesomeIcon icon={faGripVertical} className='' />}
                <FontAwesomeIcon icon={faChevronDown} className='' />
            </div>
        </div>

        <div className={`content ${!isVisible ? 'hidden' : ''}`}>
            {upload && (
                <div>
                    {!uploadedImage ? (
                    <label className='section__button section__button--upload'>
                        <input type='file' name='file' accept='image/*' onChange={handleImageUpload} />
                        <FontAwesomeIcon icon={faCloudArrowUp} />
                        <span>Upload File</span>
                    </label>
                    ): (
                        <button className='section__button section__button--remove' onClick={handleImageRemove}>
                            <FontAwesomeIcon icon={faTrash} />
                            <span>Remove Image</span>
                        </button>
                    )}
                </div>
            )}

            {personal && (
                <div className='content__container'>
                    <div className='content__wrapper'>
                        <label className='content__label'>Full Name</label>
                        <input className='content__input' name='fullName' onChange={handleInputChange} />
                    </div>
                    <div className='content__wrapper'>
                        <label className='content__label'>Email</label>
                        <input className='content__input' name='email' onChange={handleInputChange} />
                    </div>
                    <div className='content__wrapper'>
                        <label className='content__label'>Phone Number</label>
                        <input className='content__input' name='phoneNumber' onChange={handleInputChange} />
                    </div>
                    <div className='content__wrapper'>
                        <label className='content__label'>GitHub Username</label>
                        <input className='content__input' name='githubUsername' onChange={handleInputChange} />
                    </div>
                </div>
            )}

            {work && (
                <div className='content__container content__container--column'>
                    <div className='content__container--triple'>
                        <div className='content__wrapper'>
                            <label className='content__label'>Company Name</label>
                            <input className='content__input' />
                        </div>
                        <div className='content__wrapper'>
                            <label className='content__label'>Start Date</label>
                            <input className='content__input' />
                        </div>
                        <div className='content__wrapper'>
                            <label className='content__label'>End Date</label>
                            <input className='content__input' />
                        </div>
                    </div>
                    <textarea className='content__textArea' rows='8'></textarea>
                </div>
            )}

            {education && (
                <div className='content__container content__container--triple'>
                    <div className='content__wrapper'>
                        <label className='content__label'>University</label>
                        <input className='content__input' />
                    </div>
                    <div className='content__wrapper'>
                        <label className='content__label'>Major</label>
                        <input className='content__input' />
                    </div>
                    <div className='content__wrapper'>
                        <label className='content__label'>Degree</label>
                        <select className='content__select'>
                            <option className='content__option' selected disabled>Select Degree...</option>
                            <option className='content__option'>Bachelor</option>
                            <option className='content__option'>Masters</option>
                            <option className='content__option'>PhD</option>
                        </select>
                    </div>
                </div>
            )}
        </div>
    </div>)
}

export default FormSection