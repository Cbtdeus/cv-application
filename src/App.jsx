import { useId, useState } from "react";
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
    id: useId(),
  });
  const [education, setEducation] = useState([]);
  const [experenceInfo, setExperienceInfo] = useState({
    place: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
    id: useId(),
  });
  const [experience, setExperience] = useState([]);

  function SubmitEducation(event) {
    event.preventDefault();
    setEducation([...education, educationInfo]);
    setEducationInfo({
      place: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
      id: useId(),
    });
  }

  function SubmitExperience(event) {
    event.preventDefault();
    setExperience([...experience, experenceInfo]);
    setExperienceInfo({
      place: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
      id: useId(),
    });
  }

  return (
    <>
      <ContactInfoForm data={contactInfo} setter={setContactInfo} />
      <EducationInfoForm
        data={educationInfo}
        setter={setEducationInfo}
        onSubmit={SubmitEducation}
      />
      <ExperienceInfoForm
        data={experenceInfo}
        setter={setExperienceInfo}
        onSubmit={SubmitExperience}
      />
      <RenderCv contactInfo={contactInfo} />
    </>
  );
  /* render already filled out education/exp forms and allow their editing */
}
