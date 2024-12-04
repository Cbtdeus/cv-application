export default function RenderCv({ contactInfo }) {
  return (
    <div className="cv-container">
      <h1 className="cv-name">{contactInfo.name}</h1>
      <div className="cv-contactinfo">
        <div>{contactInfo.email}</div>
        <div>{contactInfo.phone}</div>
        <div>{contactInfo.address}</div>
      </div>
    </div>
  );
}
