export default function RenderCv({ contactInfo, education, experience }) {
  const educationEntries = education.map((entry) => (
    <div key={entry.id}>
      <div className="secondary-info">
        <p>
          {entry.startDate} - {entry.endDate}
        </p>
        <p> {entry.location}</p>
      </div>
      <div className="primary-info">
        <p>{entry.place}</p>
        <p>{entry.degree}</p>
      </div>
    </div>
  ));
  const experienceEntries = experience.map((entry) => (
    <div key={entry.id}>
      <div className="secondary-info">
        <p>
          {entry.startDate} - {entry.endDate}
        </p>
        <p> {entry.location}</p>
      </div>
      <div className="primary-info">
        <p>{entry.place}</p>
        <p>{entry.position}</p>
        <p>{entry.description}</p>
      </div>
    </div>
  ));
  return (
    <div className="cv-container">
      <h1 className="cv-name">{contactInfo.name}</h1>
      <div className="cv-contactinfo">
        <div>{contactInfo.email}</div>
        <div>{contactInfo.phone}</div>
        <div>{contactInfo.address}</div>
      </div>
      <div className="cv-education">{educationEntries}</div>
      <div className="cv-experience">{experienceEntries}</div>
    </div>
  );
}
