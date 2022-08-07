import "./Educations.scss";
import EducationItem from "../../EducationItem/EducationItem";
import Add from "../../../assets/icon/resume/add.svg";

function Educations({ educations, onChange }) {
  const onChangeEducations = (index, education) => {
    const changedEducations = [...educations];
    changedEducations[index] = education;
    onChange({
      educations: changedEducations,
    });
  };

  const addNewEducation = () => {
    const changedEducations = [...educations];
    changedEducations.push({
      date: "Date",
      location: "Location",
      universityName: "University name",
      universirtDegree: "University degree",
    });
    onChange({
      educations: changedEducations,
    });
  };

  const subtractEducation = (index) => {
    const changedEducation = [...educations];
    changedEducation.splice(index, 1);
    onChange({
      educations: changedEducation,
    });
  };
  return (
    <div className="educations">
      <h2 className="educations__title cv-subtitle">Education</h2>
      {educations.map((education, index) => {
        return (
          <EducationItem
            key={index}
            education={education}
            onSubstract={() => {
              subtractEducation(index);
            }}
            onChange={(education) => {
              onChangeEducations(index, education);
            }}
          />
        );
      })}
      <div className="educations__add">
        <img
          className="educations__add-img"
          src={Add}
          alt="add icon"
          onClick={addNewEducation}
        />
      </div>
    </div>
  );
}

export default Educations;
