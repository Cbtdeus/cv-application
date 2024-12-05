import { useState } from "react";
import defaultValues from "./Defaults";
import ContactInfoForm from "./components/ContactInfoForm";
import EducationInfoForm from "./components/EducationInfoForm";
import ExperienceInfoForm from "./components/ExperienceInfoForm";
import RenderCv from "./components/renderCv";

export default function App() {
  const [contactInfo, setContactInfo] = useState(defaultValues[0]);
  const [educationInfo, setEducationInfo] = useState(defaultValues[1]);
  const [education, setEducation] = useState([]);
  const [experenceInfo, setExperienceInfo] = useState(defaultValues[2]);
  const [experience, setExperience] = useState([]);
  function submitEducation(event) {
    /* edit the entry if the ids match */
    const filtered = education.filter((entry) => entry.id !== educationInfo.id);
    filtered.push(educationInfo);
    filtered.sort((a, b) => a.id - b.id);
    setEducation(filtered);
    event.preventDefault();
    setEducationInfo({ ...defaultValues[1], id: Date.now() });
  }

  function submitExperience(event) {
    const filtered = experience.filter(
      (entry) => entry.id !== experenceInfo.id
    );
    filtered.push(experenceInfo);
    filtered.sort((a, b) => a.id - b.id);
    setExperience(filtered);
    event.preventDefault();
    setExperienceInfo({ ...defaultValues[2], id: Date.now() });
  }
  return (
    <>
      <ContactInfoForm data={contactInfo} setter={setContactInfo} />
      <EducationInfoForm
        data={educationInfo}
        setter={setEducationInfo}
        onSubmit={submitEducation}
        storage={education}
        storageSetter={setEducation}
      />
      <ExperienceInfoForm
        data={experenceInfo}
        setter={setExperienceInfo}
        onSubmit={submitExperience}
        storage={experience}
        storageSetter={setExperience}
      />
      <RenderCv
        contactInfo={contactInfo}
        education={education}
        experience={experience}
      />
    </>
  );
}
