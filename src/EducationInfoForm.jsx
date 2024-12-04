import { useState } from "react";
import InputField from "./InputField";
import RenderList from "./RenderList";
import defaultValues from "./Defaults";

export default function EducationInfoForm({
  data,
  setter,
  storage,
  storageSetter,
  onSubmit,
}) {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <h2>Education</h2>
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
          className="education-form"
          onSubmit={(e) => {
            onSubmit(e), setActive(false);
          }}
        >
          <InputField
            label="Institution"
            type="text"
            value={data.place}
            onChange={(e) => setter({ ...data, place: e.target.value })}
          />
          <InputField
            label="Degree"
            type="text"
            value={data.degree}
            onChange={(e) => setter({ ...data, degree: e.target.value })}
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
          <button
            onClick={() => {
              setActive(false), setter({ ...defaultValues[1], id: Date.now() });
            }}
          >
            Cancel
          </button>
          <input type="submit" value="Save" />
        </form>
      ) : (
        <button onClick={() => setActive(true)}>Add</button>
      )}
    </>
  );
}
