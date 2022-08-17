import "./ResponsibilityItem.scss";
import { useEffect, useRef, useState } from "react";
import Subtract from "../../../assets/icon/resume/subtract.svg";

function ResponsibilityItem({ responsibility, onChange, onSubstract }) {
  const [isFocused, setIsFocused] = useState(false);
  const responsibilitiesInput = useRef(null);

  useEffect(() => {
    if (responsibility !== responsibilitiesInput.current.textContent) {
      responsibilitiesInput.current.textContent = responsibility;
    }
  }, [responsibility]);

  const onFieldChange = () => {
    onChange(responsibilitiesInput.current.innerText);
  };

  const onFocus = () => {
    setIsFocused(true);
  };
  const onBlur = (e) => {
    if (
      e.relatedTarget === null ||
      !e.relatedTarget.classList.contains("responsibility-item__subtract")
    ) {
      setIsFocused(false);
    }
  };
  return (
    <li
      className="responsibility-item"
      contentEditable
      suppressContentEditableWarning
      ref={responsibilitiesInput}
      onInput={onFieldChange}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <div
        className="responsibility-item__container"
        contentEditable
        suppressContentEditableWarning
        ref={responsibilitiesInput}
        onInput={onFieldChange}
        onFocus={onFocus}
        onBlur={onBlur}
      ></div>{" "}
      {isFocused === true && (
        <div className="responsibility-item__subtract" tabIndex={1}>
          <img
            className="responsibility-item__subtract-img"
            src={Subtract}
            alt="add icon"
            onClick={onSubstract}
          />
        </div>
      )}
    </li>
  );
}

export default ResponsibilityItem;
