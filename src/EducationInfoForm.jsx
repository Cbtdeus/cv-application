import { useState } from "react";
import InputField from "./InputField";

export default function EducationInfoForm({ data, setter, onSubmit }) {
  const [isActive, setActive] = useState(false);

  return (
    <>
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
          <button onClick={() => setActive(false)}>Cancel</button>
          <input type="submit" value="Save" />
        </form>
      ) : (
        <button onClick={() => setActive(true)}>Add</button>
      )}
    </>
  );
}
