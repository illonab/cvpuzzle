import "./Skills.scss";
import Add from "../../../assets/icon/resume/add.svg";

import Skill from "../../Skill/Skill";
import Subtract from "../../../assets/icon/resume/subtract.svg";

function Skills({ skills, onChange, color }) {
  const onChangeSkills = (index, skill) => {
    const changedSkills = [...skills];
    changedSkills[index] = skill;
    onChange(changedSkills);
  };

  const addNewSkill = () => {
    const changedSkills = [...skills];
    changedSkills.push("");
    onChange(changedSkills);
  };
  const subtractSkills = (index) => {
    const changedSkills = [...skills];
    changedSkills.splice(index, 1);
    onChange(changedSkills);
  };

  return (
    <div className="skills">
      <h2 className="skills__title cv-subtitle" style={{ color: color }}>
        Skills
      </h2>
      {skills.map((skill, index) => {
        return (
          <Skill
            key={index}
            skill={skill}
            onSubstract={() => {
              subtractSkills(index);
            }}
            onChange={(skill) => {
              onChangeSkills(index, skill);
            }}
            color={color}
          />
        );
      })}

      <div className="skills__add-skill">
        <img
          className="skills__add-skill-img"
          src={Add}
          alt="add icon"
          onClick={addNewSkill}
        />
      </div>
    </div>
  );
}

export default Skills;
