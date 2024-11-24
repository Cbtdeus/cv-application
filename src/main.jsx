import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BasicInfo from './basicInfo'
import './index.css'
import EducationInfo from './educationInfo'
import ExperienceInfo from './experienceInfo'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BasicInfo/>
    <EducationInfo />
    <ExperienceInfo />
    <button>Submit</button>
  </StrictMode>,
)
