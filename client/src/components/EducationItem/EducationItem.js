import "./EducationItem.scss";
import { useEffect, useRef, useState } from "react";
import Subtract from "../../assets/icon/resume/subtract.svg";

function EducationItem({ education, onChange, onSubstract }) {
  const [isFocused, setIsFocused] = useState(false);

  const dateInput = useRef(null);
  const locationInput = useRef(null);
  const universityNameInput = useRef(null);
  const universityDegreeInput = useRef(null);

  useEffect(() => {
    if (education.date !== dateInput.current.textContent) {
      dateInput.current.textContent = education.date;
    }
  }, [education.date]);

  useEffect(() => {
    if (education.location !== locationInput.current.textContent) {
      locationInput.current.textContent = education.location;
    }
  }, [education.location]);

  useEffect(() => {
    if (education.universityName !== universityNameInput.current.textContent) {
      universityNameInput.current.textContent = education.universityName;
    }
  }, [education.universityName]);

  useEffect(() => {
    if (
      education.universirtDegree !== universityDegreeInput.current.textContent
    ) {
      universityDegreeInput.current.textContent = education.universirtDegree;
    }
  }, [education.universirtDegree]);

  const onFieldChange = () => {
    onChange({
      date: dateInput.current.innerText,
      location: locationInput.current.innerText,
      universityName: universityNameInput.current.innerText,
      universityDegree: universityDegreeInput.current.innerText,
    });
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = (e) => {
    if (
      e.relatedTarget === null ||
      !e.relatedTarget.classList.contains("education-item__subtract")
    ) {
      setIsFocused(false);
    }
  };

  return (
    <div className="education-item">
      <div className="education-item__dates">
        <p
          contentEditable
          suppressContentEditableWarning
          className="education-item__dates-date"
          onInput={onFieldChange}
          ref={dateInput}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          Date
        </p>
        <p
          className="education-item__dates-location"
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
      <div className="education-item__university">
        <p
          className="education-item__university-name"
          contentEditable
          suppressContentEditableWarning
          onInput={onFieldChange}
          ref={universityNameInput}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          University name
        </p>
        <p
          className="education-item__university-degree"
          contentEditable
          suppressContentEditableWarning
          onInput={onFieldChange}
          ref={universityDegreeInput}
          onFocus={onFocus}
          onBlur={onBlur}
        >
          University degree
        </p>
      </div>
      {isFocused === true && (
        <div className="education-item__subtract" tabIndex={1}>
          <img
            className="education-item__subtract-img"
            src={Subtract}
            alt="add icon"
            onClick={onSubstract}
          />
        </div>
      )}
    </div>
  );
}

export default EducationItem;
