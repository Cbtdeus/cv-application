import InputField from "./InputField";
import { useState } from "react";
import RenderList from "./RenderList";
import defaultValues from "../Defaults";

export default function ExperienceInfoForm({
  data,
  setter,
  storage,
  storageSetter,
  onSubmit,
}) {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <h2>Experience</h2>
      {!isActive ? (
        <RenderList
          setter={setter}
          storage={storage}
          storageSetter={storageSetter}
          activeSetter={setActive}
        />
      ) : (
        <></>
      )}
      {isActive ? (
        <form
          className="experience-form"
          onSubmit={(e) => {
            onSubmit(e), setActive(false);
          }}
        >
          <InputField
            label="Company Name"
            type="text"
            value={data.place}
            onChange={(e) => setter({ ...data, place: e.target.value })}
          />
          <InputField
            label="Position"
            type="text"
            value={data.position}
            onChange={(e) => setter({ ...data, position: e.target.value })}
          />
          <InputField
            label="Location"
            type="text"
            value={data.location}
            onChange={(e) => setter({ ...data, location: e.target.value })}
          />
          <InputField
            label="Start Date"
            type="date"
            value={data.startDate}
            onChange={(e) => setter({ ...data, startDate: e.target.value })}
          />
          <InputField
            label="End Date"
            type="date"
            value={data.endDate}
            onChange={(e) => setter({ ...data, endDate: e.target.value })}
          />
          <InputField
            label="Job Description"
            type="textarea"
            value={data.description}
            onChange={(e) => setter({ ...data, description: e.target.value })}
          />
          <button
            onClick={() => {
              setActive(false), setter({ ...defaultValues[2], id: Date.now() });
            }}
          >
            Cancel
          </button>
          <input type="submit" value="save" />
        </form>
      ) : (
        <button onClick={() => setActive(true)}>Add</button>
      )}
    </>
  );
}
