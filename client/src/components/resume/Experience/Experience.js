import "./Experience.scss";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import Add from "../../../assets/icon/resume/add.svg";

function Experience({ experience, onChange, color }) {
  const onChangeExperience = (index, experienceItem) => {
    const changedExperience = [...experience];
    changedExperience[index] = experienceItem;
    onChange(changedExperience);
  };

  const addNewExperience = () => {
    const changedExperience = [...experience];
    changedExperience.push({
      position: "Position",
      companyName: "Company name",
      date: "Date",
      location: "Location",
      responsibilities: ["Your responsibility"],
    });
    onChange(changedExperience);
  };

  const subtractExperience = (index) => {
    const changedExperience = [...experience];
    changedExperience.splice(index, 1);
    onChange(changedExperience);
  };

  return (
    <div className="experience">
      <h2 className="experience__title cv-subtitle" style={{ color: color }}>
        Work experience
      </h2>
      {experience.map((experienceItem, index) => {
        return (
          <ExperienceItem
            key={index}
            experienceItem={experienceItem}
            onSubstract={() => {
              subtractExperience(index);
            }}
            onChange={(experienceItem) => {
              onChangeExperience(index, experienceItem);
            }}
          />
        );
      })}
      <div className="experience__add">
        <img
          className="experience__add-img"
          src={Add}
          alt="add icon"
          onClick={addNewExperience}
        />
      </div>
    </div>
  );
}

export default Experience;
