import { useState } from 'react'
import './App.css'
import Form from './components/form'
import CvPreview from './components/cvPreview'

function App() {
  return (
    <div className='body'>
      <Form />
      <CvPreview />
    </div>
  )
}

export default App
