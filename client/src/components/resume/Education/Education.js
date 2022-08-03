import "./Education.scss";

function Education() {
  return (
    <div className="education">
      <h2 className="education__title cv-subtitle">Education</h2>
      <div className="education__content">
        <div className="education__dates">
          <p className="education__dates-date">Date</p>
          <p className="education__dates-location">Location</p>
        </div>
        <div className="education__university">
          <p className="education__university-name">University name</p>
          <p className="education__university-degree">University degree</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
