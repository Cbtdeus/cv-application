import { useState } from "react"; 
/* import defaultValues from "./defaults"; */
import ContactInfoForm from "./ContactInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import ExperienceInfoForm from "./ExperienceInfoForm";

export default function App() {
  function submitEducation(event) {
    event.preventDefault()
    setEducation([...education,educationInfo])
    setEducationInfo({place:"",degree:"",startDate:"",endDate:"",location:""})
  }

  function submitExperience(event) {
    event.preventDefault()
    setExperience([...experience,experenceInfo])
    setExperienceInfo({place:"",position:"",startDate:"",endDate:"",location:"",description:""})
  }

  const [contactInfo,setContactInfo] = useState({name:"",email:"",phone:"",address:""})
  const [educationInfo,setEducationInfo] = useState({place:"",degree:"",startDate:"",endDate:"",location:""})
  const [education,setEducation] = useState([])
  const [experenceInfo,setExperienceInfo] = useState({place:"",position:"",startDate:"",endDate:"",location:"",description:""})
  const [experience,setExperience] = useState([])

  return <>
  <ContactInfoForm data={contactInfo} setter={setContactInfo} />
  <EducationInfoForm data={educationInfo} setter={setEducationInfo}
   onSubmit={submitEducation}/>
  <ExperienceInfoForm data={experenceInfo} setter={setExperienceInfo}
   onSubmit={submitExperience}/>
  </>
}