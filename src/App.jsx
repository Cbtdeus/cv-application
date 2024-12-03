import { useState } from "react";
import defaultValues from "./Defaults";
import ContactInfoForm from "./ContactInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import ExperienceInfoForm from "./ExperienceInfoForm";
import RenderCv from "./renderCv";

export default function App() {
  const [contactInfo, setContactInfo] = useState(defaultValues[0]);
  const [educationInfo, setEducationInfo] = useState(defaultValues[1]);
  const [education, setEducation] = useState([]);
  const [experenceInfo, setExperienceInfo] = useState(defaultValues[2]);
  const [experience, setExperience] = useState([]);

  function submitEducation(event) {
    event.preventDefault();
    setEducation([...education, educationInfo]);
    setEducationInfo(defaultValues[1]);
  }

  function submitExperience(event) {
    event.preventDefault();
    setExperience([...experience, experenceInfo]);
    setExperienceInfo(defaultValues[2]);
  }
  return (
    <>
      <ContactInfoForm data={contactInfo} setter={setContactInfo} />
      <EducationInfoForm
        data={educationInfo}
        setter={setEducationInfo}
        onSubmit={submitEducation}
      />
      <ExperienceInfoForm
        data={experenceInfo}
        setter={setExperienceInfo}
        onSubmit={submitExperience}
      />
      <RenderCv contactInfo={contactInfo} />
    </>
  );
  /* if im correct, we dont need ids at all */
  /* render already filled out education/exp forms and allow their editing */
}
