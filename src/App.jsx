import { useState } from "react"; 
/* import defaultValues from "./defaults"; */
import ContactInfoForm from "./ContactInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import ExperienceInfoForm from "./ExperienceInfoForm";

export default function App() {
  const [contactInfo,setContactInfo] = useState({name:"",email:"",phone:"",address:""})
  const [educationInfo,setEducationInfo] = useState({place:"",degree:"",startDate:"",endDate:"",location:""})
  const [experenceInfo,setExperinceInfo] = useState({place:"",position:"",startDate:"",endDate:"",location:"",description:""})
  return<>
  <ContactInfoForm data={contactInfo} setter={setContactInfo}/>
  <EducationInfoForm data={educationInfo} setter={setEducationInfo}/>
  <ExperienceInfoForm data={experenceInfo} setter={setExperinceInfo}/>
  </>
}