import { useState } from 'react'
import './App.css'
import CvPreview from './components/CvPreview'
import Form from './components/Form'

function App() {
  return (
    <div className='body'>
      <Form />
      <CvPreview />
    </div>
  )
}

export default App
