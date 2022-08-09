import "./Skill.scss";
import { useEffect, useRef, useState } from "react";
import Subtract from "../../assets/icon/resume/subtract.svg";

function Skill({ skill, onChange, onSubstract, color }) {
  const [isFocused, setIsFocused] = useState(false);

  const skillsInput = useRef(null);

  useEffect(() => {
    if (skill !== skillsInput.current.textContent) {
      skillsInput.current.textContent = skill;
    }
  }, [skill]);

  const onFieldChange = () => {
    onChange(skillsInput.current.innerText);
  };
  const onFocus = () => {
    setIsFocused(true);
  };
  const onBlur = (e) => {
    if (
      e.relatedTarget === null ||
      !e.relatedTarget.classList.contains("skill__subtract")
    ) {
      setIsFocused(false);
    }
  };
  return (
    <div className="skill">
      <div
        className="skill__text cv-text"
        style={{ backgroundColor: color }}
        contentEditable
        suppressContentEditableWarning
        onInput={onFieldChange}
        ref={skillsInput}
        onFocus={onFocus}
        onBlur={onBlur}
      ></div>
      {isFocused === true && (
        <div className="skill__subtract" tabIndex={1}>
          <img
            className="skill__subtract-img"
            src={Subtract}
            alt="add icon"
            onClick={onSubstract}
          />
        </div>
      )}
    </div>
  );
}

export default Skill;
