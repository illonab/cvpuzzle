import "./ExperienceItem.scss";
import { useEffect, useRef, useState } from "react";
import Responsibilities from "../Responsibilities/Responsibilities";
import Subtract from "../../../assets/icon/resume/subtract.svg";

function ExperienceItem({ experienceItem, onChange, onSubstract }) {
  const [isFocused, setIsFocused] = useState(false);
  const positionInput = useRef(null);
  const companyNameInput = useRef(null);
  const dateNameInput = useRef(null);
  const locationInput = useRef(null);

  useEffect(() => {
    if (experienceItem.position !== positionInput.current.textContent) {
      positionInput.current.textContent = experienceItem.position;
    }
  }, [experienceItem.position]);

  useEffect(() => {
    if (experienceItem.companyName !== companyNameInput.current.textContent) {
      companyNameInput.current.textContent = experienceItem.companyName;
    }
  }, [experienceItem.companyName]);

  useEffect(() => {
    if (experienceItem.date !== dateNameInput.current.textContent) {
      dateNameInput.current.textContent = experienceItem.date;
    }
  }, [experienceItem.date]);

  useEffect(() => {
    if (experienceItem.location !== locationInput.current.textContent) {
      locationInput.current.textContent = experienceItem.location;
    }
  }, [experienceItem.location]);

  const onFocus = () => {
    setIsFocused(true);
  };
  const onBlur = (e) => {
    if (
      e.relatedTarget === null ||
      !e.relatedTarget.classList.contains("experience-item__subtract")
    ) {
      setIsFocused(false);
    }
  };

  const onFieldChange = () => {
    onChange({
      position: positionInput.current.innerText,
      companyName: companyNameInput.current.innerText,
      date: dateNameInput.current.innerText,
      responsibilities: experienceItem.responsibilities,
    });
  };

  const onChangeResponsibilities = (responsibilities) => {
    onChange({
      position: experienceItem.position,
      companyName: experienceItem.companyName,
      date: experienceItem.date,
      responsibilities: responsibilities,
    });
  };

  return (
    <article className="experience-item">
      <h3
        className="experience-item__position"
        contentEditable
        suppressContentEditableWarning
        onInput={onFieldChange}
        ref={positionInput}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        Position
      </h3>
      <h4
        className="experience-item__company"
        contentEditable
        suppressContentEditableWarning
        onInput={onFieldChange}
        ref={companyNameInput}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        Company name
      </h4>
      <div className="experience-item__container">
        <p
          className="experience-item__date"
          contentEditable
          suppressContentEditableWarning
          onInput={onFieldChange}
          ref={dateNameInput}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          Date
        </p>
        <p
          className="experience-item__location"
          contentEditable
          suppressContentEditableWarning
          onInput={onFieldChange}
          ref={locationInput}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          Location
        </p>
      </div>
      <Responsibilities
        responsibilities={experienceItem.responsibilities}
        onChange={onChangeResponsibilities}
      />

      {isFocused === true && (
        <div className="experience-item__subtract" tabIndex={1}>
          <img
            className="experience-item__subtract-img"
            src={Subtract}
            alt="add icon"
            onClick={onSubstract}
          />
        </div>
      )}
    </article>
  );
}

export default ExperienceItem;
