import { useState } from "react";
/* import defaultValues from "./defaults"; */
import ContactInfoForm from "./ContactInfoForm";
import EducationInfoForm from "./EducationInfoForm";
import ExperienceInfoForm from "./ExperienceInfoForm";
import RenderCv from "./renderCv";

export default function App() {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [educationInfo, setEducationInfo] = useState({
    place: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
    id: crypto.randomUUID(),
  });
  const [education, setEducation] = useState([]);
  const [experenceInfo, setExperienceInfo] = useState({
    place: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });
  const [experience, setExperience] = useState([]);

  function submitEducation(event) {
    event.preventDefault();
    setEducation([...education, educationInfo]);
    setEducationInfo({
      place: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
  }

  function submitExperience(event) {
    event.preventDefault();
    setExperience([...experience, experenceInfo]);
    setExperienceInfo({
      place: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
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
