import { faChevronDown, faCloudArrowUp, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

function PersonalSection({onImageUpload, onFormDataChange}){

    // Toggle Visibility

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    // Personal Section Functionality

    const [uploadedImage, setUploadedImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            onImageUpload(imageUrl);
            setUploadedImage(imageUrl);
        }
    }

    const handleImageRemove = () => {
        setUploadedImage(null);
        onImageUpload(null);
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        onFormDataChange(name, value)
    }

    return (
        <div className="section">
            <div className="section__header">
                <h2>Education</h2>
                <FontAwesomeIcon icon={faChevronDown} onClick={toggleVisibility} className='' />
            </div>

            <div className={`content ${!isVisible ? 'hidden' : ''}`}>
                <div>
                    {!uploadedImage ? (
                        <label className='section__button section__button--upload'>
                            <input type='file' name='file' accept='image/*' onChange={handleImageUpload} />
                            <FontAwesomeIcon icon={faCloudArrowUp} />
                            <span>Upload File</span>
                        </label>
                    ) : (
                        <button className='section__button section__button--remove' onClick={handleImageRemove}>
                            <FontAwesomeIcon icon={faTrash} />
                            <span>Remove Image</span>
                        </button>
                    )}
                </div>

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
            </div>
        </div>
    )
} 

export default PersonalSection