import { useState } from 'react'
import './App.css'
import CvPreview from './components/CvPreview'
import Form from './components/Form'

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    githubUsername: ''
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

  return (
    <div className='body'>
      <Form onImageUpload={handleImageUpload} onFormDataChange={handleFormDataChange} />
      <CvPreview uploadedImage={uploadedImage} formData={formData} />
    </div>
  )
}

export default App
