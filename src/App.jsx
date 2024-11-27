import { useState } from "react"; 
import BasicInfoForm from "./basicInfoForm";
import EducationInfoForm from "./educationInfoForm";
import ExperienceInfoForm from "./experienceInfoForm";
export default function App() {
    const [basicInfo,setBasicInfo] = useState({name:"",email:"",phone:""})
    const [educationInfo,setEducationInfo] = useState({degree:"",institution:"",location:"",startDate:"",endDate:""})
    const [education,setEducation] = useState([])
    const [experience,setExperience] = useState([])
    const [experienceInfo,setExperienceInfo] = useState({company:"",position:"",location:"",startDate:"",endDate:""})  
    function addEducation() {
      setEducationInfo({degree:"",institution:"",location:"",startDate:"",endDate:""})
      setEducation([...education,educationInfo])
    }
    function addExperience() {
      setExperienceInfo({company:"",position:"",location:"",startDate:"",endDate:""})
      setExperience([...experience,experienceInfo])
    }
    /* the info cards can be put into functions afrerall, use keys and props) */
    return <>
   <BasicInfoForm data={basicInfo} onChange={setBasicInfo} />
   <EducationInfoForm data={educationInfo} onChange={setEducationInfo} onClick ={addEducation}/>
   <ExperienceInfoForm data ={experienceInfo} onChange={setExperienceInfo} onClick={addExperience}/>

         
    </>    
}