import { useState } from 'react'
import './App.css'
import CvPreview from './components/CvPreview'
import Form from './components/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faFilePdf } from '@fortawesome/free-solid-svg-icons';

function App() {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [isMobilePreviewVisible, setIsMobilePreviewVisible] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        githubUsername: '',
        customSections: [
            {
            title: '',
            subheader: '',
            content: ''
            }
        ]
    });

    const handleImageUpload = (imageUrl) => {
        setUploadedImage(imageUrl);
    }

    const handleFormDataChange = (name, value) => {
        setFormData((prevData) => ({
        ...prevData, [name]: value
        }));
        console.log("Form data updated:", formData);
    }

    const toggleMobilePreviewVisibility = () => {
        setIsMobilePreviewVisible(!isMobilePreviewVisible);
    }

    return (
        <div className='body'>

            <div className='config'>
                <FontAwesomeIcon icon={faEye} className='config__view' onClick={toggleMobilePreviewVisibility} />
            </div>

            <div className={`preview--mobile cv ${isMobilePreviewVisible ? '' : 'hidden'}`}>
                <CvPreview uploadedImage={uploadedImage} formData={formData} previewId="cvPreviewMobile" />
            </div>

            <Form onImageUpload={handleImageUpload} onFormDataChange={handleFormDataChange} />
            <div className='preview--desktop cv'>
                <CvPreview uploadedImage={uploadedImage} formData={formData} previewId="cvPreviewDesktop" />
            </div>

        </div>
    )
}

export default App
